import { CreateTextFieldQuestion }        from './shared/constructors/aloneRoute/CreateTextFieldQuestion'
import { CreateRadioQuestion }            from './shared/constructors/aloneRoute/CreateRadioQuestion'
import { CreateVeteranQuestion }          from './shared/constructors/coRoute/CreateVeteranQuestion'
import { CreateEndQuestion }              from './shared/constructors/aloneRoute/CreateEndQuestion'
import { CreateCOTextFieldQuestion }      from './shared/constructors/coRoute/CreateCOTextFieldQuestion'
import { CreateRadioTextQuestion }        from './shared/constructors/coRoute/CreateRadioTextQuestion'
import { CreateCheckBoxQuestion }         from './shared/constructors/aloneRoute/CreateCheckBoxQuestion'
import { CreateDiagramQuestion }          from './shared/constructors/aloneRoute/CreateDiagramQuestion'
import { CreateDoubledRadioQuestion }     from './shared/constructors/coRoute/CreateDoubledRadioQuestion'
import { CreateAutoCompleteQuestion }     from './shared/constructors/aloneRoute/CreateAutoCompleteQuestion'
import { CreateDoubledTextFieldQuestion } from './shared/constructors/coRoute/CreateDoubledTextFieldQuestion'
import { CreateDoubledCheckBoxQuestion }  from './shared/constructors/coRoute/CreateDoubledCheckBoxQuestion'
import { FC }                             from 'react'


export interface basicTypes {
  question: (state: object | null) => string
  elementConstructor: FC<any>
  description: string
  current: QuestionKeyType
  next: QuestionKeyType
}

export interface ICreateTextFieldQuestion extends basicTypes {
  inputs: { value: string, text: string }[]
}

export interface ICreateRadio_CheckBox_Question extends basicTypes {
  answers: { value: string, text: string }[]
  formName: string
}

export interface ICreateAutoCompleteQuestion extends basicTypes {
  inputs: { value: string, text: string }[]
  formName: string
}

export interface ICreateCOTextFieldQuestion extends basicTypes {
  inputs: { value: string, text: string }[]
  coInputs: { value: string, text: string }[]
  coQuestion: (state: object | null) => string
}

export interface ICreateDoubledTextFieldQuestion extends basicTypes {
  inputs: { value: string, text: string }[]
  coInputs: { value: string, text: string }[]
}

export interface ICreateDoubledCheck_Radio_BoxQuestion extends basicTypes {
  formName: string
  co_formName: string
  answers: { value: string, text: string }[]
  co_answers: { value: string, text: string }[]
}

export interface ICreateRadioTextQuestion extends ICreateDoubledCheck_Radio_BoxQuestion {
  question1: (state: object | null) => string
  co_question: (state: object | null) => string
  co_question1: (state: object | null) => string
  inputs: { value: string, text: string }[]
  co_inputs: { value: string, text: string }[]
}

export interface ICreateVeteranQuestion extends ICreateDoubledCheck_Radio_BoxQuestion {
  co_question: (state: object) => string
}


const Q1: ICreateTextFieldQuestion = {
  question          : () => "Hi, who do I have the pleasure of speaking with?",
  description       :
    "HomeQual believes that it takes a team to meet your goals. By providing your contact information, you are " +
    "giving us permission to contact you in order to help you with your home ownership goals. " +
    "If, at any time, you would like to opt-out, please let us know by using the opt-out button on your profile page.",
  elementConstructor: CreateTextFieldQuestion,
  current           : "Q1",
  next              : "Q2",
  inputs            : [
    {
      value: "first_name",
      text : "First Name",
    },
    {
      value: "last_name",
      text : "Last Name",
    },
    {
      value: "email_address",
      text : "Email",
    },
    {
      value: "cell_phone",
      text : "Mobile",
    },
  ],
}

const Q2: ICreateRadio_CheckBox_Question = {
  question          : (state: any) =>
    `Nice to meet you ${ state.first_name }. We will be sending you information you` +
    " request, specifics about your purchasing ability, and home buying tips. How would you prefer we contact you?",
  description       :
    "You will receive a message shortly to confirm your contact information along with your member account access instructions.",
  elementConstructor: CreateRadioQuestion,
  formName          : "communication_preference_id",
  current           : "Q2",
  next              : "Q3",
  answers           : [
    {
      value: "1",
      text : "Text Me",
    },
    {
      value: "2",
      text : "Email Me",
    },
  ],
}

