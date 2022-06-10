import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Grid, SvgIcon, TextField, Typography } from '@mui/material'
import pie from '../../../../assets/images/SuccessPlan/pie.png'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import makeStyles from '@material-ui/core/styles/makeStyles'
import NumberFormat from 'react-number-format'

const PaymentButtons = styled(({ ...props }) => <SvgIcon { ...props }/>)`
  width            : 5vw;
  height           : 5vw;
  min-height       : 25px;
  min-width        : 25px;
  max-height       : 50px;
  max-width        : 50px;
  fill             : dodgerblue;
  background-color : #febb6a;
  background-image : url(${(props: any) => props.hello});
  border-radius    : 50%;
  font-size        : 50px;
`
const Img = styled.img`
  max-width : 90vw;
  width     : 100%;
  margin-bottom: 60px;
`
const TableItem = styled(Box)`
  position        : relative;
  border          : ${props => `1px solid ${props.theme.colors.primary}`};
  border-top      : 0;
  padding         : 20px 28px;
  border-collapse : collapse;
  &:first-child {
    border-top : ${props => `1px solid ${props.theme.colors.primary}`};
  }
`

export const Diagrams = () => {
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const handleMonthlyPaymentChange = (e: any) => {
    const value = e.target.value
    if (/^[0-9]*$/.test(value)) {
      setMonthlyPayment(value)
    }
  }

  const styles = makeStyles(theme => ({
    textFieldStyle: {
      fontSize: '30px',
      fontWeight: 'bold',
      '@media(max-width: 768px)': {
        width: '20px'
      }
    },
    textFieldInputStyle: {
      textAlign: 'center',
      height: '25px'
    },
    mpStyle: {
      '@media(max-width: 768px)': {
        fontSize: '12px'
      }
    },
    imgStyle: {
      marginBottom: '0',
      width: '66%',
      '@media(max-width: 768px)': {
        width: '100%'
      }
    },
    tableItem: {
      minHeight: '230px',
      paddingTop: '0px',
      border: 'none !important',
      '@media(max-width: 768px)': {
        minHeight: 'auto'
      }
    },
    tableItemText: {
      '@media(max-width: 768px)': {
        fontSize: '14px'
      }
    },
    tableItemDiagramText: {
      '@media(max-width: 768px)': {
        paddingTop: '15px'
      },
      '@media(max-width: 500px)': {
        fontSize: '14px'
      }
    }
  }))

  const classes = styles()

  return (
    <>
      <Grid sx={ { display: 'flex', justifyContent: 'space-around' } } container overflow={ 'hidden' } px={ '2vw' }>
        <Grid container direction="column" width={ '40%' }>
          <Grid container direction="column" justifyContent="center" mb={ 2 }>
            <Typography sx={ { minHeight: '62px' } } variant="h6" textAlign="center">
              YOUR QUALIFICATION ODDS
            </Typography>
          </Grid>
          <Img src={ pie } alt="pie"/>
          <Grid container direction="column">
            <TableItem textAlign="center">
              <Typography className={classes.tableItemText} variant="h6" mb={ 1 }> MONTHLY PAYMENT </Typography>
              <Box sx={ { display: 'flex', justifyContent: 'space-around' } }>
                <PaymentButtons component={ RemoveIcon }/>
                <NumberFormat
                  thousandSeparator={true}
                  customInput={TextField}
                  variant="standard"
                  onChange={ handleMonthlyPaymentChange }
                  value={ monthlyPayment }
                  InputProps={ {
                    className: classes.textFieldStyle,
                    inputProps: {
                      className: classes.textFieldInputStyle
                    }
                  } }
                />
                <PaymentButtons component={ AddIcon }/>
              </Box>
            </TableItem>
            <TableItem textAlign="center">
              <Typography className={classes.tableItemText} variant="h6" mb={ 1 }> HOME ESTIMATE </Typography>
              <Typography variant="h5" fontWeight="bold"> $322,850</Typography>
            </TableItem>
            <TableItem textAlign="center">
              <Typography className={classes.tableItemText} variant="h6" mb={ 1 }> MONEY NEEDED </Typography>
              <Typography variant="h5" fontWeight="bold"> $19,400</Typography>
            </TableItem>
            <TableItem textAlign="center">
              <Typography className={classes.tableItemText} variant="h6" mb={ 1 }> CASH REBATE ESTIMATE </Typography>
              <Typography variant="h5" fontWeight="bold"> $1,200</Typography>
            </TableItem>
          </Grid>
        </Grid>

        <Grid container direction="column" width={ '40%' }>
          <Grid container direction="column" justifyContent="center" mb={ 2 }>
            <Typography sx={ { minHeight: '62px' } } variant="h6" textAlign="center">
              YOUR HOME QUALIFICATION ODDS
            </Typography>
          </Grid>
          <Img src={ pie } alt="pie"/>
          <Grid container direction="column">
            <TableItem className={ classes.tableItem } textAlign="center">
              <Img className={ classes.imgStyle } src={ pie } alt="pie"/>
              <Typography className={classes.tableItemDiagramText} variant="h6" mb={ 1 }> Debt-to-Income Ration </Typography>
            </TableItem>
            <TableItem className={ classes.tableItem } textAlign="center">
              <Img className={ classes.imgStyle } src={ pie } alt="pie"/>
              <Typography className={classes.tableItemDiagramText} variant="h6" mb={ 1 }> Available Funds </Typography>
            </TableItem>
            <TableItem className={ classes.tableItem } textAlign="center">
              <Img className={ classes.imgStyle } src={ pie } alt="pie"/>
              <Typography className={classes.tableItemDiagramText} variant="h6" mb={ 1 }> Credit Score </Typography>
            </TableItem>
          </Grid>
        </Grid>
      </Grid>
      <Typography sx={ { minHeight: '62px', marginTop: '15px' } } variant="h6" textAlign="center">
        Your qualification odds and home affordability calculator are an estimate
        of what you could afford and are provided as help-self tools for illustrative
        purposes only and are not guaranteed as to their applicability or
        accurancy in regard to your individual circumstances.
      </Typography>
    </>
  )
}
