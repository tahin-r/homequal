import { QuestionKeyType, QuestionsType } from './questions'
import { NavigateFunction } from 'react-router-dom'
import { FormikProps } from 'formik'

interface IGenerateQuestionProps {
  CurrentQuestion: QuestionsType
  formik:FormikProps<any>
  SetCurrentQuestionHandler: (
    next: QuestionKeyType,
    current: QuestionKeyType,
    formik: FormikProps<any>,
    navigate: NavigateFunction) => void
  setSchema: (questionKey: QuestionKeyType) => void
  navigate: NavigateFunction
}

export const GenerateQuestion = ({
  CurrentQuestion, formik, SetCurrentQuestionHandler, setSchema, navigate
}: IGenerateQuestionProps) => {
  const { question, current, description, elementConstructor, next, ...questionProps } = CurrentQuestion
  const Constructor = elementConstructor
  const wrapperProps = {
    navigate,
    question,
    formik,
    description,
    current,
    next,
    SetCurrentQuestionHandler,
    setSchema
  }
  return <Constructor { ...questionProps } wrapperProps={ wrapperProps } formik={ formik }/>
}
