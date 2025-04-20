'use client'
import { useExitDetector } from './useExitDetector'
import { useIsMobile } from './useIsMobile'

export default function Test() {
  const { shouldShowModal, showModal, setShouldShowModal, markSurveyAsFilled } =
    useExitDetector({ isExitSignupPopup: false })

  const isMobile = useIsMobile()

  return (
    <div>
      <div>{shouldShowModal ? 'Open' : 'Close'}</div>
      <div>Is Mobile: {isMobile}</div>
    </div>
  )
}
