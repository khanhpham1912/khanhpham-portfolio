'use client'
import { useExitDetector } from './useExitDetector'

export default function Test() {
  const { shouldShowModal, showModal, setShouldShowModal, markSurveyAsFilled } =
    useExitDetector({ isExitSignupPopup: false })

  return (
    <div>
      <div>{shouldShowModal ? 'Open' : 'Close'}</div>
    </div>
  )
}
