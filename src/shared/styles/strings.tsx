import styled                       from 'styled-components'
import { Button, Grid, Typography } from '@mui/material'
import React                        from 'react'

export const CenteredTypography = styled(({ ...props }) => <Typography variant='h6' { ...props } />)`
  text-align    : center;
  margin-bottom : 20px;
  padding       : 0 20px;
`
export const ItalicTypography = styled(({ ...props }) => <CenteredTypography { ...props }/>)`
  font-style : italic;
`
export const QualButton = styled(({ ...props }) => <Button { ...props } color="primary" variant="contained"/>)`
  display   : block;
  width     : 70%;
  min-width : 250px;
  max-width : 350px;
  padding   : 10px;

  p {
    font-size      : 20px;
    text-transform : none;
  }
`
export const TextContainer = styled(Grid)`
  color      : ${ (props: any) => (props.color ? props.color : "black") };
  padding    : 40px;
  text-align : center;
  width      : 100%;
`
export const GreyTextContainer = styled(TextContainer)`
  padding          : 30px;
  color            : ${ (props: any) => (props.color ? props.color : "white") };
  background-color : ${ (props) => props.theme.colors.darkGrey };
  text-align       : initial;
`