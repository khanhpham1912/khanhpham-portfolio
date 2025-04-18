'use client'
import { useExitDetector } from './useExitDetector'

export default function Test() {
  const { shouldShowModal, showModal, setShouldShowModal, markSurveyAsFilled } =
    useExitDetector()

  return (
    <div>
      <div>{shouldShowModal ? 'Open' : 'Close'}</div>
    </div>
  )
}
