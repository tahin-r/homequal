import React                from 'react'
import { Grid, Typography } from '@mui/material'

interface IContacts {
  name: string
  email: string
}

const contacts: Array<IContacts> = [
  {
    name : 'General Information',
    email: 'info@homequal.com',
  },
  {
    name : 'Media',
    email: 'media@homequal.com',
  },
  {
    name : 'Tech Support',
    email: 'support@homequal.com',
  },
  {
    name : 'Partners',
    email: 'partners@homequal.com',
  },
  {
    name : 'Members',
    email: 'members@homequal.com',
  },
]

export const EmailInfo = () => {
  return (
    <>
      {
        contacts.map((item, index) => (
          <Grid textAlign="center" mb={ 1 } key={ index }>
            <Typography variant="h6" component="span" fontWeight={'bold'}>{ item.name }</Typography>
            <Typography variant="h6" component="span">: { item.email }</Typography>
          </Grid>
        ))
      }
    </>
  )
}


