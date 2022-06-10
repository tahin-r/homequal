import { Typography } from '@mui/material'
import { SectionList } from '../shared'
import { HomeQualTextTemplate } from '../../../../shared/strings/strings'
import React from 'react'
import styled from 'styled-components'

const ListHomeQualTemplate = styled(({ ...props }) => <HomeQualTextTemplate fontWeight="light"
                                                                            variant="h6" { ...props }/>)``
const TitleHomeQualTemplate = styled(({ ...props }) => <HomeQualTextTemplate fontWeight="bold"
                                                                             variant="h5" { ...props }/>)``

export const AnswerWithList = () => {
  const firstListData = [
    'How much can I afford and do I have enough money?',
    'Are there issues I need to deal with before speaking to an agent?',
    'Who are the best agents and loan officers to work with?'
  ]
  const secondListData = [
    'Average of $2,200 per year.',
    'Lower out of pocket expenses.',
    'You may also qualify for a Cash Rebate.'
  ]

  return (
    <>
      <Typography variant="h6">
        <ListHomeQualTemplate/> is a Do-It-Yourself Platform that lets you work at your own pace, while
                                providing award-winning customer service and expert advice. Within minutes
                                you can determine your home buying
                                readiness online and identify issues that may cause increased rates,
                                payments or loan denials. It’s available
                                anytime, at your convenience.
      </Typography>
      <Typography variant="h6" fontWeight="bold">
        If you’re thinking about buying your first home, we are here to answer your questions:
      </Typography>
      <SectionList list={ firstListData }/>
      <Typography variant="h6" fontWeight="bold">
        <HomeQualTextTemplate variant="h6" fontWeight="bold"/> also saves you money:
      </Typography>
      <SectionList list={ secondListData }/>
      <Typography variant="h6">
        To get started, all it takes is a few minutes to determine your qualification odds.
      </Typography>
    </>
  )
}
export const SecondAnswerWithList = () => {
  const listData = [
    'Single point of contact',
    'They help you resolve issues',
    'Liaison between you and your agent and loan officer',
    'Will intervene on your behalf if issues with agent or loan officer',
    'Have a question- they will get you the answers'
  ]

  return (
    <>
      <Typography variant="h6">
        <ListHomeQualTemplate/> was designed to walk you through the entire home buying process from
                                “thinking about buying” to closing. Our online platform asks you a series
                                of questions to evaluate your readiness for a home purchase. Then, we
                                analyze the information you provided to build your step by step Success
                                Plan.
      </Typography>
      <Typography variant="h6">
        Once <ListHomeQualTemplate/> verifies your ability to buy, you will be matched with loan officers and agents who
        are both
        accountable to you and us. This helps keep you on track during your home buying journey.
      </Typography>

      <Typography variant="h6" fontWeight="bold">
        As a <HomeQualTextTemplate variant="h6" fontWeight="bold"/> member, you will be assigned with an Advisor who
        will be your go to source
        throughout the
        transaction. They are experts at helping first time buyers through each phase of the home buying process.
      </Typography>
      <SectionList list={ listData }/>
    </>
  )
}

