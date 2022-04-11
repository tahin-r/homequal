import React, { FC }               from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import styled                      from 'styled-components'

const ImageHolder = styled(({ ...props }) => <div { ...props } />)`
  border-radius   : 50%;
  min-width       : 100px;
  min-height      : 100px;
  width           : 10vw;
  height          : 10vw;
  background      : url(${ props => props.userimage }) 100% 100%;
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
    <Grid sx={ { margin: '0 3vw' } }>
      <Paper elevation={ 8 }
             sx={ { minWidth: '320px',maxWidth:'450px',width:'35vw', minHeight: '100%',boxSizing:'border-box' } }>
        <Grid container direction="column" justifyContent="space-between" p={3}>
          <Grid container direction="row" alignItems="center">
            <ImageHolder userimage={ imageUrl }/>

            <Grid item>
              <Typography color="black" variant="h5" sx={ { marginLeft: '3vw', minWidth: '100%', fontWeight: 'bold' } }>
                { name }
              </Typography>
            </Grid>
          </Grid>


          {/*<Typography color='gray' variant="h6">*/ }
          {/*  { nickName }*/ }
          {/*</Typography>*/ }

          <Grid sx={ { marginTop: '25px' } }>
            <Typography variant='h6' color="black">
              { text }
            </Typography>
          </Grid>

        </Grid>
      </Paper>
    </Grid>
  )
}


