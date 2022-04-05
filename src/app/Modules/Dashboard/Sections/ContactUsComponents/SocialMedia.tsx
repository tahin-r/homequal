import { Grid } from '@mui/material'
import React    from 'react'
import styled   from 'styled-components'
import {
  FaceBookIcon, LinkedInIcon, TicTocIcon, TwitterIcon, YoutubeIcon,
}               from '../../../../../assets/images/SocialMediaImages'

const IconHolder = styled(({ ...props }) => <div { ...props } />)`
  border-radius   : 50%;
  min-width       : 40px;
  min-height      : 40px;
  width           : 4vw;
  height          : 4vw;
  background      : url(${ props => props.icon }) 100% 100%;
  background-size : cover;
  transition      : 0.5s;
  user-select     : none;

  &:hover, &:active {
    transition : 0.5s;
    transform  : scale(1.2);
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
    <Grid container justifyContent="space-between" wrap="nowrap" gap={ '10px' } sx={ { maxWidth: '400px' } }>
      { icons.map((item, index) => (
        <a href={ item.link } key={ index }>
          <IconHolder icon={ item.icon }

          />
        </a>
      )) }
    </Grid>

  )
}
