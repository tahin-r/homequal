import React, { FC }  from 'react';
import { Typography } from '@mui/material';
import { SimpleTypography, TitleTypography } from './sharedStyles';
import { Container }                         from '@material-ui/core';

export const MortgageAndStudentLoanDebt:FC<any> = () => {
  return (
    <Container fixed>
      <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
        Mortgage and Student Loan debt
      </Typography>
      <SimpleTypography fontStyle={ 'italic' }>
        Today, more than two-thirds of college graduates have student debt. In fact, Americans are now more burdened by
        student loan debt than they are by credit card or auto debt.

      </SimpleTypography>
      <SimpleTypography fontStyle={ 'italic' }>
        However, student loans don’t have to stop you from buying a home if you prepare properly. So what are your
        options? Here are a few things to keep in mind.
      </SimpleTypography>
      <TitleTypography variant="h4">
        You might be able to lower your payments!
      </TitleTypography>

      <SimpleTypography>
        When you apply for a mortgage, lenders are more concerned with how much you pay monthly for your student loans,
        not the overall balance. Similar to credit card payments and auto payments, lenders will add your student loan
        payments to your monthly expenses to determine your risk level.
      </SimpleTypography>
      <SimpleTypography>
        If you have several loans, you may be able to consolidate your loans into a lower monthly payment. Additionally,
        if your income is not as high as it was when the monthly payment was first calculated, you may qualify for a
        payment reduction. Many borrowers have seen their payments cut in half or more.
      </SimpleTypography>

      <TitleTypography variant="h6">
        What if my loans are in deferment?
      </TitleTypography>
      <SimpleTypography>
        If you are applying for a conventional loan, you would need to prove the monthly payment amount. This amount may
        show on your credit report already, if not, you would need to get a letter from the servicer showing the
        required monthly payment.
      </SimpleTypography>
      <SimpleTypography>
        Conversely, any government-insured loan (FHA, VA, and USDA) that is deferred for 12 months or longer, the lender
        does not need to account for the liability when qualifying you. If you only
        have 10 months left in your deferment, the lender will count this debt. This is a great conversation to have
        with your lender.
      </SimpleTypography>

      <TitleTypography variant="h6">
        What if my loans are in default?
      </TitleTypography>
      <SimpleTypography>
        If the defaulted student loan appears on your credit report and you are applying for a conventional mortgage,
        then lenders typically require you to provide a letter of explanation, which addresses why the default occurred
        and any steps you took to resolve the issue.
      </SimpleTypography>
      <SimpleTypography>
        If you are applying for a FHA, VA or USDA loan and you are in default, it becomes tricky. There is a database
        ran by the government that keeps track of borrowers who are delinquent on, defaulted on or had a claim paid on a
        government-backed loan, including student loans. If you are in this database, you are required to resolve the
        default by bringing the loan current or setting up a payment plan if you want to qualify for a government-backed
        mortgage program. In most cases, once in a payment plan, you have to make at least 6 on-time payments before you
        can apply for another loan.
      </SimpleTypography>
      <TitleTypography variant="h6">
        Get a handle of your student loans before you apply.
      </TitleTypography>
      <SimpleTypography>
        If you have loans in default and you want to purchase a home it is important that you resolve
        this issue prior to contacting an agent or lender. The good news is buyers everyday purchase
        homes with student loans.
      </SimpleTypography>
    </Container>
  )
}
