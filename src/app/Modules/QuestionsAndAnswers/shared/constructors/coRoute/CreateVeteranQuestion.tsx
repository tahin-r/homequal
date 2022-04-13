import { basicData, RadioField }  from '../shared'
import React, { FC, useEffect }   from 'react'
import { Wrapper }                from '../../Wrapper'
import { Typography }             from '@mui/material'
import { ICreateVeteranQuestion } from '../../../questions'

interface IProps extends ICreateVeteranQuestion, basicData {
}

export const CreateVeteranQuestion: FC<IProps> = ({
  answers,
  setCurrentQuestionHandler,
  next,
  question,
  description,
  formik,
  formName,
  current,
  setSchema,
  co_formName,
  co_answers,
  co_question,
}) => {
  useEffect(
    () => formik.setFieldValue(formName, answers && answers[0].value),
    [formName, answers],
  )

  return (
    <>
      <Wrapper next={ next }
               setCurrentQuestionHandler={ setCurrentQuestionHandler }
               description={ description }
               question={ question }
               formik={ formik }
               formName={ formName }
               setSchema={ setSchema }
               current={ current }>

        <RadioField formik={ formik } formName={ formName } answers={ answers }/>

        <Typography variant="h6" pl={ '10vw' } sx={ { fontWeight: "bold", marginTop: "40px" } }>
          { co_question(formik.values) }
        </Typography>

        <RadioField formik={ formik } formName={ co_formName } answers={ co_answers }/>
      </Wrapper>
    </>
  )
}