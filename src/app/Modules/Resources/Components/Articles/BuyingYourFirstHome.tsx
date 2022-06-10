import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { SimpleTypography, TitleTypography } from './sharedStyles'
import { Container } from '@material-ui/core'

interface IBuyingYourFirstHome {
  image?: string
}

export const BuyingYourFirstHome: FC<IBuyingYourFirstHome> = () => {
  return (
    <Container fixed>
      <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
        Tips to Buying Your First Home
      </Typography>
      <SimpleTypography>
        Purchasing your first home is a wonderful feeling! Yes, it may be scary taking that first step, but how awesome
        it is when you finally do. From this moment on, you will begin making a lifetime of memories and no matter how
        many homes you own in the future, you never forget the first one!
      </SimpleTypography>

      <SimpleTypography>
        By now you probably know all the financial benefits of home ownership. It’s a great way to build wealth,
        provides tax advantages and more. But what is really exciting is the emotional impact of owning a home. Having
        friends over for the game, watching your dog patrol the backyard and memories of where your child took their
        first steps. There will be times when the dishwasher breaks down or your yard needs mowed, but nothing beats the
        independent feeling of owning a home. It gives you the ability to put down some roots. When you rented, people
        come and go annually, but owning a home gives you the time to develop a friendship with neighbors, have a few
        backyard bar-b-ques, and help grow a neighborhood community.
      </SimpleTypography>

      <SimpleTypography>
        If you have been thinking about buying for a while, don’t wait any longer. Below are a few tips to help make
        your
        dream of home ownership a reality. You owe it to yourself – you have earned it.
      </SimpleTypography>
      <TitleTypography >
        Determine your mortgage readiness before contacting an agent or
        lender
      </TitleTypography>
      <SimpleTypography>
        People spend weeks researching their next mobile phone purchase but
        when it comes to knowing if they will qualify for a mortgage, they
        often leave the process totally up to others. Before you contact an
        agent or lender, do your homework. You have one shot to make a good
        first impression so let’s make it count.
      </SimpleTypography>

      <TitleTypography >
        Work with the right loan officer and real estate agent
      </TitleTypography>
      <SimpleTypography>
        Everyone has a friend who is an agent, but that doesn’t mean they are the right fit. Having the right team
        members can be the difference between a fun experience and a nightmare. At some point in the transaction, things
        may seem like they are going south! Are you able to have a difficult
        conversation with an agent who is also your friend? This often gets messy and creates additional stress levels.
      </SimpleTypography>
      <TitleTypography >
        Be educated on the process
      </TitleTypography>
      <SimpleTypography>
        Too often buyers believe the agent or loan officer will always make the right decisions for them. That can be a
        costly mistake. The more you are involved in the process upfront, the better outcome you will have. Don’t leave
        things up to chance. Get in control of the process.
      </SimpleTypography>
      <TitleTypography >
        Negotiate what matters
      </TitleTypography>
      <SimpleTypography>
        Competition for homes is fierce and most sellers have backup offers. When you win an offer, make sure to
        negotiate items that really matter to you. Don’t negotiate just to negotiate. There are several points in a
        transaction where you may go back to the seller and you don’t want to weaken your position on things that really
        don’t matter. Think of the Big 4: Roof, foundation, electrical and plumbing. These items can be costly repairs
        so deal with them first. Don’t focus on paint, carpet or other items that you can easily take care of after you
        are in the home.
      </SimpleTypography>
      <TitleTypography>
        It’s a roller coaster ride
      </TitleTypography>
      <SimpleTypography>
        You will find yourself at times so excited and other times you may want to pull your hair out. Buying a home can
        be stressful as there are so many people who stand between you and your home. Roll with the punches. Ask
        questions if you don’t understand something. If you are working with HomeQual, keep your Advisor involved
        throughout the transaction so they can provide expert advice when needed.
      </SimpleTypography>
      <SimpleTypography>
        Here’s to finding your forever home and the start of a lifetime of memories.
      </SimpleTypography>

    </Container>
  )
}
