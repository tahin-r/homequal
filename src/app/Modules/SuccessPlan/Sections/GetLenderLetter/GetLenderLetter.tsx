import React, { useState } from 'react'
import { Box, Radio, FormControlLabel, Typography, RadioGroup } from '@mui/material'
import styled from 'styled-components'
import getLetter from '../../../../../assets/images/SuccessPlan/getletter.jpg'
import { GetLenderLetterPopup } from './GetLenderLetterPopup'

const Img = styled.img`
  width     : 100%;
  margin-bottom: 60px;
  max-height: 450px;
`

export const GetLenderLetter = () => {
  const [currentGetLenderValue, setCurrentGetLenderValue] = useState('Y')

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
      <Box
        sx={ {
          position: 'relative'
        } }
      >
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
            <RadioGroup
              name='getLender-buttons-group'
              defaultValue='Y'
              onChange={ (e, value) => {
                setCurrentGetLenderValue(value)
              } }
            >
              <FormControlLabel control={ <Radio id='getLenderY' sx={ { transform: 'scale(1.3)' } }/> }
                label={
                  <Typography
                    fontSize='34px'
                    fontWeight='bold'
                    sx={ {
                      ['@media screen and (max-width: 500px)']: {
                        fontSize: '18px'
                      }
                    } }
                  >
                    Yes, I give my authorization
                  </Typography>
                }
                name='getLender'
                value='Y'
                color="primary"
                sx={ { margin: '1vh 0', minWidth: '50px', fontSize: '17px' } }
              />
              <FormControlLabel control={ <Radio id='getLenderN'sx={ { transform: 'scale(1.3)' } }/> }
                label={
                  <Typography
                    fontSize='34px'
                    fontWeight='bold'
                    sx={ {
                      ['@media screen and (max-width: 500px)']: {
                        fontSize: '18px'
                      }
                    } }
                  >
                    No, I already have a lender
                  </Typography>
                }
                name='getLender'
                value='N'
                color="primary"
                sx={ { margin: '1vh 0', minWidth: '50px', fontSize: '17px' } }
              />
            </RadioGroup>
          </Box>
        </Box>
        {
          currentGetLenderValue === 'N' && <GetLenderLetterPopup/>
        }
      </Box>
    </>
  )
}
