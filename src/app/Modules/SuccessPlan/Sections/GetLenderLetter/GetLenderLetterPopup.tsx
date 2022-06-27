import React from 'react'
import { Box, Radio, FormControlLabel, Typography, RadioGroup } from '@mui/material'

export const GetLenderLetterPopup = () => {
  return (
    <>
      <Box
        sx={ {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 0,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ccc',
          opacity: '0.9',
          padding: '10px 0'
        } }
        color="primary"
      >
        <Box
          sx={ {
            display: 'flex',
            maxWidth: '700px',
            maxHeight: '80vh',
            minWidth: '60vw',
            flexDirection: 'column',
            justifyContent: 'start',
            backgroundColor: '#aaa',
            padding: '50px 40px 20px',
            margin: '10% auto 70px',
            borderRadius: '3px',
            ['@media screen and (max-width: 500px)']: {
              maxWidth: '400px'
            }
          } }
        >
          <Typography
            marginBottom='25px'
            fontSize='46px'
            fontWeight='bold'
            textAlign="center"
            color="#000"
            sx={ {
              ['@media screen and (max-width: 500px)']: {
                fontSize: '36px'
              }
            } }
          >
            Just to Confirm
          </Typography>
          <Typography
            sx={ {
              ['@media screen and (max-width: 500px)']: {
                fontSize: '20px'
              }
            } }
            marginBottom='25px'
            fontSize='32px'
            textAlign="center"
            color="#000"
          >
            By using a non-affiliated lender you may
            not qualified for any rebate.
          </Typography>
          <Typography
            sx={ {
              ['@media screen and (max-width: 500px)']: {
                fontSize: '20px'
              }
            } }
            marginBottom='25px'
            fontSize='32px'
            textAlign="center"
            color="#000"
          >
            You already have a lender and are not interested in a rebate?
          </Typography>
          <RadioGroup
            name='getLender-buttons-group'
            defaultValue='Y'
            sx={ {
              padding: '10px 50px',
              ['@media screen and (max-width: 500px)']: {
                padding: '10px 10px'
              }
            } }
          >
            <FormControlLabel
              control={ <Radio id='getLenderY' sx={ { transform: 'scale(1.3)', color: '#666' } }/> }
              label={
                <Typography
                  sx={ {
                    ['@media screen and (max-width: 500px)']: {
                      fontSize: '18px'
                    }
                  } }
                  fontSize='28px'
                  fontWeight='bold'
                >
                  I'am using my lender and decline any rebate
                  I may be entitled to.
                </Typography>
              }
              name='getLender'
              value='Y'
              color="primary"
              sx={ { margin: '1vh 0', minWidth: '50px', fontSize: '17px' } }
            />
            <FormControlLabel
              control={ <Radio id='getLenderN'sx={ { transform: 'scale(1.3)', color: '#666' } }/> }
              label={
                <Typography
                  sx={ {
                    ['@media screen and (max-width: 500px)']: {
                      fontSize: '18px'
                    }
                  } }
                  fontSize='28px'
                  fontWeight='bold'
                >
                  I would prefer to use a HomeQual lender.
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
    </>
  )
}
