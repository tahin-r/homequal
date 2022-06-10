import React from 'react'
import { Grid } from '@mui/material'
import { ResourcesDashboardItem } from './Components/ResourcesDashboardItem'
import { articles } from './ResourcesData'
import { Container } from '@material-ui/core'

export const ResourcesDashboard = () => {
  return (
    <Container disableGutters>
      <Grid mt={ 2 } container justifyContent="center" width={ '100%' }>
        { articles.map((item, index) => (
          <ResourcesDashboardItem { ...item } key={ index }/>
        )) }
      </Grid>
    </Container>
  )
}