const Q3: ICreateRadio_CheckBox_Question = {
  question          : () =>
    "Let’s get started! Who will be on the loan application with you?",
  description       :
    "This isn’t who will be living in your new home, but who will be on the mortgage with you.",
  elementConstructor: CreateRadioQuestion,
  current           : "Q3",
  next              : "Q4",
  formName          : "co_borrower_flag",
  answers           : [
    {
      value: "0",
      text : "Just Me",
    },
    {
      value: "1",
      text : "My Spouse",
    },
    {
      value: "2",
      text : "Someone Else",
    },
  ],
}

const Q4: ICreateRadio_CheckBox_Question = {
  question          : () =>
    "In order to determine what types of loans you may qualify for, we`ll need to know your marital status",
  description       : "",
  elementConstructor: CreateRadioQuestion,
  current           : "Q4",
  next              : "Q5",
  formName          : "marital_status",
  answers           : [
    {
      value: "1",
      text : "I`m married",
    },
    {
      value: "0",
      text : "I`m not married",
    },
    {
      value: "3",
      text : "I`m separated",
    },
  ],
}

const Q5: ICreateTextFieldQuestion = {
  question          : () => "Who will be on the loan with you",
  description       : "",
  elementConstructor: CreateTextFieldQuestion,
  current           : "Q5",
  next              : "Q6",
  inputs            : [
    {
      value: "co_first_name",
      text : "First Name",
    },
    {
      value: "co_last_name",
      text : "Last Name",
    },
    {
      value: "co_email_address",
      text : "Email",
    },
    {
      value: "co_cell_phone",
      text : "Mobile",
    },
  ],
}

const Q6: ICreateRadio_CheckBox_Question = {
  question          : (state: any) => `What is ${ state.co_first_name } marital status`,
  description       : "",
  elementConstructor: CreateRadioQuestion,
  current           : "Q6",
  next              : "Q7",
  formName          : "co_marital_status",
  answers           : [
    {
      value: "1",
      text : "Married",
    },
    {
      value: "0",
      text : "Not married",
    },
    {
      value: "3",
      text : "Separated",
    },
  ],
}

const Q7: ICreateRadio_CheckBox_Question = {
  question          : () => "Select an approximate date",
  description       :
    "TIP:  If you are leasing now, you might want to enter your lease expiration date.",
  elementConstructor: CreateRadioQuestion,
  formName          : "move_range",
  current           : "Q7",
  next              : "Q8",
  answers           : [
    {
      value: "1",
      text : "1 – 3 Months",
    },
    {
      value: "0",
      text : "4 – 6 Months",
    },
    {
      value: "3",
      text : "7 – 9 Months",
    },
    {
      value: "4",
      text : "9 + Months",
    },
  ],
}

const Q8: ICreateTextFieldQuestion = {
  question          : () =>
    "What is the maximum you want to spend monthly on your mortgage payment?",
  description       :
    "We may find that you qualify for more or less, and we will show you that later.",
  elementConstructor: CreateTextFieldQuestion,
  current           : "Q8",
  next              : "Q9",
  inputs            : [
    {
      value: "monthly_payment_amount",
      text : "Maximum Monthly Payment ",
    },
  ],
}

const Q9: ICreateTextFieldQuestion = {
  question          : () =>
    "How much money will you have available to purchase your new home?",
  description       :
    "Tip:  Enter the amount you will have saved by the time you apply for a mortgage.",
  elementConstructor: CreateTextFieldQuestion,
  current           : "Q9",
  next              : "Q10",
  inputs            : [
    {
      value: "home_savings",
      text : "Enter Amount Available ",
    },
  ],
}

