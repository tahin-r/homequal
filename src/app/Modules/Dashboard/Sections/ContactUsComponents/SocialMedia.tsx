import { Grid } from '@mui/material';
import React    from 'react';
import {
  FaceBookIcon,
  LinkedInIcon,
  TicTocIcon,
  TwitterIcon,
  YoutubeIcon
}               from './../../../../../images/SocialMediaImages'
import styled   from 'styled-components';

const IconHolder = styled(({ ...props }) => <div { ...props } />)`
  border-radius : 50%;
  min-width : 40px;
  min-height : 40px;
  width : 4vw;
  height : 4vw;
  background : url(${ props => props.icon }) 100% 100%;
  background-size : cover;
`

const icons: Array<string> = [ TicTocIcon, FaceBookIcon, TwitterIcon, LinkedInIcon, YoutubeIcon ]
export const SocialMedia = () => {

  return (
    <Grid
      container
      justifyContent="space-between"
      wrap="nowrap"
      gap={ '10px' }
      sx={ { maxWidth: '400px' } }
    >
      { icons.map((item, i) => (<IconHolder
        icon={ item }
        key={ i }
      />)) }
    </Grid>

  )
}
