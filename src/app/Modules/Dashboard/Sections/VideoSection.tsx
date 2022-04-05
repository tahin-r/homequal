import { Grid }                                                     from "@mui/material"
import { FC }                                                       from "react"
import ReactPlayer                                                  from "react-player"
import styled                                                       from "styled-components"
// @ts-ignore
import video                                                        from "../../../../assets/video/HomeQualVideo.mp4"
import { videoPlayerImage, videoPlayerImageLG, videoPlayerImageMD } from '../../../../assets/images/dashboard/video'

const VideoWrapper = styled(({ ...props }) => <Grid { ...props } />)`
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

  & .react-player__preview .react-player__shadow div.react-player__play-icon {
    transition : 0.2s;
    transform  : scale(1.4);

    &:hover,
    &:active {
      transition : 0.2s;
      transform  : scale(1.6);
    }
  }
`
export const VideoSection: FC = () => {
  return (
    <VideoWrapper sx={ { marginTop: "10px" } } container>
      <ReactPlayer url={ video } controls playing height={ "100%" } width={ "100%" } light/>
    </VideoWrapper>
  )
}