const Q10: ICreateRadio_CheckBox_Question = {
  question          : (state: any) =>
    `What is the source of your $${ state.home_savings } funds? Check any that apply.`,
  description       :
    "Tip: When starting the mortgage process, be careful moving money in and out of accounts or having any large deposits.  Lenders will ask a lot of questions if you do!",
  elementConstructor: CreateCheckBoxQuestion,
  formName          : "home_savings_details",
  current           : "Q10",
  next              : "Q11",
  answers           : [
    {
      value: "home_savings_checking",
      text : "Checking / Savings",
    },
    {
      value: "home_savings_401",
      text : "401K",
    },
    {
      value: "home_savings_stocks",
      text : "Stocks / Crypto",
    },
    {
      value: "home_savings_gift",
      text : "Gift Funds",
    },
    {
      value: "home_savings_other",
      text : "Other",
    },
  ],
}

const Q11: ICreateTextFieldQuestion = {
  question          : (state: any) =>
    `Awesome! The next step is to see if you will qualify for a $${ state.monthly_payment_amount } monthly mortgage payment. To ` +
    "help make this decision, lenders will calculate your Debt to Income Ratio." +
    " Let’s quickly calculate yours now.",
  description       : "",
  elementConstructor: CreateTextFieldQuestion,
  current           : "Q11",
  next              : "Q12",
  inputs            : [],
}

const Q12: ICreateTextFieldQuestion = {
  question          : () =>
    "What is your total monthly income from all sources before any taxes or deductions? What is your total monthly income from all sources before any taxes or deductions?",
  description       : "Enter your GROSS income, not what you end up taking home.",
  elementConstructor: CreateTextFieldQuestion,
  current           : "Q12",
  next              : "Q13",
  inputs            : [
    {
      value: "monthly_income",
      text : "Enter Total Monthly Income",
    },
  ],
}

const Q13: ICreateTextFieldQuestion = {
  question          : () =>
    "OK. Now let’s look at your expenses. Enter your monthly payment for any that apply...",
  description       :
    "Don’t list expenses like utilities, mobile payments, insurance, etc.  Only those items on your credit report.",
  elementConstructor: CreateTextFieldQuestion,
  current           : "Q13",
  next              : "Q14",
  inputs            : [
    {
      value: "auto_expense",
      text : "Auto Payments",
    },
    {
      value: "credit_card_expense",
      text : "Credit Cards",
    },
    {
      value: "student_loans",
      text : "Student Loans",
    },
    {
      value: "other_expenses",
      text : "Any Other",
    },
  ],
}

const Q14: basicTypes = {
  question          : (state: any) =>
    `${ state.first_name }, great news! Based on your information, your Debt to Income Ratio is ACCEPTABLE! `,
  description       : "",
  elementConstructor: CreateDiagramQuestion,
  current           : "Q14",
  next              : "Q15",
}

const Q15: ICreateRadio_CheckBox_Question = {
  question          : () =>
    "Lenders will analyze your employment history. Check any below that apply to you.",
  description       :
    "Checking any of these does not mean you will be denied. It just means you will need further documentation. We’ll help you with that.  ",
  elementConstructor: CreateCheckBoxQuestion,
  formName          : "member_buyer_details",
  current           : "Q14",
  next              : "Q16",
  answers           : [
    {
      value: "employment_gaps",
      text : "Employment gaps in the past 24 months",
    },
    {
      value: "changed_jobs",
      text : "Changed jobs in the past 12 months",
    },
    {
      value: "self_employed",
      text : " I’m Self-employed",
    },
    {
      value: "no_income_documentation",
      text : "Cannot document my income",
    },
    {
      value: "commissions_bonus",
      text : "Receive commissions or bonus income",
    },
    {
      value: "none",
      text : "None of the above",
    },
  ],
}

const Q16: ICreateRadio_CheckBox_Question = {
  question          : () =>
    "Your credit score plays a major role in both your approvability odds as well as the interest rate. What do you think your credit score is?",
  description       :
    "If you are unsure, give us your best guess and we’ll figure it out later. Don’t worry if your score isn’t where you want it, we have strategies to help you improve yours fast.",
  elementConstructor: CreateRadioQuestion,
  formName          : "credit_score_range",
  current           : "Q16",
  next              : "Q17",
  answers           : [
    {
      value: "1",
      text : "Less than 500",
    },
    {
      value: "2",
      text : "500 - 580",
    },
    {
      value: "3",
      text : "580 - 620",
    },
    {
      value: "4",
      text : "620 - 680",
    },
    {
      value: "5",
      text : "680 - 720",
    },
    {
      value: "6",
      text : "Above 720",
    },
  ],
}

