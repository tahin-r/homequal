import { Typography } from '@mui/material'
import { FC } from 'react'
import styled from 'styled-components'
import { QualButton } from '../../../../shared/styles'
import { lendingLG, lendingMD, lendingXL } from '../../../../assets/images/dashboard/lending'
import { useNavigate } from 'react-router-dom'

export const Content = styled.div`
  position        : relative;
  display         : flex;
  justify-content : space-between;
  flex-direction  : column;
  align-items     : center;
  height          : 100vh;
  padding         : 4vh 0 14vh 0;

  @media screen and (min-width : 2001px) {
    background      : url(${lendingXL}) center center no-repeat border-box;
    background-size : cover;
  }
  @media screen and (max-width : 2000px) {
    background      : url(${lendingLG}) center center no-repeat border-box;
    background-size : cover;
  }
  @media screen and (max-width : 900px) {
    background      : url(${lendingMD}) center center no-repeat border-box;
    background-size : cover;
  }
`
const TextContainer = styled.div`
  margin-top       : 10vh;
  width            : 100%;
  background-color : rgba(141, 135, 135, 0.68);
  color            : white;
  padding          : 7% 20% 7% 7%;
`

export const HelpingFirstTime: FC = () => {
  const navigate = useNavigate()

  return (
    <Content>
      <TextContainer>
        <Typography variant={ 'h4' } sx={ { textAlign: 'left', fontWeight: 'light' } }>
          Helping first-time homebuyers obtain the dream of ownership
        </Typography>
      </TextContainer>

      <QualButton onClick={ () => navigate('Q&A/Q1') }>
        <Typography variant="h5">Start Your Journey Now</Typography>
      </QualButton>
    </Content>
  )
}
