import React                  from "react"
import styled                 from "styled-components"
import { CenteredTypography } from "../../../../shared/styles/strings"
import { ContentWrapper }     from "../../../../shared/styles/wrappers"
import { Grid, Typography }   from "@mui/material"

const Bubble = styled(({ ...props }) => <Grid { ...props } />)`
  border-radius    : 30px;
  font-size        : 16px;
  border           : ${ (props) => props.side === "left" ? null : `2px solid  ${ props.theme.colors.primary }` };
  background-color : ${ (props) => props.side === "left" ? props.theme.colors.grey : "white" };
  align-self       : ${ (props) => (props.side === "left" ? "flex-start" : "flex-end") };
  padding          : 20px;
  margin-bottom    : 15px;
  width            : auto;
  box-sizing       : border-box;

  @media screen and (min-width : 0px) {
    max-width        : 400px;
  }
  @media screen and (min-width : 900px) {
    max-width        : 500px;
  }
  @media screen and (min-width : 1280px) {
    max-width        : 600px;
  
  }
\`
`

export const HaveAQuestions = () => {
  return (
    <ContentWrapper container direction="column" justifyContent="center" alignItems='center' sx={ { padding: "0 2vw" } }>

      <CenteredTypography variant={ "h4" } sx={ { marginTop: "20px" } }>
        Have questions, need a little assistence?
      </CenteredTypography>

      <CenteredTypography variant={ "h5" }>
        Our interactive bot is always at your fingertips!
      </CenteredTypography>

      <Grid container direction='column' maxWidth={ '1100px' }>
        <Bubble side={ "right" }>
          <Typography variant="h5">Hi, how can I help?</Typography>
        </Bubble>

        <Bubble side={ "left" }>
          <Typography variant="h5">Do I need a 20% down payment?</Typography>
        </Bubble>

        <Bubble side={ "right" }>
          <Typography variant="h5">
            No, you can put as little as 3% down and in some cases no money down.
            We can also show you ways to save on closing costs.
          </Typography>
        </Bubble>
      </Grid>


    </ContentWrapper>
  )
}
