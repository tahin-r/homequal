import { basicData, InputField, RadioField } from '../shared'
import React, { FC }                         from 'react'
import { Wrapper }                           from '../../Wrapper'
import { Grid, Typography }                  from '@mui/material'
import { ICreateRadioTextQuestion }          from '../../../questions'

interface IProps extends ICreateRadioTextQuestion, basicData {
}

export const CreateRadioTextQuestion: FC<IProps> = ({
  question,
  inputs,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
  current,
  setSchema,
  co_question,
  co_inputs,
  answers,
  co_answers,
  question1,
  co_question1,
  formName,
  co_formName,
}) => {
  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             inputs={ inputs }
             current={ current }
             setSchema={ setSchema }>
      <Grid container direction="column" sx={ { paddingLeft: "10vw" } }>
        <Grid container direction="column" wrap="nowrap" sx={ { width: "auto" } }>
          { formName && <RadioField formik={ formik } formName={ formName } answers={ answers }/> }
        </Grid>

        <Typography variant="h6" sx={ { fontWeight: "bold", marginTop: "40px" } }>
          { question1(formik.values) }
        </Typography>

        { inputs.map((item, index: number) => (
          <InputField key={ index } item={ item } formik={ formik }/>
        )) }

        <Typography variant="h6" sx={ { fontWeight: "bold", marginTop: "40px" } }>
          { co_question && co_question(formik.values) }
        </Typography>

        <Grid container direction="column" wrap="nowrap" sx={ { width: "auto" } }>
          { co_formName && <RadioField formik={ formik } formName={ co_formName } answers={ co_answers }/> }
        </Grid>

        <Typography variant="h6" sx={ { fontWeight: "bold", marginTop: "40px" } }>
          { co_question1 && co_question1(formik.values) }
        </Typography>

        { co_inputs.map((item, index: number) =>
          <InputField item={ item } formik={ formik } key={ index }/>,
        ) }
      </Grid>
    </Wrapper>
  )
}
