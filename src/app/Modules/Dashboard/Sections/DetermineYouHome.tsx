import { Typography }                       from "@mui/material"
import { FC }                               from "react"
import { HomeQualTextTemplate }             from "../../../../shared/strings/strings"
import { GreyTextContainer, TextContainer } from '../../../../shared/styles/strings'


export const DetermineYouHome: FC = () => {
  return (
    <>
      <TextContainer>
        <Typography variant="h6">
          Determine your home buying readiness and find out what you can afford
          in less than two minutes.
        </Typography>
      </TextContainer>
      <GreyTextContainer>
        <Typography variant="h6">
          <HomeQualTextTemplate variant={ "h6" }/>homeowners realize an average avings of $2,200 per year in lower
                                                  payments!
        </Typography>
      </GreyTextContainer>
    </>
  )
}
