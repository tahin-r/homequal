import styled                       from 'styled-components'
import { Button, Grid, Typography } from '@mui/material'
import React                        from 'react'

export const CenteredTypography = styled(({ ...props }) => <Typography variant="h6" { ...props } />)`
  text-align    : center;
  margin-bottom : 20px;
  padding       : 0 20px;
`
export const ItalicTypography = styled(({ ...props }) => <CenteredTypography { ...props }/>)`
  font-style : italic;
`
export const QualButton = styled(({ ...props }) => <Button { ...props } color="primary"
                                                           disableRipple={ true }
                                                           variant="contained"/>)`
  display       : block;
  min-width     : 300px;
  width         : 50vw;
  max-width     : 600px;
  padding       : 15px 10px;
  border-radius : 30px;

  h5 {
    text-transform : none;
  }
`
export const TextContainer = styled(({ ...props }) => <Grid { ...props }/>)`
  color            : ${ (props) => (props.color ? props.color : 'black') };
  padding          : 40px;
  background-color : ${ (props) => (props.backgroundColor ? props.theme.colors[props.backgroundColor] : 'white') };
  text-align       : center;
  width            : auto;
`
export const GreyTextContainer = styled(TextContainer)`
  padding          : 30px;
  color            : ${ props => (props.color ? props.color : 'white') };
  background-color : ${ props => props.theme.colors.darkGrey };
  text-align       : initial;
`
export const HeaderDivider = styled(Grid)`
  width            : 100%;
  height           : 60px;
  background-color : white;
  content          : '';

  @media screen and (min-width : 600px) {
    height : 64px;
  }
`
export const ContentWrapper = styled(({ ...props }) => <Grid { ...props }/>)`
  background-color : ${ props => props.theme.colors.lightGrey };
`