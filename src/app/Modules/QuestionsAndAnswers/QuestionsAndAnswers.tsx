import { Grid } from '@mui/material'
import { memo, useCallback, useState } from 'react'
import { QuestionKeyType } from './questions'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { SetCurrentQuestionHandler } from './MainRoutes'
import { GenerateQuestion } from './GenerateQuestion'

interface IFormState {
  [key: string]: string | string[]
}

interface QuestionsAndAnswersProps {
  questionsList: any,
  QuestionsSchema: any
}

export const QuestionsAndAnswers = memo((props: QuestionsAndAnswersProps) => {
  const { questionsList, QuestionsSchema } = props
  const initialState: IFormState = {
    first_name: '',
    last_name: '',
    email_address: '',
    cell_phone: '',
    communication_preference_id: '',
    co_borrower_flag: '',
    co_borrower_flag_r: '',
    credit_score: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    marital_status: '',
    co_first_name: '',
    co_last_name: '',
    co_email_address: '',
    co_cell_phone: '',
    co_marital_status: '',
    move_range: '',
    monthly_payment_amount: '0',
    home_savings: '0',
    home_savings_details: [],
    monthly_income: '0',
    property_value: '0',
    currently_owe: '0',
    interest_rate: '0',
    co_monthly_income: '0',
    auto_expense: '0',
    credit_card_expense: '0',
    student_loans: '0',
    other_expenses: '0',
    co_auto_expense: '0',
    co_credit_card_expense: '0',
    co_student_loans: '0',
    co_other_expenses: '0',
    co_member_buyer_details: [],
    member_buyer_details: [],
    co_member_buyer_student_details: '',
    member_buyer_student_details: '',
    credit_score_range: '',
    co_credit_score_range: '',
    living_situation: '',
    co_living_situation: '',
    housing_payment_amount: '0',
    co_housing_payment_amount: '0',
    veteran: '',
    live_state_1: '',
    live_state_2: '',
    live_state_3: ''
  }

  const navigate = useNavigate()
  const [currentState, setCurrentState] = useState<IFormState>(initialState)
  const [currentSchema, setCurrentSchema] = useState(QuestionsSchema.Q1)

  const formik = useFormik({
    validateOnChange: true,
    validateOnMount: false,
    validateOnBlur: false,
    initialValues: currentState,
    validationSchema: currentSchema,
    onSubmit: (values: IFormState) => HandleSubmit(values)
  })

  const setSchema = (questionKey: QuestionKeyType) => {
    if (QuestionsSchema[questionKey] !== currentSchema) {
      setCurrentSchema(QuestionsSchema[questionKey] ? QuestionsSchema[questionKey] : yup.object({}))
    }
  }

  const HandleSubmit = useCallback((values: IFormState) => {
    setCurrentState(values)
  }, [])

  const questionRoutes = Object.values(questionsList).map((CurrentQuestion: typeof questionsList.index, index) =>
    <Route path={ `/${Object.keys(questionsList)[index]}` }
           element={ GenerateQuestion({ CurrentQuestion, formik, SetCurrentQuestionHandler, setSchema, navigate }) }
           key={ index }/>)

  return (
    <Grid overflow="hidden" sx={ { height: 'auto', maxWidth: '1280px', margin: '0 auto' } }>
      <Routes>
        { questionRoutes }
      </Routes>
    </Grid>

  )
})
