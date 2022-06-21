import React from 'react'
import { SolutionOddsBlock } from './SolutionOddsBlock'
import { Box, Typography } from '@mui/material'

const blocks = [
  {
    firstTitle: 'Housing Payment vs Mortgage Payment',
    firstText: `Your new mortgage payment is considerably higher than your current
    rent/mortgage payment which will cause the lender concern`,
    secondTitle: 'HomeQual Recommends',
    secondText: `You can improve your odds by preparing a letter of explanation
    indicating you will be able to make the new payment`,
    label: 'Close'
  },
  {
    firstTitle: 'Amount Saved',
    firstText: `The a mount you currently have saved may not be enough to cover the 
    costs of the loan`,
    secondTitle: 'HomeQual Recommends',
    secondText: `We have ways to lower the amount of cash you will need. Speak with
    your Advisor to learn how`,
    label: 'Resolved'
  }
]

export const SolutionOdds = () => {
  return (
    <>
      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'rgb(237,31,138)',
          padding: '10px 0',
          marginBottom: '10px'
        } }
        color="primary"
      >
        <Typography variant="h5" textAlign="center" color="white">
            HomeQual's Solutions
            to Improve Your Odds
        </Typography>
      </Box>
      {
        blocks.map((block, index) => {
          return <SolutionOddsBlock key={ index } { ...block }/>
        })
      }
    </>
  )
}
