import { FC, useRef } from 'react'
import useOnScreen    from '../helpers/ViewPortChecker'
import { Grow }       from '@mui/material'

export const Growing: FC<any> = ({ children }: { children: JSX.Element }) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  return (
    <Grow in={ isVisible } ref={ ref } timeout={2000}>
      { children }
    </Grow>
  )
}