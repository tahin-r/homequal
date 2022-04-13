import React, { FC }             from 'react'
import { Wrapper }               from '../../Wrapper'
import { Grid, Typography }      from '@mui/material'
import { basicData, InputField } from '../shared'

interface ICreateTextFieldQuestion extends basicData {
  inputs?: { text: string; value: string }[]
  coQuestion?: (state: any) => string
  coInputs?: { text: string; value: string }[]
}

export const CreateDoubledTextFieldQuestion: FC<ICreateTextFieldQuestion> = ({
  question,
  inputs,
  setCurrentQuestionHandler,
  next,
  description,
  formik,
  current,
  setSchema,
  coQuestion,
  coInputs,
}) => {
  return (
    <Wrapper next={ next }
             setCurrentQuestionHandler={ setCurrentQuestionHandler }
             description={ description }
             question={ question }
             formik={ formik }
             inputs={ inputs }
             current={ current }
             setSchema={ setSchema }
             coQuestion={ coQuestion }
             coInputs={ coInputs }>
      <Grid container direction="column" wrap="nowrap" sx={ { paddingLeft: "5vw" } }>
        <Grid container>
          <Typography variant="h6" sx={ {
            width     : "100px",
            margin    : "2vh 1vh 2vh 0",
            textAlign : "left",
            fontWeight: "bold",
          } }>
            You
          </Typography>
          <Typography variant="h6" sx={ {
            width     : "100px",
            margin    : "2vh 0",
            textAlign : "left",
            fontWeight: "bold",
          } }>
            { formik.values.co_first_name }`s
          </Typography>
        </Grid>
        { inputs &&
          inputs.map((item, index: number) => (
            <Grid key={ index } container justifyContent="flex-start" wrap="nowrap">

              <Grid sx={ { width: "auto", maxWidth: '100px', marginRight: '1vw', boxSizing: 'border-box' } }>
                <InputField key={ index }
                            item={ item }
                            formik={ formik }
                            labelText={ 'Payments' }
                            mainstyles={ { paddingRight: '0' } }/>
              </Grid>

              <Grid sx={ { width: "auto", maxWidth: '100px', boxSizing: 'border-box' } }>
                { coInputs && (
                  <InputField key={ index + 5 }
                              item={ coInputs[index] }
                              formik={ formik }
                              labelText={ 'Payments' }
                              mainstyles={ { paddingRight: '0' } }/>
                ) }
              </Grid>

              <Grid alignSelf="baseline" ml={ 2 } pt={ '2rem' }>
                <Typography variant="h6" sx={ { fontSize: '1.3rem' } }>{ item.text }</Typography>
              </Grid>
            </Grid>
          )) }
      </Grid>
    </Wrapper>
  )
}