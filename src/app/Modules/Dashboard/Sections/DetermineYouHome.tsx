import { Typography }           from '@mui/material'
import React, { FC }            from 'react'
import { HomeQualTextTemplate } from '../../../../shared/strings/strings'
import { TextContainer }        from '../../../../shared/styles'
import { Growing }              from '../../../../shared/transitions/Growing'

export const DetermineYouHome: FC = () => {

  return (
    <>
      <TextContainer>
        <Growing>
          <Typography variant="h5" fontWeight="light">
            Determine your home buying readiness and find out what you can afford
            in less than two minutes.
          </Typography>
        </Growing>
      </TextContainer>

      <TextContainer backgroundColor={ 'darkGrey' }>
        <Growing>
          <Typography variant="h5" fontWeight="light" color={ 'white' } my={ 3 }>
            <HomeQualTextTemplate variant={ 'h5' } fontWeight="light"/> homeowners realize an average savings of $2,200
            per year in lower payments!
          </Typography>
        </Growing>
      </TextContainer>
    </>
  )
}
