import React                     from 'react'
import styled                    from 'styled-components'
import title                     from '../../../../assets/images/SuccesPlan/title.jpeg'
import { Box, Grid, Typography } from '@mui/material'
import { HomeQualTextTemplate }  from '../../../../shared/strings/strings'

export const Content = styled.div`
  width           : 100%;
  position        : relative;
  display         : flex;
  align-items     : center;
  height          : auto;
  padding         : 4vh 0 4vh 4vw;
  background      : url(${ title }) left center no-repeat border-box;
  background-size : cover;
  color           : black;
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
            Name SecondName
          </Typography>
          <Box sx={ { display: 'flex' } }>
            <Typography variant="h6" fontWeight="bolder">Member ID :</Typography>
            <Typography variant="h6" width="auto">
              1234567
            </Typography>
          </Box>
        </Grid>
      </Content>

      {/*<Box sx={ { padding: '20px', textAlign: 'center', bgcolor: 'primary.main', color: 'white' } }>*/ }
      {/*  <Typography variant="h5">YOUR HOME AFFORDABILITY</Typography>*/ }
      {/*</Box>*/ }


    </>
  )
}