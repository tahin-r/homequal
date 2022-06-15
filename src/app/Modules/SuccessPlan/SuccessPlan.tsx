import React from 'react'
import { HeaderDivider } from '../../../shared/styles'
import { Title } from './Sections/Title'
import { SuccessActiveButton } from './Sections/SuccessActiveButton'
import { Diagrams } from './Sections/Diagrams'
import { SuccessButton } from './Sections/SuccessButton'
import { LoanButtons } from './Sections/LoanButtons'

export const SuccessPlan = () => {
  const sections = [
    {
      link: '/solution_odds',
      title: `HomeQual's Solutions 
      to Improve Your Odds`
    },
    {
      link: '/get_lender_letter',
      title: 'Get Your Lender Pre-Approval Letter'
    },
    {
      link: '/design_your_home',
      title: 'Design Your Dream Home'
    },
    {
      link: '/get_real_estate_and_view',
      title: 'Get Your Real Estate and View Homes'
    },
    {
      link: '/get_real_estate_and_view',
      title: 'Your Home Buying Checklist'
    },
    {
      link: '/claim_your_rebate',
      title: 'Claim Your Rebate'
    },
    {
      link: '/your_home_success_team',
      title: 'Your Home Success Team'
    },
    {
      link: '/update_your_information',
      title: 'Update Your Information'
    }
  ]

  return (
    <>
      <HeaderDivider/>
      <Title/>
      <SuccessActiveButton/>
      <LoanButtons/>
      <Diagrams/>
      {
        sections.map(section => {
          return <SuccessButton title={section.title} link={section.link}/>
        })
      }
    </>
  )
}
