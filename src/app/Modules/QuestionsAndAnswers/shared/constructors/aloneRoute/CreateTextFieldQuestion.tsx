import { basicData, InputField } from '../shared'
import React, { FC }             from 'react'
import { Wrapper }               from '../../Wrapper'
import { Grid }                                 from '@mui/material'
import { basicTypes, ICreateTextFieldQuestion } from '../../../questions'

interface IProps extends ICreateTextFieldQuestion,basicData{
}
export const CreateTextFieldQuestion: FC<IProps> = ({
  question,
  inputs,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
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

      <Grid container direction="column" sx={ { paddingLeft: '10vw' } }>

        { inputs && inputs.map((item: any, index: number) => <InputField formik={ formik }
                                                                         item={ item }
                                                                         key={ index }
                                                                         index={ index }/>) }
      </Grid>
    </Wrapper>
  )
}