import React                   from 'react'
import { Route, Routes }       from 'react-router-dom'
import { Dashboard }           from '../app/Modules/Dashboard/Dashboard'
import { QuestionsAndAnswers } from '../app/Modules/QuestionsAndAnswers/QuestionsAndAnswers'
import { PartnerWithUs }       from '../app/Modules/SmallSections/PartnerWithUs/PartnerWithUs'
import { Careers }             from '../app/Modules/SmallSections/Careers/Careers'
import { AboutUs }             from '../app/Modules/SmallSections/AboutUs/AboutUs'
import { Resources }           from '../app/Modules/SmallSections/Resources/Resources'
import { FAQ }                 from '../app/Modules/SmallSections/FAQ/FAQ'

//
// link: '/FAQs'
// link: '/homebuyer_library'
// link: '/real_estate'
// link: '/lending'
// link: '/about_us'
// link: '/careers'
// link: '/partner_with_us'
// link: '/privacy_policy'
// link: '/terms_of_Use'
// Menu links
// link: 'buy_a_home'
// link: 'find_a_lender'
// link: 'find_agent'
// link: 'refinance'
// link: 'speak_advisor'
// link: 'FAQs'
// link: 'resources'
// link: 'my_account'

const mainRoutes = [
  {
    path   : '/',
    element: <Dashboard/>,
  },
  {
    path   : 'Q&A/*',
    element: <QuestionsAndAnswers/>,
  },
  {
    path   : '/partner_with_us',
    element: <PartnerWithUs/>,
  },
  {
    path   : '/careers',
    element: <Careers/>,
  },
  {
    path   : '/about_us',
    element: <AboutUs/>,
  },
  {
    path   : '/resources',
    element: <Resources/>,
  },
  {
    path   : '/FAQs',
    element: <FAQ/>,
  },
]


export const AppRoutes = () => {

  return <Routes>
    { mainRoutes.map((item, index) => <Route key={ index } path={ item.path } element={ item.element }/>) }
  </Routes>

}