const Q17: ICreateRadio_CheckBox_Question = {
  question          : () =>
    "Lenders pay close attention to items on your report as well.Check any that apply.",
  description       :
    "By asking, we can customize your Success Plan to address any of these.",
  elementConstructor: CreateCheckBoxQuestion,
  current           : "Q17",
  next              : "Q18",
  formName          : "member_buyer_details",
  answers           : [
    {
      value: "late_payments",
      text : "Late payments in last 12 months",
    },
    {
      value: "collections",
      text : "Collections in last 12 months",
    },
    {
      value: "late_student_loan",
      text : "Late student loan payments",
    },
    {
      value: "late_housing_payments",
      text : "Late housing or lease payments",
    },
    {
      value: "tax_lien_judgement_foreclosure",
      text : "Any tax liens, judgements, or foreclosures in the past 4 years",
    },
    {
      value: "bankruptcy",
      text : "Bankruptcy in the past 2 years",
    },
    {
      value: "taxes_not_current",
      text : "Not current on filing taxes",
    },
  ],
}

const Q18: ICreateRadio_CheckBox_Question = {
  question          : () => "Are any of your student loans in default?",
  description       : "This will help us further refine your Success Plan.",
  elementConstructor: CreateRadioQuestion,
  formName          : "member_buyer_student_details",
  current           : "Q18",
  next              : "Q19",
  answers           : [
    {
      value: "student_loan_default",
      text : "Yes",
    },
    {
      value: "student_loan_remediation",
      text : "Yes, but on remediation plan",
    },
    {
      value: "none",
      text : "No",
    },
  ],
}

const Q19: ICreateRadio_CheckBox_Question = {
  question          : () =>
    "You said you had a tax lien, judgement or foreclosure.Please check all that apply.",
  description       : "This will help us further refine your Success Plan.",
  elementConstructor: CreateCheckBoxQuestion,
  formName          : "member_buyer_details",
  current           : "Q19",
  next              : "Q20",
  answers           : [
    {
      value: "tax_lien",
      text : "Tax lien within the past 24 months",
    },
    {
      value: "foreclosure_24_months",
      text : "Foreclosure within past 24 months",
    },
    {
      value: "foreclosure_36_months",
      text : "Foreclosure within past 36 months",
    },
    {
      value: "foreclosure_48_months",
      text : "Foreclosure within past 48 months",
    },
    {
      value: "judgement",
      text : "Judgement",
    },
  ],
}

const Q20: ICreateRadio_CheckBox_Question = {
  question          : () =>
    "Good work, you’re almost done. Now, let’s take a quick look at your current living situation…",
  description       : "Lenders will analyze your past 2 years living arrangements. ",
  elementConstructor: CreateRadioQuestion,
  formName          : "living_situation",
  current           : "Q20",
  next              : "Q21",
  answers           : [
    {
      value: "1",
      text : "I rent",
    },
    {
      value: "2",
      text : "I live rent free",
    },
    {
      value: "3",
      text : "I own a home",
    },
  ],
}

const Q21: ICreateRadio_CheckBox_Question = {
  question          : () =>
    "Good work, you’re almost done. Now, let’s take a quick look at your current living situation…",
  description       : "",
  elementConstructor: CreateRadioQuestion,
  current           : "Q21",
  next              : "Q22",
  formName          : "veteran",
  answers           : [
    {
      value: "1",
      text : "I’m a Veteran",
    },
    {
      value: "0",
      text : "I’m Not a Veteran",
    },
  ],
}

const Q22: ICreateAutoCompleteQuestion = {
  question          : () =>
    "And finally, where would you like to live? A major part of your mortgage payment is taxes. By providing a general area, we can calculate your taxes!",
  description       :
    "Provide at least one location.  You can change this later no worries.",
  elementConstructor: CreateAutoCompleteQuestion,
  formName          : "living_states",
  current           : "Q22",
  next              : "Q23",
  inputs            : [
    {
      value: "live_state_1",
      text : "Enter City",
    },
    {
      value: "live_state_2",
      text : "Enter City",
    },
    {
      value: "live_state_3",
      text : "Enter City",
    },
  ],
}

