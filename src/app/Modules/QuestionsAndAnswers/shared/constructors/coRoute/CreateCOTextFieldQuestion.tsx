import React, { FC }                  from 'react'
import { Grid, Typography }           from '@mui/material'
import { basicData, InputField }      from '../shared'
import { Wrapper }                    from '../../Wrapper'
import { ICreateCOTextFieldQuestion } from '../../../questions'

interface IProps extends ICreateCOTextFieldQuestion, basicData {
}

export const CreateCOTextFieldQuestion: FC<IProps> = ({
  question,
  inputs,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
  current,
  setSchema,
  coQuestion,
  coInputs,
}) => {

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             inputs={ inputs }
             current={ current }
             setSchema={ setSchema }
             coQuestion={ coQuestion }
             coInputs={ coInputs }>
      <Grid container direction="column" sx={ { paddingLeft: "10vw" } }>
        { inputs &&
          inputs.map((item, index: number) => (
            <InputField key={ index } item={ item } formik={ formik }/>
          )) }

        { coQuestion && (
          <Typography variant="h5" sx={ { fontWeight: "bold", marginY: "20px" } }>
            { coQuestion(formik.values) }
          </Typography>
        ) }

        { coInputs &&
          coInputs.map((item, index: number) => (
            <InputField item={ item } formik={ formik } key={ index }/>
          )) }
      </Grid>
    </Wrapper>
  )
}