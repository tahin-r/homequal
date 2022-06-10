import { basicData, InputNumberField } from '../shared'
import React, { FC, memo } from 'react'
import { Wrapper } from '../../Wrapper'
import { Grid, Typography } from '@mui/material'
import { ICreateDoubleQuestionsWithTextNumberField } from '../../../questions'

interface IProps extends ICreateDoubleQuestionsWithTextNumberField, basicData {
}

export const CreateDoubleQuestionsWithTextNumberField: FC<IProps> = memo(({
  firstInputs,
  secondInputs,
  question1,
  wrapperProps,
  formik
}) => {
  return (
        <>
            <Wrapper { ...wrapperProps }>
                <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>

                    { firstInputs.map((item, index: number) => <InputNumberField formik={ formik }
                                                                           item={ item }
                                                                           key={ index }
                                                                           index={ index }/>) }
                    <Typography variant="h5" sx={ { fontWeight: 'bold', marginY: '20px' } }>
                        { question1(formik.values) }
                    </Typography>

                    { secondInputs.map((item, index: number) => <InputNumberField formik={ formik }
                                                                            item={ item }
                                                                            key={ index }
                                                                            index={ index + 1 }/>) }
                </Grid>
            </Wrapper>
        </>
  )
})