const Q23: basicTypes = {
  question          : () => "",
  description       : "",
  elementConstructor: CreateEndQuestion,
  current           : "Q23",
  next              : "Q23",
}

const Q12C: ICreateCOTextFieldQuestion = {
  question          : () =>
    `What is your total monthly income from all sources before any taxes or deductions?`,
  coQuestion        : (state: any) =>
    `What is ${ state.co_first_name }\`s total monthly income from all sources before any taxes or deductions?`,
  description       : "Enter your GROSS income, not what you end up taking home.",
  elementConstructor: CreateCOTextFieldQuestion,
  current           : "Q12C",
  next              : "Q13C",
  inputs            : [
    {
      value: "monthly_income",
      text : "Enter Total Monthly Income",
    },
  ],
  coInputs          : [
    {
      value: "co_monthly_income",
      text : "Enter Total Monthly Income",
    },
  ],
}

const Q13C: ICreateDoubledTextFieldQuestion = {
  question          : () =>
    `Lenders pay close attention to items on your report as well. Check any that apply.`,
  description       : "Enter your GROSS income, not what you end up taking home.",
  elementConstructor: CreateDoubledTextFieldQuestion,
  current           : "Q13C",
  next              : "Q14C",
  inputs            : [
    {
      value: "auto_expense",
      text : "Auto Payments",
    },
    {
      value: "credit_card_expense",
      text : "Credit Cards",
    },
    {
      value: "student_loans",
      text : "Student Loans",
    },
    {
      value: "other_expenses",
      text : "Any Other",
    },
  ],
  coInputs          : [
    {
      value: "co_auto_expense",
      text : "Auto Payments",
    },
    {
      value: "co_credit_card_expense",
      text : "Credit Cards",
    },
    {
      value: "co_student_loans",
      text : "Student Loans",
    },
    {
      value: "co_other_expenses",
      text : "Any Other",
    },
  ],
}
const Q14C: basicTypes = {
  question          : (state: any) =>
    `${ state.first_name }, great news! Based on your information, your Debt to Income Ratio is ACCEPTABLE! `,
  description       : "",
  elementConstructor: CreateDiagramQuestion,
  current           : "Q14C",
  next              : "Q15C",
}

