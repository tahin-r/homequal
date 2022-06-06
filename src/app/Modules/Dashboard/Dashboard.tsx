import { Grid }              from '@mui/material'
import { FC }                from 'react'
import { HelpingFirstTime }  from './Sections/HelpingFirstTime'
import { HowItWorks }        from './Sections/HowItWorks'
import { VideoSection }      from './Sections/VideoSection'
import { HaveAQuestions }    from './Sections/HaveAQuestions'
import { NewHomeOwnersLove } from './Sections/NewHomeOwnersLove'
import { ReadyToGetATry }    from './Sections/ReadyToGetATry'
import { ContactUs }         from './Sections/ContactUs'

export const Dashboard: FC = () => {
  return (
    <>
      <HelpingFirstTime/>
      <Grid container alignItems="center">
        <Grid item xs={ 12 } lg={ 4 } >
          <HowItWorks/>
        </Grid>
        <Grid item
              xs={ 12 }
              lg={ 8 }
              sx={ { boxSizing: 'border-box', overflow: 'hidden', padding: { lg: 2 } } }>
          <VideoSection/>
        </Grid>
      </Grid>
      <HaveAQuestions/>
      <NewHomeOwnersLove/>
      <ReadyToGetATry/>
      <ContactUs/>
    </>
  )
}
