import { Grid } from '@mui/material'
import {
  useEffect,
  useState,
}               from 'react'
import {
  CreateRadioQuestion,
  CreateTextFieldQuestion,
  CreateCheckBoxQuestion,
  CreateAutoCompleteQuestion,
}               from './helpers'
import {
  QuestionKey,
  questionsList,
  QuestionsType,
}               from './questions'
import { Formik } from 'formik'


export const Journey = () => {
  const [ currentQuestion, setCurrentQuestion ] = useState<any>()

  const initialState = {
    first_name   : null,
    last_name    : null,
    email_address: null,
    cell_phone   : null,
    withWho      : null,
    marital      : null,
    //if some else Route
    maritalForAnother: null,
    date             : null,
    mortgagePayment  : null,
    PaymentFormHouse : null,
    sourceOfPayments : null,
    monthlyTotal     : null,
    expenses         : {
      auto   : null,
      credit : null,
      student: null,
      other  : null,
    },
    spouseExpenses   : {
      auto   : null,
      credit : null,
      student: null,
      other  : null,
    },
    history          : null,
    creditScore      : null,
    lenderPay        : null,
    livingSituation  : null,
    housePayments    : null,
    isVeteran        : null,
    location         : null,
    coBorrower       : {
      fName : null,
      lName : null,
      email : null,
      mobile: null,
    },
  }

  useEffect(() => {
    setCurrentQuestion(questionsList.Q1)
  }, [])

  const setCurrentQuestionHandler: (next: QuestionKey) => void = (next) => {

    setCurrentQuestion(questionsList[next])
  }


  const constructor = (question: QuestionsType) => {
    switch (question.elementConstructor) {
      case('createTextFieldQuestion'):
        return <CreateTextFieldQuestion { ...question } next={ question.next as QuestionKey }
                                        setCurrentQuestionHandler={ setCurrentQuestionHandler }
        />
      case('CreateRadioQuestion'):
        return <CreateRadioQuestion  { ...question } next={ question.next as QuestionKey }
                                     setCurrentQuestionHandler={ setCurrentQuestionHandler }
        />
      case('CreateCheckBoxQuestion'):
        return <CreateCheckBoxQuestion{ ...question } next={ question.next as QuestionKey }
                                      setCurrentQuestionHandler={ setCurrentQuestionHandler }
        />
      case('CreateAutoCompleteQuestion'):
        return <CreateAutoCompleteQuestion { ...question } next={ question.next as QuestionKey }
                                           setCurrentQuestionHandler={ setCurrentQuestionHandler }
        />
    }
  }
  return (
    <Grid
      overflow="hidden"
      sx={ { width: '100vw' } }
    >
      { currentQuestion ? constructor(currentQuestion) : null }
    </Grid>

  )
}

