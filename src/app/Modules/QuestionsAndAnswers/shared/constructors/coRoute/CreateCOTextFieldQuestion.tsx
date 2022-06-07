import React, { FC, memo }            from 'react'
import { Grid, Typography }           from '@mui/material'
import { basicData, InputNumberField }      from '../shared'
import { Wrapper }                    from '../../Wrapper'
import { ICreateCOTextFieldQuestion } from '../../../questions'

interface IProps extends ICreateCOTextFieldQuestion, basicData {
}

export const CreateCOTextFieldQuestion: FC<IProps> = memo(({
  inputs,
  formik,
  coQuestion,
  coInputs,
  wrapperProps,
}) => {

  return (
    <Wrapper { ...wrapperProps }>
      <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>
        { inputs.map((item, index: number) => (
          <InputNumberField key={ index } item={ item } formik={ formik }/>
        )) }

        <Typography variant="h5" sx={ { fontWeight: 'bold', marginY: '20px' } }>
          { coQuestion(formik.values) }
        </Typography>

        { coInputs.map((item, index: number) => (
          <InputNumberField item={ item } formik={ formik } key={ index }/>
        )) }
      </Grid>
    </Wrapper>
  )
})