'use client'
import { useEffect } from 'react'

export function useDropdownClose(isOpen, onClose, panelRef) {
  useEffect(() => {
    if (!isOpen) return
    const handleOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) onClose()
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('touchstart', handleOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('touchstart', handleOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose, panelRef])
}
