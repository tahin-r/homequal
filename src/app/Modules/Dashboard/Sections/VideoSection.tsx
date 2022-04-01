import { Grid }    from '@mui/material';
import { FC }      from 'react';
import ReactPlayer from 'react-player';
import styled      from 'styled-components';
import videoImage  from '../../../../assets/images/dashboard/videoPlayerImage.jpeg';
// @ts-ignore
import video       from '../../../../assets/video/HomeQualVideo.mp4'

const VideoWrapper = styled(({ ...props }) => <Grid { ...props }/>)`
  & .react-player__preview {
    width        : 100%;
    aspect-ratio : 16/9;
  }

  & .react-player__preview .react-player__shadow div.react-player__play-icon {
    transition : 0.2s;
    transform: scale(1.4);
    
    &:hover, &:active {
      transition : 0.2s;
      transform  : scale(1.6);
    }

  }
`
export const VideoSection: FC = () => {

  return (
    <VideoWrapper
      sx={ { marginTop: '10px' } }
      container
    >
      <ReactPlayer
        url={ video }
        controls
        playing
        height={ '100%' }
        width={ '100%' }
        light={ videoImage }
      />
    </VideoWrapper>
  )
}
