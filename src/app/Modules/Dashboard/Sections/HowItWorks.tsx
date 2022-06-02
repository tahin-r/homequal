import { FC }               from 'react'
import { Grid, Typography } from '@mui/material'
import styled               from 'styled-components'
import phoneImage           from '../../../../assets/images/phone.png'

const Title = styled(Typography)`
  margin-bottom : 20px;
  text-align    : right;
  @media screen and (max-width : 500px) {
    max-width: 270px;
  }
`
const TextContent = styled(Typography)`
  text-align : right;
  @media screen and (max-width : 500px) {
    line-height: 22px;
    font-weight: 400;
  }
`
const PhoneImage = styled.img.attrs({
  src: phoneImage,
  alt: 'phoneImage',
})`
  width           : 25vw;
  min-width       : 100px;
  max-width       : 140px;
  aspect-ratio    : 34/67;
  background-size : contain;
  box-sizing      : border-box;
  position        : relative;
  @media screen and (max-width : 500px) {
    position  : absolute;
    left      : 50%;
    top       : 50%;
    transform : translate(-50%, -50%);
    z-index   : -1;
    width:auto;
    aspect-ratio    : 34/67;
    max-height: 74%;
    min-width: 70px;
    left: 116%;
  }
`
const ContentHolder = styled.div`
  display         : flex;
  flex-wrap       : nowrap;
  justify-content : flex-end;
  @media screen and (max-width : 1200px) {
    justify-content : flex-start;
  }
  @media screen and (max-width : 500px) {
    display  : block;
    position : relative;
    max-width: 265px;
    justify-content : flex-end;
  }
`
const ImageHolder = styled.div`
  padding : 20px;
  width   : auto;
  height  : 100%;
  margin : auto 0;
  @media screen and (max-width : 500px) {
    padding : 0;
  }
`

export const HowItWorks: FC = () => {
  return (
    <ContentHolder>
      <Grid item sx={ { padding: '20px', maxWidth: '500px', backgroundColor: 'rgba(255, 255, 255, 0.94)' } }>
        <Title variant={ 'h5' }>How it Works</Title>
        <TextContent variant={ 'h6' } fontWeight="light">
          You enter information - we analyze thousands of data points to create
          your personal step by step success plan!
        </TextContent>
      </Grid>
      <ImageHolder>
        <PhoneImage/>
      </ImageHolder>
    </ContentHolder>
  )
}
