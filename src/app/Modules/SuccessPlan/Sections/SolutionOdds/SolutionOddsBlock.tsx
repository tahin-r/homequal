import React from 'react'
import { Switch, Box, Typography, FormControlLabel } from '@mui/material'

interface ISolutionOddsBlock {
  firstTitle: string,
  firstText: string,
  secondTitle: string,
  secondText: string,
  label: string
}

export const SolutionOddsBlock: React.FC<ISolutionOddsBlock> = ({
  firstTitle,
  firstText,
  secondTitle,
  secondText,
  label
}) => {
  return (
    <>
      <Box
        sx={ {
          display: 'flex',
          maxWidth: '800px',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#eee',
          padding: '20px',
          margin: '30px auto',
          borderRadius: '3px'
        } }
        color="primary"
      >
        <Typography marginBottom='20px' variant="h5" textAlign="left" color="#666">
         {firstTitle}
        </Typography>
        <Typography marginBottom='20px' variant="h6" fontStyle="italic" textAlign="left" color="#999">
          {firstText}
        </Typography>
        <Typography marginBottom='20px' variant="h5" textAlign="left" color="rgb(237,31,138)">
          {secondTitle}
        </Typography>
        <Typography marginBottom='20px' variant="h6" fontStyle="italic" textAlign="left" color="#999">
          {secondText}
        </Typography>
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'right'
          } }
        >
          <Typography
            maxWidth='400px'
            lineHeight='20px'
            fontSize='14px'
            textAlign='left'
            color='#999'
            marginTop='30px'
            marginRight='10px'
          >
            After you have reviewed or resolved this issue,
            you can close it and we will recalculate your odds:
          </Typography>
          <FormControlLabel control={<Switch defaultChecked color='success' />} label={label} />
        </Box>
      </Box>
    </>
  )
}
