import { Typography } from '@mui/material'
import styled         from 'styled-components'

export const SimpleTypography = styled(({ ...props }) => <Typography variant="h6" { ...props } />)`
  margin      : 1rem 0;
  white-space : pre-wrap;
  text-indent : 1rem;
  text-align: justify;
}


  // &:nth-child(odd) {
  //   background-color : ${ (props) => props.theme.colors.lightGrey };
    

`
export const TitleTypography = styled(({ ...props }) => <Typography variant="h6" fontWeight='bold' { ...props } />)`
  margin      : 1em 0;
  text-align: center;

`