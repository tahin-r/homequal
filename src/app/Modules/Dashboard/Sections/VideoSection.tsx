import { Grid }    from '@mui/material';
import { FC }      from 'react';
import ReactPlayer from 'react-player';
import styled      from 'styled-components';
import videoImage  from './../../../../images/dashboard/videoPlayerImage.jpeg'

const VideoWrapper = styled(({ ...props }) => <Grid { ...props }/>)`
  & .react-player__preview {
    width        : 100%;
    aspect-ratio : 16/9;
  }
`
export const VideoSection: FC = () => {

  return (
    <VideoWrapper
      sx={ { marginTop: '10px' } }
      container
    >
      <ReactPlayer
        url={ 'https://media.w3.org/2010/05/sintel/trailer.mp4' }
        controls
        playing
        height={ '100%' }
        width={ '100%' }
        light={ videoImage }
      />
    </VideoWrapper>
  )
}
