import { basicData, InputField }                     from '../shared'
import React, { FC }                                 from 'react'
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

export const CreateAutoCompleteQuestion: FC<IProps> = ({
  question,
  inputs,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
  formName,
  current,
  setSchema,
}) => {

  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             current={ current }
             setSchema={ setSchema }>
      <Grid container direction="column" wrap="nowrap" sx={ { paddingLeft: '10vw', maxWidth: '600px' } } pr={ 2 }>
        { inputs && inputs.map((item, index: number) => (
          <Grid key={ index }>
            <Typography variant="h5" mt={ 5 }>Option { index + 1 }</Typography>
            <Grid container alignItems="center" justifyContent="space-between" width="100%" wrap="nowrap">
              <Grid maxWidth="150px" my={ '1.5vw' }>
                <InputField formik={ formik } item={ item } mainstyles={ { paddingRight: 0 } }/>
              </Grid>
              <Grid container flexShrink={ 1 } pt={ 1.7 }>
                <Autocomplete id={ `${ formName }[1]` }
                              onChange={ (event, value) => formik.setFieldValue(`${ formName }[${ index }][1]`, value) }
                              options={ states }
                              fullWidth
                              renderOption={ (option: any) => (
                                <Typography { ...option } style={ {
                                  fontSize: "1rem",
                                } }>{ option.key }</Typography>
                              ) }
                              sx={ { paddingLeft: '0' } }
                              renderInput={ (params) =>
                                <TextField { ...params } inputProps={ {
                                  ...params.inputProps,
                                  style: { fontSize: "1.3rem", fontWeight: 'bold' },
                                } }
                                           label={ <Typography width="auto"
                                                               variant="h6"
                                                               fontWeight="400"
                                                               fontStyle="italic"
                                                               sx={ { paddingLeft: '-15px' } }
                                                               color="black">State</Typography> }/> }/>
              </Grid>
            </Grid>
          </Grid>
        )) }
      </Grid>

    </Wrapper>
  )
}