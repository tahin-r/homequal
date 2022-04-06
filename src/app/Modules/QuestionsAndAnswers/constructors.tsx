import {
  Autocomplete, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Grid, TextField, Typography,
}                                         from '@mui/material'
import React, { FC, useEffect, useState } from 'react'
import { QuestionKey }                    from './questions'
import { FormikValues }                   from 'formik/dist/types'
import { InputField, RadioField }         from './shared/shared'
import { PieChart }                       from 'react-minimal-pie-chart'
import { CenteredTypography }             from '../../../shared/styles/strings'
import doneArrow                          from '../../../assets/images/doneArrow.svg'
import { useNavigate }                    from 'react-router-dom'

interface basicData {
  formik: FormikValues
  question: (state: any) => string
  elementConstructor: string
  next: QuestionKey
  setCurrentQuestionHandler: (next: QuestionKey, current: QuestionKey) => void
  description: string
  current: string
  question1?: (arg: any) => string
  setSchema: (current: QuestionKey) => void
}

export const Wrapper: React.FC<any> = ({ children, ...rest }) => {
  const navigate = useNavigate()
  useEffect(() => {
    rest.setSchema && rest.setSchema(String(rest.current))
  }, [rest.current])

  const handleClick = async () => {
    const errors = await rest.formik.validateForm()
    rest.formik.submitForm()
    if (Object.keys(errors).length === 0) {
      rest.setCurrentQuestionHandler(rest.next, rest.current)
    }
  }

  return (

    <Grid position={ 'relative' }
          container
          wrap={ 'nowrap' }
          direction="column"
          sx={ { minHeight: 'calc( 100vh - 60px )', height: 'auto' } }>

      <Typography variant="h6" mb={ 2 } sx={ { fontWeight: 'bold', padding: '0 10vw', marginTop: '10px' } }>
        { rest.question(rest.formik.values) }
      </Typography>

      <form onSubmit={ rest.formik.handleSubmit }>
        { children }

        <Typography sx={ { marginTop: '5vh', fontStyle: 'italic', padding: '3vw' } }>
          { rest.description }
        </Typography>


        { (rest.current !== 'Q23' || rest.status === 3) && (
          <Grid flexShrink={ 0 }
                container
                justifyContent="center"
                sx={ { bottom: '5px', height: '50px', marginTop: 'auto', marginBottom: '20px' } }>
            <Button variant="outlined"
                    color="primary"
                    type="button"
                    sx={ { transition: '2s' } }
                    onClick={ () => rest.current !== 'Q23' ? handleClick() : navigate('/') }>

              <Typography variant="h6">Continue</Typography>

            </Button>

          </Grid>
        ) }
      </form>
    </Grid>
  )
}

interface ICreateCheckboxQuestion extends basicData {
  answers?: { text: string, value: string }[] | undefined
  formName?: string
}

export const CreateRadioQuestion: FC<ICreateCheckboxQuestion> = ({
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

interface ICreateTextFieldQuestion extends basicData {
  inputs?: { text: string, value: string }[] | undefined
}

export const CreateTextFieldQuestion: FC<ICreateTextFieldQuestion> = ({
  question,
  inputs,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
  current,
  setSchema,
}) => {

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             current={ current }
             setSchema={ setSchema }>

      <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>

        { inputs && inputs.map((item: any, index: number) => <InputField formik={ formik }
                                                                         item={ item }
                                                                         key={ index }
                                                                         index={ index }/>) }

      </Grid>
    </Wrapper>
  )
}

interface ICreateCheckBoxQuestion extends basicData {
  answers?: { text: string, value: string }[] | undefined
  formName?: string
}

export const CreateCheckBoxQuestion: FC<ICreateCheckBoxQuestion> = ({
  question,
  answers,
  setCurrentQuestionHandler, next,
  description,
  formik,
  formName,
  current,
  setSchema,
}) => {

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             current={ current }
             setSchema={ setSchema }>

      <FormGroup onChange={ formik.handleChange } sx={ { paddingLeft: '10vw' } }>
        { answers && answers.map((item: any, index: number) => (
          <FormControlLabel control={ <Checkbox/> }
                            label={ <Typography variant="h6"> { item.text } </Typography> }
                            name={ formName }
                            key={ index }
                            value={ item.value }
                            color="primary"
                            sx={ { margin: '1vh 0', width: '80vw' } }/>)) }
      </FormGroup>

    </Wrapper>
  )
}


const states = ['Alaska', 'Alabama', 'Arkansas', 'American Samoa', 'Arizona', 'California', 'Colorado', 'Connecticut',
  'District of Columbia',
  'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Iowa', 'Idaho', 'Illinois', 'Indiana', 'Kansas', 'Kentucky',
  'Louisiana', 'Massachusetts',
  'Maryland', 'Maine', 'Michigan', 'Minnesota', 'Missouri', 'Mississippi', 'Montana', 'North Carolina', 'North Dakota',
  'Nebraska', 'New Hampshire',
  'New Jersey', 'New Mexico', 'Nevada', 'New York', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico',
  'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'Virgin Islands', 'Vermont', 'Washington', 'Wisconsin',
  'West Virginia', 'Wyoming']

interface ICreateAutoCompleteQuestion extends basicData {
  inputs?: { text: string, value: string }[] | undefined
  formName?: string
}

