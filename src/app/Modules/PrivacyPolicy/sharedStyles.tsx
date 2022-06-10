import { Typography } from '@mui/material'
import styled from 'styled-components'
import React, { FC } from 'react'

export const SimpleTypography = styled(({ ...props }) => <Typography variant="h6" { ...props } />)`
  margin      : 1rem 0;
  white-space : pre-wrap;
  text-align  : left;
`
export const TitleText = styled(({ ...props }) => <Typography variant="h6"
                                                              fontWeight='bold' { ...props }/>)`
  scroll-margin-block-start : 80px;
  margin                    : 1em 0;
  text-align                : center;
`

export const TitleTypography: FC<any> = (props) => {
  return (
      <TitleText { ...props }>
        { props.children }
      </TitleText>
  )
}
