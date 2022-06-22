import React from 'react'
import { HeaderDivider } from '../../../shared/styles'
import { Title } from './Sections/Title'
import { SuccessActiveButton } from './Sections/SuccessPlan/SuccessActiveButton'
import { Diagrams } from './Sections/SuccessPlan/Diagrams'
import { SuccessButton } from './Sections/SuccessButton'
import { LoanButtons } from './Sections/SuccessPlan/LoanButtons'
import { SolutionOdds } from './Sections/SolutionOdds/SolutionOdds'
import { GetLenderLetter } from './Sections/GetLenderLetter/GetLenderLetter'
import { useLocation } from 'react-router-dom'

const sections = [
  {
    link: '/solution_odds',
    title: `HomeQual's Solutions 
      to Improve Your Odds`,
    element: <SolutionOdds/>
  },
  {
    link: '/get_lender_letter',
    title: 'Get Your Lender Pre-Approval Letter',
    element: <GetLenderLetter/>
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

export const SuccessPlan = () => {
  const pathname = useLocation()
  const path = pathname.pathname

  return (
    <>
      <HeaderDivider/>
      <Title/>
      {
        path === '/success'
          ? <>
            <SuccessActiveButton/>
            <LoanButtons/>
            <Diagrams/>
          </>
          : sections.map((section) => {
            if (section.link === path) {
              return section.element
            }
          })

      }
      {
        sections.map((section, index) => {
          if (section.link === path) {
            return
          }
          return <SuccessButton key={ index } title={section.title} link={section.link}/>
        })
      }
    </>
  )
}
