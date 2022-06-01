import React  from 'react'
import styled from 'styled-components'

import { Grid, Typography }                                      from '@mui/material'
import { aboutUsMain, logoA, logoB, logoC, logoD, logoE, logoF } from '../../../../assets/images/aboutUs'
import { GreyTextContainer, HeaderDivider, TextContainer }       from '../../../../shared/styles'
import { ContactUs } from '../../Dashboard/Sections/ContactUs'

const ContentImage = styled.div`
  position        : relative;
  display         : flex;
  justify-content : flex-start;
  align-items     : center;
  height          : 20vh;
  padding         : 10vh 0 14vh 3vw;
  background      : url(${ aboutUsMain }) center center no-repeat border-box;
  background-size : cover;
`

export const AboutUs = () => {

  const list = [
    {
      text: 'Will I Qualify',
      logo: logoA,
    },
    {
      text: 'Get Pre-Approved',
      logo: logoB,
    },
    {
      text: 'Agent Match',
      logo: logoC,
    },
    {
      text: 'View Homes',
      logo: logoD,
    },
    {
      text: 'Claim Rebate',
      logo: logoE,
    },
    {
      text: 'Move In',
      logo: logoF,
    },
  ]

  return (
    <>
      <HeaderDivider/>
      <ContentImage>
        {/*text*/ }
      </ContentImage>

      <TextContainer>
        <Typography variant="h4" fontWeight="bold" mb={ 2 }>
          A home is where your life happens!
        </Typography>

        <Typography variant="h6" textAlign="left">
          Buying a home is complex, especially if you have never done it before. That is why we believe in a world where
          personalized technology, supported by skilled humans, can make buying a home more simple and transparent. Our
          mission is to equip and empower each and every one of our members with the knowledge, strategies and tools
          they need to become a homeowner. We understand this is about more than just a home, it’s where the next
          chapter of your life will happen!
        </Typography>
      </TextContainer>

      <Typography variant="h4" fontWeight="bold" mt={ 3 } color="primary" textAlign="center">
        Holding your hand every step of the way.
      </Typography>

      <Grid container justifyContent="center" my={ '5vh' } maxWidth={ '800px' } mx={ 'auto' }>
        { list.map((item, index) => <Grid width={ 'auto' }
                                          item
                                          xs={ 6 }
                                          container
                                          direction="column"
                                          key={ index }
                                          alignItems={ 'center' }
                                          my={ 2 }>
            <img src={ item.logo } alt="logo" width="50px" height="50px"/>
            <Typography variant="h6" textAlign="center">{ item.text }</Typography>
          </Grid>,
        ) }
      </Grid>

      <GreyTextContainer color={ 'black' }>
        <Typography variant="h4" fontWeight="bold" mb={ 4 } color="primary">
          Your first home is where your life changes!
        </Typography>

        <Typography variant="h6" textAlign="left">
          We believe everyone deserves the chance to realize the dream of owning their first home and that starts with
          knowing if you will qualify before speaking to an agent or lender. Our free platform integrates the services
          required to purchase, including matching you with the right loan officer, real estate agent, insurance agent
          and supported by your dedicated HomeQual Advisor who will be available every step of the way.
        </Typography>
      </GreyTextContainer>

      <TextContainer>
        <Typography variant="h6">
          Now may be the time to stop paying rent and begin building equity for yourself. Buying a home is a life
          changing moment and it’s where your next chapter of your life will happen. We are anxious to be part of your
          journey.
        </Typography>
      </TextContainer>

      <ContactUs/>
    </>
  )
}

