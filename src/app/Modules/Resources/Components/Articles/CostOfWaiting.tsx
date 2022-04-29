import React                                 from 'react'
import { Box, Typography }                   from '@mui/material'
import { SimpleTypography, TitleTypography } from './sharedStyles'
import { Container }                         from '@material-ui/core'

export const CostOfWaiting = () => {

  return (
    <Container fixed>
      <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
        Cost of Waiting to Purchase
      </Typography>
      <SimpleTypography>
        Many potential home buyers are sitting on the fence trying to decide if now’s the time to buy a home. Think
        about this; the house you can afford today might be out of reach next year due to increasing home prices and
        perhaps interest rates.
      </SimpleTypography>

      <SimpleTypography>
        However for some, waiting may be the best strategy. If you are thinking of moving out of the area, or you are
        worried about continued employment, it may make sense to wait until you are 100% all in.
      </SimpleTypography>

      <TitleTypography>
        Are home prices going up?
      </TitleTypography>
      <SimpleTypography>
        If you average the most recent predictions, home prices are expected increase 7.7% next year. Meaning a $250,000
        home will increase to around $270,000. So not only will you end up paying more for the home, but you will also
        lose out on the $20,000 in equity.
      </SimpleTypography>

      <TitleTypography>
        Will interest raise go up?
      </TitleTypography>

      <SimpleTypography>
        We are still in the early stages of recovery in the housing market, and with home inventory remaining low,
        rates may rise even higher to encourage potential buyers to act quickly. Trying to play the guessing game with
        interest rates is tricky. Outside forces can significantly impact rates in
        just hours or days.
      </SimpleTypography>

      <TitleTypography>
        A few things to consider
      </TitleTypography>
      <Box px={ 5 }>
        <SimpleTypography>
          If you are currently renting and your lease doesn’t expire for several months, contact the landlord and ask
          what the penalty is for breaking your lease. Many apartment complexes only charge a 1 month penalty so find
          this out early in the home buying process. If the cost to break you lease is too high, now is the perfect time
          to get all your finances in order. Once you know you can buy, it will be easier to let your apartment complex
          know you will not be renewing.
        </SimpleTypography>
        <SimpleTypography>
          There is no crystal ball to determine if home prices will continually increase or what interest rates will do.
          However, indications are that home prices are increasing at a fast pace and

          interest rates that have remained low are beginning to creep up. So if you are thinking about waiting until
          next year, check out home values about 8% lower than what you think you can afford now.
        </SimpleTypography>
        <SimpleTypography>
          Consider the lost equity by waiting. Paying a landlord only builds equity for them, not you. The sooner you
          become a home owner, the sooner you can take advantage of the increasing equity. Many homebuyers saw
          significant increases in their home values over the past few years. Imagine buying a home 3 years ago for
          $250,000 that is now worth $320,000. Not too many places where you can build up that much wealth so fast.
        </SimpleTypography>
      </Box>
      <SimpleTypography>
        The key is the sooner you can start building equity the better. If now is the time, make the jump. If you need
        to wait, then just be prepared for the increases that are coming.
      </SimpleTypography>

    </Container>
  )
}