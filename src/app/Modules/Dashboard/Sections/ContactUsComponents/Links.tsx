import React                  from 'react'
import { Grid, Typography }   from '@mui/material'
import styled                 from 'styled-components'
import { CenteredTypography } from '../../../../../shared/styles/strings'
import { useNavigate }        from 'react-router-dom'

const CenteredItemTypography = styled(CenteredTypography)`
  margin-bottom : 10px;
  font-weight   : bold;
`

interface ILinks {
  name: string
  items: { text: string, link: string }[]
}

const links: Array<ILinks> = [
  {
    name : 'Resources',
    items: [
      {
        text: 'FAQs',
        link: '/FAQs',
      },
      {
        text: 'Homebuyer Library',
        link: '/homebuyer_library',
      },
    ],
  },
  {
    name : 'Services',
    items: [
      {
        text: 'Real Estate',
        link: '/real_estate',
      },
      {
        text: 'Lending',
        link: '/lending',
      }],
  },
  {
    name : 'Company',
    items: [
      {
        text: 'About Us',
        link: '/about_us',
      },
      {
        text: 'Careers',
        link: '/careers',
      },
      {
        text: 'Partner With Us',
        link: '/partner_with_us',
      },
    ],
  },
  {
    name : 'Legal',
    items: [
      {
        text: 'Privacy Policy',
        link: '/privacy_policy',
      },
      {
        text: 'Terms of Use',
        link: '/terms_of_Use',
      },
    ],
  },
]

export const Links = () => {

  const navigate = useNavigate()

  return (
    <Grid container sx={ { maxWidth: '500px' } }>

      { links.map((item, index) => (
        <Grid item xs={ 6 } key={ index }>
          <CenteredItemTypography>
            { item.name }
          </CenteredItemTypography>
          { item.items.map((itemLink, index) => (
            <Typography key={ index }
                        onClick={ () => navigate(itemLink.link) }
                        sx={ { marginBottom: '5px', textAlign: 'center' } }>{ itemLink.text }</Typography>
          )) }
        </Grid>
      )) }
    </Grid>
  )
}

