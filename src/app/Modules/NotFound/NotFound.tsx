import React                from 'react'
import { HeaderDivider }    from '../../../shared/styles'
import inConstructionImage  from '../../../assets/images/notFound/HQInConstrGif.gif'
import styled               from 'styled-components'
import { Grid, Typography } from '@mui/material'


const Image404 = styled.img.attrs({
  src: `${ inConstructionImage }`,
})`
  width  : 100%;
  aspect-ratio:8/6 ;
  max-width: 800px;
`
export const NotFound = () => {

  return (
    <Grid height={'100%'} overflow={'hidden'}>
      <HeaderDivider/>
      <Grid container direction="column" justifyContent='center' alignItems="center" sx={{height:'100%'}}>
        <Typography variant="h4" color="primary" textAlign='center'>UNDER CONSTRUCTION</Typography>
          <Image404/>
      </Grid>
    </Grid>
  )
}