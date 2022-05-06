import styled               from 'styled-components'
import React, { useState }  from 'react'
import { Grid, Typography } from '@mui/material'

const DiagramButton = styled(({ ...props }) => <div { ...props } />)`
  box-sizing   : border-box;
  padding      : 10px 40px;
  margin       : 10px 20px;
  border-width : 1px;
  border-style : solid;
  border-color : ${ (props) => props.chosendiagrambutton === props.value ? props.theme.colors.primary : 'grey' };;
  color        : ${ (props) => props.chosendiagrambutton === props.value ? 'black' : 'grey' };

  & > * {
    font-weight : ${ (props) => props.chosendiagrambutton === props.value ? '500' : 'normal' };
  }
`


export const LoanButtons = () => {
  const [chosenDiagramButton, setDiagramButton] = useState<string>()
  const handleDiagramButtonClick = (value: string) => {
    setDiagramButton(value)
  }

  return (
    <>
      <Typography variant="h5" textAlign="center" color="gray">
        Loan Type
      </Typography>
      <Grid container justifyContent="center" my={ 2 }>

        <DiagramButton value={ 'Conventional' }
                       chosendiagrambutton={ chosenDiagramButton }
                       onClick={ () => handleDiagramButtonClick('Conventional') }>
          <Typography variant="h6">
            Conventional
          </Typography>
        </DiagramButton>

        <DiagramButton value={ 'FHA' }
                       chosendiagrambutton={ chosenDiagramButton }
                       onClick={ () => handleDiagramButtonClick('FHA') }>
          <Typography variant="h6">
            FHA
          </Typography>
        </DiagramButton>

        <DiagramButton value={ 'VA' }
                       chosendiagrambutton={ chosenDiagramButton }
                       onClick={ () => handleDiagramButtonClick('VA') }>
          <Typography variant="h6">
            VA
          </Typography>
        </DiagramButton>
      </Grid>
    </>
  )
}