// hooks
import { useEffect, useState, useCallback } from 'react'
// import { useRouter } from 'next/router'
import { useIsMobile } from './useIsMobile'

interface StorageData {
  numberOfPopup: number
  isFillSurvey: boolean
  userAgent: string
}

const STORAGE_KEY = 'exitSurveyData'

interface UseExitDetectorProps {
  isExitSignupPopup: boolean
}

export const useExitDetector = () => {
  // const router = useRouter()
  // const isPageTypeValid = useMemo(() => !!getCurrentPageType(router.pathname), [router.pathname]);

  const [shouldShowModal, setShouldShowModal] = useState(false)
  const isMobile = useIsMobile()
  const SCROLL_THRESHOLD = 50 // pixels to consider as "quick scroll up"
  const IDLE_TIMEOUT = 30000 // 30 seconds for idle detection

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
    // Check session storage first
    if (sessionStorage.getItem('isPopupSurvey') === 'true') {
      return false
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
  }, [getStorageData, getCurrentUserAgent, updateStorageData])

  const showModal = useCallback(() => {
    if (!canShowSurvey()) return

    setShouldShowModal(true)
    sessionStorage.setItem('isPopupSurvey', 'true')

    const storageData = getStorageData()
    updateStorageData({
      numberOfPopup: (storageData?.numberOfPopup ?? 0) + 1,
    })
  }, [canShowSurvey, getStorageData, updateStorageData])

  // Initialize storage data only when mounted and data is undefined
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Initialize storage if needed
    const existingData = getStorageData()
    console.log('existingData:', existingData)
    if (!existingData) {
      initStorageData()
    }
    // if (!isPageTypeValid || isExitSignupPopup) return

    let timeoutId: NodeJS.Timeout
    let idleTimer: NodeJS.Timeout
    let lastScrollY = window.scrollY

    // Desktop-specific handler
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          showModal()
        }, 300)
      }
    }

    // Mobile-specific handlers
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDiff = lastScrollY - currentScrollY

      if (scrollDiff > SCROLL_THRESHOLD) {
        showModal()
      }

      lastScrollY = currentScrollY
    }

    const resetIdleTimer = () => {
      clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        showModal()
      }, IDLE_TIMEOUT)
    }

    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault()
      showModal()
      // window.history.pushState({ page: 'exit-intent' }, '', window.location.href);
    }

    // Set up device-specific listeners
    if (isMobile) {
      // Mobile listeners
      window.history.pushState(
        { page: 'exit-intent' },
        '',
        window.location.href,
      )
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('popstate', handlePopState)
      document.addEventListener('touchstart', resetIdleTimer)
      document.addEventListener('touchmove', resetIdleTimer)
      resetIdleTimer()
    } else {
      // Desktop listener
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    // Cleanup function
    return () => {
      if (isMobile) {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('popstate', handlePopState)
        document.removeEventListener('touchstart', resetIdleTimer)
        document.removeEventListener('touchmove', resetIdleTimer)
        clearTimeout(idleTimer)
      } else {
        document.removeEventListener('mouseleave', handleMouseLeave)
        clearTimeout(timeoutId)
      }
    }
  }, [getStorageData, initStorageData, showModal, SCROLL_THRESHOLD, isMobile])

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
