import React, { FC }                         from 'react'
import { Iarticle }                          from '../../ResourcesData';
import { Container }                         from '@material-ui/core';
import { Typography }                        from '@mui/material';
import { SimpleTypography, TitleTypography } from './sharedStyles';

export const HowMuchCanIBorrow: FC<Iarticle> = () => {
  return (
    <>
      <Container fixed>
        <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
          How much can I borrow?
        </Typography>
        <SimpleTypography fontStyle={ 'italic' }>
          You want to buy your first home, but can you afford it? In a lot of cases, if you can afford to pay rent, you
          can afford to own a home. What keeps many from being homeowners is the fear of the unknown. Before you sign
          another lease, see what you can afford or steps you can take now to be ready later down the road.

        </SimpleTypography>
        <SimpleTypography fontStyle={ 'italic' }>
          The lender will analyze your financial situation, including your income, expenses, credit and employment
          history. So the smart thing to do is before you apply with a lender, do what you can on your own to see if you
          will qualify when the times comes. So it pays to have all your ducks in a row.
        </SimpleTypography>
        <TitleTypography variant="h4">
          How Much Can I Afford?
        </TitleTypography>
        <SimpleTypography>
          Knowing how much you can borrow is a major concern for most buyers so take the necessary steps today and
          prepare yourself for the home buying journey!
        </SimpleTypography>
        <TitleTypography variant="h6">
          Your Debt to Income Ratio:
        </TitleTypography>
        <SimpleTypography>
          A google search and you will find hundreds of different ways to determine affordability. However, what matters
          is how a lender will calculate your affordability. One of the first calculations they will perform is your
          Debt to Income Ratio (DTI). A DTI ratio indicates how much you’re borrowing relative to your annual income.
          The lower your DTI, the better financial risk you are.
        </SimpleTypography>
        <TitleTypography variant="h6">
          The amount of cash you have
        </TitleTypography>
        <SimpleTypography>
          If you can increase your down payment, it will lower the amount you need to borrow. If you are fortunate to be
          able to put 20% down, you won’t have Private Mortgage Insurance (PMI) which is a big cost savings.
        </SimpleTypography>
        <TitleTypography variant="h6">
          Your credit score
        </TitleTypography>
        <SimpleTypography>
          Additionally, your credit profile plays an important role. The higher your score, the less you will have to
          pay for PMI and your interest rate is tied to your credit score. Thus, the better your score, the lower your
          rate and lower your mortgage payment.
        </SimpleTypography>
        <TitleTypography variant="h6">
          How much money will I need?
        </TitleTypography>
        <SimpleTypography>
          Different loan options require different down payment amounts. For example, FHA loans only require 3.5% down,
          VA and USDA loans are 0% down and conventional usually is a minimum of 5% of the purchase price.
        </SimpleTypography>
        <SimpleTypography>
          In addition, you will have closing costs which can range from 2-4% of the purchase price.
        </SimpleTypography>
        <SimpleTypography>
          The initial costs of obtaining a mortgage can be high, but there are ways to lower the out-of-pocket money
          needed. If the home has been on the market for a while or priced high, you may be able to have the seller
          contribute towards your closings costs. The lender and realtor may have options to help as well. A common
          scenario is when the buyer receives gift funds from a family member.
        </SimpleTypography>
        <SimpleTypography>
          It’s important not only to focus on the costs, but also the benefits. Homeowners, on average, build wealth
          faster than non-homeowners. Recently, homes have increased in value dramatically. Even if your home
          appreciates by 10%, your $300,000 home today is worth $330,000 next year. Where else can you build that type
          of wealth so fast?
        </SimpleTypography>
        <SimpleTypography>
          Take the necessary steps today to see if you are ready to purchase tomorrow!
        </SimpleTypography>
      </Container>
    </>
  )
}

