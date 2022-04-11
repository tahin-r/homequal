import * as yup from "yup"

export const QuestionsSchema: any = {
  Q1: yup.object({
    first_name: yup.string().required("First name is required"),

    last_name: yup.string().required("Last name is required"),

    cell_phone: yup
      .string()
      .typeError("you must specify a number")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Wrong cell number",
      )
      .required("Cell number is required"),

    email_address: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  }),
  Q5: yup.object({
    co_first_name: yup.string().required("Last name is required"),

    co_last_name: yup.string().required("Last name is required"),

    co_cell_phone: yup
      .string()
      .typeError("You must specify a number")
      .matches(
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
        "Wrong cell number",
      )
      .required("Cell number is required"),

    co_email_address: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
  }),

  Q8: yup.object({
    monthly_payment_amount: yup
      .number()
      .typeError("You must specify a number")
      .required("Monthly payment is required"),
  }),

  Q9: yup.object({
    home_savings: yup
      .number()
      .typeError("You must specify a number")
      .required("Available yo purchase money is required"),
  }),

  Q12: yup.object({
    monthly_income: yup
      .number()
      .typeError("You must specify a number")
      .required("Total monthly income is required"),
  }),

  Q12C: yup.object({
    monthly_income: yup
      .number()
      .typeError("You must specify a number")
      .required("Total monthly income is required"),

    co_monthly_income: yup
      .number()
      .typeError("You must specify a number")
      .required("Total monthly income is required"),
  }),

  Q13: yup.object({
    auto_expense: yup
      .number()
      .typeError("You must specify a number")
      .required("Auto payments value is required"),

    credit_card_expense: yup
      .number()
      .typeError("You must specify a number")
      .required("Credit card payments is required"),

    student_loans: yup
      .number()
      .typeError("You must specify a number")
      .required("Student loans payments is required"),

    other_expenses: yup
      .number()
      .typeError("You must specify a number")
      .required("Other expenses is required"),
  }),

  Q13C: yup.object({
    auto_expense: yup
      .number()
      .typeError("You must specify a number")
      .required("Auto payments value is required"),

    credit_card_expense: yup
      .number()
      .typeError("You must specify a number")
      .required("Credit card payments is required"),

    student_loans: yup
      .number()
      .typeError("You must specify a number")
      .required("Student loans payments is required"),

    other_expenses: yup
      .number()
      .typeError("You must specify a number")
      .required("Other expenses is required"),

    co_auto_expense: yup
      .number()
      .typeError("You must specify a number")
      .required("Auto payments value is required"),

    co_credit_card_expense: yup
      .number()
      .typeError("You must specify a number")
      .required("Credit card payments is required"),

    co_student_loans: yup
      .number()
      .typeError("You must specify a number")
      .required("Student loans payments is required"),

    co_other_expenses: yup
      .number()
      .typeError("You must specify a number")
      .required("Other expenses is required"),
  }),

  Q22: yup.object({
    live_state_1: yup.string().required("One city is required!"),
  }),
}
