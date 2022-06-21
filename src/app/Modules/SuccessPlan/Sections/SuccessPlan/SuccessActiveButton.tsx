import React from 'react'
import { Box, Typography } from '@mui/material'

export const SuccessActiveButton = () => {
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
            Your Home Affordability
        </Typography>
      </Box>
    </>
  )
}
