import React, { FC }                         from 'react';
import { Typography }                        from '@mui/material';
import { SimpleTypography, TitleTypography } from './sharedStyles';
import { Container }                         from '@material-ui/core';

export const FindingTheRightMortgage: FC<any> = () => {

  return (
    <Container fixed>
      <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
        Finding the Right Mortgage
      </Typography>
      <SimpleTypography fontStyle={ 'italic' }>
        Your mortgage is likely to be the biggest financial commitment of your life, so think carefully about it. There
        are a number of mortgages to choose from, some much riskier than others. Today, the most widely used mortgage is
        the 30-year fixed mortgage. The monthly payment is the same each month and cannot change, unless you refinance.
      </SimpleTypography>
      <SimpleTypography fontStyle={ 'italic' }>
        You will come across different loan types such as a conventional loan, FHA, VA or even an USDA mortgage. Each
        one has its advantages and once you speak with a loan officer, they will let you know which ones you qualify for
        and pros and cons of each.
      </SimpleTypography>
      <TitleTypography variant="h4">
        Mortgage Options
      </TitleTypography>
      <TitleTypography variant="h5">
        FHA mortgages
      </TitleTypography>
      <SimpleTypography>
        FHA mortgages allow for lower credit scores than most other loans. In fact, with some lenders, you may be able
        to get approved with a credit score as low as 500 (as long as you make at least a 10% down payment).
      </SimpleTypography>
      <SimpleTypography>
        The one caveat with FHA loans is that they require a Mortgage Insurance Premium both at closing and as part of
        your monthly payment. The exact cost of this varies based on your loan balance and down payment.
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Minimum down payment</Typography>
        : 3.5%
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Minimum credit score</Typography>
        : 580
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Who they’re best for</Typography>
        : First-time homebuyers, low-credit score buyers
      </SimpleTypography>
      <TitleTypography variant="h6">
        VA loans
      </TitleTypography>
      <SimpleTypography>
        Only homebuyers who are military veterans, current military members or their spouses can qualify for a VA loan.
        Applicants also need to meet certain service requirements, as well as obtain a Certificate of Eligibility from
        the VA.
      </SimpleTypography>
      <SimpleTypography>
        VA loans come with some of the lowest interest rates around, and there are also no minimum credit score or down
        payment requirements
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Minimum down payment</Typography>
        : Zero
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Minimum credit score</Typography>
        : None
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Who they’re best for</Typography>
        : Veterans, military members, spouses of veterans and military members
      </SimpleTypography>
      <TitleTypography variant="h6">
        USDA loans
      </TitleTypography>
      <SimpleTypography>
        They’re reserved for buyers in more rural parts of the country, and they’re only available in certain areas.
        Borrowers also need to fall under the set income threshold for their community. Like VA loans, USDA loans
        require no down payment.
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Minimum down payment</Typography>
        : Zero
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Minimum credit score</Typography>
        : Typically 640, though it varies by lender
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Who they’re best for</Typography>
        : Rural homebuyers, low-income buyers, buyers who have no down payment savings
      </SimpleTypography>
      <TitleTypography variant="h6">
        Conventional mortgages
      </TitleTypography>
      <SimpleTypography>
        Typically, conventional mortgages require higher credit scores than other mortgage options, though it varies by
        lender. The minimum down payment is just 3%, but if you go that low — or make any down payment under 20% —
        you’ll usually have to pay for Private Mortgage Insurance. Unlike the mortgage insurance on FHA loans, PMI is
        cancellable after you’ve paid off enough of your loan.
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Minimum down payment</Typography>
        : 3%
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Minimum credit score</Typography>
        : Typically 620, though it varies by lender
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant={ 'h6' } component={ 'span' } fontWeight={ 'bold' }>Who they’re best for</Typography>
        : Buyers with good credit
      </SimpleTypography>
      <SimpleTypography>
        After you complete a mortgage application and supply financial documents, your loan officer will let you know
        which loan programs you can consider. From there, take the pros and cons of each and make a decision. In
        competitive markets, a conventional loan is more favorable to sellers.
      </SimpleTypography>

    </Container>
  )
}
