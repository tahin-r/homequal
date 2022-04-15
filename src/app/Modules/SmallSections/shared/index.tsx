import { Grid, Typography } from '@mui/material'
import doneArrow            from '../../../../assets/images/doneArrow.svg'
import React                from 'react'

export const SectionList = ({list}:{list:string[]})=> {
  return (
    <Grid container direction="column" width="auto">
      { list.map((item, index) => (
        <Grid alignItems="center" container key={ index } wrap="nowrap" my={ '5px'}>
          <img src={ doneArrow } alt="arrow" width="35px" height="35px"/>
          <Typography variant="h6">{ item }</Typography>
        </Grid>),
      ) }
    </Grid>
  )
}