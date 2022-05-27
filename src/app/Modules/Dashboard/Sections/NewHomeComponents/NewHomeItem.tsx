import React, { FC }               from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import styled                      from 'styled-components'


const ImageHolder = styled(({ ...props }) => <div { ...props } />)`
  border-radius   : 50%;
  min-width       : 100px;
  min-height      : 100px;
  max-width       : 100px;
  max-height      : 100px;
  width           : 10vw;
  height          : 10vw;
  background      : url(${ props => props.userimage }) 100% 100% no-repeat;
  background-size : contain;
`


interface INewHomeItem {
  imageUrl: string
  name: string
  nickName: string
  text: string
}

export const NewHomeItem: FC<INewHomeItem> = ({ imageUrl, name, nickName, text }) => {

  return (
    <Grid sx={ { minHeight: '285px', margin: '10px', marginX: { xs: '10px', md: '15px', lg: '20px', xl: '25px' } } }>
      <Paper elevation={ 8 } sx={ { minHeight: '285px', minWidth: '340px', maxWidth: '395px', height: '285px', width: '35vw' } }>
        <Grid container direction="column" justifyContent="space-between" p={ 3 }>
          <Grid container direction="row" alignItems="center" wrap={ 'nowrap' }>
            <ImageHolder userimage={ imageUrl }/>
            <Grid>
              <Typography color="black"
                          variant="h5"
                          sx={ { marginLeft: '10px', minWidth: '100%', fontWeight: 'bold' } }>
                { name }
              </Typography>
            </Grid>
          </Grid>

          {/*<Typography color='gray' variant="h6">*/ }
          {/*  { nickName }*/ }
          {/*</Typography>*/ }
          <Typography mt={ 4 } variant="h6" color="black"
                      sx={ { fontSize: '15px !important'} }>
            { text }
          </Typography>

        </Grid>
      </Paper>
    </Grid>
  )
}


