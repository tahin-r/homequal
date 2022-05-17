import { basicData, InputField }    from '../shared'
import React, { FC, memo }          from 'react'
import { Wrapper }                  from '../../Wrapper'
import {Grid, Typography} from '@mui/material'
import { ICreateDoubleQuestionsWithTextField } from '../../../questions'

interface IProps extends ICreateDoubleQuestionsWithTextField, basicData {
}

export const CreateDoubleQuestionsWithTextField: FC<IProps> = memo(({
    firstInputs,
    secondInputs,
    question1,
    wrapperProps,
    formik,
}) => {

    return (
        <>
            <Wrapper { ...wrapperProps }>
                <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>

                    { firstInputs.map((item, index: number) => <InputField formik={ formik }
                                                                      item={ item }
                                                                      key={ index }
                                                                      index={ index }/>) }
                <Typography variant="h5" sx={ { fontWeight: 'bold', marginY: '20px' } }>
                    { question1(formik.values) }
                </Typography>

                    { secondInputs.map((item, index: number) => <InputField formik={ formik }
                                                                           item={ item }
                                                                           key={ index }
                                                                           index={ index }/>) }
                </Grid>
            </Wrapper>
        </>
    )
})