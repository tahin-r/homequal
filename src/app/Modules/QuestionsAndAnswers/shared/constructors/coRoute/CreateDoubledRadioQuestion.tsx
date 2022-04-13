import { basicData }                             from '../shared'
import React, { FC, useEffect, useState }        from 'react'
import { Wrapper }                               from '../../Wrapper'
import { Grid, Radio, Typography }               from '@mui/material'
import { ICreateDoubledCheck_Radio_BoxQuestion } from '../../../questions'

interface IProps extends ICreateDoubledCheck_Radio_BoxQuestion, basicData {
}

export const CreateDoubledRadioQuestion: FC<IProps> = ({
  question,
  answers,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
  current,
  setSchema,
  co_answers,
  formName,
  co_formName,
}) => {

  const [value, setValue] = useState(answers[0].value)
  const [co_value, co_setValue] = useState(co_answers[0].value)

  useEffect(
    () => {
      setValue( answers[0].value)
      co_setValue(co_answers[0].value)
      formik.setFieldValue(formName,answers[0].value)
      formik.setFieldValue(co_formName, co_answers[0].value)
    }, [current],
  )

  const handleCurrentAnswer = (event: any, checked: any, item: any) => {
    setValue(item)
    formik.handleChange(event, checked)
  }
  const co_handleCurrentAnswer = (event: any, checked: any, item: any) => {
    co_setValue(item)
    formik.handleChange(event, checked)
  }
  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             answers={ answers }
             current={ current }
             setSchema={ setSchema }
             co_answers={ co_answers }>
      <Grid container direction="column" wrap="nowrap" sx={ { padding: "0 0 0 10vw" } }>
        <Grid container>
          <Typography variant="h6" sx={ {
            maxWidth   : "48px",
            marginRight: "20px",
            textAlign  : "left",
            fontWeight : "bold",
          } }>
            You
          </Typography>
          <Typography variant="h6" sx={ { width: "auto", textAlign: "left", fontWeight: "bold" } }>
            { formik.values.co_first_name }`s
          </Typography>
        </Grid>

        <Grid container direction="column" wrap="nowrap" width={ 'auto' }>
          { answers.map((item, index) => (
            <Grid container width={ '100%' } alignItems="center" key={ index } wrap="nowrap" my={ 1 }>

              <Radio checked={ value === item.value }
                     onChange={ (event, checked) => handleCurrentAnswer(event, checked, item.value) }
                     value={ item.value }
                     name={ formName }
                     sx={ { transform: 'scale(1.3)', mr: 1 } }/>

              <Radio checked={ co_value === co_answers[index].value }
                     onChange={ (event, checked) => co_handleCurrentAnswer(event, checked, co_answers[index].value) }
                     value={ co_answers[index].value }
                     name={ co_formName }
                     sx={ { transform: 'scale(1.3)', mr: 1 } }/>
              <Typography variant="h6">{ item.text }</Typography>
            </Grid>
          )) }

        </Grid>
      </Grid>
    </Wrapper>

  )
}