import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
}                      from '@mui/material'
import React, { FC }   from 'react'
import { QuestionKey } from './questions'


const Wrapper: React.FC<any> = ({ children, ...rest }) => {
  return (
    <Grid
      container
      direction="column"
      sx={ { minHeight: 'calc( 100vh - 60px )' } }
    >
      <Typography
        variant="h6"
        sx={ { fontWeight: 'bold', padding: '0 10vw', marginTop: '10px' } }
      >
        { rest.question }
      </Typography>

      { children }

      <Typography sx={ { marginTop: '5vh', fontStyle: 'italic', padding: '3vw' } }>
        { rest.description }
      </Typography>

      <Grid
        item
        container
        justifyContent="center"
        flexShrink="0"
        sx={ { bottom: '40px', height: '50px', marginTop: 'auto', marginBottom: '5vh' } }
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={ () => rest.setCurrentQuestionHandler(rest.next) }
        >
          <Typography variant="h6"> Next question</Typography>
        </Button>
      </Grid>
    </Grid>
  )

}

interface ICreateCheckboxQuestion {
  question: string,
  elementConstructor: string
  next: QuestionKey
  setCurrentQuestionHandler: (next: QuestionKey) => void,
  answers?: { text: string, value: string }[] | undefined,
  description: string
}

export const CreateRadioQuestion: FC<ICreateCheckboxQuestion> = ({
  question, answers, setCurrentQuestionHandler, next, description,
}) => {

  return (
    <>
      <Wrapper
        next={ next }
        setCurrentQuestionHandler={ setCurrentQuestionHandler }
        description={ description }
        question={ question }
      >

        <FormControl sx={ { paddingLeft: '10vw' } }>
          <FormLabel id="demo-radio-buttons-group-label">
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={ { marginTop: '4vh' } }
          >
            { answers && answers.map((item: any, index: number) =>
              <FormControlLabel
                key={ index }
                value={ item.value }
                control={ <Radio/> }
                sx={ { maxHeight: '6vh' } }
                label={ <Typography variant="h6"> { item.text } </Typography> }
              />,
            ) }
          </RadioGroup>
        </FormControl>
      </Wrapper>
    </>
  )
}

interface ICreateTextFieldQuestion {
  question: string,
  elementConstructor: string
  next: QuestionKey
  setCurrentQuestionHandler: (next: QuestionKey) => void
  inputs?: { text: string, value: string }[] | undefined
  description: string
}

export const CreateTextFieldQuestion: FC<ICreateTextFieldQuestion> = ({
  question, inputs, setCurrentQuestionHandler, next, description,
}) => {

  return (
    <Wrapper
      next={ next }
      setCurrentQuestionHandler={ setCurrentQuestionHandler }
      description={ description }
      question={ question }
    >

      <Grid
        container
        direction="column"
        sx={ { paddingLeft: '10vw' } }
      >
        { inputs && inputs.map((item: any, index: number) => (
          <TextField
            label={
              <Typography
                variant="h6"
                color="black"
                sx={ { fontStyle: 'italic', minWidth: '60vw' } }
              >
                { item.text }
              </Typography> }
            onChange={ () => console.log('changed') }
            key={ index }
            variant="standard"
            color="primary"
            sx={ { margin: '2vh 0', maxHeight: '5vh', maxWidth: '60vw' } }
          />
        )) }
      </Grid>

    </Wrapper>
  )
}

interface ICreateCheckBoxQuestion {
  question: string,
  elementConstructor: string
  next: QuestionKey
  setCurrentQuestionHandler: (next: QuestionKey) => void
  answers?: { text: string, value: string }[] | undefined,
  description: string
}

export const CreateCheckBoxQuestion: FC<ICreateCheckBoxQuestion> = ({
  question, answers, setCurrentQuestionHandler, next, description,
}) => {

  return (
    <Wrapper
      next={ next }
      setCurrentQuestionHandler={ setCurrentQuestionHandler }
      description={ description }
      question={ question }
    >

      <FormGroup sx={ { paddingLeft: '10vw' } }>
        { answers && answers.map((item: any, index: number) => (
          <FormControlLabel
            control={ <Checkbox
            /> }
            label={ <Typography variant="h6"> { item.text } </Typography> }
            onChange={ () => console.log('changed') }
            key={ index }
            color="primary"
            sx={ { margin: '1vh 0', width: '80vw' } }
          />))
        }
      </FormGroup>

    </Wrapper>
  )
}


const states = [ 'Alaska', 'Alabama', 'Arkansas', 'American Samoa', 'Arizona', 'California', 'Colorado', 'Connecticut',
  'District of Columbia',
  'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Iowa', 'Idaho', 'Illinois', 'Indiana', 'Kansas', 'Kentucky',
  'Louisiana', 'Massachusetts',
  'Maryland', 'Maine', 'Michigan', 'Minnesota', 'Missouri', 'Mississippi', 'Montana', 'North Carolina', 'North Dakota',
  'Nebraska', 'New Hampshire',
  'New Jersey', 'New Mexico', 'Nevada', 'New York', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico',
  'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'Virgin Islands', 'Vermont', 'Washington', 'Wisconsin',
  'West Virginia', 'Wyoming' ]

interface ICreateAutoCompleteQuestion {
  question: string,
  elementConstructor: string
  next: QuestionKey
  setCurrentQuestionHandler: (next: QuestionKey) => void
  inputs?: { text: string, value: string }[] | undefined
  description: string
}

export const CreateAutoCompleteQuestion: FC<ICreateAutoCompleteQuestion> = ({
  question, inputs, setCurrentQuestionHandler, next, description,
}) => {

  return (
    <Wrapper
      next={ next }
      setCurrentQuestionHandler={ setCurrentQuestionHandler }
      description={ description }
      question={ question }
    >

      <Grid
        container
        direction="column"
        wrap="nowrap"
        alignContent="center"
        justifyContent="space-evenly"
        alignItems="flex-start"
        sx={ { paddingLeft: '5vh' } }
      >
        { inputs && inputs.map((item: any, index: number) => (
          <Grid
            item
            sx={ { margin: '2vh 0' } }
            key={ index }
          >
            <Typography variant="h6">Option { index + 1 }</Typography>
            <Grid container>
              <TextField
                label={
                  <Typography
                    component="span"
                    color="black"
                    sx={ { fontStyle: 'italic', width: '200px' } }
                  >
                    { item.text }
                  </Typography> }
                onChange={ () => console.log('changed') }
                key={ index }
                variant="standard"
                color="primary"
                sx={ { maxHeight: '5vh', width: '40vw' } }
              />

              <Autocomplete
                disablePortal
                id="states"
                options={ states }
                sx={ { width: '40vw' } }
                renderInput={ (params) => <TextField { ...params } label="State"/> }
              />
            </Grid>
          </Grid>
        )) }

      </Grid>

    </Wrapper>
  )
}