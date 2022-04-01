import { Grid }            from '@mui/material'
import {
  useState,
}                          from 'react'
import {
  CreateAutoCompleteQuestion,
  CreateCheckBoxQuestion,
  CreateRadioQuestion,
  CreateTextFieldQuestion,
}                          from './helpers'
import {
  QuestionKey,
  questionsList,
  QuestionsType,
}                          from './questions'
import {
  useFormik
}                          from 'formik'
import * as yup            from 'yup'
import {
  Route,
  Routes,
  useNavigate
}                          from 'react-router-dom'
import { QuestionsSchema } from './validation';
import {
  CreateCOTextFieldQuestion,
  CreateDoubledCheckBoxQuestion,
  CreateDoubledRadioQuestion,
  CreateDoubledTextFieldQuestion, CreateRadioTextQuestion, CreateVeteranQuestion
}                          from './coHelpers';


export const Journey = () => {

  const initialState = {
    first_name                     : '',
    last_name                      : '',
    email_address                  : '',
    cell_phone                     : '',
    communication_preference_id    : '',
    co_borrower_flag               : '',
    marital_status                 : '',
    co_first_name                  : '',
    co_last_name                   : '',
    co_email_address               : '',
    co_cell_phone                  : '',
    co_marital_status              : '',
    move_range                     : '',
    monthly_payment_amount         : '',
    home_savings                   : '',
    home_savings_details           : [],
    monthly_income                 : '',
    co_monthly_income              : '',
    auto_expense                   : '',
    credit_card_expense            : '',
    student_loans                  : '',
    other_expenses                 : '',
    co_auto_expense                : '',
    co_credit_card_expense         : '',
    co_student_loans               : '',
    co_other_expenses              : '',
    co_member_buyer_details        : [],
    member_buyer_details           : [],
    co_member_buyer_student_details: '',
    member_buyer_student_details   : '',
    credit_score_range             : '',
    co_credit_score_range          : '',
    living_situation               : '',
    co_living_situation            : '',
    housing_payment_amount         : '',
    co_housing_payment_amount      : '',
    veteran                        : '',
    live_state_1                   : '',
    live_state_2                   : '',
    live_state_3                   : '',
  }

  const navigate = useNavigate()
  const [ currentState, setCurrentState ] = useState<any>({ ...initialState })
  const [ currentSchema, setCurrentSchema ] = useState(QuestionsSchema.Q1)

  const formik = useFormik({
    validateOnBlur  : true,
    initialValues   : currentState,
    validationSchema: currentSchema,
    onSubmit        : (values) => HandleSubmit(values),
  })

  const setSchema = (question: QuestionKey) => {
    setCurrentSchema(QuestionsSchema[question] ? QuestionsSchema[question] : yup.object({}))
  }

  const HandleSubmit = (values: any) => {
    if (values !== currentState) {
      setCurrentState(values)
    }
  }

  const setCurrentQuestionHandler = (next: QuestionKey, current: QuestionKey | string) => {
    let isAlone = formik.values.co_borrower_flag === '0'
    let isHaveStudentLoan = formik.values.member_buyer_details.includes('late_student_loan')
    let isHaveTax = formik.values.member_buyer_details.includes('tax_lien_judgement_foreclosure')
    let isCoHaveStudentLoan = formik.values.co_member_buyer_details.includes('late_student_loan')
    let isCoHaveTax = formik.values.co_member_buyer_details.includes('tax_lien_judgement_foreclosure')

    if (current === 'Q4' && isAlone) {
      navigate('Q7')
    } else if (current === 'Q5' && isAlone) {
      navigate('Q7')
    } else if (current === 'Q17' && !isHaveStudentLoan && !isHaveTax) {
      navigate('Q20')
    } else if (current === 'Q17' && isHaveTax && !isHaveStudentLoan) {
      navigate('Q19')
    } else if (current === 'Q18' && !isHaveTax) {
      navigate('Q20')
    } else if (current === 'Q17C' && !isHaveStudentLoan && !isHaveTax && !isCoHaveStudentLoan && !isCoHaveTax) {
      navigate('Q20C')
    } else if (current === 'Q17C' && !isHaveStudentLoan && !isCoHaveStudentLoan && (isHaveTax || isCoHaveTax)) {
      navigate('Q19C')
    } else if (current === 'Q18C' && !isHaveTax && !isCoHaveTax) {
      navigate('Q20C')
    } else if (current === 'Q11' && !isAlone) {
      navigate('Q12C')
    } else {
      navigate(`${ next }`)
    }
  }


  const constructor = (question: QuestionsType) => {
    const props = {
      ...question,
      formik : formik,
      current: question.current,
      next   : question.next as QuestionKey,
      setCurrentQuestionHandler,
      setSchema,
    }
    switch (question.elementConstructor) {
      case('createTextFieldQuestion'):
        return <CreateTextFieldQuestion { ...props }/>
      case('CreateRadioQuestion'):
        return <CreateRadioQuestion  { ...props }/>
      case('CreateCheckBoxQuestion'):
        return <CreateCheckBoxQuestion{ ...props }/>
      case('CreateAutoCompleteQuestion'):
        return <CreateAutoCompleteQuestion { ...props }/>
      case('CreateCOTextFieldQuestion'):
        return <CreateCOTextFieldQuestion { ...props }/>
      case('CreateDoubledTextFieldQuestion'):
        return <CreateDoubledTextFieldQuestion { ...props }/>
      case('CreateDoubledCheckBoxQuestion'):
        return <CreateDoubledCheckBoxQuestion { ...props }/>
      case ('CreateDoubledRadioQuestion'):
        return <CreateDoubledRadioQuestion { ...props }/>
      case ('CreateRadioTextQuestion'):
        return <CreateRadioTextQuestion { ...props } />
      case('CreateVeteranQuestion'):
        return <CreateVeteranQuestion { ...props }/>
    }
  }

  const questionRoutes = Object.values(questionsList)
                               .map((el, index) => <Route
                                 path={ `/${ Object.keys(questionsList)[index] }` }
                                 element={ constructor(el) }
                                 key={ index }
                               />)

  return (
    <Grid
      overflow="hidden"
      sx={ { maxWidth: '100vw' } }
    >
      <Routes>
        { questionRoutes }
      </Routes>
    </Grid>

  )
}


