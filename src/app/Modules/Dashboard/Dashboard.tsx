import { Grid }              from "@mui/material"
import { FC }                from "react"
import { HelpingFirstTime }  from "./Sections/HelpingFirstTime"
import { DetermineYouHome }  from "./Sections/DetermineYouHome"
import { HowItWorks }        from "./Sections/HowItWorks"
import { VideoSection }      from "./Sections/VideoSection"
import { HaveAQuestions }    from "./Sections/HaveAQuestions"
import { NewHomeOwnersLove } from "./Sections/NewHomeOwnersLove"
import { ReadyToGetATry }    from "./Sections/ReadyToGetATry"
import { ContactUs }         from "./Sections/ContactUs"
import { VideoSection2 }     from './Sections/VideoSection2'

export const Dashboard: FC = () => {
  return (
    <Grid overflow={ "hidden" }>
      <HelpingFirstTime/>
      <DetermineYouHome/>
      <HowItWorks/>
      <VideoSection/>
      <VideoSection2/>
      <HaveAQuestions/>
      <NewHomeOwnersLove/>
      <ReadyToGetATry/>
      <ContactUs/>
    </Grid>
  )
}
