import { FC }               from 'react'
import { Grid, Typography } from '@mui/material'
import styled               from 'styled-components'
import phoneImage           from '../../../../assets/images/phone.png'

const Title = styled(Typography)`
  margin-bottom : 20px;
  text-align    : right;
`
const TextContent = styled(Typography)`
  text-align : right;
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
  @media screen and (max-width : 370px) {
    position  : absolute;
    left      : 50%;
    top       : 50%;
    transform : translate(-50%, -50%);
    z-index   : -1;
    max-height:90%;
    width:auto;
    aspect-ratio    : 34/67;
  }
`
const ContentHolder = styled.div`
  display         : flex;
  flex-wrap       : nowrap;
  justify-content : flex-end;
  @media screen and (max-width : 370px) {
    display  : block;
    position : relative;
  }
`
const ImageHolder = styled.div`
  padding : 20px;
  width   : auto;
  height  : 100%;
  margin : auto 0;
  @media screen and (max-width : 370px) {
    padding : 0
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
