import React                from 'react'
import { Grid, Typography } from '@mui/material'
import { useNavigate }      from 'react-router-dom'

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
        link: '/resources',
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
    <Grid container my={ 3 } sx={ { maxWidth: '500px' } }>
      { links.map((item, index) => (
        <Grid item xs={ 6 } key={ index }>
          <Typography variant="h5" textAlign="center" mb={ 1 } mt={ 3 }>
            { item.name }
          </Typography>
          { item.items.map((itemLink, index) => (
            <Grid container justifyContent="center" key={ index }>
              <Typography variant="h6"
                          mb={ 1 }
                          textAlign="center"
                          onClick={ () => navigate(itemLink.link) }
                          sx={ { cursor: 'pointer', width: 'auto' } }>
                { itemLink.text }
              </Typography>
            </Grid>)) }
        </Grid>
      )) }
    </Grid>
  )
}

