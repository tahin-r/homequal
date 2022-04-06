import { FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { FC }                                                  from 'react'
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
               sx={ { minWidth: '100px', maxWidth: '250px', width: 'auto' } }
               error={ formik.touched[item.value] && Boolean(formik.errors[item.value]) }
               helperText={ formik.touched[item.value] &&
                   <Typography variant='h5'
                               color="primary"
                               sx={ { fontSize: '14px' } }>{ formik.errors[item.value] }
                   </Typography> }
               label={
                 <Typography variant="h6"
                             color="black"
                             sx={ { fontStyle: 'italic',fontWeight:'regular',fontSize:'18px' } }>
                   { item.text }
                 </Typography> }/>
  )
}

interface IRadioField {
  formik: FormikValues
  index?: number
  formName:string
  itemText?:string
  answers:{ text: string, value: string }[] | undefined
  nomarginLeft?:boolean

}

export const RadioField: FC<IRadioField> = ({ formik,formName,nomarginLeft, itemText, index,answers }) => {
  return (
    <RadioGroup name={ formName }
                onBlur={ formik.handleBlur }
                onChange={ formik.handleChange }
                defaultValue={ answers && answers[0].value }
                sx={ {marginLeft:nomarginLeft?0:'10vw'} }>

      { answers && answers.map((item, index) =>
        <FormControlLabel onChange={ formik.handleChange }
                          value={ item.value }
                          name={ formName }
                          key={ index }
                          control={ <Radio/> }
                          sx={ { maxHeight: '6vh' } }
                          label={ itemText? itemText : <Typography variant="h6"> { item.text } </Typography> }/>,
      ) }
    </RadioGroup>
  )
}