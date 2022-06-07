import * as yup from 'yup'


export const QuestionsSchema: any  = {
  Q1: yup.object({
    first_name: yup.string().required('First name is required'),

    last_name: yup.string().required('Last name is required'),

    cell_phone: yup
      .string()
      .typeError('you must specify a number')
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        'Wrong cell number',
      )
      .required('Cell number is required'),

    email_address: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
  }),
  Q5: yup.object({
    co_first_name: yup.string().required('Last name is required'),

    co_last_name: yup.string().required('Last name is required'),

    co_cell_phone: yup
      .string()
      .typeError('You must specify a number')
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        'Wrong cell number',
      )
      .required('Cell number is required'),

    co_email_address: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
  }),

  Q8: yup.object({
    monthly_payment_amount: yup
      .string()
      .required('Monthly payment is required'),
  }),

  Q9: yup.object({
    home_savings: yup
      .string()
      .required('Available yo purchase money is required'),
  }),

  Q12: yup.object({
    monthly_income: yup
      .string()
      .required('Total monthly income is required'),
  }),

  Q12C: yup.object({
    monthly_income: yup
      .string()
      .required('Total monthly income is required'),

    co_monthly_income: yup
      .string()
      .required('Total monthly income is required'),
  }),

  Q20C: yup.object({
    housing_payment_amount: yup
      .string()
      .required('Monthly housing payments value is required'),

    co_housing_payment_amount: yup
      .string()
  }),

  Q22: yup.object({
    live_state_1: yup.string().required('One city is required!'),
  }),
}

export const refinanceQuestionsSchema: any  = {
  Q1: yup.object({
    first_name: yup.string().required('First name is required'),

    last_name: yup.string().required('Last name is required'),

    cell_phone: yup
        .string()
        .typeError('you must specify a number')
        .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            'Wrong cell number',
        )
        .required('Cell number is required'),

    email_address: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
  }),
  Q3: yup.object({
    property_value: yup.string().required('Property Value is required'),

    currently_owe: yup.string().required('Currently Owe is required')
  }),
  Q4: yup.object({
    interest_rate: yup.string().required('Interest rate is required')
  }),
  Q6: yup.object({
    address: yup.string().required('Address is required'),

    city: yup.string().required('City rate Value is required'),

    state: yup.string().required('State rate is required'),

    zip_code: yup.string().required('Zip code is required')
  })
}
