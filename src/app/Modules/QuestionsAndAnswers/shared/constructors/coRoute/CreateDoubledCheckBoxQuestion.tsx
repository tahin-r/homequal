import { basicData } from '../shared'
import React, { FC } from 'react'
import { Wrapper }                                                 from '../../Wrapper'
import { Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material'

interface ICreateDoubledCheckBoxQuestion extends basicData {
  answers?: { text: string; value: string }[]
  co_answers?: { text: string; value: string }[]
  formName?: string
  co_formName?: string
}

export const CreateDoubledCheckBoxQuestion: FC<ICreateDoubledCheckBoxQuestion> = ({
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
      <Grid container direction="column" wrap="nowrap" sx={ { padding: "5vw 3vw 0 5vw" } }>
        <Grid container>
          <Typography variant="h6" sx={ {
            maxWidth   : "49px",
            marginRight: "20px",
            textAlign  : "left",
            fontWeight : "bold",
          } }>
            You
          </Typography>
          <Typography variant="h6" sx={ {
            width     : "auto",
            textAlign : "left",
            fontWeight: "bold",
          } }>
            { formik.values.co_first_name }`s
          </Typography>
        </Grid>

        <FormGroup onChange={ formik.handleChange }>
          <Grid container direction="column" wrap="nowrap">
            { answers &&
              answers.map((item: any, index: number) => (
                <div key={ index }>
                  <Grid container justifyContent="flex-start" wrap={ "nowrap" }>
                    <FormControlLabel control={ <Checkbox sx={ { transform: 'scale(1.3)' } }/> }
                                      label=""
                                      name={ formName }
                                      value={ item.value }
                                      color="primary"
                                      sx={ { margin: "1vh 0", minWidth: "50px" } }/>

                    { co_answers && (
                      <FormControlLabel control={ <Checkbox sx={ { transform: 'scale(1.3)' } }/> }
                                        label={
                                          <Typography variant="h6" ml={ 1 }> { item.text } </Typography>
                                        }
                                        name={ co_formName }
                                        value={ co_answers[index].value }
                                        color="primary"
                                        sx={ { margin: "1vh 0", width: "auto" } }/>
                    ) }
                  </Grid>
                </div>
              )) }
          </Grid>
        </FormGroup>
      </Grid>
    </Wrapper>
  )
}