import { basicData, InputNumberField, RadioField } from '../shared'
import React, { FC, memo } from 'react'
import { Wrapper } from '../../Wrapper'
import { Grid, Typography } from '@mui/material'
import { ICreateDoubleQuestionsWithTextFieldAndRadioCheckBox } from '../../../questions'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  radioButtonsBlock: {
    width: '90%'
  }
})

interface IProps extends ICreateDoubleQuestionsWithTextFieldAndRadioCheckBox, basicData {
}

export const CreateDoubleQuestionsWithTextFieldAndRadioCheckBox: FC<IProps> = memo(({
  inputs,
  answers,
  formName,
  secondQuestion,
  wrapperProps,
  formik
}) => {
  const classes = useStyles()

  return (
        <>
            <Wrapper { ...wrapperProps }>
                <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>

                    { inputs.map((item, index: number) => <InputNumberField formik={ formik }
                                                                           item={ item }
                                                                           key={ index }
                                                                           index={ index }/>) }
                    <Typography variant="h5" sx={ { fontWeight: 'bold', marginY: '20px' } }>
                        { secondQuestion(formik.values) }
                    </Typography>

                    <RadioField
                        formik={ formik }
                        formName={ formName }
                        answers={ answers }
                        className={classes.radioButtonsBlock}
                    />
                </Grid>
            </Wrapper>
        </>
  )
})
