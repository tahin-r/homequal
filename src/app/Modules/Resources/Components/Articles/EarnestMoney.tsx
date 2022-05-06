import React, { FC }                                           from 'react'
import { Iarticle }                                            from '../../ResourcesData';
import { CreateDefinition, SimpleTypography, TitleTypography } from './sharedStyles';
import { Container }                                           from '@material-ui/core';
import { Box, Typography }                                     from '@mui/material';

export const EarnestMoney: FC<Iarticle> = (props) => {
  return (
    <>
      <Container fixed>
        <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
          Option Fee & Earnest Money
        </Typography>
        <SimpleTypography>
          Within 3 days of your contract execution, you must deliver to the title company both your Option Fee and
          Earnest Money. If not, you are in violation of your contract and the seller may cancel. So what protection
          does the Option Fee or Earnest Money give you? Read below.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          Option Fee
        </TitleTypography>
        <SimpleTypography>
          When you submit your purchase offer, you will provide a time period in which you can back out of the contract
          for <Box display={ 'inline' } sx={ { fontWeight: 'bold', textDecoration: 'underline' } }>any reason</Box>
          (Option Period). The Option Period typically is between 4 and 7 days, giving you the time needed to order a
          home inspection and negotiate any needed repairs. Typically, you will pay $150 to $350 for the right to back
          out of your contract. If you decide to back out, the sellers keep your Option Fee. If you continue with the
          purchase, the Option Fee will be credited towards your closing costs. Make sure to make a copy of your payment
          as your lender will need it in order to give you the credit.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          Earnest Money
        </TitleTypography>
        <SimpleTypography>
          Earnest money protects the seller if you back out. It's typically around 1% of the purchase price but in
          competitive markets, you may see it as high as 3% and it is held in escrow until the deal is complete. If all
          goes smoothly, the earnest money is credited to the buyer’s down payment or closing costs. Essentially, you’re
          just putting up some of the money earlier in the process.
        </SimpleTypography>
        <SimpleTypography>
          If the deal falls through due to a failed home inspection or any other contingencies listed in the contract,
          the buyer gets their earnest money back.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          When do I pay it?
        </TitleTypography>
        <SimpleTypography>
          The earnest money must be received by the title company within 3 days of an executed contract.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          How much is enough?
        </TitleTypography>
        <SimpleTypography>
          The amount of earnest money you offer depends on the real estate market conditions. A home that has been on
          the market for a while may not need as much earnest money as in a hot market with multiple buyers who are
          vying for the same property. If you plan to purchase in a neighborhood where cash offers and bidding wars are
          common, a higher good faith deposit is a good idea.
        </SimpleTypography>
        <SimpleTypography>
          If you’re working with a real estate agent, they should be able to provide direction on how much earnest money
          you should offer. If you’re competing with others for the same property, it’s in your best interest not to
          undercut the earnest money deposit amount because you could lose the home to a stronger offer.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          Can you get your earnest money back?
        </TitleTypography>
        <SimpleTypography>
          Earnest money has contingencies that protect both the seller and buyer in certain situations.
          When you make an offer on a home and the seller accepts, the sale is only finalized when contingencies, or
          certain criteria, are met. They’re typically listed in the purchase agreement and cover the inspection,
          appraisal and mortgage approval, among other items.
        </SimpleTypography>
        <SimpleTypography>
          Below are 5 common real estate contingencies that should allow you to back out without losing your Earnest
          Money:
        </SimpleTypography>
        <Box pl={ 4 }>
          <ul>
            <li>
              { CreateDefinition(
                'Inspection Contingency -',
                'The home inspection is a common reason for potential buyers to back away from a deal. If the inspection turns up major problems that the seller is unwilling to repair, or ones that you find too daunting, you can terminate the contract and receive your earnest money back. Make sure this happens during the Option Period. If you don’t want to back out of the deal, you could also work with the seller to have the repairs made or have them lower the price so you can do the repairs yourself.'
              ) }
            </li>
            <li>
              { CreateDefinition(
                'Appraisal Contingency -',
                'The appraisal contingency, which protects the buyer if the property is overvalued, is equally important. The lender hires a third-party appraiser to determine the fair market value of the home and to compare it to similar properties for sale. With this contingency, if the home is appraised at less than the sale price, you can choose not to move forward with the deal and you’ll get your earnest money back. Alternatively, you can use the appraisal to negotiate a new price.'
              ) }
            </li>
            <li>
              { CreateDefinition(
                'Finance Contingency –',
                'This contingency allows you to back out if your financing was not approved and you notified the seller within the time specified in your contract. You have the right to walk away and get your earnest money back; this is where the mortgage company can protect you.'
              ) }
            </li>
            <li>
              { CreateDefinition(
                'Contingency for Selling an Existing Home –',
                'Some contracts also include a contingency for selling your existing home. If you can’t sell the home you currently own before you close on another home, this contingency lets you back out of the deal with your earnest money in hand.'
              ) }
            </li>
            <li>
              { CreateDefinition(
                'Home Owner Association (HOA) Contingency –',
                'when you buy a home governed by an HOA, you typically have 7 days to review all the association’s rules and fees. If the seller doesn’t provide you with this document, you may be able to cancel the contract.'
              ) }
            </li>
          </ul>
        </Box>
        <SimpleTypography>
          It is important to speak with your real estate agent about these contingencies if an issue pops up.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          Can I lose my Earnest Money
        </TitleTypography>
        <SimpleTypography>
          Since your Earnest Money is a commitment to buying the property, you will be penalized if you back out of the
          purchase contract for no valid reason, e.g. buyer’s remorse, cold feet, or a change of heart. In those cases,
          you will forfeit your Earnest Money to the seller. If you change your mind after the offer has been accepted,
          the contingencies (explained above) are your way out to recover your deposit.
        </SimpleTypography>
        <TitleTypography variant={ 'h6' }>
          How to Protect Your Earnest Deposit
        </TitleTypography>
        <SimpleTypography>
          There are a few steps you can take to protect your earnest money:
        </SimpleTypography>
        <SimpleTypography>
          <Typography variant={ 'h6' } fontWeight={ 'bold' } component={ 'p' }>
            Step 1. Deposit your money with your Title Company
          </Typography>
          You should never give your earnest money directly to the seller or a real estate brokerage. Instead, drop off
          the money via certified check, wire transfer or personal check. Your check should be made out to the Title
          Company, and keep a copy of the check and request a receipt. The funds are then held in the escrow account
          until closing.
        </SimpleTypography>
        <SimpleTypography>
          <Typography variant={ 'h6' } fontWeight={ 'bold' } component={ 'p' }>
            Step 2. Know Your Contingencies
          </Typography>
          Contingencies protect both the seller and buyer and give both parties the means to back out of the deal. To
          ensure you meet your side of the contract, make sure you understand your contingencies and pay close attention
          to the fine print.
        </SimpleTypography>
        <SimpleTypography>
          <Typography variant={ 'h6' } fontWeight={ 'bold' } component={ 'p' }>
            Step 3. Stay On Track
          </Typography>
          To protect the seller, the purchase agreement will typically include a timeline for when every aspect of the
          process has to be met, such as the date by which you need an inspection done or when the mortgage should be
          approved.
          <Typography variant={ 'h6' } component={ 'p' }>
            If you miss those deadlines, there could be grounds for the seller to back out of the deal with your earnest
            money in hand. Most sellers won’t rescind the deal the minute you miss a deadline, but if you take too long,
            it could be a deal breaker.
          </Typography>
        </SimpleTypography>
        <SimpleTypography fontWeight='bold'>
          Make sure to make a copy of your Earnest Money check and your Option Fee check. It will be needed by your
          mortgage lender in order to credit these funds back to you at closing.
        </SimpleTypography>
      </Container>
    </>
  )
}

