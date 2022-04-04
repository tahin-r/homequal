import React, { FC, useEffect }                                                                  from 'react';
import { Checkbox, FormControlLabel, FormGroup, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import {
  FormikValues
}                                                                                                from 'formik/dist/types';
import { QuestionKey }                                                                           from './questions';
import { Wrapper }                                                                               from './helpers';
import { InputField }                                                                            from './shared/shared';

interface basicData {
  formik: FormikValues
  question: (state: any) => string,
  elementConstructor: string
  next: QuestionKey
  setCurrentQuestionHandler: (next: QuestionKey, current: QuestionKey) => void
  description: string
  current: string
  setSchema: (current: QuestionKey) => void
}

interface ICreateTextFieldQuestion extends basicData {
  inputs?: { text: string, value: string }[]
  coQuestion?: (state: any) => string
  coInputs?: { text: string, value: string }[]
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
  coInputs
}) => {

  return (
    <Wrapper
      next={ next }
      setCurrentQuestionHandler={ setCurrentQuestionHandler }
      description={ description }
      question={ question }
      formik={ formik }
      inputs={ inputs }
      current={ current }
      setSchema={ setSchema }
      coQuestion={ coQuestion }
      coInputs={ coInputs }
    >

      <Grid
        container
        direction="column"
        sx={ { paddingLeft: '10vw' } }
      >

        { inputs && inputs.map((item, index: number) => <InputField
            key={ index }
            item={ item }
            formik={ formik }
          />
        ) }

        { coQuestion && <Typography
          variant="h6"
          sx={ { fontWeight: 'bold', marginTop: '40px' } }
        >
          { coQuestion(formik.values) }
        </Typography>
        }

        { coInputs && coInputs.map((item, index: number) => <InputField
            item={ item }
            formik={ formik }

            key={ index }
          />
        ) }

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
  coInputs
}) => {

  return (
    <Wrapper
      next={ next }
      setCurrentQuestionHandler={ setCurrentQuestionHandler }
      description={ description }
      question={ question }
      formik={ formik }
      inputs={ inputs }
      current={ current }
      setSchema={ setSchema }
      coQuestion={ coQuestion }
      coInputs={ coInputs }
    >
      <Grid
        container
        direction="column"
        wrap="nowrap"

        sx={ { paddingLeft: '10vw' } }
      >
        <Grid container>
          <Typography
            variant="h6"
            sx={ { width: '100px', margin: '2vh 1vh', textAlign: 'center', fontWeight: 'bold' } }
          >You</Typography>
          <Typography
            variant="h6"
            sx={ { width: '100px', margin: '2vh 0', textAlign: 'center', fontWeight: 'bold' } }
          >{ formik.values.co_first_name }`s</Typography>
        </Grid>
        { inputs && inputs.map((item, index: number) => <Grid
          key={ index }
          container
          justifyContent="flex-start"
          alignItems="baseline"
          wrap="nowrap"
        >

          <TextField
            onChange={ formik.handleChange }
            variant="standard"
            color="primary"
            onBlur={ formik.handleBlur }
            value={ formik.values[item.value] }
            name={ item.value }
            InputProps={ { style: { fontSize: 20, fontWeight: 'bold' } } }
            sx={ { maxWidth: '100px', width: 'auto',margin:'0 1vw' } }
            error={ formik.touched[item.value] && Boolean(formik.errors[item.value]) }
            helperText={ formik.touched[item.value] &&
              <Typography
                component="span"
                color="primary"
                sx={ { fontSize: '14px' } }
              >{ formik.errors[item.value] }
              </Typography> }
            label={
              <Typography
                variant="h6"
                color="black"
                sx={ { fontStyle: 'italic', fontSize: '14px', width: '40vw' } }
              >
                Payments
              </Typography> }
          />

          { coInputs && <TextField
            onChange={ formik.handleChange }
            variant="standard"
            color="primary"
            onBlur={ formik.handleBlur }
            value={ formik.values[coInputs[index].value] }
            name={ coInputs[index].value }
            InputProps={ { style: { fontSize: 20, fontWeight: 'bold' } } }
            sx={ { maxWidth: '100px', width: 'auto', } }
            error={ formik.touched[coInputs[index].value] && Boolean(formik.errors[coInputs[index].value]) }
            helperText={ formik.touched[coInputs[index].value] &&
              <Typography
                component="span"
                color="primary"
                sx={ { fontSize: '14px' } }
              >{ formik.errors[coInputs[index].value] }
              </Typography> }
            label={
              <Typography
                variant="h6"
                color="black"
                sx={ { fontStyle: 'italic', fontSize: '14px', width: '40vw' } }
              >
                Payments
              </Typography> }
          />
          }

          <Typography variant="h6">{ item.text }</Typography>

        </Grid>)
        }
      </Grid>
    </Wrapper>
  )
}

interface ICreateDoubledCheckBoxQuestion extends basicData {
  answers?: { text: string, value: string }[]
  co_answers?: { text: string, value: string }[]
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
  co_formName
}) => {

  return (
    <Wrapper
      next={ next }
      setCurrentQuestionHandler={ setCurrentQuestionHandler }
      description={ description }
      question={ question }
      formik={ formik }
      answers={ answers }
      current={ current }
      setSchema={ setSchema }
      co_answers={ co_answers }
    >
      <Grid
        container
        direction="column"
        wrap="nowrap"

        sx={ { padding: '5vh 0 0 10vw' } }
      >
        <Grid container>
          <Typography
            variant="h6"
            sx={ { maxWidth: '30px', marginRight: '20px', textAlign: 'left', fontWeight: 'bold' } }
          >You</Typography>
          <Typography
            variant="h6"
            sx={ { width: 'auto', textAlign: 'left', fontWeight: 'bold' } }
          >{ formik.values.co_first_name }`s</Typography>
        </Grid>

        <FormGroup
          onChange={ formik.handleChange }
        >
          <Grid
            container
            direction="column"
            wrap="nowrap"
          >
            { answers && answers.map((item: any, index: number) => (<div key={ index }>
              <Grid
                container
                justifyContent="flex-start"
                wrap={ 'nowrap' }
              >
                <FormControlLabel
                  control={ <Checkbox
                  /> }
                  label=""
                  name={ formName }
                  value={ item.value }
                  color="primary"
                  sx={ { margin: '1vh 0', minWidth: '50px' } }
                />

                { co_answers && <FormControlLabel
                  control={ <Checkbox
                  /> }
                  label={ <Typography variant="h6"> { item.text } </Typography> }
                  name={ co_formName }
                  value={ co_answers[index].value }
                  color="primary"
                  sx={ { margin: '1vh 0', width: 'auto' } }
                /> }
              </Grid>

            </div>))
            }
          </Grid>
        </FormGroup>

      </Grid>
    </Wrapper>
  )
}

