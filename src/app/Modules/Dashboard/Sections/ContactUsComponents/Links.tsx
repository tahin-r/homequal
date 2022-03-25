import React                  from 'react';
import { Grid, Typography }   from '@mui/material';
import styled                 from 'styled-components';
import { CenteredTypography } from '../../../../../shared/styles/strings';

const CenteredItemTypography = styled(CenteredTypography)`
  margin-bottom : 10px;
  font-weight   : bold;
`

interface ILinks {
  name: string
  items: Array<string>
}

const links: Array<ILinks> = [
  {
    name : 'Resources',
    items: [ 'FAQs', 'Homebuyer Library' ]
  },
  {
    name : 'Services',
    items: [ 'Real Estate', 'Lending' ]
  },
  {
    name : 'Company',
    items: [ 'About Us', 'Careers', 'Partner With Us' ]
  },
  {
    name : 'Legal',
    items: [ 'Privacy Policy', 'Terms of Use' ]
  },
]

export const Links = () => {
  return (
    <Grid
      container
      sx={ { maxWidth: '500px' } }
    >

      { links.map((item, index) => (
        <Grid
          item
          xs={ 6 }
          key={ index }
        >
          <CenteredItemTypography>
            { item.name }
          </CenteredItemTypography>
          { item.items.map((itemLink, index) => (
            <Typography
              key={ index }
              sx={ { marginBottom: '5px', textAlign: 'center' } }
            >{ itemLink }</Typography>
          )) }
        </Grid>
      )) }
    </Grid>
  )
}

