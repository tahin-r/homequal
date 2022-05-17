import {basicData, InputField, RadioField} from '../shared'
import React, { FC, memo }          from 'react'
import { Wrapper }                  from '../../Wrapper'
import {Grid, Typography} from '@mui/material'
import { ICreateDoubleQuestionsWithTextFieldAndRadio_CheckBox } from '../../../questions'

interface IProps extends ICreateDoubleQuestionsWithTextFieldAndRadio_CheckBox, basicData {
}

export const CreateDoubleQuestionsWithTextFieldAndRadio_CheckBox: FC<IProps> = memo(({
    inputs,
    answers,
    formName,
    secondQuestion,
    wrapperProps,
    formik,
}) => {

    return (
        <>
            <Wrapper { ...wrapperProps }>
                <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>

                    { inputs.map((item, index: number) => <InputField formik={ formik }
                                                                           item={ item }
                                                                           key={ index }
                                                                           index={ index }/>) }
                    <Typography variant="h5" sx={ { fontWeight: 'bold', marginY: '20px' } }>
                        { secondQuestion(formik.values) }
                    </Typography>

                    <RadioField formik={ formik } formName={ formName } answers={ answers }/>
                </Grid>
            </Wrapper>
        </>
    )
})