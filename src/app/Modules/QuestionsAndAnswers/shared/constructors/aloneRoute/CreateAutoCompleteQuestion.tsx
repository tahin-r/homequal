import { basicData, InputField }                     from '../shared'
import React, { FC, memo }                           from 'react'
import { Wrapper }                                   from '../../Wrapper'
import { Autocomplete, Grid, TextField, Typography } from '@mui/material'
import { ICreateAutoCompleteQuestion }               from '../../../questions'

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

interface IProps extends basicData, ICreateAutoCompleteQuestion {
}

export const CreateAutoCompleteQuestion: FC<IProps> = memo(({
  inputs,
  formik,
  formName,
  wrapperProps,
}) => {

  return (
    <Wrapper { ...wrapperProps }>
      <Grid container direction="column" wrap="nowrap" sx={ { paddingLeft: '10vw'} } pr={ 2 }>
        { inputs.map((item, index: number) => (
          <Grid key={ index }>
            <Typography variant="h5" mt={ 5 } mb={2}>Option { index + 1 }</Typography>
            <Grid container alignItems="center" justifyContent="space-between" width="100%" wrap="nowrap">
              <Grid maxWidth="150px" mt={ '0px' } container alignSelf="start" boxSizing='border-box'>
                <InputField formik={ formik } item={ item } mainstyles={ { paddingRight: 0,paddingBottom:1, marginTop: 0 } }/>
              </Grid>
              <Grid container flexShrink={ 1 } alignSelf="start" boxSizing='border-box'>
                <Autocomplete id={ `${ formName }[1]` }
                              onChange={ (event, value) => formik.setFieldValue(`${ formName }[${ index }][1]`, value) }
                              options={ states }
                              fullWidth
                              renderOption={ (option: any) => (
                                <Typography { ...option } style={ {
                                  fontSize: '1rem',
                                } }>{ option.key }</Typography>
                              ) }
                              sx={ { paddingLeft: '5px', height: '100%',boxSizing:'border-box',maxWidth:'500px'} }
                              renderInput={ (params) => (
                                <TextField { ...params }
                                           InputLabelProps={ { sx: { '&.MuiInputLabel-shrink': {
                                             marginTop: '-10px', zIndex: 1, }, }, } }
                                           inputProps={ {
                                             ...params.inputProps as any,
                                             style: { fontSize: '1.4rem', fontWeight: 'bold'},
                                           } }
                                           InputProps={ {
                                             ...params.InputProps as any,
                                             style: { paddingTop:5,paddingRight:50 },
                                           } }
                                           label={ <Typography width="auto"
                                                               variant="h6"
                                                               fontWeight="400"
                                                               fontStyle="italic"
                                                               sx={ { marginLeft: '15px'} }
                                                               color="black">State</Typography> }
                                           sx={ { mt:1 } }/>) }/>
              </Grid>
            </Grid>
          </Grid>
        )) }
      </Grid>

    </Wrapper>
  )
})