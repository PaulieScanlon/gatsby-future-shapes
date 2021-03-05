import React, { FunctionComponent, RefObject, useEffect, useRef, useState } from 'react'
import { Box } from 'theme-ui'

export const GeneralObserver: FunctionComponent = ({ children }) => {
  const ref = useRef<HTMLElement>(null)
  const [isChildVisible, setIsChildVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setIsChildVisible(true)
        }
      },
      {
        root: null,
        rootMargin: '300px',
        threshold: 0,
      },
    )
    if (ref && ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])

  return <Box ref={ref as RefObject<HTMLDivElement>}>{isChildVisible ? children : null}</Box>
}