export const CreateAutoCompleteQuestion: FC<ICreateAutoCompleteQuestion> = ({
  question,
  inputs,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
  formName,
  current,
  setSchema,
}) => {

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             current={ current }
             setSchema={ setSchema }>
      <Grid container
            direction="column"
            wrap="nowrap"
            alignContent="center"
            justifyContent="space-evenly"
            alignItems="flex-start"
            sx={ { paddingLeft: '5vh' } }>
        { inputs && inputs.map((item, index: number) => (
          <Grid key={ index }>
            <Typography variant="h6">Option { index + 1 }</Typography>
            <Grid container wrap="nowrap">
              <InputField formik={ formik } item={ item }/>
              <Autocomplete id={ `${ formName }[1]` }
                            onChange={ (event, value) => formik.setFieldValue(`${ formName }[${ index }][1]`, value) }
                            options={ states }
                            sx={ { minWidth: '170px' } }
                            renderInput={ (params) =>
                              <TextField { ...params } label="State"/> }/>
            </Grid>
          </Grid>
        )) }
      </Grid>

    </Wrapper>
  )
}

export const CreateDiagramQuestion: FC<basicData> = ({
  question,
  setCurrentQuestionHandler,
  next,
  formik,
  current,
}) => {
  const totalIncome = Number(formik.values.monthly_income) + Number(formik.values.co_monthly_income)
  const totalExpenses = Number(formik.values.auto_expense) +
    Number(formik.values.credit_card_expense) +
    Number(formik.values.student_loans) +
    Number(formik.values.other_expenses) +
    Number(formik.values.co_auto_expense) +
    Number(formik.values.co_credit_card_expense) +
    Number(formik.values.co_student_loans) +
    Number(formik.values.co_other_expenses)

  const ratio = Math.ceil(totalExpenses / totalIncome * 100)

  const pieData = [
    {
      title: 'Monthly Income',
      value: totalIncome,
      color: '#676dde',
    },
    {
      title: 'Monthly expenses',
      value: totalExpenses,
      color: '#d55854',
    },
  ]

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             question={ question }
             formik={ formik }
             current={ current }>
      <Grid container direction="column" wrap="nowrap" alignItems="center" sx={ { marginTop: '30px', height: '100%' } }>
        <Typography variant="h6" component="span" sx={ {
          padding: '10px', backgroundColor: 'rgba(29,106,141,0.63)', width: 'auto', color: 'white',
        } }> Debt to Income Ratio </Typography>

        <Grid container position={ 'relative' } sx={ { maxWidth: '250px' } }>
          <PieChart startAngle={ 270 }
                    paddingAngle={ 2 }
                    data={ pieData }
                    lineWidth={ 20 }
                    label={ (item) => item.dataIndex === 0 ? `${ ratio }%` : null }
                    labelPosition={ 0 }
                    labelStyle={ { fill: '#676dde', fontSize: '13px', fontWeight: 'bold' } }
                    radius={ PieChart.defaultProps.radius - 20 }/>
        </Grid>

        <Grid direction="column" width="70%" container maxWidth={ 400 }>
          <Grid container justifyContent="space-between" wrap={ 'nowrap' } mb={ 2 }>
            <Typography variant="h6">Monthly Income</Typography>
            <Typography variant="h6" sx={ {
              minWidth: '70px', padding: '5px', bgcolor: '#676dde', color: 'white', textAlign: 'right',
            } }>{ totalIncome }</Typography>
          </Grid>

          <Grid container justifyContent="space-between" wrap={ 'nowrap' }>
            <Typography variant="h6" justifyContent="space-between"> Monthly Expenses</Typography>
            <Typography variant="h6" sx={ {
              minWidth: '70px', padding: '5px', bgcolor: '#d55854', color: 'white', textAlign: 'right',
            } }>{ totalExpenses }
            </Typography>

          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export const CreateEndQuestion: FC<basicData> = ({
  setCurrentQuestionHandler,
  next,
  question,
  description,
  formik,
  current,
  setSchema,
}) => {
  const [status, setStatus] = useState(-1)
  const items = [' Analyzing Financial', 'Identifying Potential Issues', 'Calculating Cash Reward', 'Building Success Plan']

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             setSchema={ setSchema }
             current={ current }
             status={ status }>

      <CenteredTypography variant="h5">
        That’s it. Give me a second
        to crunch some numbers.
      </CenteredTypography>


      { items.map((item, index) => {

        if (index === status + 1) {
          setTimeout(() => setStatus(status + 1), 4000)
        }

        return (
          <Grid container
                key={ index }
                direction="row"
                sx={ { paddingLeft: '10vw', margin: '2vh 0', width: '80vw' } }
                alignItems="center"
                justifyContent="space-between"
                wrap="nowrap">

            <Typography variant="h6" color="primary" sx={ { verticalAlign: 'bottom',fontWeight:'regular' } }>
              { item }
            </Typography>
            { status >= index ? <img src={ doneArrow } width={ 45 } height={ 45 } alt="arrow"/>
                              :
              <CircularProgress color="primary" sx={ {
                marginLeft: '10px', minWidth: '35px', minHeight: '35px', maxWidth: '35px',
                maxHeight                                                        : '35px',
              } }/>
            }
          </Grid>
        )
      }) }
    </Wrapper>
  )
}