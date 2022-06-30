import React from 'react'
import { Box, Typography, TextareaAutosize } from '@mui/material'
import styled from 'styled-components'
import designHome from '../../../../../assets/images/SuccessPlan/design.jpg'
import { DesignHomeBlock } from './DesignHomeBlock'
import makeStyles from '@material-ui/core/styles/makeStyles'

const Img = styled.img`
  width     : 100%;
  margin-bottom: 60px;
  max-height: 450px;
`

const useStyles = makeStyles({
  label: {
    position: 'absolute',
    fontSize: '14px',
    top: '-7px',
    left: '40px',
    background: '#fff',
    padding: '0 8px',
    color: '#999'
  }
})

export const DesignHome = () => {
  const classes = useStyles()
  const designHomeQuestions = [
    {
      label: 'Property Type',
      variants: [
        {
          label: 'Any',
          name: 'property_type',
          value: 'any'
        },
        {
          label: 'Condo',
          name: 'property_type',
          value: 'condo'
        },
        {
          label: 'Single Family House',
          name: 'property_type',
          value: 'single_family_house'
        },
        {
          label: 'Townhome',
          name: 'property_type',
          value: 'townhome'
        }
      ]
    },
    {
      label: 'Type of Home',
      variants: [
        {
          label: 'Any',
          name: 'type_of_home',
          value: 'any'
        },
        {
          label: 'Existing Home',
          name: 'type_of_home',
          value: 'existing_home'
        },
        {
          label: 'New Construction',
          name: 'type_of_home',
          value: 'new_construction'
        }
      ]
    },
    {
      label: 'Stories',
      variants: [
        {
          label: 'Any',
          name: 'stories',
          value: 'any'
        },
        {
          label: 'Single',
          name: 'stories',
          value: 'single'
        },
        {
          label: 'Multy',
          name: 'stories',
          value: 'multy'
        }
      ]
    },
    {
      label: 'Bedrooms',
      variants: [
        {
          label: 'Any',
          name: 'bedrooms',
          value: 'any'
        },
        {
          label: '3+',
          name: 'bedrooms',
          value: '3'
        },
        {
          label: '1+',
          name: 'bedrooms',
          value: '1'
        },
        {
          label: '4+',
          name: 'bedrooms',
          value: '4'
        },
        {
          label: '2+',
          name: 'bedrooms',
          value: '2'
        },
        {
          label: '5+',
          name: 'bedrooms',
          value: '5'
        }
      ]
    },
    {
      label: 'Bathrooms',
      variants: [
        {
          label: 'Any',
          name: 'bathrooms',
          value: 'any'
        },
        {
          label: '2+',
          name: 'bathrooms',
          value: '2'
        },
        {
          label: '1+',
          name: 'bathrooms',
          value: '1'
        },
        {
          label: '3+',
          name: 'bathrooms',
          value: '3'
        },
        {
          label: '1 & 1/2 +',
          name: 'bathrooms',
          value: '3/2'
        },
        {
          label: '4+',
          name: 'bathrooms',
          value: '4'
        }
      ]
    },
    {
      label: 'Inside Features',
      variants: [
        {
          label: 'Open Floorplan',
          name: 'inside_features',
          value: 'open_floorplan'
        },
        {
          label: 'Hardwood Floors',
          name: 'inside_features',
          value: 'hardwood_floors'
        },
        {
          label: 'Dining room',
          name: 'inside_features',
          value: 'dining_room'
        },
        {
          label: 'Fireplace',
          name: 'inside_features',
          value: 'fireplace'
        },
        {
          label: 'Family Room',
          name: 'inside_features',
          value: 'family_room'
        },
        {
          label: 'Energy Efficient',
          name: 'inside_features',
          value: 'energy_efficient'
        },
        {
          label: 'Office',
          name: 'inside_features',
          value: 'office'
        },
        {
          label: 'Disability Features',
          name: 'inside_features',
          value: 'disability_features'
        },
        {
          label: 'Basement',
          name: 'inside_features',
          value: 'basement'
        }
      ]
    },
    {
      label: 'Outside Features',
      variants: [
        {
          label: 'Deck',
          name: 'outside_features',
          value: 'deck'
        },
        {
          label: 'Spa / Hot Tab',
          name: 'outside_features',
          value: 'spa_hot_tab'
        },
        {
          label: 'Patio',
          name: 'outside_features',
          value: 'patio'
        },
        {
          label: 'Large Yard',
          name: 'outside_features',
          value: 'large yard'
        },
        {
          label: 'Pool',
          name: 'outside_features',
          value: 'pool'
        },
        {
          label: 'Fenced Yard',
          name: 'outside_features',
          value: 'fenced_yard'
        }
      ]
    },
    {
      label: 'Garage',
      variants: [
        {
          label: 'Any',
          name: 'garage',
          value: 'any'
        },
        {
          label: '3+',
          name: 'garage',
          value: '3'
        },
        {
          label: '1+',
          name: 'garage',
          value: '1'
        },
        {
          label: '4+',
          name: 'garage',
          value: '4'
        },
        {
          label: '2+',
          name: 'garage',
          value: '2'
        },
        {
          label: 'None',
          name: 'garage',
          value: 'none'
        }
      ]
    }
  ]

  return (
    <>
      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'rgb(237,31,138)',
          padding: '10px 0'
        } }
        color='primary'
      >
        <Typography variant='h5' textAlign='center' color='white'>
          Design Your Dream Home
        </Typography>
      </Box>
      <Img src={ designHome }/>
      <Box
        sx={ {
          display: 'flex',
          maxWidth: '800px',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: '0 20px',
          margin: '0 auto',
          borderRadius: '3px'
        } }
        color='primary'
      >
        <Typography variant='h5' fontWeight='bold' marginBottom='25px' textAlign='center' color='#000'>
          Let's Begin Designing Your Dream Home
        </Typography>
        <Typography fontSize='18px' marginBottom='40px' textAlign='center' color='#999'>
          Select the options you'd like in your perfect home.
        </Typography>
        {
          designHomeQuestions.map((question) => {
            return <DesignHomeBlock { ...question}/>
          })
        }
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#fff',
            position: 'relative',
            padding: '25px 10px',
            border: '1px solid rgb(237,31,138)',
            borderRadius: '5px',
            marginBottom: '40px'
          } }
          color='primary'
        >
          <span className={ classes.label }>Additional Comments</span>
          <TextareaAutosize
            aria-label='empty textarea'
            style={{ width: '100%', border: 'none', minHeight: '150px' }}
          />
        </Box>
      </Box>
    </>
  )
}
