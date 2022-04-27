import { useEffect, useState } from 'react'

export default function useOnScreen(ref:any) {
  const [isIntersecting, setIntersecting] = useState(false)
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(isIntersecting ? true : entry.isIntersecting)
  )
  useEffect(() => {
    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [isIntersecting])
  return isIntersecting
}