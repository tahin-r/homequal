import { basicData, RadioField }      from '../shared'
import React, { FC, memo, useEffect } from 'react'
import { Wrapper }                    from '../../Wrapper'
import { Typography }                 from '@mui/material'
import { ICreateVeteranQuestion }     from '../../../questions'

interface IProps extends ICreateVeteranQuestion, basicData {
}
export const CreateVeteranQuestion: FC<IProps> = memo(({
  answers,
  formik,
  formName,
  co_formName,
  co_answers,
  co_question,
  wrapperProps,
}) => {
  useEffect(
    () => formik.setFieldValue(formName, answers[0].value),
    [formName, answers],
  )

  return (
    <>
      <Wrapper { ...wrapperProps }>

        <RadioField formik={ formik } formName={ formName } answers={ answers }/>

        <Typography variant="h6" pl={ '10vw' } sx={ { fontWeight: "bold", marginTop: "40px" } }>
          { co_question(formik.values) }
        </Typography>

        <RadioField formik={ formik } formName={ co_formName } answers={ co_answers }/>
      </Wrapper>
    </>
  )
})