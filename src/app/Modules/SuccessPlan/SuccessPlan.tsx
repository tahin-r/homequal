import React from 'react'
import { HeaderDivider } from '../../../shared/styles'
import { Title } from './Sections/Title'
import { SuccessActiveButton } from './Sections/SuccessActiveButton'
import { Diagrams } from './Sections/Diagrams'
import { LoanButtons } from './Sections/LoanButtons'

export const SuccessPlan = () => {
  return (
    <>
      <HeaderDivider/>
      <Title/>
      <SuccessActiveButton/>
      <LoanButtons/>
      <Diagrams/>
    </>
  )
}
