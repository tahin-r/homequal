import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { SimpleTypography, TitleTypography } from './Components/Articles/sharedStyles'
import { Container } from '@material-ui/core'
import { Iarticle } from './ResourcesData'

export const HomeBuyingProcess: FC<Iarticle> = () => {
  return (
    <>
      <Container fixed>
        <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
          The Home buying Process
        </Typography>
        <SimpleTypography fontStyle='italic'>
          Once you have your credit in shape, budget under control, it’s time to start the really fun part- finding your
          ideal home and moving in.
        </SimpleTypography>
        <SimpleTypography fontStyle='italic'>
          Each stage of the process has many moving parts so below is a helpful overview of the keys steps you’ll need
          to take.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          Stage 1: House Hunting
        </TitleTypography>
        <SimpleTypography>
          By now, you should have a solid idea of how much you can afford and have been pre-approved for a mortgage.
          When you first meet with your real estate agent, they will want to have a copy of your pre-approval letter and
          your home wish list.
        </SimpleTypography>
        <SimpleTypography>
          The home wish list outlines what you are looking for in your home; number of beds and baths, square footage
          and location are a few of the features you’ll list. From here, your real estate agent will build a profile for
          you on their Multiple Listing Service (MLS). Based on your desired features, you will receive daily a listing
          of homes that match your criteria. You will mark the ones you want to see and your real estate agent will set
          up the home tours.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          Stage 2: Making an Offer
        </TitleTypography>
        <SimpleTypography>
          You found a home that you can see yourself living in, so it’s time to make an offer. Your real estate agent
          will run a Comparative Marketing Analysis (CMA) for you in order to determine what a fair offer is. Once you
          sign the offer, it will be sent to the listing agent.
        </SimpleTypography>
        <SimpleTypography>
          If your offer is accepted, you’ll have reached an important milestone and should feel happy. At this stage,
          many things happen. Your agent will order a home inspection, the lender will ask for a lot of documents and an
          appraisal will be ordered. You may be a little dazed with everything going on, but remain patient and follow
          the advice of your loan officer and real estate agent.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          Stage 3: Finalizing the Mortgage Process
        </TitleTypography>
        <SimpleTypography>
          If everything has gone to plan you’ll now be in a position to finalize the mortgage. Your loan officer will
          ask you to sign a mortgage application and submit financing documents. It is important you respond fast as
          days that are lost in the beginning seem to cause a much longer delay in the future. At this stage, your
          selected title company will prepare necessary documents and you will be asked to choose an insurance company
          for your home owners insurance. Shop around and compare prices and services.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          Stage 4: Closing Day
        </TitleTypography>
        <SimpleTypography>
          This is the final stage of the process. It probably has taken 30 days or so to get to this point and you are
          only 1 day away from being a home owner. You would’ve already seen and signed off on your Closing Disclosure.
          This document outlines all the costs and the money you need to take to closing.
        </SimpleTypography>
        <SimpleTypography>
          Get a cashier’s check or sent a wire to the title company. If sending a wire, make sure to contact the title
          company directly and get the correct wiring instructions. At your scheduled appointment time, take your money
          and photo ID’s with you. In many states, if you are married both people need to be at the closing. Check with
          your loan officer in advance.
        </SimpleTypography>
        <SimpleTypography>
          The closing process is straight forward. It’s time to sign all the documents. It may take about an hour to
          complete. Once you are done signing, it will take a few hours before you get the keys. In most cases, the
          escrow officer at the title company will forward your signed documents to the lender. The lender will audit
          the signatures and documents and authorize funding. So if you close on a Friday night at 4:30, there is a good
          chance you won’t get your keys to Monday so plan accordingly.
        </SimpleTypography>
        <SimpleTypography>
          That’s it. You’ve done it. The first time you turn the keys into your new home it’s an amazing feeling of
          accomplishment. Kick your shoes off, put your feet up and enjoy!
        </SimpleTypography>
      </Container>
    </>
  )
}
