import { basicData, InputField } from '../shared'
import React, { FC, memo } from 'react'
import { Wrapper } from '../../Wrapper'
import { Grid } from '@mui/material'
import { ICreateTextFieldQuestion } from '../../../questions'

interface IProps extends ICreateTextFieldQuestion, basicData {
}

export const CreateTextFieldQuestion: FC<IProps> = memo(({
  inputs,
  wrapperProps,
  formik
}) => {
  return (
    <Wrapper { ...wrapperProps }>

      <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>

        { inputs.map((item, index: number) => <InputField formik={ formik }
                                                               item={ item }
                                                               key={ index }
                                                               index={ index }/>) }
      </Grid>
    </Wrapper>
  )
})
