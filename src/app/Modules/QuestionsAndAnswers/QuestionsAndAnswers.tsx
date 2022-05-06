import { Grid }                           from '@mui/material'
import { memo, useCallback, useState }    from 'react'
import { QuestionKeyType, questionsList } from './questions'
import { useFormik }                      from 'formik'
import * as yup                           from 'yup'
import { Route, Routes, useNavigate }     from 'react-router-dom'
import { QuestionsSchema }                from './validation'
import { SetCurrentQuestionHandler }      from './MainRoutes'
import { GenerateQuestion }               from './GenerateQuestion'

interface IFormState {
  [key: string]: string | string[]
}

export const QuestionsAndAnswers = memo(() => {

  const initialState: IFormState = {
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
  const [currentState, setCurrentState] = useState<IFormState>(initialState)
  const [currentSchema, setCurrentSchema] = useState(QuestionsSchema.Q1)


  const formik = useFormik({
    validateOnChange: true,
    validateOnMount : false,
    validateOnBlur  : false,
    initialValues   : currentState,
    validationSchema: currentSchema,
    onSubmit        : (values: IFormState) => HandleSubmit(values),
  })

  const setSchema = (questionKey: QuestionKeyType) => {
    if (QuestionsSchema[questionKey] !== currentSchema) {
      setCurrentSchema(QuestionsSchema[questionKey] ? QuestionsSchema[questionKey] : yup.object({}))
    }
  }
  const HandleSubmit = useCallback((values: IFormState) => {
    setCurrentState(values)
  }, [])


  const questionRoutes = Object.values(questionsList).map((CurrentQuestion, index) =>
    <Route path={ `/${ Object.keys(questionsList)[index] }` }
           element={ GenerateQuestion({ CurrentQuestion, formik, SetCurrentQuestionHandler, setSchema, navigate }) }
           key={ index }/>)

  return (
    <Grid overflow="hidden" sx={ { maxWidth: '100vw', height: 'auto' } }>
      <Routes>
        { questionRoutes }
      </Routes>
    </Grid>

  )
})


