import { basicData } from '../shared'
import React, { FC } from 'react'
import { Wrapper }                                           from '../../Wrapper'
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'

interface ICreateCheckBoxQuestion extends basicData {
  answers?: { text: string, value: string }[] | undefined
  formName?: string
}

export const CreateCheckBoxQuestion: FC<ICreateCheckBoxQuestion> = ({
  question,
  answers,
  setCurrentQuestionHandler, next,
  description,
  formik,
  formName,
  current,
  setSchema,
}) => {

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             current={ current }
             setSchema={ setSchema }>

      <FormGroup onChange={ formik.handleChange } sx={ { paddingLeft: '10vw' } }>
        { answers && answers.map((item: any, index: number) => (
          <FormControlLabel control={ <Checkbox/> }
                            label={ <Typography variant="h6"> { item.text } </Typography> }
                            name={ formName }
                            key={ index }
                            value={ item.value }
                            color="primary"
                            sx={ { margin: '1vh 0', width: '80vw' } }/>)) }
      </FormGroup>

    </Wrapper>
  )
}