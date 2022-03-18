import { FC }                    from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled                    from 'styled-components';
import phoneImage                from '../../../../images/phone.png'

const Title = styled(({ ...props }) => <Typography { ...props }/>)`
  margin-right: 5px;
  margin-bottom: 20px;
  text-align: right;
`
const TextContent = styled(({ ...props }) => <Typography { ...props }/>)`
  text-align: right;
`
const PhoneImage = styled(Box)`
  position: relative;
  width: 80%;
  min-height: 100%;
  background: url(${ phoneImage }) no-repeat;
  background-size: contain;
`

export const HowItWorks: FC = () => {

  return (
    <Grid container>
      <Grid
        item
        xs={ 8 }
        sx={ { padding: '20px', minHeight: '40vh' } }
      >
        <Title variant={ 'h5' }>
          How it Works
        </Title>
        <TextContent variant={ 'h6' }>
          You enter information - we analyze thousands of data points to create your personal step by step success
          plan!
        </TextContent>
      </Grid>

      <Grid
        item
        xs={ 4 }
        alignItems='flex-start'
        sx={ { paddingTop: '40px' } }
      >
        <PhoneImage/>
      </Grid>
    </Grid>
  )
}

