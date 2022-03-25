import { CreateAutoCompleteQuestion } from './helpers'
const Q1 = {
  question          : 'Hi, who do I have the pleasure of speaking with?',
  description       : 'HomeQual believes that it takes a team to meet your goals. By providing your contact information, you are ' +
    'giving us permission to contact you in order to help you with your home ownership goals. ' +
    'If, at any time, you would like to opt-out, please let us know by using the opt-out button on your profile page.',
  elementConstructor: 'createTextFieldQuestion',
  next              : 'Q2',
  inputs            : [
    {
      value: 'first_name',
      text : 'First Name',
    },
    {
      value: 'last_name',
      text : 'Last Name',
    },
    {
      value: 'email_address',
      text : 'Email',
    },
    {
      value: 'cell_phone',
      text : 'Mobile',
    },
  ],
}
const Q2 = {
  question          : 'Nice to meet you Dave. We will be sending you information you request, specifics about your purchasing ' +
    'ability, and home buying tips. How would you prefer we contact you?',
  description       : 'You will receive a message shortly to confirm your contact information along with your member account access instructions.',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q3',
  answers           : [
    {
      value: '1',
      text : 'Text Me',
    },
    {
      value: '2',
      text : 'Email Me',
    },
  ],
}
const Q3 = {
  question          : 'Let’s get started! Who will be on the loan application with you?',
  description       : 'This isn’t who will be living in your new home, but who will be on the mortgage with you.',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q4',
  answers           : [
    {
      value: '1',
      text : 'Just Me',
    },
    {
      value: '2',
      text : 'My Spouse',
    },
    {
      value: '3',
      text : 'Someone Else',
    },
  ],
}


const Q4 = {
  question          : 'In order to determine what types of loans you may qualify for, we`ll need to know your marital status',
  description       : '',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q5',
  answers           : [
    {
      value: '1',
      text : 'I`m married',
    },
    {
      value: '0',
      text : 'I`m not married',
    },
    {
      value: '3',
      text : 'I`m separated',
    },
  ],
}

const Q5 = {
  question          : 'Who will be on the loan with you',
  description       : '',
  elementConstructor: 'createTextFieldQuestion',
  next              : 'Q6',
  inputs            : [
    {
      value: 'co_first_name',
      text : 'First Name',
    },
    {
      value: 'co_last_name ',
      text : 'Last Name',
    },
    {
      value: 'co_email_address',
      text : 'Email',
    },
    {
      value: 'co_cell_phone ',
      text : 'Mobile',
    },
  ],
}

const Q6 = {
  question          : 'What is Name marital status',
  description       : '',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q7',
  answers           : [
    {
      value: '1',
      text : 'Married',
    },
    {
      value: '0',
      text : 'Not married',
    },
    {
      value: '3',
      text : 'Separated',
    },
  ],
}
const Q7 = {
  question          : 'Select an approximate date',
  description       : 'TIP:  If you are leasing now, you might want to enter your lease expiration date.',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q8',
  answers           : [
    {
      value: '1',
      text : '1 – 3 Months',
    },
    {
      value: '0',
      text : '4 – 6 Months',
    },
    {
      value: '3',
      text : '7 – 9 Months',
    },
    {
      value: '4',
      text : '9 + Months',
    },
  ],
}
const Q8 = {
  question          : 'What is the maximum you want to spend monthly on your mortgage payment?',
  description       : 'We may find that you qualify for more or less, and we will show you that later.',
  elementConstructor: 'createTextFieldQuestion',
  next              : 'Q9',
  inputs            : [
    {
      value: 'monthy_payment_amount',
      text : 'Maximum Monthly Payment ',
    },
  ],
}
const Q9 = {
  question          : 'How much money will you have available to purchase your new home?',
  description       : 'Tip:  Enter the amount you will have saved by the time you apply for a mortgage.',
  elementConstructor: 'createTextFieldQuestion',
  next              : 'Q10',
  inputs            : [
    {
      value: 'home_savings',
      text : 'Enter Amount Available ',
    },
  ],
}

