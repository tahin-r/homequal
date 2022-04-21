import React, { useState }                           from 'react'
import styled                                        from 'styled-components'
import { Box, Grid, SvgIcon, TextField, Typography } from '@mui/material'
import pie                                           from './../../../../assets/images/SuccesPlan/pie.png'
import RemoveIcon                                    from '@mui/icons-material/Remove'
import AddIcon                                       from '@mui/icons-material/Add'


const PaymentButtons = styled(({ ...props }) => <SvgIcon { ...props }/>)`
  width            : 5vw;
  height           : 5vw;
  min-height       : 25px;
  min-width        : 25px;
  max-height       : 50px;
  max-width        : 50px;
  fill             : dodgerblue;
  background-color : yellow;
  background-image : url(${ (props: any) => props.hello });
  border-radius    : 50%;
  font-size        : 50px;
`
const Img = styled.img`
  max-width : 90vw;
  min-width : 250px;
  width     : 45vw
`
const TableItem = styled(Box)`
  position        : relative;
  border          : ${ props => `1px solid ${ props.theme.colors.primary }` };
  border-top      : 0;
  padding         : 20px 40px;
  border-collapse : collapse;

  &:first-child {
    border-top : ${ props => `1px solid ${ props.theme.colors.primary }` };
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

  return (
    <Grid container overflow={ 'hidden' } px={ '2vw' }>
      <Grid container direction="column" justifyContent="center" mb={ 2 }>
        <Typography variant="h6" textAlign="center">
          YOUR QUALIFICATION ODDS
        </Typography>
      </Grid>

      <Grid container direction="column" width={ 'auto' }>
        <Img src={ pie } alt="pie"/>
        <Grid container direction="column">
          <TableItem>
            <PaymentButtons component={ RemoveIcon }/>
            <TextField variant="standard" onChange={ handleMonthlyPaymentChange } value={ monthlyPayment }/>
            <PaymentButtons component={ AddIcon }/>
          </TableItem>
          <TableItem textAlign="center">
            <Typography variant="h6" mb={ 1 }> Monthly Payment</Typography>
            <Typography variant="h5" fontWeight="bold"> $322,850</Typography>
          </TableItem>
          <TableItem textAlign="center">
            <Typography variant="h6" mb={ 1 }> Monthly Payment</Typography>
            <Typography variant="h5" fontWeight="bold"> $322,850</Typography>
          </TableItem>
        </Grid>
      </Grid>

    </Grid>
  )
}