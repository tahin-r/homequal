import React                  from 'react';
import { CenteredTypography } from '../../../../../shared/styles/strings';
import { Typography }         from '@mui/material';

interface IContacts {
  name: string
  email: string
}

const contacts: Array<IContacts> = [
  {
    name : 'General Information',
    email: 'info@homequal.com'
  },
  {
    name : 'Media',
    email: 'media@homequal.com'
  },
  {
    name : 'Tech Support',
    email: 'support@homequal.com'
  },
  {
    name : 'Partners',
    email: 'partners@homequal.com'
  },
  {
    name : 'Members',
    email: 'members@homequal.com'
  }
]

export const EmailInfo = () => {
  return (
    <>
      {
        contacts.map((item, index) => (
          <CenteredTypography key={ index }>
            <Typography
              sx={ { fontWeight: 'bold' } }
              component="span"
            >{ item.name }</Typography>
            <Typography component="span">: { item.email }</Typography>
          </CenteredTypography>
        ))
      }
    </>
  )
}


