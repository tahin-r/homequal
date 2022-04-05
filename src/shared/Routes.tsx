import React             from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard }     from '../app/Modules/Dashboard/Dashboard'
import { Journey }       from '../app/Modules/Journey/Journey'
import { PartnerWithUs } from '../app/Modules/Company/PartnerWithUs/PartnerWithUs'
import { Careers }       from '../app/Modules/Company/Careers/Careers'
import { AboutUs }       from '../app/Modules/Company/AboutUs/AboutUs'

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

const mainRoutes = [
  {
    path   : '/',
    element: <Dashboard/>,
  },
  {
    path   : 'Journey/*',
    element: <Journey/>,
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
]


export const AppRoutes = () => {

  return <Routes>
    { mainRoutes.map((item, index) => <Route key={ index } path={ item.path } element={ item.element }/>) }
  </Routes>

}