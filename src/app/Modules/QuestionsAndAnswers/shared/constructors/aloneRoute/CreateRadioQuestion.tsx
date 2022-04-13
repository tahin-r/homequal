import React, { FC, useEffect }  from 'react'
import { Wrapper }               from '../../Wrapper'
import { basicData, RadioField } from '../shared'

interface ICreateRadioQuestion extends basicData {
  answers?: { text: string, value: string }[] | undefined
  formName?: string
}


export const CreateRadioQuestion: FC<ICreateRadioQuestion> = ({
  answers,
  setCurrentQuestionHandler,
  next,
  question,
  description,
  formik,
  formName,
  current,
  setSchema,
}) => {

  useEffect(() => formik.setFieldValue(formName, answers && answers[0].value), [formName])

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

        { formName && formik.values[formName] &&
            <RadioField formik={ formik } formName={ formName } answers={ answers }/> }
      </Wrapper>
    </>
  )
}