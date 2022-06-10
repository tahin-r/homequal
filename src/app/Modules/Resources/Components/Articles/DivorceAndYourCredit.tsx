import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { SimpleTypography, TitleTypography } from './sharedStyles'
import { Container } from '@material-ui/core'

export const DivorceAndYourCredit:FC<any> = () => {
  return (
    <Container fixed>
      <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
        Mortgage after divorce
      </Typography>
      <TitleTypography fontWeight={ 'bold' }>
        This is not legal advice and should not be construed as such. You should always seek advice from your legal
        counsel.
      </TitleTypography>

      <SimpleTypography>
        A big decisions divorcing couples face is what to do with the home. The options for divorcing couples depend on
        a number of factors, such as how their property was financed and titled, whether one partner wants to stay in
        the home, the amount of equity they have in the home and their credit rating.
      </SimpleTypography>
      <SimpleTypography>
        As soon as you can, get a copy of your credit report (s) from the three main credit bureaus (Equifax, Experian,
        Transunion). Once you receive the report, determine:
      </SimpleTypography>
      <Box pl={ 4 }>
        <ul>
          <SimpleTypography>
            <li>
              The accounts that are yours only.
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              The accounts that are held jointly.
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              The accounts that someone may be an authorized user.
            </li>
          </SimpleTypography>
        </ul>
      </Box>

      <SimpleTypography>
        Contact the creditors and update your personal information such as: new address, employment and other necessary
        contact information.
      </SimpleTypography>
      <TitleTypography variant="h5" fontWeight={ 'bold' }>
        How to handle different types of accounts
      </TitleTypography>

      <SimpleTypography>
        <Typography variant="h6" fontWeight="bold" display="inline" component={ 'span' }>
          Accounts held by you only - { '' }
        </Typography>
        With you being the only one listed on this account, no changes need to be made unless you need to update your
        contact information and keep making your payments on time.
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant="h6" fontWeight="bold" display="inline" component={ 'span' }>
          Joint Accounts – { '' }
        </Typography>
        These accounts can sometimes be challenging to split; however, there are ways to protect the integrity of your
        credit:
        <Box pl={ 4 }>
          <ul>
            <SimpleTypography>
              <li>
                Checking/Savings/Investment Account(s): When applicable, open new individual accounts
              </li>
            </SimpleTypography>
            <SimpleTypography>
              <li>
                Auto Loan(s): Think about refinancing the auto loans into the names of the individual owners. This often
                is a simple process and starts by contacting the lien holder and following their directions.
              </li>
            </SimpleTypography>
          </ul>
        </Box>
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant="h6" fontWeight="bold" display="inline" component={ 'span' }>
          Mortgage Loan(s)
        </Typography>
        : With you being the only one listed on this account, no changes need to be made unless you need to update your
        contact information and keep making your payments on time.
      </SimpleTypography>
      <SimpleTypography>
        However, unless that partner’s name is also removed from the title, they can still benefit from the sale of and
        equity in the home, so it’s important to not only refinance but also update the title to reflect one owner. A
        quitclaim deed is commonly used to remove a spouse’s name from the title in a divorce.
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant="h6" fontWeight="bold" display="inline" component={ 'span' }>
          Authorized User – { '' }
        </Typography>
        While these accounts merely list you (or your ex) as an authorized user, the behavior of the other can impact
        your credit so it’s wise to immediately sever the authorization.
      </SimpleTypography>
      <SimpleTypography>
        Regardless of the decisions you make, the lender will want a copy of your divorce decree when you apply for a
        new loan or refinance so keep that in a safe place.
      </SimpleTypography>
      <SimpleTypography>
        It is highly recommended you speak with your attorney, financial planner and others to help you make the right
        decisions on the best way to purchase a home after divorce.
      </SimpleTypography>
    </Container>
  )
}
