import React                                  from 'react'
import styled                                 from 'styled-components'
import { CenteredTypography, ContentWrapper } from '../../../../shared/styles'
import { Grid, Typography }                   from '@mui/material'

const Bubble = styled(({ ...props }) => <Grid { ...props } />)`
  border-radius    : 30px;
  display          : inline-block;
  font-size        : 16px;
  border           : ${ (props) => props.side === 'left' ? null : `2px solid  ${ props.theme.colors.primary }` };
  background-color : ${ (props) => props.side === 'left' ? props.theme.colors.grey : 'white' };
  margin-left      : ${ (props) => props.side === 'left' ? '40px' : null };
  padding          : 20px;
  margin-bottom    : 15px;
  box-sizing       : border-box;

  @media screen and (min-width : 0px) {
    max-width : 400px;
  }
  @media screen and (min-width : 900px) {
    max-width : 500px;
  }
  @media screen and (min-width : 1280px) {
    max-width : 600px;

  }
`
const BubbleContainer = styled(Grid)`
  align-items : flex-start;
  @media screen and (min-width : 0px) {
    max-width : 500px;
  }
  @media screen and (min-width : 900px) {
    max-width : 600px;
  }
  @media screen and (min-width : 1280px) {
    max-width : 700px;
  }

`
export const HaveAQuestions = () => {
  return (
    <ContentWrapper container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={ { padding: '2vw 2vw 4vw 2vw' } }>

      <CenteredTypography variant={ 'h4' } mt={ '50px' }>
        Have questions, need a little assistance?
      </CenteredTypography>

      <CenteredTypography variant={ 'h5' } mt={ '10px' }>
        Our interactive bot is always at your fingertips!
      </CenteredTypography>

      <BubbleContainer container direction="column" width="auto" mt={ 3 }>
        <Bubble side={ 'right' }>
          <Typography variant="h6" width="auto" boxSizing="border-box" display="inline-block">
            Hi, how can I help?
          </Typography>
        </Bubble>

        <Bubble side={ 'left' } alignSelf={ 'right' }>
          <Typography variant="h6">Do I need a 20% down payment?</Typography>
        </Bubble>

        <Bubble side={ 'right' } alignSelf={ 'center' }>
          <Typography variant="h6">
            No, you can put as little as 3% down and in some cases no money down.
            We can also show you ways to save on closing costs.
          </Typography>
        </Bubble>
      </BubbleContainer>


    </ContentWrapper>
  )
}
