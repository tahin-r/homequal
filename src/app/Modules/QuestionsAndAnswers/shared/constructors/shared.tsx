import { Grid, Radio, TextField, Typography }                                  from '@mui/material'
import React, { CSSProperties, FC, memo, SyntheticEvent, useEffect, useState } from 'react'
import { FormikValues }                                                        from 'formik/dist/types'
import { FormikProps }                                         from 'formik'
import { IWrapper }                                            from '../Wrapper'
import makeStyles from '@material-ui/core/styles/makeStyles'

export interface basicData {
  formik: FormikProps<any>
  wrapperProps: IWrapper
}

interface IInputField {
  formik: FormikValues
  item: { text: string, value: string }
  index?: number
  mainstyles?: CSSProperties
  labelText?: string
}



export const InputField: FC<IInputField> = memo(({ formik, item, index, mainstyles, labelText }) => {
  const styles = makeStyles(theme => ({
    notchedOutline: {
      borderColor: '#ccc !important'
    }
  }))

  const classes = styles()

  return (
    <TextField autoFocus={ index === 0 }
               variant="outlined"
               onChange={ formik.handleChange }
               color="primary"
               onBlur={ formik.handleBlur }
               value={ formik.values[item.value] }
               name={ item.value }
               autoComplete='no'
               InputProps={ {
                 style: { fontSize: '1.4rem', fontWeight: 'bold' },
                 classes: {
                   notchedOutline: classes.notchedOutline,
                 },
               } }
               InputLabelProps={ { sx: { '&.MuiInputLabel-shrink': { marginTop: '-10px', zIndex: 1 } } } }
               sx={ {
                 minWidth: '100px', maxWidth: '400px', paddingRight: '10vw', margin: '10px 0 5px 0', ...mainstyles,
               } }
               error={ formik.touched[item.value] && Boolean(formik.errors[item.value]) }
               helperText={ formik.touched[item.value] &&
                   <Typography component="span"
                               color="primary"
                               sx={ { fontSize: '1rem' } }>{ formik.errors[item.value] }
                   </Typography> }
               label={
                 <Typography variant="h6" color="black" sx={ { fontStyle: 'italic', fontWeight: 'regular' } }>
                   { labelText ? labelText : item.text }
                 </Typography> }
    />
  )
})

interface IRadioField {
  formik: FormikValues
  index?: number
  formName: string
  itemText?: string
  answers: { text: string, value: string }[]
  nomarginLeft?: boolean
}

export const RadioField: FC<IRadioField> = memo(({ formik, formName, nomarginLeft, answers }) => {
  const [value, setValue] = useState<string>(answers[0].value)
  const handleCurrentAnswer = (event: SyntheticEvent, checked: boolean, item: string) => {
    setValue(item)
    formik.handleChange(event, checked)
  }
  useEffect(() => {
    formik.setFieldValue(formName, answers[0].value)
    setValue(answers[0].value)
  }, [formName])

  return (
    <Grid container direction="column" sx={ { marginLeft: nomarginLeft ? '0' : '10vw' } }>
      { answers.map((item, index) => (
        <Grid container key={ index } sx={ { margin: '5px 0' } }>
          <Radio checked={ value === item.value }
                 id={ item.text + index }
                 onChange={ (event, checked) => handleCurrentAnswer(event, checked, item.value) }
                 value={ item.value }
                 name={ formName }
                 sx={ { transform: 'scale(1.3)' } }/>

          <label htmlFor={ item.text + index }>
            <Typography variant="h6">{ item.text }</Typography>
          </label>
        </Grid>
      )) }
    </Grid>
  )
})

