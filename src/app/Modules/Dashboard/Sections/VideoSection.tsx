import { FC }                                                       from 'react'
import ReactPlayer                                                  from 'react-player'
import styled                                                       from 'styled-components'
import video                                                        from '../../../../assets/video/HomeQualVideo.mp4'
import { videoPlayerImage, videoPlayerImageLG, videoPlayerImageMD } from '../../../../assets/images/dashboard/video'
import playButton                                                   from '../../../../assets/video/playIcon.svg'

const VideoWrapper = styled.div`
  position: relative;
  & .react-player__preview {
    width        : 100%;
    aspect-ratio : 16/9;

    @media screen and (min-width : 2001px) {
      background-image : url(${ videoPlayerImage });
    }
    @media screen and (max-width : 2000px) {
      background-image : url(${ videoPlayerImageLG });
    }
    @media screen and (max-width : 900px) {
      background-image : url(${ videoPlayerImageMD });
    }
  }

  & .react-player__preview img {
    min-width  : 50px;
    min-height : 50px;
    width      : 20%;
    height     : 20%;
    transition : 0.2s;
    transform  : scale(1.5);

    &:hover {
      transition : 0.2s;
      transform  : scale(1.7);
    }

    &:active {
      transition : 0.2s;
      transform  : scale(1.2);
    }
  }
`
export const VideoSection: FC = () => {
  return (
    <VideoWrapper>
      <ReactPlayer url={ video }
                   controls
                   height={ '100%' }
                   width={ '100%' }
                   light
                   playIcon={ <img src={ playButton } alt="icon"/> }/>
    </VideoWrapper>
  )
}
