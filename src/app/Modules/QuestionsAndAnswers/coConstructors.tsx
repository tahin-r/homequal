import React, { FC, useEffect, useState }                                 from "react"
import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, Typography } from "@mui/material"
import { FormikValues }                                                   from "formik/dist/types"
import { QuestionKey }                                                    from "./questions"
import { Wrapper }                                                        from "./constructors"
import { InputField, RadioField }                                         from "./shared/shared"

interface basicData {
  formik: FormikValues
  question: (state: any) => string
  elementConstructor: string
  next: QuestionKey
  setCurrentQuestionHandler: (next: QuestionKey, current: QuestionKey) => void
  description: string
  current: string
  setSchema: (current: QuestionKey) => void
}

interface ICreateTextFieldQuestion extends basicData {
  inputs?: { text: string; value: string }[]
  coQuestion?: (state: any) => string
  coInputs?: { text: string; value: string }[]
}


export const CreateCOTextFieldQuestion: FC<ICreateTextFieldQuestion> = ({
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

export const CreateDoubledTextFieldQuestion: FC<ICreateTextFieldQuestion> = ({
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
      <Grid container direction="column" wrap="nowrap" sx={ { paddingLeft: "5vw" } }>
        <Grid container>
          <Typography variant="h6" sx={ {
            width     : "100px",
            margin    : "2vh 1vh 2vh 0",
            textAlign : "left",
            fontWeight: "bold",
          } }>
            You
          </Typography>
          <Typography variant="h6" sx={ {
            width     : "100px",
            margin    : "2vh 0",
            textAlign : "left",
            fontWeight: "bold",
          } }>
            { formik.values.co_first_name }`s
          </Typography>
        </Grid>
        { inputs &&
          inputs.map((item, index: number) => (
            <Grid key={ index } container justifyContent="flex-start" wrap="nowrap">

              <Grid sx={ { width: "auto", maxWidth: '100px', marginRight: '1vw', boxSizing: 'border-box' } }>
                <InputField key={ index } item={ item } formik={ formik } labelText={ 'Payments' }/>
              </Grid>

              <Grid sx={ { width: "auto", maxWidth: '100px', boxSizing: 'border-box' } }>
                { coInputs && (
                  <InputField key={ index + 5 } item={ coInputs[index] } formik={ formik } labelText={ 'Payments' }/>
                ) }
              </Grid>

              <Grid alignSelf="baseline" pt={ '2rem' }>
                <Typography variant="h5" sx={ { fontSize: '1.3rem' } }>{ item.text }</Typography>
              </Grid>
            </Grid>
          )) }
      </Grid>
    </Wrapper>
  )
}

interface ICreateDoubledCheckBoxQuestion extends basicData {
  answers?: { text: string; value: string }[]
  co_answers?: { text: string; value: string }[]
  formName?: string
  co_formName?: string
}

export const CreateDoubledCheckBoxQuestion: FC<ICreateDoubledCheckBoxQuestion> = ({
  question,
  answers,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
  current,
  setSchema,
  co_answers,
  formName,
  co_formName,
}) => {

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             answers={ answers }
             current={ current }
             setSchema={ setSchema }
             co_answers={ co_answers }>
      <Grid container direction="column" wrap="nowrap" sx={ { padding: "5vw 3vw 0 5vw" } }>
        <Grid container>
          <Typography variant="h6" sx={ {
            maxWidth   : "49px",
            marginRight: "20px",
            textAlign  : "left",
            fontWeight : "bold",
          } }>
            You
          </Typography>
          <Typography variant="h6" sx={ {
            width     : "auto",
            textAlign : "left",
            fontWeight: "bold",
          } }>
            { formik.values.co_first_name }`s
          </Typography>
        </Grid>

        <FormGroup onChange={ formik.handleChange }>
          <Grid container direction="column" wrap="nowrap">
            { answers &&
              answers.map((item: any, index: number) => (
                <div key={ index }>
                  <Grid container justifyContent="flex-start" wrap={ "nowrap" }>
                    <FormControlLabel control={ <Checkbox sx={ { transform: 'scale(1.3)' } }/> }
                                      label=""
                                      name={ formName }
                                      value={ item.value }
                                      color="primary"
                                      sx={ { margin: "1vh 0", minWidth: "50px" } }/>

                    { co_answers && (
                      <FormControlLabel control={ <Checkbox sx={ { transform: 'scale(1.3)' } }/> }
                                        label={
                                          <Typography variant="h6" ml={ 1 }> { item.text } </Typography>
                                        }
                                        name={ co_formName }
                                        value={ co_answers[index].value }
                                        color="primary"
                                        sx={ { margin: "1vh 0", width: "auto" } }/>
                    ) }
                  </Grid>
                </div>
              )) }
          </Grid>
        </FormGroup>
      </Grid>
    </Wrapper>
  )
}

interface ICreateDoubledRadioQuestion extends basicData {
  answers?: { text: string; value: string }[]
  co_answers?: { text: string; value: string }[]
  formName?: string
  co_formName?: string
}

export const CreateDoubledRadioQuestion: FC<ICreateDoubledRadioQuestion> = ({
  question,
  answers,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
  current,
  setSchema,
  co_answers,
  formName,
  co_formName,
}) => {

  const [val, setVal] = useState<any>(answers && answers[0].value)
  const [co_val, co_setVal] = useState<any>(co_answers && co_answers[0].value)

  useEffect(
    () => formik.setFieldValue(formName, answers && answers[0].value),
    [formName],
  )
  useEffect(
    () => formik.setFieldValue(co_formName, co_answers && co_answers[0].value),
    [co_formName],
  )
  const handleCurrentAnswer = (event: any, checked: any, item: any) => {
    setVal(item)
    formik.handleChange(event, checked)
  }
  const co_handleCurrentAnswer = (event: any, checked: any, item: any) => {
    co_setVal(item)
    formik.handleChange(event, checked)
  }
  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             answers={ answers }
             current={ current }
             setSchema={ setSchema }
             co_answers={ co_answers }>
      <Grid container direction="column" wrap="nowrap" sx={ { padding: "0 0 0 10vw" } }>
        <Grid container>
          <Typography variant="h6" sx={ {
            maxWidth   : "30px",
            marginRight: "20px",
            textAlign  : "left",
            fontWeight : "bold",
          } }>
            You
          </Typography>
          <Typography variant="h6" sx={ { width: "auto", textAlign: "left", fontWeight: "bold" } }>
            { formik.values.co_first_name }`s
          </Typography>
        </Grid>

        <Grid container direction="column" wrap="nowrap" width={ 'auto' }>
          { co_answers && formName && answers && answers.map((item, index) => (
            <Grid container width={ '100%' } alignItems="center" key={ index }>

              <Radio checked={ val === item.value }
                     onChange={ (event, checked) => handleCurrentAnswer(event, checked, item.value) }
                     value={ item.value }
                     name={ formName }/>

              <Radio checked={ co_val === co_answers[index].value }
                     onChange={ (event, checked) => co_handleCurrentAnswer(event, checked, co_answers[index].value) }
                     value={ co_answers[index].value }
                     name={ co_formName }/>
              <Typography variant="h6">{ item.text }</Typography>
            </Grid>
          )) }

        </Grid>
      </Grid>
    </Wrapper>
  )
}

interface ICreateRadioTextQuestion extends basicData {
  inputs?: { text: string; value: string }[]
  answers?: { text: string; value: string }[]
  co_answers?: { text: string; value: string }[]
  coQuestion?: (state: any) => string
  co_inputs?: { text: string; value: string }[]
  question1?: (arg: any) => string
  co_question?: (state: any) => any
  co_question1?: (state: any) => string
  formName?: string
  co_formName?: string
}

export const CreateRadioTextQuestion: FC<ICreateRadioTextQuestion> = ({
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

        { question1 && (
          <Typography variant="h6" sx={ { fontWeight: "bold", marginTop: "40px" } }>
            { question1(formik.values) }
          </Typography>
        ) }

        { inputs &&
          inputs.map((item, index: number) => (
            <InputField key={ index } item={ item } formik={ formik }/>
          )) }

        { co_question1 && (
          <Typography variant="h6" sx={ { fontWeight: "bold", marginTop: "40px" } }>
            { co_question && co_question(formik.values) }
          </Typography>
        ) }

        <Grid container direction="column" wrap="nowrap" sx={ { width: "auto" } }>
          { co_formName && <RadioField formik={ formik } formName={ co_formName } answers={ co_answers }/> }
        </Grid>

        { co_question && (
          <Typography variant="h6" sx={ { fontWeight: "bold", marginTop: "40px" } }>
            { co_question1 && co_question1(formik.values) }
          </Typography>
        ) }

        { co_inputs &&
          co_inputs.map((item, index: number) => (
            <InputField item={ item } formik={ formik } key={ index }/>
          )) }
      </Grid>
    </Wrapper>
  )
}

interface ICreateCheckboxQuestion extends basicData {
  answers?: { text: string; value: string }[]
  formName?: string
  co_formName?: string
  co_answers?: { text: string; value: string }[]
  co_question?: any
}

export const CreateVeteranQuestion: FC<ICreateCheckboxQuestion> = ({
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

        { formName && <RadioField formik={ formik } formName={ formName } answers={ answers }/> }

        { co_question && (
          <Typography variant="h6" pl={ '10vw' } sx={ { fontWeight: "bold", marginTop: "40px" } }>
            { co_question(formik.values) }
          </Typography>
        ) }

        { co_formName && <RadioField formik={ formik } formName={ co_formName } answers={ co_answers }/> }
      </Wrapper>
    </>
  )
}
