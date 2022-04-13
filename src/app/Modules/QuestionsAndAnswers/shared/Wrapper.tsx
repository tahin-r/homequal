import React, { useEffect, useState } from 'react'
import { useNavigate }                from 'react-router-dom'
import { Button, Grid, Typography }   from '@mui/material'
import styled                         from 'styled-components'


const ColoredButton = styled(({ ...props }) => <Button { ...props }
                                                       variant="outlined"
                                                       color="primary"
                                                       type="button"
                                                       disableRipple={ true }/>)`
  display          : block;
  width            : 80vw;
  min-width        : 280px;
  max-width        : 500px;
  padding          : 10px;
  border-radius    : 10px;
  background-color : white;
  animation-name   : none;
  transition       : 0.2s;

  &:active {
    transition       : 0.1s;
    background-color :${ (props) => props.theme.colors.primary };
    color            : white
  }

`


export const Wrapper: React.FC<any> = ({ children, ...rest }) => {
  const navigate = useNavigate()

  useEffect(() => {
    rest.setSchema && rest.setSchema(String(rest.current))
  }, [rest.current])

  const handleClick = async () => {
    const errors = await rest.formik.validateForm()
    rest.formik.submitForm()
    if (Object.keys(errors).length === 0) {
      rest.setCurrentQuestionHandler(rest.next, rest.current)
    } else {
    }
  }
  return (

    <Grid position={ 'relative' }
          container
          wrap={ 'nowrap' }
          direction="column"
          sx={ { minHeight: 'calc( 100vh - 60px )', height: 'auto' } }>

      <Typography variant="h5" mb={ 2 } sx={ { fontWeight: 'bold', padding: '0 10vw', marginTop: '25px' } }>
        { rest.question(rest.formik.values) }
      </Typography>

      <form onSubmit={ rest.formik.handleSubmit }>
        { children }

        <Typography variant="h6" sx={ {
          marginY   : '2vh',
          fontStyle : 'italic',
          padding   : '3vw 3vw 3vw 10vw',
          lineHeight: 1.2,
          fontSize  : '1.1rem',
        } }>
          { rest.description }
        </Typography>


        { (rest.current !== 'Q23' || rest.status === 3) && (
          <Grid flexShrink={ 0 }
                container
                justifyContent="center"
                sx={ { bottom: '5px', height: '50px', marginTop: 'auto', marginBottom: '20px' } }>
            <ColoredButton
                           onClick={ () => setTimeout(() => rest.current !== 'Q23' ? handleClick() : navigate('/'), 300) }>
              <Typography variant="h5" textTransform="capitalize">
                Continue
              </Typography>
            </ColoredButton>

          </Grid>
        ) }
      </form>
    </Grid>
  )
}