// hooks
import { useEffect, useState, useCallback, useMemo } from 'react'
import { useIsMobile } from './useIsMobile'

interface StorageData {
  numberOfPopup: number
  isFillSurvey: boolean
  userAgent: string
}

const STORAGE_KEY = 'exitSurveyData'
const MIN_TIME_ON_PAGE = 0.01 * 60 * 1000 // 2 minutes in milliseconds

interface UseExitDetectorProps {
  isExitSignupPopup: boolean
}

export const useExitDetector = ({
  isExitSignupPopup,
}: UseExitDetectorProps) => {
  const [shouldShowModal, setShouldShowModal] = useState(false)

  const initTime = useMemo(() => Date.now(), [])
  const isMobile = useIsMobile()
  const getCurrentUserAgent = useCallback(() => {
    return navigator.userAgent
  }, [])

  const getStorageData = useCallback((): StorageData | null => {
    const data = localStorage.getItem(STORAGE_KEY)
    if (data) {
      return JSON.parse(data)
    }
    return null
  }, [])

  const initStorageData = useCallback(() => {
    const initialData: StorageData = {
      numberOfPopup: 0,
      isFillSurvey: false,
      userAgent: getCurrentUserAgent(),
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))
    return initialData
  }, [getCurrentUserAgent])

  const updateStorageData = useCallback(
    (updates: Partial<StorageData>) => {
      const currentData = getStorageData() || initStorageData()
      const newData = { ...currentData, ...updates }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData))
      return newData
    },
    [getStorageData, initStorageData],
  )

  const canShowSurvey = useCallback(() => {
    // Check if user has been on page long enough
    const currentTime = Date.now()
    const elapsedTime = currentTime - initTime
    const isTimeThresholdReached = elapsedTime >= MIN_TIME_ON_PAGE

    if (isExitSignupPopup) {
      if (sessionStorage.getItem('isPopupSurvey') === 'true') return false
    } else {
      if (
        !isTimeThresholdReached ||
        sessionStorage.getItem('isPopupSurvey') === 'true'
      ) {
        return false
      }
    }

    const storageData = getStorageData()
    if (!storageData) return true

    const currentUserAgent = getCurrentUserAgent()

    // If user agent changed, reset the count
    if (storageData.userAgent !== currentUserAgent) {
      updateStorageData({
        numberOfPopup: 0,
        isFillSurvey: false,
        userAgent: currentUserAgent,
      })
      return true
    }

    // Don't show if survey is filled or max popups reached
    if (storageData.isFillSurvey || storageData.numberOfPopup >= 2) {
      return false
    }

    return true
  }, [
    initTime,
    isExitSignupPopup,
    getStorageData,
    getCurrentUserAgent,
    updateStorageData,
  ])

  const showModal = useCallback(() => {
    if (!canShowSurvey()) return
    setShouldShowModal(true)

    const storageData = getStorageData()
    updateStorageData({
      numberOfPopup: (storageData?.numberOfPopup ?? 0) + 1,
    })
  }, [canShowSurvey, getStorageData, updateStorageData])

  // Initialize storage data only when mounted and data is undefined
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (isExitSignupPopup) return

    // Initialize storage if needed
    const existingData = getStorageData()
    if (!existingData) {
      initStorageData()
    }

    let timeoutId: NodeJS.Timeout
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          showModal()
        }, 500)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup function
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timeoutId)
    }
  }, [getStorageData, initStorageData, isExitSignupPopup, showModal])

  useEffect(() => {
    if (typeof window === 'undefined' && !isMobile) return
    if (isExitSignupPopup) return

    const existingData = getStorageData()
    if (!existingData) {
      initStorageData()
    }

    window.history.pushState(null, document.title, window.location.href)

    const handlePopState = () => {
      if (canShowSurvey()) {
        setShouldShowModal(true)

        const storageData = getStorageData()
        updateStorageData({
          numberOfPopup: (storageData?.numberOfPopup ?? 0) + 1,
        })

        window.history.pushState(null, document.title, window.location.href)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [
    canShowSurvey,
    getStorageData,
    initStorageData,
    isExitSignupPopup,
    isMobile,
    showModal,
    updateStorageData,
  ])

  const markSurveyAsFilled = useCallback(() => {
    updateStorageData({ isFillSurvey: true })
  }, [updateStorageData])

  return {
    shouldShowModal,
    showModal,
    setShouldShowModal,
    markSurveyAsFilled,
  }
}
