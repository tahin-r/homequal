import { Grid, Radio, TextField, Typography }            from '@mui/material'
import React, { CSSProperties, FC, useEffect, useState } from 'react'
import { FormikValues }                                  from 'formik/dist/types'
import { QuestionKey }                                   from '../../questions'

export interface basicData {
  formik: FormikValues
  question: (state: any) => string
  elementConstructor: string
  next: QuestionKey
  setCurrentQuestionHandler: (next: QuestionKey, current: QuestionKey) => void
  description: string
  current: string
  question1?: (arg: any) => string
  setSchema: (current: QuestionKey) => void
}

interface IInputField {
  formik: FormikValues
  item: { text: string, value: string }
  index?: number
  mainstyles?: CSSProperties
  labelText?: string
}

export const InputField: FC<IInputField> = ({ formik, item, index, mainstyles, labelText }) => {
  return (
    <TextField autoFocus={ index === 0 }
               onChange={ formik.handleChange }
               variant="standard"
               color="primary"
               onBlur={ formik.handleBlur }
               value={ formik.values[item.value] }
               name={ item.value }
               InputProps={ { style: { fontSize: '1.4rem', fontWeight: 'bold' } } }
               InputLabelProps={ { sx: { '&.MuiInputLabel-shrink': { marginTop: '-10px', zIndex: 1 } } } }
               sx={ { minWidth: '100px', maxWidth: '400px', paddingRight: '10vw', margin: '10px 0 5px 0', ...mainstyles } }
               error={ formik.touched[item.value] && Boolean(formik.errors[item.value]) }
               helperText={ formik.touched[item.value] &&
                   <Typography component="span"
                               color="primary"
                               sx={ { fontSize: '1rem' } }>{ formik.errors[item.value] }
                   </Typography> }
               label={
                 <Typography variant="h6" color="black" sx={ { fontStyle: 'italic', fontWeight: 'regular' } }>
                   { labelText ? labelText : item.text }
                 </Typography> }/>
  )
}

interface IRadioField {
  formik: FormikValues
  index?: number
  formName: string
  itemText?: string
  answers?: { text: string, value: string }[]
  nomarginLeft?: boolean
}

export const RadioField: FC<IRadioField> = ({ formik, formName, nomarginLeft, answers }) => {
  const [val, setVal] = useState<any>(answers && answers[0].value)
  const handleCurrentAnswer = (event: any, checked: any, item: any) => {
    setVal(item)
    formik.handleChange(event, checked)
  }
  useEffect(() => {
    formik.setFieldValue(formName, answers && answers[0].value)
    setVal(answers && answers[0].value)
  }, [formName])


  return (
    <Grid container direction="column" sx={ { marginLeft: nomarginLeft ? '0' : '10vw' } }>
      { answers && answers.map((item, index) => (
        <Grid container key={ index } sx={ { margin: '5px 0' } }>
          <Radio checked={ val === item.value }
                 id={ item.text + index }
                 onChange={ (event, checked) => handleCurrentAnswer(event, checked, item.value) }
                 value={ item.value }
                 name={ formName }
                 sx={{transform:'scale(1.3)'}}/>

          <label htmlFor={ item.text + index }>
            <Typography variant="h6">{ item.text }</Typography>
          </label>


        </Grid>
      )) }
    </Grid>
  )
}