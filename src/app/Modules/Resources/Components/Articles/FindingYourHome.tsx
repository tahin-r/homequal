import { Box, Typography }                   from '@mui/material';
import { Container }                         from '@material-ui/core'
import { SimpleTypography, TitleTypography } from './sharedStyles';
import React, { FC }                         from 'react';

export const FindingYourHome: FC<any> = () => {

  return (
    <Container fixed>
      <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
        Finding your home
      </Typography>
      <SimpleTypography fontStyle={ 'italic' }>
        Home shopping begins at your computer. You can view interior and exterior photos, find school district ratings
        and Google street maps give you the ability to virtually drive around the neighborhood. Doing this homework in
        advance saves you a lot of time and wasted trips to homes that won’t match your criteria.
      </SimpleTypography>
      <TitleTypography variant="h5">
        Set your emotions aside
      </TitleTypography>
      <SimpleTypography >
        When viewing a property, it’s important to leave your emotions at the door. For the first viewing, you’re
        looking to see if the home feels right, it’s in a good location, the size works and you can see yourself living
        there. If so, you might want to make an offer. However, remember you don’t own it yet, so try not to let your
        heart rule your head. See the property for what it really is and then there will be fewer shocks to face later
        down the line.
      </SimpleTypography>
      <TitleTypography variant="h5">
        The Location
      </TitleTypography>

      <SimpleTypography>
        If you communicated your interests correctly to your agent, you should only be viewing homes that are in the
        location you want.
      </SimpleTypography>
      <Box pl={ 4 }>
        <ul>
          <SimpleTypography>
            <li>
              How is the commuting time to work?
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Is it close to family or friends?
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Near a highway or you desired school district?
            </li>
          </SimpleTypography>
        </ul>
      </Box>
      <SimpleTypography>
        Try and keep your search in the area you want to live to save time for both you and the real estate agent.
      </SimpleTypography>
      <TitleTypography variant="h5">
        The Rating System
      </TitleTypography>
      <SimpleTypography>
        As you view homes, pay attention to your surroundings. Is the house and those around it well maintained? Is
        there a community park or swimming pool? How close are the schools?
      </SimpleTypography>

      <SimpleTypography>
        A good way to compare homes is through a rating system. As you walk into the home, rate each room from a 1 – 10
        (10 being awesome). If you rate it an 8 and your partner a 6, find out why you are so far apart. This will help
        on deciding what homes to tour in the future. When the showing is complete, give it an overall grade.
      </SimpleTypography>
      <SimpleTypography>
        If a home rates under a 7, forget about it and move on. If it is a 7, 8 or 9, seriously consider making an
        offer. Typically you don’t have time to think about it for a few days as while you are thinking, someone else is
        making an offer. Don’t count on finding a 10, unless you build it yourself.
      </SimpleTypography>
      <TitleTypography variant="h5">
        Cosmetic vs Structural
      </TitleTypography>
      <SimpleTypography>
        You can paint the walls and put down new flooring. So pay more attention to the “bones” and layout of the home,
        not the color of the walls or other cosmetic items that can easily be changed. Don’t like the light fixtures,
        change them. The 1980’s kitchen needs a fresh look, you can resurface the cabinets.
      </SimpleTypography>
      <SimpleTypography>
        However, when it comes to structural, keep an eye on the Big 4: Electrical, Plumbing, Roofing and Foundation
      </SimpleTypography>
      <Box pl={ 4 }>
        <ul>
          <SimpleTypography>
            <li>
              Electrical: Is the home up to code? Do you see burn marks by any of the outlets or lights don’t turn on?
              Take a look at the electrical panel, does it appear functional?
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Plumbing: Do you see stains or leaks under the sinks or in the ceiling? Is there good water pressure?
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Roofing: How old is the roof? Is there missing shingles or has there been water penetration?
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Foundation: Do you see cracks in the foundation? Are doors / windows hard to open or is the flooring
              uneven?
            </li>
          </SimpleTypography>
        </ul>
      </Box>
      <SimpleTypography>
        Unless it is obvious you won’t have the answers to most of these questions. That is why you will get a home
        inspection if you happen to win the offer. Your inspector will cover all of these topics and everything else
        inside and outside the home.
      </SimpleTypography>
      <SimpleTypography>
        If you decide to make an offer, your agent will provide you a Comparative Marketing Analysis (CMA) to determine
        the homes fair market value. Your agent has a lot of tools at their disposal, so take their advice on the price
        to offer. It will ultimately be your decision, but be careful undercutting the price so much where you don’t
        even receive a counter offer.
      </SimpleTypography>

    </Container>
  )
}
