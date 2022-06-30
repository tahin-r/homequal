import React from 'react'
import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import makeStyles from '@material-ui/core/styles/makeStyles'

interface IDesignHomeBlockVariant {
  label: string;
  name: string;
  value: string;
}

interface IDesignHomeBlock {
  label: string;
  variants: IDesignHomeBlockVariant[];
}

const useStyles = makeStyles({
  label: {
    position: 'absolute',
    fontSize: '14px',
    top: '-7px',
    left: '40px',
    background: '#fff',
    padding: '0 8px',
    color: '#999'
  },
  radioGroup: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  radioLabel: {
    width: '40%'
  }
})

export const DesignHomeBlock = (props: IDesignHomeBlock) => {
  const { label, variants } = props
  const classes = useStyles()

  return (
    <>
      <Box
        sx={ {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#fff',
          position: 'relative',
          padding: '25px 80px',
          border: '1px solid rgb(237,31,138)',
          borderRadius: '5px',
          marginBottom: '40px'
        } }
        color='primary'
      >
        <span className={ classes.label }>{ label }</span>
        <RadioGroup
          className={ classes.radioGroup }
          name='getLender-buttons-group'
        >
          {
            variants.map((variant) => {
              return <FormControlLabel control={ <Radio id='getLenderN'sx={ { transform: 'scale(1.3)' } }/> }
               label={
                 <Typography
                   fontSize='21px'
                   fontWeight='bold'
                   sx={ {
                     ['@media screen and (max-width: 500px)']: {
                       fontSize: '18px'
                     }
                   } }
                 >
                   { variant.label }
                 </Typography>
                 }
                 name={ variant.name }
                 value={ variant.value }
                 color="primary"
                 sx={ { margin: '1vh 0', minWidth: '50px', fontSize: '17px' } }
                 className={ classes.radioLabel }
                />
            })
          }
        </RadioGroup>
      </Box>
    </>
  )
}
