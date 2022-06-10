import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  contactUsFontSize: {
    fontSize: '1.3rem'
  },
  contactUsTitleFontSize: {
    fontSize: '1.6rem'
  }
})

interface ILinks {
  name: string
  items: { text: string, link: string }[]
}

const links: Array<ILinks> = [
  {
    name: 'Resources',
    items: [
      {
        text: 'FAQs',
        link: '/FAQs'
      },
      {
        text: 'Homebuyer Library',
        link: '/resources'
      }
    ]
  },
  {
    name: 'Services',
    items: [
      {
        text: 'Real Estate',
        link: '/real_estate'
      },
      {
        text: 'Lending',
        link: '/lending'
      }]
  },
  {
    name: 'Company',
    items: [
      {
        text: 'About Us',
        link: '/about_us'
      },
      {
        text: 'Careers',
        link: '/careers'
      },
      {
        text: 'Partner With Us',
        link: '/partner_with_us'
      }
    ]
  },
  {
    name: 'Legal',
    items: [
      {
        text: 'Privacy Policy',
        link: '/privacy_policy'
      },
      {
        text: 'Terms of Use',
        link: '/terms_of_Use'
      }
    ]
  }
]

export const Links = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  return (
    <Grid container my={ 3 } sx={ { maxWidth: '500px' } }>
      { links.map((item, index) => (
        <Grid item xs={ 6 } key={ index }>
          <Typography className={classes.contactUsTitleFontSize} variant="h5" textAlign="center" mb={ 1 } mt={ 3 }>
            { item.name }
          </Typography>
          { item.items.map((itemLink, index) => (
            <Grid container justifyContent="center" key={ index }>
              <Typography
                className={classes.contactUsFontSize}
                variant="h6"
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