export const FAQData = [
  {
    question: () => <Typography variant="h5" fontWeight="bold">How long does it take to buy a home?</Typography>,
    answer: () => <Typography variant="h6"> It can range from 30 days to several months. Some people find a home
                                              within days while others have been looking for a few months. Once you have
                                              the winning offer, the mortgage process will take approximately 30 days to
                                              close.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">How do I get my cash rebate?</Typography>,
    answer: () => <Typography variant="h6"> If you selected a <ListHomeQualTemplate/> endorsed agent and lender, you
                                              may
                                              qualify for a cash back rebate. When you execute a purchase contract,
                                              enter the purchase price and closing date in your Success Plan in order to
                                              calculate your rebate amount. The rebate will appear on your Closing
                                              Disclosure as a credit to your closing costs. Rebates are subject to
                                              lender approval and state law.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Can I get the same information from a lender or
                                                               agent?</Typography>,
    answer: () => <Typography variant="h6"> Short answer - no. The <ListHomeQualTemplate/> platform provides the
                                              information you
                                              need before contacting an agent or lender. By identifying and resolving
                                              potential roadblocks in advance, you will benefit by qualifying for a more
                                              expensive home, lower rates and our clients save on average over $2,200
                                              per year in lower payments.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Can you help me with my credit score?</Typography>,
    answer: () => <Typography variant="h6"> Yes. You likely will see improvements to your credit profile through our
                                              proven strategies. We are not a credit repair company; instead we use
                                              strategies that are designed to improve your scores fast.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Is <TitleHomeQualTemplate/> free?</Typography>,
    answer: () => <Typography variant="h6"> Yes. <ListHomeQualTemplate/> does not charge first time home buyers for
                                              its services. If
                                              you elect to work with one of our affiliates, they may charge you for
                                              their services (mortgage, real estate, etc).</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Why should I use <TitleHomeQualTemplate/>?</Typography>,
    answer: () => <AnswerWithList/>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">How does <TitleHomeQualTemplate/> work?</Typography>,
    answer: () => <SecondAnswerWithList/>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Do I have to speak with anyone to work
                                                               with <TitleHomeQualTemplate/>?</Typography>,
    answer: () => <Typography variant="h6"> There may be some situations in which you’ll need to chat with
                                              your <ListHomeQualTemplate/> Advisor, either online, text or by phone, to
                                              answer some
                                              questions. We may need to contact you while we’re working on finalizing
                                              your Success Plan. We’ll use phone calls, texts and emails to communicate
                                              important information about your qualification status.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Is <TitleHomeQualTemplate/> a mortgage
                                                               lender?</Typography>,
    answer: () => <Typography variant="h6"> No, <ListHomeQualTemplate/> is a service company who helps first time
                                              homebuyers through
                                              the home buying process. We do have an affiliate company that is a
                                              mortgage lender.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Is <TitleHomeQualTemplate/> a real estate
                                                               agency?</Typography>,
    answer: () => <Typography variant="h6"> No, <ListHomeQualTemplate/> is a service company who helps first time
                                              homebuyers through
                                              the home buying process. We do have an affiliate company that is a real
                                              estate brokerage.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Why do I need to get pre-approved before looking at
                                                               homes?</Typography>,
    answer: () => <Typography variant="h6"> Most importantly, you want to make sure you will qualify to buy a home. A
                                              pre-approval letter will indicate how much you can afford and what loan
                                              types you qualify for. Many real estate agents won’t even show you a home
                                              if you’re not pre-approved.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Do I have to use your recommended lender?</Typography>,
    answer: () => <Typography variant="h6"> No. You are free to use any lender you want. However, If you don’t use
                                              one of our endorsed lenders, you will forfeit the cash rebate at closing.
                                              The benefit of using our lender network is we can intervene on your behalf
                                              to make sure the transaction is progressing smoothly.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">If I have a pre-approval, is that a guarantee I will get
                                                               a mortgage?</Typography>,
    answer: () => <Typography variant="h6"> No, a pre-approval is not a firm offer to lend. It still has to be fully
                                              underwritten by a mortgage underwriter and receive final approval. There
                                              are many obstacles that can stand in your way that is why it is important
                                              to identify and resolve any issues before you begin home
                                              shopping.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Can I buy a home if I have student loans?</Typography>,
    answer: () => <Typography variant="h6"> The majority of first time buyers have student loans, so don’t let that
                                              keep you from starting the home buying journey. It’s important to keep
                                              your loans current and paid on time. If you loans are in good standing,
                                              you shouldn’t run into any issues. If your loans take a big chunk of your
                                              salary or they are in default, there are options available to allow you to
                                              still purchase a home.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">What is the difference between a conventional and FHA
                                                               loan?</Typography>,
    answer: () => <Typography variant="h6"> FHA loans allow lower credit scores than conventional mortgages and are
                                              easier to qualify. Down payment is lower for FHA; however, mortgage
                                              insurance is typically higher. Sellers often prefer conventional loans
                                              over FHA due to the more stringent FHA appraisal
                                              requirements.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">I haven’t saved a lot of money; can I still buy a
                                                               home?</Typography>,
    answer: () => <Typography variant="h6"> There are many factors that determine how much money you need to purchase
                                              a home such as loan type, house value and location. Additionally, you may
                                              receive assistance from the lender, agent, seller or even a family member
                                              to help lower the amount of money you need.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">What will be my interest rate?</Typography>,
    answer: () => <Typography variant="h6"> There are a lot of factors that go into interest rates. Your credit
                                              score, loan amount and debt-to-income ratios determine what rate you will
                                              be charged. Remember, it’s not just about rate; it’s about the cost of
                                              obtaining that rate. Think of a teeter totter; one side think rate and the
                                              other side closing costs. One goes up, the other goes down. Your job is to
                                              find that perfect balance.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">What is a mortgage refinance?</Typography>,
    answer: () => <Typography variant="h6"> Refinancing your mortgage basically means that you are trading in your
                                              old mortgage for a new one. When you refinance your mortgage, your lender
                                              pays off your old mortgage with the new one; this is the reason for the
                                              term refinancing. You may refinance for a lower rate, you want to lower
                                              your term or you may want to access some of the equity in your
                                              home.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Do I need mortgage insurance?</Typography>,
    answer: () => <Typography variant="h6"> If you are not putting at least 20% down on a mortgage, you will need
                                              mortgage insurance.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">How much are closings costs?</Typography>,
    answer: () => <Typography variant="h6"> Closing costs are one-time fees associated with the sale of a home. It is
                                              recommended to set aside a minimum of 2% - 3% for closing costs. Since
                                              most of these fees are fixed costs, the lower your loan amount means the
                                              closings costs percentage will be higher.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">How long does the mortgage process take?</Typography>,
    answer: () => <Typography variant="h6"> Plan on 30 days from the time your lender receives the executed purchase
                                              contract. There are thinks outside of lenders control such as the
                                              appraisal timeframe or how long it takes borrowers to submit documents. So
                                              do your part and get any requested documents submitted immediately so your
                                              loan isn’t held up because of you.</Typography>
  },

  {
    question: () => <Typography variant="h5" fontWeight="bold">Can I use my own real estate agent?</Typography>,
    answer: () => <Typography variant="h6"> Simple answer is yes. It is your decision on which agent you select to
                                              work with. However, if you select an agent outside of our network, you
                                              will forfeit any cash back rebate. By using a network agent, we can
                                              intervene on your behalf to keep everyone on-track. If you use your own
                                              agent, this becomes your responsibility and it is a difficult
                                              one.</Typography>

  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">If I use my own agent, can I still get a cash
                                                               rebate?</Typography>,
    answer: () => <Typography variant="h6"> No, unless you have your agent sign up with <ListHomeQualTemplate/> before
                                              you start
                                              viewing homes. If your agent qualifies to become
                                              a <ListHomeQualTemplate/> network agent,
                                              we can negotiate a rebate for you. If they elect not to become an endorsed
                                              agent or they don’t qualify, you will forfeit your right to any rebate
                                              from <ListHomeQualTemplate/>.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Should I use a real estate agent if I am buying new
                                                               construction?</Typography>,
    answer: () => <Typography variant="h6">Absolutely yes. Don’t be fooled thinking the builders rep you speak with
                                             is on your side. They represent only one party, the builder. The builder
                                             will not lower the price because you don’t have your own agent. Your real
                                             estate agent can help you better negotiate your deal and more importantly,
                                             they will help navigate you through inspections, appraisals, setting up
                                             title for loan closing and keeping the builder on track. By not having your
                                             own agent, you are basically paying the builder to not be
                                             represente.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Should I use Zillow or Realtor.com to see available
                                                               homes?</Typography>,
    answer: () => <Typography variant="h6"> These sites are ok to look around, but they are not good tools once you
                                              are ready to buy. They are outdated and many of the homes you see have
                                              already been sold. The most effective site will be the MLS your real
                                              estate agent sets you up on. MLS provides the most up to date Information
                                              and in a competitive market, it’s critical.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">What is MLS?</Typography>,
    answer: () => <Typography variant="h6"> MLS stands for "Multiple Listing Service," which are lists of properties
                                              in a local area. MLS is the site your real estate will use to schedule
                                              home showing appointments. Agents do not use Zillow, Realtor.com, etc. as
                                              they are not updated with the latest home availability.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Do I need home owners insurance?</Typography>,
    answer: () => <Typography variant="h6"> Yes, homeowners insurance is required on all mortgage transactions. It
                                              helps cover the costs of your home being damaged, belongings being stolen
                                              or someone getting injured on your property. You will be asked to get this
                                              insurance after you are under contract. <ListHomeQualTemplate/> can
                                              recommend agents if
                                              needed. Contact your auto insurer to get a quote on home owners
                                              insurance.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Can I get a discount when applying for homeowners
                                                               insurance?</Typography>,
    answer: () => <Typography variant="h6"> Yes! Ask your representative about combining your auto with your home.
                                              Things like security systems, having smart home technology, etc. may
                                              qualify you for higher discounts.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Do all insurance companies have the same
                                                               price?</Typography>,
    answer: () => <Typography variant="h6"> No. It pays to shop around. If needed, we can provide referrals to
                                              companies our clients have used. Costs depend on the amount of your
                                              coverage, your deductibles, etc.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">What is considered a good credit score?</Typography>,
    answer: () => <Typography variant="h6"> Generally speaking, there are five tiers of credit score. A good credit
                                              score is anything above 670.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">What is considered a bad credit score?</Typography>,
    answer: () => <Typography variant="h6"> Generally speaking, there are five tiers of credit score. A bad credit
                                              score is anything below 620. However, you can get a mortgage with scores
                                              as low as 580.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">Can student loans hurt my credit score?</Typography>,
    answer: () => <Typography variant="h6"> Yes, but they can also help your credit. Paying your student loans back
                                              on time will benefit your score. Alternatively, missing these payments can
                                              cause some significant damage to your credit profile.</Typography>
  },
  {
    question: () => <Typography variant="h5" fontWeight="bold">What credit score do I need to purchase a
                                                               home?</Typography>,
    answer: () => <Typography variant="h6"> You can get approved with a credit score as low as 580. The road to the
                                              closing table will be harder as the lender will ask for much more
                                              documentation than if your score was 680. Keep in mind where you get your
                                              credit score from. Lenders use a FICO® Score, but educational sources from
                                              credit card companies, credit karma, etc. use a different credit scoring
                                              model. We encourage you to start the <ListHomeQualTemplate/> process even
                                              if you think
                                              your score is slightly below 580. We have options to increase your scores
                                              fast.</Typography>
  }
]
