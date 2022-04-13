import { Grid } from '@mui/material'
import React    from 'react'
import styled   from 'styled-components'
import {
  FaceBookIcon, LinkedInIcon, TicTocIcon, TwitterIcon, YoutubeIcon,
}               from '../../../../../assets/images/SocialMediaImages'

const IconHolder = styled(({ ...props }) => <div { ...props } />)`
  border-radius   : 50%;
  min-width       : 50px;
  min-height      : 50px;
  background      : url(${ props => props.icon }) 100% 100%;
  background-size : cover;
  transition      : 0.5s;
  user-select     : none;

  @media screen and (min-width : 2001px) {
    min-width  : 7vw;
    min-height : 7vw;
    margin     : 0 1.5vw;
  }
  @media screen and (max-width : 2000px) {
    min-width  : 70px;
    min-height : 70px;
    margin     : 0 1vw;
  }
  @media screen and (max-width : 900px) {
    min-width  : 50px;
    min-height : 50px;
    margin     : 0 1vw;
  }

  &:hover {
    transition : 0.5s;
    transform  : scale(1.2);
  }

  &:active {
    transition : 0.5s;
    transform  : scale(0.8);
  }
`

const icons = [
  {
    icon: TicTocIcon,
    link: 'https://www.tiktok.com/@myhomequal',
  },
  {
    icon: YoutubeIcon,
    link: 'https://www.youtube.com/channel/UCKCgpn57ik5kKI9T489hc-w',
  },
  {
    icon: TwitterIcon,
    link: ' https://twitter.com/myhomequal',
  },
  {
    icon: LinkedInIcon,
    link: 'https://www.linkedin.com/company/homequal/about/?viewAsMember=true',
  },
  {
    icon: FaceBookIcon,
    link: 'https://www.facebook.com/myhomequal',
  }]

export const SocialMedia = () => {

  return (
    <Grid container justifyContent="center" wrap="nowrap" mb={ 2 }>
      { icons.map((item, index) => (
        <a href={ item.link } key={ index }>
          <IconHolder icon={ item.icon }/>
        </a>
      )) }
    </Grid>

  )
}
