import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { CenteredTypography } from '../../../shared/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  textOrEmailButton: {
    marginBottom: '15px',
    borderColor: 'rgb(237, 31, 138)',
    border: '1px solid',
    minWidth: '300px',
    width: '50vw',
    maxWidth: '600px',
    padding: '15px 10px',
    borderRadius: '30px'
  },
  notchedOutline: {
    borderColor: '#ccc !important'
  }
})

export const ForgotYourPassword = () => {
  const classes = useStyles()

  return (
    <>
      <Box
        sx={ {
          height: '100%',
          width: '100%',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#fff',
          opacity: '0.9',
          padding: '10px 0'
        } }
        color="primary"
      >
        <CenteredTypography variant="h5">
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
            Forgot your password?
          </Typography>
        </CenteredTypography>
        <CenteredTypography variant="h5">
          <TextField
            variant='outlined'
            color='primary'
            name='login'
            autoComplete='no'
            InputProps={ {
              style: { fontSize: '1.4rem', fontWeight: 'bold' },
              classes: {
                notchedOutline: classes.notchedOutline
              }
            } }
            InputLabelProps={ { sx: { '&.MuiInputLabel-shrink': { marginTop: '-10px', zIndex: 1 } } } }
            sx={ {
              minWidth: '300px', maxWidth: '600px', width: '50vw', margin: '10px 0 5px 0'
            } }
            label={
              <Typography variant="h6" color="#ccc" sx={ {
                fontSize: '15px !important', fontStyle: 'italic', fontWeight: 'regular'
              } }>
                E-mail or Phone
              </Typography>
            }
          />
        </CenteredTypography>
        <CenteredTypography variant="h5">
          <Button
            type="submit"
            className={classes.textOrEmailButton}
            size="large"
          >
            Reset password
          </Button>
        </CenteredTypography>
      </Box>
    </>
  )
}
