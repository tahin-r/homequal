import React, { FC, memo } from 'react'
import { Wrapper } from '../../Wrapper'
import { Box, Grid, Typography } from '@mui/material'
import { basicData, InputNumberField } from '../shared'
import { ICreateDoubledTextFieldQuestion } from '../../../questions'

interface IProps extends ICreateDoubledTextFieldQuestion, basicData {
}

export const CreateDoubledTextFieldQuestion: FC<IProps> = memo(({
  inputs,
  formik,
  coInputs,
  wrapperProps
}) => {
  return (
    <Wrapper { ...wrapperProps }>
      <Grid container direction="column" wrap="nowrap" sx={ { paddingLeft: '5vw' } }>
        <Grid container>
          <Typography variant="h6" sx={ {
            width: '100px',
            margin: '2vh 1vh 2vh 0',
            textAlign: 'left',
            fontWeight: 'bold'
          } }>
            You
          </Typography>
          <Typography variant="h6" sx={ {
            width: '100px',
            margin: '2vh 0',
            textAlign: 'left',
            fontWeight: 'bold'
          } }>
            { formik.values.co_first_name }`s
          </Typography>
        </Grid>
        { inputs.map((item, index: number) => (
          <Grid key={ index } container justifyContent="flex-start" wrap="nowrap">

            <Box sx={ { width: 'auto', maxWidth: '100px', marginRight: '1vw', boxSizing: 'border-box' } }>
              <InputNumberField key={ index }
                          item={ item }
                          formik={ formik }
                          labelText={ 'Payments' }
                          mainstyles={ { paddingRight: '0' } }/>
            </Box>
            <Box sx={ { width: 'auto', maxWidth: '100px', boxSizing: 'border-box' } }>
              <InputNumberField key={ index + 5 }
                          item={ coInputs[index] }
                          formik={ formik }
                          labelText={ 'Payments' }
                          mainstyles={ { paddingRight: '0' } }/>
            </Box>

            <Box alignSelf="baseline" ml={ 2 } pt={ '2rem' }>
              <Typography variant="h6" sx={ { fontSize: '1.3rem' } }>{ item.text }</Typography>
            </Box>
          </Grid>
        )) }
      </Grid>
    </Wrapper>
  )
})
