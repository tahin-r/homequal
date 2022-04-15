import { Typography }                       from "@mui/material"
import { FC }                               from "react"
import { HomeQualTextTemplate }             from "../../../../shared/strings/strings"
import { GreyTextContainer, TextContainer } from '../../../../shared/styles'
import styled                               from 'styled-components'

const CurrentGreyTextContainer = styled(GreyTextContainer)`
  padding-top    : 60px;
  padding-bottom : 60px;
`

export const DetermineYouHome: FC = () => {
  return (
    <>
      <TextContainer>
        <Typography variant="h5" fontWeight="light">
          Determine your home buying readiness and find out what you can afford
          in less than two minutes.
        </Typography>
      </TextContainer>
      <CurrentGreyTextContainer>
        <Typography variant="h5" fontWeight="light">
          <HomeQualTextTemplate variant={ "h5" } fontWeight="light"/> homeowners realize an average savings of $2,200
                                                                      per year in lower
                                                                      payments!
        </Typography>
      </CurrentGreyTextContainer>
    </>
  )
}
