import { useState, useEffect, useCallback } from 'react'

interface UseExitIntentProps {
  threshold?: number
  triggerOnce?: boolean
  mobileTimeout?: number
  sessionTimeout?: number
  disableOnPaths?: string[]
}

/**
 * A hook that detects exit intent on both desktop and mobile devices
 *
 * @param threshold The distance from the top of the page to trigger the exit intent (default: 50)
 * @param triggerOnce Whether to trigger the exit intent only once (default: true)
 * @param mobileTimeout The timeout in ms to detect exit intent on mobile devices (default: 10000)
 * @param sessionTimeout Time in ms before showing the survey again after user closes it (default: 1800000 - 30 mins)
 * @param disableOnPaths Array of paths where the exit intent should be disabled
 */
export const useExitIntent = ({
  threshold = 50,
  triggerOnce = true,
  mobileTimeout = 10000,
  sessionTimeout = 1800000, // 30 minutes
  disableOnPaths = [],
}: UseExitIntentProps = {}) => {
  const [showExitIntent, setShowExitIntent] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  // Store original history state for mobile back button detection
  const [isBackButtonPressed, setIsBackButtonPressed] = useState(false)

  // Check if device is mobile
  const isMobile = useCallback(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  }, [])

  // Check if we're on a disabled path
  const isPathDisabled = useCallback(() => {
    if (disableOnPaths.length === 0) return false
    const currentPath = window.location.pathname
    return disableOnPaths.some((path) => {
      if (path.endsWith('*')) {
        const pathPrefix = path.slice(0, -1)
        return currentPath.startsWith(pathPrefix)
      }
      return currentPath === path
    })
  }, [disableOnPaths])

  // Check if survey has been shown recently
  const hasShownRecently = useCallback(() => {
    const lastShownTime = localStorage.getItem('exitIntentLastShown')
    if (!lastShownTime) return false

    const timeDiff = Date.now() - parseInt(lastShownTime, 10)
    return timeDiff < sessionTimeout
  }, [sessionTimeout])

  // Reset the exit intent trigger
  const resetExitIntent = useCallback(() => {
    setShowExitIntent(false)
    localStorage.setItem('exitIntentLastShown', Date.now().toString())
  }, [])

  // Handle desktop exit intent
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Don't set up listeners if it's already been triggered and we only want to trigger once
    if (triggerOnce && hasTriggered) return

    // For desktop: detect mouse leaving the window from the top
    const handleMouseLeave = (e: MouseEvent) => {
      // If the mouse is near the top of the window and moving upward
      if (
        e.clientY <= threshold &&
        !showExitIntent &&
        (!triggerOnce || !hasTriggered)
      ) {
        setShowExitIntent(true)
        setHasTriggered(true)
      }
    }

    // Don't add mouse detection on mobile
    if (!isMobile()) {
      document.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (!isMobile()) {
        document.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [threshold, showExitIntent, hasTriggered, triggerOnce, isMobile])

  // Handle mobile exit intent with history state
  useEffect(() => {
    if (typeof window === 'undefined' || !isMobile()) return

    // Don't set up listeners if it's already been triggered and we only want to trigger once
    if (triggerOnce && hasTriggered) return

    // Push state to detect back button press
    window.history.pushState({ page: 'exit-intent' }, '', window.location.href)

    const handlePopState = () => {
      // When the back button is pressed, show the exit intent
      if (!showExitIntent && (!triggerOnce || !hasTriggered)) {
        setIsBackButtonPressed(true)
        setShowExitIntent(true)
        setHasTriggered(true)

        // Push another state to prevent actual navigation
        window.history.pushState(
          { page: 'exit-intent-shown' },
          '',
          window.location.href,
        )
      }
    }

    // Set up inactivity timer for mobile
    let inactivityTimer: ReturnType<typeof setTimeout>

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer)
      inactivityTimer = setTimeout(() => {
        if (!showExitIntent && (!triggerOnce || !hasTriggered)) {
          // Don't show if we're on a disabled path or have shown recently
          if (isPathDisabled() || hasShownRecently()) return

          setShowExitIntent(true)
          setHasTriggered(true)
        }
      }, mobileTimeout)
    }

    const handleUserActivity = () => {
      resetInactivityTimer()
    }

    // Start the inactivity timer
    resetInactivityTimer()

    // Add event listeners
    window.addEventListener('popstate', handlePopState)

    // Track user activity to reset the inactivity timer
    document.addEventListener('touchstart', handleUserActivity)
    document.addEventListener('touchmove', handleUserActivity)
    document.addEventListener('scroll', handleUserActivity)

    return () => {
      clearTimeout(inactivityTimer)
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('touchstart', handleUserActivity)
      document.removeEventListener('touchmove', handleUserActivity)
      document.removeEventListener('scroll', handleUserActivity)
    }
  }, [isMobile, mobileTimeout, showExitIntent, hasTriggered, triggerOnce])

  return {
    showExitIntent,
    resetExitIntent,
    isBackButtonPressed,
  }
}
