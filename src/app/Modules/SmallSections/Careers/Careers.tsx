import React from 'react'
import styled from 'styled-components'

import { Grid, Typography } from '@mui/material'
import { HomeQualTextTemplate } from '../../../../shared/strings/strings'
import { GreyTextContainer, HeaderDivider, TextContainer } from '../../../../shared/styles'
import { careers, careersLG, careersMD } from '../../../../assets/images/careers'
import { SectionList } from '../shared'

import { ContactUs } from '../../Dashboard/Sections/ContactUs'

const ContentImage = styled.div`
  position        : relative;
  display         : flex;
  justify-content : flex-start;
  align-items     : center;
  height          : 20vh;
  padding         : 10vh 0 14vh 3vw;
  background      : center left no-repeat border-box;
  background-size : cover;

  @media screen and (min-width : 2001px) {
    background-image : url(${careers});
  }
  @media screen and (max-width : 2000px) {
    background-image : url(${careersLG});
  }
  @media screen and (max-width : 900px) {
    background-image : url(${careersMD});
  }
`

export const Careers = () => {
  const offer = [
    'Fun, fast paced working environment',
    'Competitive pay and benefits',
    'Freedom to be yourself!',
    'Flexible working hours'
  ]

  const youAre = [
    'Ethical, honest and a team player',
    'Looking for a career, not just a job',
    'Passionate about real estate',
    'Creative, outside of the box thinking',
    'Ready to advance your career'
  ]

  return (
    <>
      <HeaderDivider/>
      <ContentImage>
        {/* text */ }
      </ContentImage>

      <TextContainer>
        <Typography variant="h5" fontWeight="bold" mb={ 2 }>
          You got skills? We have opportunities.
        </Typography>

        <Typography variant="h6" textAlign="left">
          By joining <HomeQualTextTemplate variant="h6"/>, you will be part
          of a team that is dedicated to helping first time homebuyers. We are
          always looking for people who can think outside of the box and bring
          fresh new ideas to the table. We are a fun place to work. We are a
          team of cool people coming together to help the dream of home
          ownership a reality.
        </Typography>
      </TextContainer>

      <GreyTextContainer color={ 'black' }>
        <Grid container direction="column" alignItems="center">

          <Typography variant="h5" fontWeight="bold" textAlign="center" mb={ 2 }>
            We offer...
          </Typography>

          <SectionList list={ offer }/>

          <Typography variant="h5" fontWeight="bold" textAlign="center" margin={ '16px 0' }>
            You are...
          </Typography>
          <SectionList list={ youAre }/>

        </Grid>
      </GreyTextContainer>

      <TextContainer>
        <Typography variant="h5" mb={ 2 }>
          We are always eager to meet fresh talent, so send your resume to partners@homequal.com
        </Typography>
      </TextContainer>

      <ContactUs/>
    </>
  )
}
