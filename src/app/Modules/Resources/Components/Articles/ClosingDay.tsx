import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { SimpleTypography, TitleTypography } from './sharedStyles'
import { Container } from '@material-ui/core'

interface IClosingDay {
  title: string
  text: string
  link: string
  image: string
}
export const ClosingDay:FC<IClosingDay> = (props) => {
  return (
    <Container fixed>
      <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
        It’s Closing Day
      </Typography>
      <SimpleTypography fontStyle={ 'italic' }>
        Congratulations! The home buying journey is almost complete. You have been giving a closing date and time. What
        should you expect to happen at the closing table?
      </SimpleTypography>
      <TitleTypography variant="h4" fontStyle={ 'italic' }>
        The Closing Disclosure
      </TitleTypography>
      <TitleTypography variant="h5" fontWeight={ 'bold' }>
        Three days prior to closing, you will receive a copy of your Closing Disclosure (CD)
      </TitleTypography>
      <SimpleTypography>
        This disclosure breaks out all aspects of the mortgage including loan amount, down payment, interest rates,
        closing costs, etc. You must acknowledge the receipt of the CD 3-days before you close. Typically, this is
        electronically signed.
      </SimpleTypography>
      <SimpleTypography>
        If you don’t understand any figures on the CD or you find an error, let your mortgage loan officer know ASAP.
        Changes may require an additional 3-day wait period.
      </SimpleTypography>
      <TitleTypography variant="h5" fontWeight={ 'bold' }>
        What to bring to closing
      </TitleTypography>
      <SimpleTypography>
        <Typography variant="h6" fontWeight="bold" component={ 'span' } display="inline">
          Photo ID
        </Typography>
        : A government-issue photo ID will be needed by the title company. (If you are recently married and just changed
        your name, the ID should match the name that will appear on the property's title and mortgage. If you have any
        question on this, contact the title company).
      </SimpleTypography>
      <SimpleTypography>
        <Typography variant="h6" fontWeight="bold" component={ 'span' } display="inline">
          Your Money
        </Typography>
        : The Closing Disclosure will state how much money you need to bring to closing. Once you know the
        amount, contact your processor or the title company to see if the funds should be in the form of a cashier’s
        check or a wire. If a wire, it is CRITICAL you speak directly with the Title Company to get their routing and
        account number. Scammers have been known to intercept funds so it’s vital you speak directly to the title
        company.

        If you are getting a cashier’s check, it must be drawn from the bank account that the mortgage underwriter
        verified earlier in the underwriting process. Speak with your processor if you have questions.
      </SimpleTypography>
      <TitleTypography variant="h4" fontStyle={ 'italic' }>
        The Closing Process
      </TitleTypography>
      <SimpleTypography>
        When you arrive at the title company you will meet with an Escrow Officer. The closing process itself is very
        easy, just a lot of signatures. If you reviewed the Closing Disclosure thoroughly, then there should be no
        surprises.
        There is a chance you run into the seller or seller’s agent, but typically you won’t see them since they will
        sign their documents at a different time.
      </SimpleTypography>
      <TitleTypography variant="h5" fontWeight={ 'bold' }>
        When Do You Get the Keys?
      </TitleTypography>
      <SimpleTypography>
        After both parties (seller and buyer) have signed the closing documents, the title company will send the signed
        papers to the mortgage company for a quick audit. Once the audit is complete, the mortgage company will
        authorize the funding of the mortgage.
      </SimpleTypography>
      <SimpleTypography>
        Typically, the time period between signing documents and getting keys can be anywhere from 30 minutes to a few
        hours. So the earlier in the day you sign the better since it gives more time for the mortgage company to fund
        the loan. Keep in mind you are not the only closing taking place and the funding department can get busy.
      </SimpleTypography>
      <SimpleTypography>
        When the mortgage is funded, you will receive a call from the title company and / or your agent telling you it’s
        time for you to pick up the keys.
      </SimpleTypography>
    </Container>
  )
}
