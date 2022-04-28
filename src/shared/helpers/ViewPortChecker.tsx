import { MutableRefObject, useEffect, useState } from 'react'

export default function useOnScreen(ref: MutableRefObject<Element | undefined> ) {
  const [isIntersecting, setIntersecting] = useState(false)
  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(isIntersecting ? true : entry.isIntersecting),
  )
  useEffect(() => {
    ref.current && observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [isIntersecting])
  return isIntersecting
}