const Q15C: ICreateDoubledCheck_Radio_BoxQuestion = {
  question          : () =>
    "Lenders will analyze your employment history. Check any below that apply to you.",
  description       :
    "Checking any of these does not mean you will be denied. It just means you will need further documentation. We’ll help you with that.  ",
  elementConstructor: CreateDoubledCheckBoxQuestion,
  formName          : "credit_score_range",
  co_formName       : "co_credit_score_range",
  current           : "Q15C",
  next              : "Q16C",
  answers           : [
    {
      value: "employment_gaps",
      text : "Employment gaps in the past 24 months",
    },
    {
      value: "changed_jobs",
      text : "Changed jobs in the past 12 months",
    },
    {
      value: "self_employed",
      text : " I’m Self-employed",
    },
    {
      value: "no_income_documentation",
      text : "Cannot document my income",
    },
    {
      value: "commissions_bonus",
      text : "Receive commissions or bonus income",
    },
    {
      value: "none",
      text : "None of the above",
    },
  ],
  co_answers        : [
    {
      value: "co_employment_gaps",
      text : "Employment gaps in the past 24 months",
    },
    {
      value: "co_changed_jobs",
      text : "Changed jobs in the past 12 months",
    },
    {
      value: "co_self_employed",
      text : " I’m Self-employed",
    },
    {
      value: "co_no_income_documentation",
      text : "Cannot document my income",
    },
    {
      value: "co_commissions_bonus",
      text : "Receive commissions or bonus income",
    },
    {
      value: "none",
      text : "None of the above",
    },
  ],
}
const Q16C: ICreateDoubledCheck_Radio_BoxQuestion = {
  question          : () =>
    "Your credit score plays a major role in both your approvability odds as well as the interest rate. What do you think your credit score is?",
  description       :
    "If you are unsure, give us your best guess and we’ll figure it out later. Don’t worry if your score isn’t where you want it, we have strategies to help you improve yours fast.",
  elementConstructor: CreateDoubledRadioQuestion,
  formName          : "member_buyer_details",
  co_formName       : "co_member_buyer_details",
  current           : "Q16C",
  next              : "Q17C",
  answers           : [
    {
      value: "1",
      text : "Less than 500",
    },
    {
      value: "2",
      text : "500 - 580",
    },
    {
      value: "3",
      text : "580 - 620",
    },
    {
      value: "4",
      text : "620 - 680",
    },
    {
      value: "5",
      text : "680 - 720",
    },
    {
      value: "6",
      text : "Above 720",
    },
  ],
  co_answers        : [
    {
      value: "1",
      text : "Less than 500",
    },
    {
      value: "2",
      text : "500 - 580",
    },
    {
      value: "3",
      text : "580 - 620",
    },
    {
      value: "4",
      text : "620 - 680",
    },
    {
      value: "5",
      text : "680 - 720",
    },
    {
      value: "6",
      text : "Above 720",
    },
  ],
}
const Q17C: ICreateDoubledCheck_Radio_BoxQuestion = {
  question          : () =>
    "Lenders will analyze your employment history. Check any below that apply to you.",
  description       :
    "Checking any of these does not mean you will be denied. It just means you will need further documentation. We’ll help you with that.  ",
  elementConstructor: CreateDoubledCheckBoxQuestion,
  formName          : "member_buyer_details",
  co_formName       : "co_member_buyer_details",
  current           : "Q17C",
  next              : "Q18C",
  answers           : [
    {
      value: "late_payments",
      text : "Late payments in last 12 months",
    },
    {
      value: "collections",
      text : "Collections in last 12 months",
    },
    {
      value: "late_student_loan",
      text : "Late student loan payments",
    },
    {
      value: "late_housing_payments",
      text : "Late housing or lease payments",
    },
    {
      value: "tax_lien_judgement_foreclosure",
      text : "Any tax liens, judgements, or foreclosures in the past 4 years",
    },
    {
      value: "bankruptcy",
      text : "Bankruptcy in the past 2 years",
    },
    {
      value: "taxes_not_current",
      text : "Not current on filing taxes",
    },
  ],
  co_answers        : [
    {
      value: "late_payments",
      text : "Late payments in last 12 months",
    },
    {
      value: "collections",
      text : "Collections in last 12 months",
    },
    {
      value: "late_student_loan",
      text : "Late student loan payments",
    },
    {
      value: "late_housing_payments",
      text : "Late housing or lease payments",
    },
    {
      value: "tax_lien_judgement_foreclosure",
      text : "Any tax liens, judgements, or foreclosures in the past 4 years",
    },
    {
      value: "bankruptcy",
      text : "Bankruptcy in the past 2 years",
    },
    {
      value: "taxes_not_current",
      text : "Not current on filing taxes",
    },
  ],
}

