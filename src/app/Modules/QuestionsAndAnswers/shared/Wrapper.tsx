import React, { memo, useEffect }   from 'react'
import { NavigateFunction }         from 'react-router-dom'
import { Button, Grid, Typography } from '@mui/material'
import styled                       from 'styled-components'
import { QuestionKeyType }          from '../questions'
import { FormikProps }              from 'formik'


const ColoredButton = styled(({ ...props }) => <Button { ...props } variant="outlined"
 color="primary"
 type="button"
 disableRipple={ true }/>)`
  display          : block;
  width            : 80vw;
  min-width        : 200px;
  max-width        : 500px;
  padding          : 10px;
  border-radius    : 10px;
  background-color : white;
  animation-name   : none;
  transition       : 0.2s;

  &:active {
    transition       : 0.1s;
    background-color : ${ (props) => props.theme.colors.primary };
    color            : white
  }

`
const StyledForm = styled(({ ...props }) => <form { ...props }/>)`
  flex-grow      : 1;
  display        : flex;
  flex-direction : column;
`


export interface IWrapper {
  question: (state: {} | null) => string
  formik: FormikProps<any>,
  navigate: NavigateFunction,
  current: QuestionKeyType,
  next: QuestionKeyType,
  SetCurrentQuestionHandler: (next: QuestionKeyType, current: QuestionKeyType, formik: FormikProps<any>, navigate: NavigateFunction) => void,
  setSchema: (questionKey: QuestionKeyType) => void,
  description?: string
  status?: number
}

export const Wrapper: React.FC<IWrapper> = memo(({
  formik,
  navigate,
  children,
  current,
  next,
  SetCurrentQuestionHandler,
  setSchema,
  description,
  status,
  question,
}) => {


  useEffect(() => {
    setTimeout(() => {
      formik.validateForm()
    }, 50)
    setSchema(current)
  }, [current, formik.submitCount])

  const handleClick = async () => {
    const errors = await formik.validateForm()
    await formik.submitForm()
    if (Object.keys(errors).length === 0) {
      SetCurrentQuestionHandler(next, current, formik, navigate)
      formik.setTouched({})
    }
  }

  return (

    <Grid position={ 'relative' }
          container
          wrap={ 'nowrap' }
          direction="column"
          sx={ { minHeight: 'calc( 100vh - 60px)' } }>

      <Typography variant="h5" mb={ 2 } sx={ { fontWeight: 'bold', padding: '0 10vw', marginTop: '25px' } }>
        { question(formik.values) }
      </Typography>

      <StyledForm onSubmit={ formik.handleSubmit }>

        { children }

        <Typography variant="h6" sx={ {
          marginY   : '2vh',
          fontStyle : 'italic',
          padding   : '20px 3vw 20px 10vw',
          lineHeight: 1.2,
          fontSize  : '1.1rem',
        } }>
          { description }
        </Typography>

        { (current !== 'Q23' || status === 3) && formik.isValid && (
          <Grid container justifyContent="center" alignItems="center" sx={ {
            height: '50px', mt: { xs: 'auto', sm: '50px' }, mb: '30px',
          } }>
            <ColoredButton onClick={ () => setTimeout(() => current !== 'Q23' ? handleClick() : navigate('/'), 300) }>
              <Typography variant="h5">
                Continue
              </Typography>
            </ColoredButton>

          </Grid>
        ) }
      </StyledForm>
    </Grid>
  )
})