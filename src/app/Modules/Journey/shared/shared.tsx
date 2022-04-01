import { TextField, Typography } from '@mui/material';
import React, { FC }             from 'react';
import { FormikValues }          from 'formik/dist/types';

interface IInputField {
  formik: FormikValues
  item: { text: string, value: string }
}

export const InputField: FC<IInputField> = ({ formik, item }) => {
  return (
    <TextField
      onChange={ formik.handleChange }
      variant="standard"
      color="primary"
      onBlur={ formik.handleBlur }
      value={ formik.values[item.value] }
      name={ item.value }
      InputProps={ { style: { fontSize: 20, fontWeight: 'bold',width:'100%' } } }
      sx={ { margin: '2vh 0', maxHeight: '5vh', minWidth: '200px',maxWidth:'300px' } }
      error={ formik.touched[item.value] && Boolean(formik.errors[item.value]) }
      helperText={ formik.touched[item.value] &&
        <Typography
          component="span"
          color="primary"
          sx={ { fontSize: '14px' } }
        >{ formik.errors[item.value] }
        </Typography> }
      label={
        <Typography
          variant="h6"
          color="black"
          sx={ { fontStyle: 'italic', fontSize: '14px', width: '100vw' } }
        >
          { item.text }
        </Typography> }
    />
  )
}