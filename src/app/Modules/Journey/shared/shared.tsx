import { TextField, Typography } from '@mui/material'
import React, { FC }             from 'react'
import { FormikValues }          from 'formik/dist/types'

interface IInputField {
  formik: FormikValues
  item: { text: string, value: string }
  index?: number
}

export const InputField: FC<IInputField> = ({ formik, item, index }) => {
  return (
    <TextField autoFocus={ index === 0 }
               onChange={ formik.handleChange }
               variant="standard"
               color="primary"
               onBlur={ formik.handleBlur }
               value={ formik.values[item.value] }
               name={ item.value }
               InputProps={ { style: { fontSize: 20, fontWeight: 'bold', width: '100%' } } }
               sx={ { minWidth: '100px', maxWidth: '200px', width: 'auto' } }
               error={ formik.touched[item.value] && Boolean(formik.errors[item.value]) }
               helperText={ formik.touched[item.value] &&
                   <Typography component="span"
                               color="primary"
                               sx={ { fontSize: '14px' } }>{ formik.errors[item.value] }
                   </Typography> }
               label={
                 <Typography variant="h6"
                             color="black"
                             sx={ { fontStyle: 'italic', fontSize: '14px', width: '200px' } }>
                   { item.text }
                 </Typography> }/>
  )
}