const Q18C: ICreateDoubledCheck_Radio_BoxQuestion = {
  question          : () => "Are any of your student loans in default?",
  description       : "This will help us further refine your Success Plan.",
  elementConstructor: CreateDoubledRadioQuestion,
  formName          : "member_buyer_student_details",
  co_formName       : "co_member_buyer_student_details",
  current           : "Q18C",
  next              : "Q19C",
  answers           : [
    {
      value: "student_loan_default",
      text : "Yes",
    },
    {
      value: "student_loan_remediation",
      text : "Yes, but on remediation plan",
    },
    {
      value: "none",
      text : "No",
    },
  ],
  co_answers        : [
    {
      value: "student_loan_default",
      text : "Yes",
    },
    {
      value: "student_loan_remediation",
      text : "Yes, but on remediation plan",
    },
    {
      value: "none",
      text : "No",
    },
  ],
}
const Q19C: ICreateDoubledCheck_Radio_BoxQuestion = {
  question          : () =>
    "You said you had a tax lien, judgement or foreclosure.Please check all that apply.",
  description       : "This will help us further refine your Success Plan.",
  elementConstructor: CreateDoubledRadioQuestion,
  formName          : "member_buyer_details",
  co_formName       : "co_member_buyer_details",
  current           : "Q19C",
  next              : "Q20C",
  answers           : [
    {
      value: "tax_lien",
      text : "Tax lien within the past 24 months",
    },
    {
      value: "foreclosure_24_months",
      text : "Foreclosure within past 24 months",
    },
    {
      value: "foreclosure_36_months",
      text : "Foreclosure within past 36 months",
    },
    {
      value: "foreclosure_48_months",
      text : "Foreclosure within past 48 months",
    },
    {
      value: "judgement",
      text : "Judgement",
    },
  ],
  co_answers        : [
    {
      value: "tax_lien",
      text : "Tax lien within the past 24 months",
    },
    {
      value: "foreclosure_24_months",
      text : "Foreclosure within past 24 months",
    },
    {
      value: "foreclosure_36_months",
      text : "Foreclosure within past 36 months",
    },
    {
      value: "foreclosure_48_months",
      text : "Foreclosure within past 48 months",
    },
    {
      value: "judgement",
      text : "Judgement",
    },
  ],
}
const Q20C: ICreateRadioTextQuestion = {
  question          : () =>
    "Good work, you’re almost done. Now, let’s take a quick look at your current living situation…",
  question1         : () => "My monthly housing payment is",
  co_question       : (state: any) =>
    `${ state.co_first_name }’s current living situation is …`,
  co_question1      : (state: any) =>
    `${ state.co_first_name }’s monthly housing payment is (only if does not live with you)`,
  description       : "Lenders will analyze your past 2 years living arrangements.",
  elementConstructor: CreateRadioTextQuestion,
  co_formName       : "co_living_situation",
  formName          : "living_situation",
  current           : "Q20C",
  next              : "Q21C",
  answers           : [
    {
      value: "1",
      text : "I rent",
    },
    {
      value: "2",
      text : "I live rent free",
    },
    {
      value: "3",
      text : "I own a home",
    },
  ],
  co_answers        : [
    {
      value: "1",
      text : "Rents",
    },
    {
      value: "2",
      text : "Lives rent free",
    },
    {
      value: "3",
      text : "Owns a home",
    },
    {
      value: "4",
      text : "Lives with me",
    },
  ],
  inputs            : [
    {
      value: "housing_payment_amount",
      text : "Enter Monthly Housing Payment",
    },
  ],
  co_inputs         : [
    {
      value: "co_housing_payment_amount",
      text : "Enter Monthly Housing Payment",
    },
  ],
}
const Q21C: ICreateVeteranQuestion = {
  question          : () => "Let’s see if you qualify for special veteran programs.",
  co_question       : (state: any) => `Is ${ state.co_first_name } a veteran?`,
  description       : "",
  elementConstructor: CreateVeteranQuestion,
  formName          : "veteran",
  co_formName       : "co_veteran",
  current           : "Q21C",
  next              : "Q22",

  answers   : [
    {
      value: "1",
      text : "I’m a Veteran",
    },
    {
      value: "0",
      text : "I’m Not a Veteran",
    },
  ],
  co_answers: [
    {
      value: "1",
      text : "Yes",
    },
    {
      value: "0",
      text : "No",
    },
  ],
}

export const questionsList = {
  Q1  : Q1,
  Q2  : Q2,
  Q3  : Q3,
  Q4  : Q4,
  Q5  : Q5,
  Q6  : Q6,
  Q7  : Q7,
  Q8  : Q8,
  Q9  : Q9,
  Q10 : Q10,
  Q11 : Q11,
  Q12 : Q12,
  Q13 : Q13,
  Q14 : Q14,
  Q15 : Q15,
  Q16 : Q16,
  Q17 : Q17,
  Q18 : Q18,
  Q19 : Q19,
  Q20 : Q20,
  Q21 : Q21,
  Q22 : Q22,
  Q12C: Q12C,
  Q13C: Q13C,
  Q14C: Q14C,
  Q15C: Q15C,
  Q16C: Q16C,
  Q17C: Q17C,
  Q18C: Q18C,
  Q19C: Q19C,
  Q20C: Q20C,
  Q21C: Q21C,
  Q23 : Q23,
}

export type QuestionKeyType = keyof typeof questionsList;
export type QuestionsType = typeof questionsList[QuestionKeyType];
