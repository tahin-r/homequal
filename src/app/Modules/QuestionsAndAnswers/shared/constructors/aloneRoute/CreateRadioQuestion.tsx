import React, { FC, memo, useEffect } from 'react'
import { Wrapper } from '../../Wrapper'
import { basicData, RadioField } from '../shared'
import { ICreateRadio_CheckBox_Question } from '../../../questions'

interface IProps extends ICreateRadio_CheckBox_Question, basicData {
}

export const CreateRadioQuestion: FC<IProps> = memo(({
  answers,
  formik,
  formName,
  wrapperProps
}) => {
  useEffect(() => formik.setFieldValue(formName, answers && answers[0].value), [formName])

  return (
    <>
      <Wrapper { ...wrapperProps }>
        <RadioField formik={ formik } formName={ formName } answers={ answers }/>
      </Wrapper>
    </>
  )
})
