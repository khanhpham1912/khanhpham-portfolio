'use client'
import { useExitIntent } from './useExitIntent'

export default function Page() {
  const { showExitIntent } = useExitIntent()
  return <div>showExitIntent:{showExitIntent}</div>
}
