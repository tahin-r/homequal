import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { Box, Typography } from '@mui/material'
import { SimpleTypography, TitleTypography } from './sharedStyles'
import { Iarticle } from '../../ResourcesData'

export const IsYourCreditScoreMortgageReady: FC<Iarticle> = (props) => {
  return (
    <>
      <Container fixed>
        <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
          Is your credit score “mortgage ready”?
        </Typography>

        <SimpleTypography fontStyle='italic'>
          Your credit score is a 3-digit number that helps lenders decide if you are a good investment. A high credit
          score demonstrates you have a history of borrowing money and successfully paying it back. It shows you have
          the discipline to make payments on time and take control of your finances. FICO scores range from 350 to 850.
        </SimpleTypography>
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          What if there's incorrect information on my credit report?
        </TitleTypography>
        <SimpleTypography>
          If you find incorrect information, it's important you get it corrected. Some errors will not impact your
          score, while others can impact it greatly. It’s important to have communications in writing so contact the
          creditor and explain what is in error and ask them to correct it. If you feel uneasy about taking this task on
          your own, contact a HomeQual Advisor who can help guide you through the credit maze.
        </SimpleTypography>
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          How do I improve or maintain my credit score?
        </TitleTypography>
        <SimpleTypography>
          Make sure you pay your bills on time. You do not want payments to fall 30-days or more behind as it will lower
          your score. If you feel you may fall behind, contact the creditor and ask them if you can pay a smaller amount
          or get more time to pay. Below are 7 steps to improving your score:
        </SimpleTypography>
        <Box pl={ 4 }>
          <ol>
            <SimpleTypography>
              <li>
                <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' } mr={1}>
                   Prepare for uncertainties
                </Typography>
                 and budget conservatively. Try to build a financial cushion to cover expenses for a month or two.
              </li>
            </SimpleTypography>
            <SimpleTypography>
              <li>
                <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' } mr={1}>
                  Build Golden Accounts:
                </Typography>
                Golden accounts are the building blocks of your credit scores. A golden account is any account that is
                at least 4 years old and in good standing. Protect these at all costs. Do not fall behind on these
                accounts nor close them.
              </li>
            </SimpleTypography>
            <SimpleTypography>
              <li>
                <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold'} mr={1}>
                  Build Your On-Time Payment History:
                </Typography>
                Start by making sure all of your accounts have a perfect payment history for 12 months. Then make it 24
                months. If you find yourself in a bind, contact the creditors BEFORE it becomes 30-days late and see if
                you can work something out with them.
              </li>
              <li>
                <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' } mr={1}>
                  Limit New Accounts:
                </Typography>
                Once you have a few revolving accounts and at least one installment loan on your credit report, limit
                the number of new accounts to no more than one per year.
              </li>
              <li>
                <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' } mr={1}>
                  Know Your FICO Scores:
                </Typography>
                When you set out to get a loan, the lender will be looking at your FICO Score. There are many credit
                scores sold today and most of them are educational scores, not FICO scores. This means your Credit Karma
                score may not be close to what your actual score is.
              </li>
              <li>
                <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' } mr={1}>
                  Be Smart In A Financial Pinch:
                </Typography>
                If you find yourself in a financial pinch, pay off the debts that appear on your credit report first and
                negotiate with the lenders that are not reporting to the bureaus. It is important to contact them so
                that your account is not sold to a collection company.
              </li>
            </SimpleTypography>
          </ol>
        </Box>

        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Should I close some of my credit cards or other accounts?
        </TitleTypography>

        <SimpleTypography>
          A major component of your credit score calculation is the length of time you have had credit. So closing a
          credit card that you’ve had for a long time can lower your score. The credit scoring system also classifies
          credit cards into different categories. Cards from national banks are viewed favorable; however charge cards
          from department stores are not as favorable. Before you close an account, you want to make sure if it’s the
          right thing to do. Scores can fall or raise 30 points or more by this one decision.
          With you being the only one listed on this account, no changes need to be made unless you need to update your
          contact information and keep making your payments on time.
        </SimpleTypography>
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          What if someone else is hurting my credit score?
        </TitleTypography>
        <SimpleTypography>
          This typically involves a divorce. Just because a divorce decree states someone else may be responsible for
          payment, the creditors may look at it differently. Your credit score might be healthy, but any missed payments
          your previous partner makes will lower your score.
        </SimpleTypography>
        <TitleTypography variant="h5" fontWeight={ 'bold' }>
          Budget and save.
        </TitleTypography>
        <SimpleTypography>
          Look through your bank statements over the past few months and see if you find areas in which you can cut
          back. A few hundred dollars here and there add up and might be the difference between having enough money for
          closing or being just a little short.

          Trying to figure out the scoring methods is difficult. Make payments on time, don’t overuse your credit, and
          having a nice mix of revolving and installment debt is key. Keep an eye on your credit as it will play a major
          role in determining your interest rates and approvability.
        </SimpleTypography>
      </Container>
    </>
  )
}
