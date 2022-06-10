import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { SimpleTypography, TitleTypography } from './sharedStyles'
import { Container } from '@material-ui/core'
import { Iarticle } from '../../ResourcesData'

export const MakeOffer: FC<Iarticle> = (props) => {
  return (
    <>
      <Container fixed>
        <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
          How much can I borrow?
        </Typography>
        <SimpleTypography fontStyle={ 'italic' }>
          You've found a home you love. Most likely if you love it, so will other potential buyers. So you must act fast
          and smart. Before you make an offer, here are a few things to consider:
        </SimpleTypography>
        <TitleTypography variant="h4">
          Get a Comparative Marketing Analysis (CMA).
        </TitleTypography>
        <SimpleTypography>
          Your real estate agent will send you a CMA that compares similar properties in the immediate area to help you
          determine a competitive offer. The CMA will list all the homes that sold in the past 90 days and those that
          are pending. Make note of how fast the homes sold and if they sold under, at or above list price. This helps
          you and your real estate agent determine the right offer.
        </SimpleTypography>
        <TitleTypography variant="h6">
          Review the Sellers Disclosure
        </TitleTypography>
        <SimpleTypography>
          When the seller lists their home, they must complete a Sellers Disclosure. This document outlines everything
          the seller knows about the property. If it had previous water penetration, foundation issues, electrical or
          HVAC issues, they must disclose it.
        </SimpleTypography>
        <SimpleTypography>
          Most homes are sold as-is so a great way to combat any aging or concerns of the property is to purchase a home
          warranty. Home warranties cover most electrical and plumbing issues. So if the water heater goes out, you
          should be covered. The cost varies on the size of the home but budget around $50 per month. When / if
          something goes wrong, you call them and they will either replace or fix the issue.
        </SimpleTypography>
        <TitleTypography variant="h6">
          What stays and what goes
        </TitleTypography>
        <SimpleTypography>
          Typically if something is attached to the home it stays. But many times buyers are shocked when curtain rods
          or the fancy chandelier is not in the home when they move in. Most all of the kitchen appliances stay, minus
          the refrigerator (unless it’s a built-in). However, that doesn’t mean you can’t ask the seller if they will
          leave it.
        </SimpleTypography>
        <SimpleTypography>
          The seller should list the excluded items but it’s a good idea if you see something and you are not sure if it
          stays or goes, ask your real estate agent!
        </SimpleTypography>
        <TitleTypography variant="h6">
          Should I offer over list
        </TitleTypography>
        <SimpleTypography>
          If you are in a competitive price range and there are a lot of offers on every property, you may have a
          great advantage if you can offer over list price. Make sure you run this by the lender prior to making the
          offer. The maximum loan amount they will approve will be the lower amount between the sales price and
          appraised value. Over list offers are common so shouldn’t be an issue.
        </SimpleTypography>
        <SimpleTypography>
          Your real estate agent can also help make this decision when they prepare a Comparative Marketing Analysis
          (CMA) for you. It will compare your home to others in the area and provide a low, medium and high price point.
        </SimpleTypography>
        <TitleTypography variant="h6">
          Do I send money with the offer?
        </TitleTypography>

        <Box pl={ 4 }>
          <ol>
            <SimpleTypography>
              <li>
                Option Fee (typically a few hundred dollars)
              </li>
            </SimpleTypography>
            <SimpleTypography>
              <li>
                Earnest Money (typically 1% of purchase price)
              </li>
            </SimpleTypography>
            <SimpleTypography>
              <li>
                Home inspection (around $400).
              </li>
            </SimpleTypography>
            <SimpleTypography>
              <li>
                Appraisal Fee (around $600).
              </li>
            </SimpleTypography>
          </ol>
        </Box>
        <TitleTypography variant={ 'h6' }>
          Making the offer
        </TitleTypography>
        <SimpleTypography>
          You will let your real estate agent know how much you are offering and they will prepare the contract. When
          completed, they will send it out for electronically signature.
        </SimpleTypography>
        <SimpleTypography>
          Now it becomes a waiting game. The sellers may wait several days before they award a contract as they want to
          receive as many offers as possible. So it’s important to make yours stand out from the rest. Maybe you offer a
          little more in your Option Fee or Earnest Money. What about lowering the option period to just a few days?
          Have this discussion with your real estate agent as they have expertise in making competitive offers.
        </SimpleTypography>
        <SimpleTypography>
          There are some telltale signs on whether an offer below the asking price might be accepted. For example: if a
          house has been on the market a long time, if the seller wants a quick sale, if you're a less-risky buyer or if
          you're the only person interested in the property.
        </SimpleTypography>
        <SimpleTypography>
          A good thing about real estate is there will always be another home coming on the market that you will like.
          So if you lose several offers, don’t sweat it. It may take a week, a month or several months to win an offer.
          And once you are sitting on your sofa with your feet up in your new home, all the time it took will be worth
          it!
        </SimpleTypography>
      </Container>
    </>
  )
}
