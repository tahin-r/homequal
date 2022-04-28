import { FC, ReactElement, useRef } from 'react'
import useOnScreen                  from '../helpers/ViewPortChecker'
import { Grow }                     from '@mui/material'

export const Growing: FC<{ children: ReactElement, timeout?: number }> = ({ children, timeout }) => {
  const ref = useRef<Element>()
  const isVisible = useOnScreen(ref)

  return (
    <Grow in={ isVisible } ref={ ref } timeout={ timeout ?? 2000 }>
      { children }
    </Grow>
  )
}