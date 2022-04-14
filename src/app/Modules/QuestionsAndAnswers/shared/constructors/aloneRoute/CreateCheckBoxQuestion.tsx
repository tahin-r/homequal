import { basicData }                                         from '../shared'
import React, { FC, memo }                                   from 'react'
import { Wrapper }                                           from '../../Wrapper'
import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import { ICreateRadio_CheckBox_Question }                    from '../../../questions'

interface IProps extends basicData, ICreateRadio_CheckBox_Question {
}

export const CreateCheckBoxQuestion: FC<IProps> = memo(({
  answers,
  formik,
  formName,
  wrapperProps,

}) => {
  return (
    <Wrapper { ...wrapperProps }>

      <FormGroup onChange={ formik.handleChange } sx={ { paddingLeft: '10vw' } }>
        { answers && answers.map((item: any, index: number) => (
          <FormControlLabel control={ <Checkbox/> }
                            label={ <Typography variant="h6"> { item.text } </Typography> }
                            name={ formName }
                            key={ index }
                            value={ item.value }
                            color="primary"
                            sx={ { margin: '1vh 0', width: '80vw' } }/>)) }
      </FormGroup>

    </Wrapper>
  )
})