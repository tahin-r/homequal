import { QuestionKeyType }  from './questions'
import { NavigateFunction } from 'react-router-dom'
import { FormikProps }      from 'formik'

export const SetCurrentQuestionHandler = (next: QuestionKeyType, current: QuestionKeyType, formik: FormikProps<any>, navigate: NavigateFunction) => {
  let isAlone = formik.values.co_borrower_flag === '0'
  let isHaveStudentLoan = formik.values.member_buyer_details.includes('late_student_loan')
  let isHaveTax = formik.values.member_buyer_details.includes('tax_lien_judgement_foreclosure')
  let isCoHaveStudentLoan = formik.values.co_member_buyer_details.includes('late_student_loan')
  let isCoHaveTax = formik.values.co_member_buyer_details.includes('tax_lien_judgement_foreclosure')
  let isSpouce = formik.values.co_borrower_flag === '1'

  if (current === 'Q4' && isAlone) {
    navigate('Q7')
  } else if (current === 'Q5' && isSpouce) {
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