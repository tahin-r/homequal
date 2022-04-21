import React             from 'react'
import { HeaderDivider } from '../../../shared/styles'
import { Title }         from './Sections/Title'
import { Diagrams }      from './Sections/Diagrams'
import { LoanButtons }   from './Sections/LoanButtons'

export const SuccesPlan = () => {

  return (
    <>
      <HeaderDivider/>
      <Title/>
      <LoanButtons/>
      <Diagrams/>
    </>
  )
}