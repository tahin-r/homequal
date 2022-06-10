import { basicData, InputNumberField, RadioField } from '../shared'
import React, { FC, memo } from 'react'
import { Wrapper } from '../../Wrapper'
import { Grid, Typography } from '@mui/material'
import { ICreateRadioTextQuestion } from '../../../questions'

interface IProps extends ICreateRadioTextQuestion, basicData {
}

export const CreateRadioTextQuestion: FC<IProps> = memo(({

  inputs,
  formik,
  co_question,
  co_inputs,
  answers,
  co_answers,
  question1,
  co_question1,
  formName,
  co_formName,
  wrapperProps
}) => {
  return (
    <Wrapper { ...wrapperProps }>
      <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>
        <Grid container direction="column" wrap="nowrap" sx={ { width: 'auto' } }>
          <RadioField formik={ formik } formName={ formName } answers={ answers }/>
        </Grid>

        <Typography variant="h6" sx={ { fontWeight: 'bold', marginTop: '40px' } }>
          { question1(formik.values) }
        </Typography>

        { inputs.map((item, index: number) => (
          <InputNumberField key={ index } item={ item } formik={ formik }/>
        )) }

        <Typography variant="h6" sx={ { fontWeight: 'bold', marginTop: '40px' } }>
          { co_question(formik.values) }
        </Typography>

        <Grid container direction="column" wrap="nowrap" sx={ { width: 'auto' } }>
          <RadioField formik={ formik } formName={ co_formName } answers={ co_answers }/>
        </Grid>

        <Typography variant="h6" sx={ { fontWeight: 'bold', marginTop: '40px' } }>
          { co_question1(formik.values) }
        </Typography>

        { co_inputs.map((item, index: number) =>
          <InputNumberField item={ item } formik={ formik } key={ index }/>
        ) }
      </Grid>
    </Wrapper>
  )
})
