import React, { FC }               from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import styled                      from 'styled-components';

const ImageHolder = styled(({ ...props }) => <div { ...props } />)`
  border-radius   : 50%;
  min-width       : 100px;
  min-height      : 100px;
  width           : 10vw;
  height          : 10vw;
  background      : url(${ props => props.userimage }) 100% 100%;
  background-size : cover;
`
const CardNickName = styled(({ ...props }) => <Typography { ...props } />)`
  color : gray;
`
const CardText = styled(({ ...props }) => <Typography { ...props } />)`
  color : black;
`

interface INewHomeItem {
  imageUrl: string
  name: string
  nickName: string
  text: string
}

export const NewHomeItem: FC<INewHomeItem> = ({  imageUrl, name, nickName, text }) => {

  return (
    <Grid
      item
    >
      <Paper
        elevation={ 8 }
        sx={ { minWidth: '290px', width: '50vw', height: '100%', padding: '4vw', boxSizing: 'border-box' } }
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
        >
          <Grid
            container
            direction="row"
            columnGap={ 2 }
          >
            <Grid
              item
              xs={ 4 }
            >
              <ImageHolder userimage={ imageUrl }/>
            </Grid>
            <Grid
              item
              xs={ 6 }
            >
              <CardText variant="h5">
                { name }
              </CardText>
              <CardNickName variant="h6">
                { nickName }
              </CardNickName>
            </Grid>
          </Grid>

          <Grid sx={ { marginTop: '4vh' } }>
            <CardText sx={{fontSize:'16px'}}>
              { text }
            </CardText>
          </Grid>

        </Grid>
      </Paper>
    </Grid>
  )
}


