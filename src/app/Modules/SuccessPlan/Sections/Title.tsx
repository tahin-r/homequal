import React from 'react'
import styled from 'styled-components'
import titleImage from '../../../../assets/images/SuccessPlan/successTitle.jpg'
import { Box, Grid, Typography } from '@mui/material'
import { HomeQualTextTemplate } from '../../../../shared/strings/strings'

export const Content = styled.div`
  width           : 100%;
  position        : relative;
  display         : flex;
  align-items     : center;
  height          : auto;
  min-height: 440px;
  padding         : 4vh 0 4vh 4vw;
  background      : url(${titleImage}) left center no-repeat border-box;
  background-size : cover;
  color           : black;
  @media screen and (max-width : 1024px) {
    background-position: -260px 0;
  }
  @media screen and (max-width : 767px) {
    background-position: -530px 0;
  }
`

export const Title = () => {
  return (
    <>
      <Content>
        <Grid width="auto" container rowGap={ 4 } direction="column">
          <Typography variant="h6">
            <HomeQualTextTemplate variant="h5"/> Success Plan For
          </Typography>

          <Typography variant="h4">
            Dave Anderson
          </Typography>
          <Box sx={ { display: 'flex' } }>
            <Typography variant="h6" fontWeight="bolder">Member ID :</Typography>
            <Typography variant="h6" width="auto">
              1234567
            </Typography>
          </Box>
        </Grid>
      </Content>

      {/* <Box sx={ { padding: '20px', textAlign: 'center', bgcolor: 'primary.main', color: 'white' } }> */ }
      {/*  <Typography variant="h5">YOUR HOME AFFORDABILITY</Typography> */ }
      {/* </Box> */ }

    </>
  )
}