const Q10 = {
  question          : 'What is the source of your $12,000 funds? Check any that apply.',
  description       : 'Tip: When starting the mortgage process, be careful moving money in and out of accounts or having any large deposits.  Lenders will ask a lot of questions if you do!',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q11',
  answers           : [
    {
      value: '1',
      text : 'Checking / Savings',
    },
    {
      value: '0',
      text : '401K',
    },
    {
      value: '3',
      text : 'Stocks / Crypto',
    },
    {
      value: '4',
      text : 'Gift Funds',
    },
    {
      value: '5',
      text : 'Other',
    },
  ],
}
const Q11 = {
  question          : 'Awesome!  The next step is to see if you will qualify for a $2,200 monthly mortgage payment.To help make this decision, lenders will calculate your Debt to Income Ratio.' +
    ' Let’s quickly calculate yours now.',
  description       : '',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q12',
  answers           : [],
}

const Q12 = {
  question          : 'What is your total monthly income from all sources before any taxes or deductions? What is your total monthly income from all sources before any taxes or deductions?',
  description       : 'Enter your GROSS income, not what you end up taking home.',
  elementConstructor: 'createTextFieldQuestion',
  next              : 'Q13',
  inputs            : [
    {
      value: 'monthly_income',
      text : 'Enter Total Monthly Income',
    },
  ],
}
const Q13 = {
  question          : 'OK. Now let’s look at your expenses. Enter your monthly payment for any that apply...',
  description       : 'Don’t list expenses like utilities, mobile payments, insurance, etc.  Only those items on your credit report.',
  elementConstructor: 'createTextFieldQuestion',
  next              : 'Q14',
  inputs            : [
    {
      value: 'auto_expense ',
      text : 'Auto Payments',
    },
    {
      value: 'credit_card_expense ',
      text : 'Credit Cards',
    },
    {
      value: 'student_loans',
      text : 'Student Loans',
    },
    {
      value: 'other_expenses',
      text : 'Any Other',
    },
  ],
}
const Q14 = {
  question          : 'Great news! Based on your information, your Debt to Income Ratio is ACCEPTABLE! ',
  description       : '',
  elementConstructor: 'createTextFieldQuestion',
  next              : 'Q15',
  inputs            : [],
}
const Q15 = {
  question          : 'Lenders will analyze your employment history. Check any below that apply to you.',
  description       : 'Checking any of these does not mean you will be denied. It just means you will need further documentation. We’ll help you with that.  ',
  elementConstructor: 'CreateCheckBoxQuestion',
  next              : 'Q16',
  answers           : [
    {
      value: 'employment_gaps',
      text : 'Employment gaps in the past 24 months',
    },
    {
      value: 'changed_jobs',
      text : 'Changed jobs in the past 12 months',
    },
    {
      value: 'self_employed',
      text : ' I’m Self-employed',
    },
    {
      value: 'no_income_documentation',
      text : 'Cannot document my income',
    },
    {
      value: 'commissions_bonus',
      text : 'Receive commissions or bonus income',
    },
    {
      value: 'none',
      text : 'None of the above',
    },
  ],
}
const Q16 = {
  question          : 'Your credit score plays a major role in both your approvability odds as well as the interest rate. What do you think your credit score is?',
  description       : 'If you are unsure, give us your best guess and we’ll figure it out later. Don’t worry if your score isn’t where you want it, we have strategies to help you improve yours fast.',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q17',
  answers           : [
    {
      value: '1',
      text : 'Less than 500',
    },
    {
      value: '2',
      text : '500 - 580',
    },
    {
      value: '3',
      text : '580 - 620',
    },
    {
      value: '4',
      text : '620 - 680',
    },
    {
      value: '5',
      text : '680 - 720',
    },
    {
      value: '6',
      text : 'Above 720',
    },
  ],
}

