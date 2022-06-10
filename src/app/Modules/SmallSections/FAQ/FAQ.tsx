import React from 'react'
import { HeaderDivider } from '../../../../shared/styles'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import { lendingLG, lendingMD, lendingXL } from '../../../../assets/images/dashboard/lending'
import { FAQData } from './questions'
import { ContactUs } from '../../Dashboard/Sections/ContactUs'

export const Content = styled.div`
  position        : relative;
  display         : flex;
  justify-content : space-between;
  flex-direction  : column;
  align-items     : center;
  padding         : 5vh 0;
  box-sizing      : border-box;

  @media screen and (min-width : 2001px) {
    background      : url(${lendingXL}) center center no-repeat fixed border-box;
    background-size : cover;
  }
  @media screen and (max-width : 2000px) {
    background      : url(${lendingLG}) center center no-repeat fixed border-box;
    background-size : cover;
  }
  @media screen and (max-width : 900px) {
    background      : url(${lendingMD}) center center no-repeat fixed border-box;
    background-size : cover;
  }
`

export const FAQ = () => {
  return (
    <>
      <HeaderDivider/>
      <Content>
        <Container fixed>
          { FAQData.map((item, index) => {
            const AnswerComponent = item.answer
            const QuestionComponent = item.question

            return (
              <Accordion key={ index }>
                <AccordionSummary expandIcon={ <ExpandMoreIcon/> } aria-controls="panel1a-content" id="panel1a-header">
                  <QuestionComponent/>
                </AccordionSummary>
                <AccordionDetails sx={{ pb: '2rem' }}>
                  <AnswerComponent/>
                </AccordionDetails>
              </Accordion>
            )
          }) }
        </Container>
      </Content>
      <ContactUs/>
    </>
  )
}
