import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import { SimpleTypography, TitleTypography } from './sharedStyles'
import { Container } from '@material-ui/core'

export const FinalWalkThrough:FC<any> = () => {
  return (
    <Container fixed>
      <Typography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
        Final Walk-through
      </Typography>
      <TitleTypography fontWeight={ 'bold' }>
        Your Final Walk-Through Before Closing on Your New Home
      </TitleTypography>

      <SimpleTypography>
        The final walk-through is your last opportunity to ensure the home you are purchasing is exactly as you expected
        it to be and to the terms of your agreement with the seller. This allows you make sure any agreed upon repairs
        are completed to your satisfaction, all agreed upon fixtures and furniture are present, all systems and
        appliances are functioning properly, and the seller’s possessions have been completely moved out.
      </SimpleTypography>
      <TitleTypography fontWeight={ 'bold' }>
        When to Do the Walk-Through and Who Should Be There
      </TitleTypography>
      <SimpleTypography>
        Ideally, the final walk-through should happen as close to your closing date as possible. Typically, you’d like
        to do it on the day of closing, but no more than 2-3 days ahead of closing. It’s also best to view the home
        during the day so you can clearly see the exterior.
      </SimpleTypography>
      <SimpleTypography>
        You and your real estate agent are the only people required to attend the final walk-through. The seller should
        not be present unless you make a specific request for them to be there, in which case their real estate agent
        should also attend.
      </SimpleTypography>
      <TitleTypography fontWeight={ 'bold' }>
        How Long Will It Take?
      </TitleTypography>
      <SimpleTypography>
        Typically you can expect about an hour in the home. This is a good time to take out your tape measure and see if
        a piece of furniture will fit. The house is probably empty so you can now see areas of the house you didn’t see
        before.
      </SimpleTypography>
      <SimpleTypography>
        There is no need to rush and take all the time necessary to make sure there are no surprises.
      </SimpleTypography>
      <TitleTypography fontWeight={ 'bold' }>
        What Should I Look For?
      </TitleTypography>
      <SimpleTypography>
        The walk-through is not another home inspection, and this is not the time to look for new items
        or additional repairs that you didn’t previously agree upon. The walk-though is just to make
        sure the house is in the condition that you and the seller previously agreed to. The only caveat
        would be damage that happened during the seller moving out.
      </SimpleTypography>
      <SimpleTypography>
        The main items to inspect are:
      </SimpleTypography>
      <Box pl={ 4 }>
        <ul>
          <SimpleTypography>
            <li>
              Were the agreed-upon repairs completed and to your satisfaction?
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Is anything missing that should have been left, such as appliances, furniture, drapes or carpets, or any
              built-ins?
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              No water is leaking into the home.
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Are the appliances working?
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Is the heating and air conditioning working?
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Are there any items or garbage left behind by the seller either inside the home or on the property that
              need to be removed?
            </li>
          </SimpleTypography>
        </ul>
      </Box>

      <SimpleTypography>
        You can download a complete checklist by clicking here:
          <a href='/#'>
              <Typography variant={ 'h6' }
                color={ 'primary' }
                component={ 'span' }>
                  HomeQual-Walk-Through-Checklist
              </Typography>
          </a>
      </SimpleTypography>
      <TitleTypography fontWeight={ 'bold' }>
        What Should I Bring?
      </TitleTypography>

      <SimpleTypography>
        To be prepared and make sure you identify the items you need to look at, you should have:
      </SimpleTypography>
      <Box pl={ 4 }>
        <ul>
          <SimpleTypography>
            <li>
              Your final offer listing the agreed to sale terms
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Any additional written agreement with the seller about repairs
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              The inspection report
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              An small electrical plug in such as small light or cell phone charger to test outlets
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              Your cell phone to take pictures if needed
            </li>
          </SimpleTypography>
          <SimpleTypography>
            <li>
              The HomeQual Walk-Through Checklist
            </li>
          </SimpleTypography>
        </ul>
      </Box>
      <TitleTypography>
        What Happens if I Find a Problem?
      </TitleTypography>
      <SimpleTypography>
        Most issues can be resolved quickly by communicating with the seller. First, talk to your real estate agent.
        Your agent will speak with the seller’s agent, explain the issue and they will work it out with the seller to
        come up with a solution.
      </SimpleTypography>
      <TitleTypography>
        Conclusion
      </TitleTypography>
      <SimpleTypography>
        The walk-though is your final step before becoming a new homeowner. Relax and don’t let it be stressful, most of
        the time there are no real issues. And if there are any, it’s in everyone’s best interest to get them resolved
        quickly.
      </SimpleTypography>
    </Container>
  )
}
