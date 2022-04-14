import {
  basicTypes, ICreateAutoCompleteQuestion, ICreateCOTextFieldQuestion, ICreateDoubledCheck_Radio_BoxQuestion,
  ICreateDoubledTextFieldQuestion, ICreateRadio_CheckBox_Question, ICreateRadioTextQuestion, ICreateTextFieldQuestion,
  ICreateVeteranQuestion, QuestionKeyType, QuestionsType,
}                                         from './questions'
import { FormikProps }                    from 'formik'
import { CreateTextFieldQuestion }        from './shared/constructors/aloneRoute/CreateTextFieldQuestion'
import { CreateRadioQuestion }            from './shared/constructors/aloneRoute/CreateRadioQuestion'
import { CreateCheckBoxQuestion }         from './shared/constructors/aloneRoute/CreateCheckBoxQuestion'
import { CreateAutoCompleteQuestion }     from './shared/constructors/aloneRoute/CreateAutoCompleteQuestion'
import { CreateCOTextFieldQuestion }      from './shared/constructors/coRoute/CreateCOTextFieldQuestion'
import { CreateDoubledTextFieldQuestion } from './shared/constructors/coRoute/CreateDoubledTextFieldQuestion'
import { CreateDoubledCheckBoxQuestion }  from './shared/constructors/coRoute/CreateDoubledCheckBoxQuestion'
import { CreateDoubledRadioQuestion }     from './shared/constructors/coRoute/CreateDoubledRadioQuestion'
import { CreateRadioTextQuestion }        from './shared/constructors/coRoute/CreateRadioTextQuestion'
import { CreateVeteranQuestion }          from './shared/constructors/coRoute/CreateVeteranQuestion'
import { CreateDiagramQuestion }          from './shared/constructors/aloneRoute/CreateDiagramQuestion'
import { CreateEndQuestion }              from './shared/constructors/aloneRoute/CreateEndQuestion'
import { NavigateFunction }               from 'react-router-dom'


interface IGenerateQuestionProps {
  CurrentQuestion: QuestionsType
  formik: FormikProps<any>
  SetCurrentQuestionHandler: (next: QuestionKeyType, current: QuestionKeyType, formik: FormikProps<any>, navigate: NavigateFunction) => void
  setSchema: (questionKey: QuestionKeyType) => void
  navigate: NavigateFunction
}

export const GenerateQuestion = ({
  CurrentQuestion, formik, SetCurrentQuestionHandler, setSchema, navigate,
}: IGenerateQuestionProps) => {
  const { question, current, description, elementConstructor, next, ...questionProps } = CurrentQuestion
  const wrapperProps = {
    navigate,
    question,
    formik,
    description,
    current,
    next,
    SetCurrentQuestionHandler,
    setSchema,
  }
  switch (CurrentQuestion.elementConstructor) {
    case('CreateTextFieldQuestion'):
      return <CreateTextFieldQuestion { ...questionProps as ICreateTextFieldQuestion } wrapperProps={ wrapperProps }
                                      formik={ formik }/>
    case('CreateRadioQuestion'):
      return <CreateRadioQuestion { ...questionProps as ICreateRadio_CheckBox_Question } wrapperProps={ wrapperProps }
                                  formik={ formik }/>
    case('CreateCheckBoxQuestion'):
      return <CreateCheckBoxQuestion { ...questionProps as ICreateRadio_CheckBox_Question } wrapperProps={ wrapperProps }
                                     formik={ formik }/>
    case('CreateAutoCompleteQuestion'):
      return <CreateAutoCompleteQuestion { ...questionProps as ICreateAutoCompleteQuestion } wrapperProps={ wrapperProps }
                                         formik={ formik }/>
    case('CreateCOTextFieldQuestion'):
      return <CreateCOTextFieldQuestion { ...questionProps as ICreateCOTextFieldQuestion } wrapperProps={ wrapperProps }
                                        formik={ formik }/>
    case('CreateDoubledTextFieldQuestion'):
      return <CreateDoubledTextFieldQuestion { ...questionProps as ICreateDoubledTextFieldQuestion } wrapperProps={ wrapperProps }
                                             formik={ formik }/>
    case('CreateDoubledCheckBoxQuestion'):
      return <CreateDoubledCheckBoxQuestion { ...questionProps as ICreateDoubledCheck_Radio_BoxQuestion } wrapperProps={ wrapperProps }
                                            formik={ formik }/>
    case ('CreateDoubledRadioQuestion'):
      return <CreateDoubledRadioQuestion { ...questionProps as ICreateDoubledCheck_Radio_BoxQuestion } wrapperProps={ wrapperProps }
                                         formik={ formik }/>
    case ('CreateRadioTextQuestion'):
      return <CreateRadioTextQuestion { ...questionProps as ICreateRadioTextQuestion } wrapperProps={ wrapperProps }
                                      formik={ formik }/>
    case('CreateVeteranQuestion'):
      return <CreateVeteranQuestion { ...questionProps as ICreateVeteranQuestion } wrapperProps={ wrapperProps }
                                    formik={ formik }/>
    case ('CreateDiagramQuestion'):
      return <CreateDiagramQuestion { ...questionProps as basicTypes } wrapperProps={ wrapperProps } formik={ formik }/>
    case ('CreateEndQuestion'): {
      return <CreateEndQuestion { ...questionProps as basicTypes } wrapperProps={ wrapperProps } formik={ formik }/>
    }
  }
}