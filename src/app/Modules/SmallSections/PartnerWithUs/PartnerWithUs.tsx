import React                                               from 'react'
import { Grid, Typography }                                from '@mui/material'
import styled                                              from 'styled-components'
import { HomeQualTextTemplate }                from '../../../../shared/strings/strings'
import { GreyTextContainer, HeaderDivider, TextContainer } from '../../../../shared/styles'
import { partnerwithus, partnerwithusLG, partnerwithusMD } from '../../../../assets/images/PartnerWithUs'
import { SectionList }                                     from '../shared'
import { ContactUs } from '../../Dashboard/Sections/ContactUs'

const Content = styled.div`
  position        : relative;
  display         : flex;
  justify-content : flex-start;
  align-items     : center;
  height          : 20vh;
  padding         : 10vh 0 14vh 3vw;
  background      : center right no-repeat border-box;
  background-size : cover;
  @media screen and (min-width : 2001px) {
    background-image : url(${ partnerwithus });
  }
  @media screen and (max-width : 2000px) {
    background-image : url(${ partnerwithusLG });
  }
  @media screen and (max-width : 900px) {
    background-image : url(${ partnerwithusMD });
  }
`

const LeftSidedText = styled(TextContainer)`
  text-align : left;
`

export const PartnerWithUs = () => {

  const qualification = [
    'Ethical, transparent and honest',
    'State licensed where applicable',
    'Highly reviewed across social media',
    'Passionate about first time homebuyers',
    'Local market expert',
    'Competitive in rates and fees',
  ]

  return (
    <>
      <HeaderDivider/>
      <Content>
        <Typography variant="h4"
                    color="primary"
                    sx={ { maxWidth: '30vw', minWidth: '160px', fontWeight: 'bold' } }> Partner with Us</Typography>
      </Content>
      <LeftSidedText>
        <Typography variant="h6">
          <HomeQualTextTemplate variant="h6"/> is passionate about helping first time buyers fulfil their dream of home
                                               ownership.
                                               We are selective in who we recommend to our members for lenders, real
                                               estate agents, insurance agents
                                               and more. If you meet our qualifications,
                                               we encourage you to send an email to partners@homequal.com A HomeQual
                                               representative will reach
                                               out to you.
        </Typography>
      </LeftSidedText>

      <GreyTextContainer color={ 'black' }>
        <Grid container direction="column" justifyContent="center">
          <SectionList list={ qualification }/>
        </Grid>
      </GreyTextContainer>

      <LeftSidedText>
        <Typography variant="h5" sx={ { fontStyle: 'italic' } }>
          “I love working with HomeQual clients. They are educated, equipped and ready to buy their first home. A great
          service!”
        </Typography>
      </LeftSidedText>

      <ContactUs/>

    </>
  )
}

