import React, { FC, useState } from 'react'
import { basicData }           from '../shared'
import { Wrapper }             from '../../Wrapper'
import { CenteredTypography }                 from '../../../../../../shared/styles/strings'
import { CircularProgress, Grid, Typography } from '@mui/material'
import doneArrow                              from '../../../../../../assets/images/doneArrow.svg'

export const CreateEndQuestion: FC<basicData> = ({
  setCurrentQuestionHandler,
  next,
  question,
  description,
  formik,
  current,
  setSchema,
}) => {
  const [status, setStatus] = useState(-1)
  const items = [' Analyzing Financial', 'Identifying Potential Issues', 'Calculating Cash Reward', 'Building Success Plan']

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             setSchema={ setSchema }
             current={ current }
             status={ status }>

      <CenteredTypography variant="h5">
        That’s it. Give me a second
        to crunch some numbers.
      </CenteredTypography>


      { items.map((item, index) => {

        if (index === status + 1) {
          setTimeout(() => setStatus(status + 1), 4000)
        }

        return (
          <Grid container
                key={ index }
                direction="row"
                sx={ { paddingLeft: '10vw', margin: '2vh 0', width: '80vw' } }
                alignItems="center"
                justifyContent="space-between"
                wrap="nowrap">

            <Typography variant="h6" color="primary" sx={ { verticalAlign: 'bottom', fontWeight: 'regular' } }>
              { item }
            </Typography>
            { status >= index ? <img src={ doneArrow } width={ 45 } height={ 45 } alt="arrow"/>
                              :
              <CircularProgress color="primary" sx={ {
                marginLeft: '10px', minWidth: '35px', minHeight: '35px', maxWidth: '35px',
                maxHeight                                                        : '35px',
              } }/>
            }
          </Grid>
        )
      }) }
    </Wrapper>
  )
}