const Q17 = {
  question          : 'Lenders pay close attention to items on your report as well.Check any that apply.',
  description       : 'By asking, we can customize your Success Plan to address any of these.',
  elementConstructor: 'CreateCheckBoxQuestion',
  next              : 'Q18',
  answers           : [
    {
      value: '1',
      text : 'Late payments in last 12 months',
    },
    {
      value: '1',
      text : 'Collections in last 12 months',
    },
    {
      value: '1',
      text : 'Late student loan payments',
    },
    {
      value: '1',
      text : 'Late housing or lease payments',
    },
    {
      value: '1',
      text : 'Any tax liens, judgements, or foreclosures in the past 4 years',
    },
    {
      value: '1',
      text : 'Bankruptcy in the past 2 years',
    },
    {
      value: '1',
      text : 'Not current on filing taxes',
    },
  ],
}
const Q18 = {
  question          : 'Are any of your student loans in default?',
  description       : 'This will help us further refine your Success Plan.',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q19',
  answers           : [
    {
      value: 'student_loan_default ',
      text : 'Yes',
    },
    {
      value: '2',
      text : 'Yes, but on remediation plan',
    },
    {
      value: 'none',
      text : 'No',
    },
  ],
}
const Q19 = {
  question          : 'You said you had a tax lien, judgement or foreclosure.Please check all that apply.',
  description       : 'This will help us further refine your Success Plan.',
  elementConstructor: 'CreateCheckBoxQuestion',
  next              : 'Q20',
  answers           : [
    {
      value: 'tax_lien',
      text : 'Tax lien within the past 24 months',
    },
    {
      value: 'foreclosure_24_months',
      text : 'Foreclosure within past 24 months',
    },
    {
      value: 'foreclosure_36_months',
      text : 'Foreclosure within past 36 months',
    },
    {
      value: 'foreclosure_48_months',
      text : 'Foreclosure within past 48 months',
    },
    {
      value: 'judgement',
      text : 'Judgement',
    },
  ],
}
const Q20 = {
  question          : 'Good work, you’re almost done. Now, let’s take a quick look at your current living situation…',
  description       : 'Lenders will analyze your past 2 years living arrangements. ',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q21',
  answers           : [
    {
      value: '1',
      text : 'I rent',
    },
    {
      value: '2',
      text : 'I live rent free',
    },
    {
      value: '3',
      text : 'I own a home',
    },
  ],
}
const Q21 = {
  question          : 'Good work, you’re almost done. Now, let’s take a quick look at your current living situation…',
  description       : '',
  elementConstructor: 'CreateRadioQuestion',
  next              : 'Q22',
  answers           : [
    {
      value: '1',
      text : 'I’m a Veteran',
    },
    {
      value: '0',
      text : 'I’m Not a Veteran',
    },
  ],
}
const Q22 = {
  question          : 'And finally, where would you like to live? A major part of your mortgage payment is taxes. By providing a general area, we can calculate your taxes!',
  description       : 'Provide at least one location.  You can change this later no worries.',
  elementConstructor: 'CreateAutoCompleteQuestion',
  next              : 'Q23',
  inputs            : [
    {
      value: 'live_state_1 ',
      text : 'Enter City',
    },
    {
      value: 'live_state_2 ',
      text : 'Enter City',
    },
    {
      value: 'student_loans',
      text : 'Enter City',
    },
  ],
}

export const questionsList = {
  Q1 : Q1,
  Q2 : Q2,
  Q3 : Q3,
  Q4 : Q4,
  Q5 : Q5,
  Q6 : Q6,
  Q7 : Q7,
  Q8 : Q8,
  Q9 : Q9,
  Q10: Q10,
  Q11: Q11,
  Q12: Q12,
  Q13: Q13,
  Q14: Q14,
  Q15: Q15,
  Q16: Q16,
  Q17: Q17,
  Q18: Q18,
  Q19: Q19,
  Q20: Q20,
  Q21: Q21,
  Q22: Q22,
}

export type QuestionKey = keyof typeof questionsList;
export type QuestionsType = typeof questionsList[QuestionKey]




