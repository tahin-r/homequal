import { basicData, InputField }    from '../shared'
import React, { FC, memo }          from 'react'
import { Wrapper }                  from '../../Wrapper'
import {Autocomplete, Grid, TextField, Typography} from '@mui/material'
import { ICreateTextFieldQuestion } from '../../../questions'
import makeStyles from "@material-ui/core/styles/makeStyles";

interface IProps extends ICreateTextFieldQuestion, basicData {
}

const states = ['Alaska', 'Alabama', 'Arkansas', 'American Samoa', 'Arizona', 'California', 'Colorado', 'Connecticut',
    'District of Columbia',
    'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Iowa', 'Idaho', 'Illinois', 'Indiana', 'Kansas', 'Kentucky',
    'Louisiana', 'Massachusetts',
    'Maryland', 'Maine', 'Michigan', 'Minnesota', 'Missouri', 'Mississippi', 'Montana', 'North Carolina', 'North Dakota',
    'Nebraska', 'New Hampshire',
    'New Jersey', 'New Mexico', 'Nevada', 'New York', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico',
    'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'Virgin Islands', 'Vermont', 'Washington', 'Wisconsin',
    'West Virginia', 'Wyoming']

export const CreateTextFieldQuestionWithState: FC<IProps> = memo(({
     inputs,
     wrapperProps,
     formik,
 }) => {

    const styles = makeStyles(theme => ({
        notchedOutline: {
            borderColor: '#ccc !important'
        }
    }))

    const classes = styles()
    return (
        <Wrapper { ...wrapperProps }>

            <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>

                { inputs.map((item, index: number) => {
                    return (
                        item.value === 'state' ?
                            <Autocomplete id={ 'state' }
                              onChange={ (event, value) => formik.setFieldValue('state', value) }
                              options={ states }
                              fullWidth
                              renderOption={ (option: any) => (
                                  <Typography { ...option } style={ {
                                      fontSize: '1rem',
                                  } }>{ option.key }</Typography>
                              ) }
                              sx={ { height: '100%',boxSizing:'border-box',maxWidth:'440px'} }
                              renderInput={ (params) => (
                                  <TextField { ...params }
                                             InputLabelProps={ { sx: { '&.MuiInputLabel-shrink': {
                                                         marginTop: '-10px', zIndex: 1, }, }, } }
                                             inputProps={ {
                                                 ...params.inputProps as any,
                                                 style: { fontSize: '1.4rem', fontWeight: 'bold'},
                                             } }
                                             variant="outlined"
                                             color="primary"
                                             onBlur={ formik.handleBlur }
                                             InputProps={ {
                                                 ...params.InputProps as any,
                                                 style: { paddingTop:5,paddingRight:50, fontSize: '1.4rem', fontWeight: 'bold' },
                                                 classes: {
                                                     notchedOutline: classes.notchedOutline,
                                                 }
                                             } }
                                             label={ <Typography variant="h6" color="#ccc" sx={ { fontSize: '15px !important', fontStyle: 'italic', fontWeight: 'regular' } }>
                                                 State</Typography> }
                                             sx={ { mt:1 } }/>) }/>
                        :
                            <InputField formik={ formik }
                                        item={ item }
                                        key={ index }
                                        index={ index }/>

                    )
                })
                }
            </Grid>
        </Wrapper>
    )
})