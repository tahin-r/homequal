import React                   from 'react'
import { Route, Routes }       from 'react-router-dom'
import { Dashboard }           from '../app/Modules/Dashboard/Dashboard'
import { QuestionsAndAnswers } from '../app/Modules/QuestionsAndAnswers/QuestionsAndAnswers'
import { PartnerWithUs }       from '../app/Modules/SmallSections/PartnerWithUs/PartnerWithUs'
import { Careers }             from '../app/Modules/SmallSections/Careers/Careers'
import { AboutUs }             from '../app/Modules/SmallSections/AboutUs/AboutUs'
import { FAQ }                 from '../app/Modules/SmallSections/FAQ/FAQ'
import { NotFound }            from '../app/Modules/NotFound/NotFound'
import { Resources }           from '../app/Modules/Resources/Resources'
import { PrivacyPolicy }       from '../app/Modules/PrivacyPolicy/PrivacyPolicy'
import { TermsOfUse }       from '../app/Modules/TermsOfUse/TermsOfUse'
import {
  questionsList,
  refinanceQuestionsList,
  otherSectionsQuestionsList
} from '../app/Modules/QuestionsAndAnswers/questions'
import { QuestionsSchema, refinanceQuestionsSchema }     from '../app/Modules/QuestionsAndAnswers/validation'

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
    path   : 'buy_a_home/*',
    element: <QuestionsAndAnswers QuestionsSchema={ QuestionsSchema } questionsList={ otherSectionsQuestionsList }/>,
  },
  {
    path   : 'find_a_lender/*',
    element: <QuestionsAndAnswers QuestionsSchema={ QuestionsSchema } questionsList={ otherSectionsQuestionsList }/>,
  },
  {
    path   : 'find_agent/*',
    element: <QuestionsAndAnswers QuestionsSchema={ QuestionsSchema } questionsList={ otherSectionsQuestionsList }/>,
  },
  {
    path   : 'Q&A/*',
    element: <QuestionsAndAnswers QuestionsSchema={ QuestionsSchema } questionsList={ questionsList }/>,
  },
  {
    path   : 'refinance/*',
    element: <QuestionsAndAnswers QuestionsSchema={ refinanceQuestionsSchema } questionsList={ refinanceQuestionsList }/>,
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
    path   : '/resources/*',
    element: <Resources/>,
  },
  {
    path   : '/FAQs',
    element: <FAQ/>,
  },
  {
    path   : '/privacy_policy',
    element: <PrivacyPolicy/>,
  },
  {
    path   : '/terms_of_Use',
    element: <TermsOfUse/>,
  },
  {
    path   : '/*',
    element: <NotFound/>,
  },
]


export const AppRoutes = () => {

  return <Routes>
    { mainRoutes.map((item, index) => <Route key={ index } path={ item.path } element={ item.element }/>) }
  </Routes>

}