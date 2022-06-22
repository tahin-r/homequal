import React from 'react'
import { Box, Radio, FormControlLabel, Typography } from '@mui/material'
import styled from 'styled-components'
import getLetter from '../../../../../assets/images/SuccessPlan/getletter.jpg'

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

const Img = styled.img`
  width     : 100%;
  margin-bottom: 60px;
  max-height: 450px;
`

export const GetLenderLetter = () => {
  return (
    <>
      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'rgb(237,31,138)',
          padding: '10px 0'
        } }
        color="primary"
      >
        <Typography variant="h5" textAlign="center" color="white">
          Get Your Lender Pre-Approval Letter
        </Typography>
      </Box>
      <Img src={ getLetter }/>
      <Box
        sx={ {
          display: 'flex',
          maxWidth: '800px',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: '0 20px',
          margin: '0 auto',
          borderRadius: '3px'
        } }
        color="primary"
      >
        <Typography variant='h5' marginBottom='40px' textAlign='center' color='#999'>
          The first step in buying a home is becoming pre-approved
          by a lender. This let's you know exactly what you can afford,
          and show sellers you are qualified and a serious buyer.
        </Typography>
        <Typography variant="h5" marginBottom='40px' textAlign="center" color="#999">
          In order to assign you a lender, we will need your
          permission to send your contact information to the lender.
        </Typography>
        <Box
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#fff',
            padding: '25px 60px',
            margin: '0 auto 60px',
            border: '1px solid rgb(237,31,138)',
            borderRadius: '2px',
            boxShadow: '10px 5px 5px #ccc'
          } }
        >
          <FormControlLabel control={ <Radio sx={ { transform: 'scale(1.3)' } }/> }
            label={<Typography fontSize='34px' fontWeight='bold'>Yes, I give my autorisation</Typography>}
            name='getLender'
            value='Y'
            id='getLenderY'
            color="primary"
            sx={ { margin: '1vh 0', minWidth: '50px', fontSize: '17px' } }
          />
          <FormControlLabel control={ <Radio sx={ { transform: 'scale(1.3)' } }/> }
            label={<Typography fontSize='34px' fontWeight='bold'>No, I already have a lender</Typography>}
            name='getLender'
            value='N'
            id='getLenderN'
            color="primary"
            sx={ { margin: '1vh 0', minWidth: '50px', fontSize: '17px' } }
          />
        </Box>
      </Box>
    </>
  )
}
