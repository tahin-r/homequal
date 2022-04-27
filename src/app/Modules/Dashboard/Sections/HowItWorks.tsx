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
  src:phoneImage,
  alt:"phoneImage"
})`
  width           : auto;
  min-width       : 100px;
  max-width       : 140px;
  background-size : contain;
  box-sizing      : border-box;
`

export const HowItWorks: FC = () => {
  return (
    <Grid container wrap="nowrap" justifyContent="flex-end">
      <Grid item sx={ { padding: '20px', maxWidth: '500px' } }>
        <Title variant={ 'h5' }>How it Works</Title>
        <TextContent variant={ 'h5' } fontWeight="light">
          You enter information - we analyze thousands of data points to create
          your personal step by step success plan!
        </TextContent>
      </Grid>
      <Grid item container sx={ { padding: '20px', width: 'auto', height: '100%', marginY: 'auto' } }>
        <PhoneImage/>
      </Grid>
    </Grid>
  )
}