interface ICreateDoubledRadioQuestion extends basicData {
  answers?: { text: string, value: string }[]
  co_answers?: { text: string, value: string }[]
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
  co_formName
}) => {

  return (
    <Wrapper
      next={ next }
      setCurrentQuestionHandler={ setCurrentQuestionHandler }
      description={ description }
      question={ question }
      formik={ formik }
      answers={ answers }
      current={ current }
      setSchema={ setSchema }
      co_answers={ co_answers }

    >
      <Grid
        container
        direction="column"
        wrap="nowrap"
        sx={ { padding: '5vh 0 0 10vw' } }
      >
        <Grid container>
          <Typography
            variant="h6"
            sx={ { maxWidth: '30px', marginRight: '20px', textAlign: 'left', fontWeight: 'bold' } }
          >
            You
          </Typography>
          <Typography
            variant="h6"
            sx={ { width: 'auto', textAlign: 'left', fontWeight: 'bold' } }
          >
            { formik.values.co_first_name }`s
          </Typography>
        </Grid>

        <Grid
          container
          wrap="nowrap"
        >

          <Grid
            container
            direction="column"
            wrap="nowrap"
            sx={ { width: '40px', marginRight: '10px' } }
          >
            <RadioGroup
              name={ formName }
              onBlur={ formik.handleBlur }
              onChange={ formik.handleChange }
              defaultValue={ answers && answers[0].value }
            >
              { answers && answers.map((item, index) =>
                <FormControlLabel
                  onChange={ formik.handleChange }
                  value={ item.value }
                  name={ formName }
                  key={ index }
                  control={ <Radio/> }
                  label={ '' }
                  sx={ { height: '50px' } }
                />) }
            </RadioGroup>
          </Grid>

          <Grid
            container
            direction="column"
            wrap="nowrap"
            sx={ { width: 'auto' } }
          >
            <RadioGroup
              name={ co_formName }
              onBlur={ formik.handleBlur }
              onChange={ formik.handleChange }
              defaultValue={ co_answers && co_answers[0].value }
            >
              { answers && answers.map((item, index) =>
                <FormControlLabel
                  value={ item.value }
                  name={ co_formName }
                  key={ index }
                  control={ <Radio/> }
                  sx={ { height: '50px' } }
                  label={ <Typography
                    variant="h6"
                    component="span"
                    sx={ { paddingLeft: '10px' } }
                  >{ item.text }</Typography> }
                />) }
            </RadioGroup>
          </Grid>

        </Grid>
      </Grid>
    </Wrapper>
  )
}

interface ICreateRadioTextQuestion extends basicData {
  inputs?: { text: string, value: string }[]
  answers?: { text: string, value: string }[]
  co_answers?: { text: string, value: string }[]
  coQuestion?: (state: any) => string
  co_inputs?: { text: string, value: string }[]
  question1?: (arg: any) => string,
  co_question?: (state: any) => any,
  co_question1?: (state: any) => string,
  formName?: string,
  co_formName?: string,
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
  co_formName
}) => {
  return (
    <Wrapper
      next={ next }
      setCurrentQuestionHandler={ setCurrentQuestionHandler }
      description={ description }
      question={ question }
      formik={ formik }
      inputs={ inputs }
      current={ current }
      setSchema={ setSchema }
    >
      <Grid
        container
        direction="column"
        sx={ { paddingLeft: '10vw' } }
      >

        <Grid
          container
          direction="column"
          wrap="nowrap"
          sx={ { width: 'auto' } }
        >
          <RadioGroup
            name={ formName }
            onBlur={ formik.handleBlur }
            onChange={ formik.handleChange }
            defaultValue={ answers && answers[0].value }
          >
            { answers && answers.map((item, index) =>
              <FormControlLabel
                value={ item.value }
                name={ formName }
                key={ index }
                control={ <Radio/> }
                sx={ { height: '50px' } }
                label={ <Typography
                  variant="h6"
                  component="span"
                  sx={ { paddingLeft: '10px' } }
                >{ item.text }</Typography> }
              />) }
          </RadioGroup>
        </Grid>

        { question1 && <Typography
          variant="h6"
          sx={ { fontWeight: 'bold', marginTop: '40px' } }
        >
          { question1(formik.values) }
        </Typography>
        }

        { inputs && inputs.map((item, index: number) =>
          <InputField
            key={ index }
            item={ item }
            formik={ formik }
          />
        ) }

        { co_question1 && <Typography
          variant="h6"
          sx={ { fontWeight: 'bold', marginTop: '40px' } }
        >
          { co_question && co_question(formik.values) }
        </Typography>
        }

        <Grid
          container
          direction="column"
          wrap="nowrap"
          sx={ { width: 'auto' } }
        >
          <RadioGroup
            name={ co_formName }
            onBlur={ formik.handleBlur }
            onChange={ formik.handleChange }
            defaultValue={ co_answers && co_answers[0].value }
          >
            { co_answers && co_answers.map((item, index) =>
              <FormControlLabel
                value={ item.value }
                name={ co_formName }
                key={ index }
                control={ <Radio/> }
                sx={ { height: '50px' } }
                label={ <Typography
                  variant="h6"
                  component="span"
                  sx={ { paddingLeft: '10px' } }
                >{ item.text }</Typography> }
              />) }
          </RadioGroup>
        </Grid>

        { co_question && <Typography
          variant="h6"
          sx={ { fontWeight: 'bold', marginTop: '40px' } }
        >
          { co_question1 && co_question1(formik.values) }
        </Typography>
        }

        { co_inputs && co_inputs.map((item, index: number) => <InputField
            item={ item }
            formik={ formik }
            key={ index }
          />
        ) }

      </Grid>
    </Wrapper>
  )
}

interface ICreateCheckboxQuestion extends basicData {
  answers?: { text: string, value: string }[]
  formName?: string
  co_formName?: string
  co_answers?: { text: string, value: string }[]
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
  co_question
}) => {
  useEffect(() => formik.setFieldValue(formName, answers && answers[0].value), [ formName, answers ])

  return (
    <>
      <Wrapper
        next={ next }
        setCurrentQuestionHandler={ setCurrentQuestionHandler }
        description={ description }
        question={ question }
        formik={ formik }
        formName={ formName }
        setSchema={ setSchema }
        current={ current }
      >
        <RadioGroup
          name={ formName }
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          defaultValue={ answers && answers[0].value }
          sx={ { marginTop: '4vh', paddingLeft: '10vw' } }
        >
          { answers && answers.map((item, index) =>
            <FormControlLabel
              onChange={ formik.handleChange }
              value={ item.value }
              name={ formName }
              key={ index }
              control={ <Radio/> }
              sx={ { maxHeight: '6vh' } }
              label={ <Typography variant="h6"> { item.text } </Typography> }
            />,
          ) }
        </RadioGroup>

        <RadioGroup
          name={ co_formName }
          onBlur={ formik.handleBlur }
          onChange={ formik.handleChange }
          defaultValue={ answers && answers[0].value }
          sx={ { marginTop: '4vh', paddingLeft: '10vw' } }
        >

          { co_question && <Typography
            variant="h6"
            sx={ { fontWeight: 'bold', marginTop: '40px' } }
          >
            { co_question(formik.values) }
          </Typography>
          }

          { co_answers && co_answers.map((item, index) =>
            <FormControlLabel
              onChange={ formik.handleChange }
              value={ item.value }
              name={ formName }
              key={ index }
              control={ <Radio/> }
              sx={ { maxHeight: '6vh' } }
              label={ <Typography variant="h6"> { item.text } </Typography> }
            />,
          ) }
        </RadioGroup>
      </Wrapper>
    </>
  )
}
