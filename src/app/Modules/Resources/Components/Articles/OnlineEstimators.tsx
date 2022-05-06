import React, { FC }                         from 'react'
import { Iarticle }                          from '../../ResourcesData';
import { SimpleTypography, TitleTypography } from './sharedStyles';
import { Container }                         from '@material-ui/core';

export const OnlineEstimators: FC<Iarticle> = () => {
  return (
    <>
      <Container fixed>
        <TitleTypography variant="h4" color={ 'primary' } textAlign={ 'center' } my={ 2 }>
          Be cautious of online estimators
        </TitleTypography>
        <SimpleTypography>
          Online home estimators are designed to give a “general” estimate of what you would expect to pay for a home
          and should be only used as a guide. Also, some estimators do not incorporate taxes and insurance into the
          monthly payment meaning what you see on the screen is not an accurate account of what you will end up paying.

        </SimpleTypography>
        <SimpleTypography>
          The majority of estimators are deliberately designed to underestimate the costs to make the property seem more
          enticing. You should be somewhat cautious if one estimator is dramatically lower than others.
        </SimpleTypography>
        <SimpleTypography>
          There are other factors to take into account that will greatly affect your mortgage payment, how much money
          you will need and affordability.
        </SimpleTypography>
        <SimpleTypography>
          Online home affordability estimators are fine to use as a simple guide, but keep in mind they are only general
          estimates and will not reflect your exact costs.
        </SimpleTypography>
      </Container>
    </>
  )
}

