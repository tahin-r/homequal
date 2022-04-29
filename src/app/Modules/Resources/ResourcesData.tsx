import {
  buyFirstHomeTips, buyingProcess, closingDay, costOfWaiting, disclosure, divorce, earnestMoney, finalWalkThrough,
  findingTheRightMortgage, findYourPerfectHome, gettingCredit, gettingLoan, homeMaintenance, howMuchBorrow, makeOffer,
  movingDay, onlineEstimators,
}                               from '../../../assets/images/articles'
import { BuyingYourFirstHome }  from './Components/Articles/BuyingYourFirstHome'
import { ClosingDay }           from './Components/Articles/ClosingDay'
import { CostOfWaiting }        from './Components/Articles/CostOfWaiting'
import { DivorceAndYourCredit } from './Components/Articles/DivorceAndYourCredit'
import { FinalWalkThrough }     from './Components/Articles/FinalWalkThrough'

interface Iarticle {

  title: string
  text: string
  link: string
  image: string
  component: (arg: any) => JSX.Element
}


export const articles: Array<Iarticle> = [
  {
    title    : 'Buying Your First Home Tips',
    text     : 'Purchasing your first home is a wonderful feeling! Yes, it may be scary taking that first step, but how awesome it is when you finally do. From this moment on, you will begin making a lifetime of memories and no matter how many homes you own in the future, you never forget the first one!',
    image    : buyFirstHomeTips,
    link     : 'buyFirstHomeTips',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'Closing Day',
    text     : 'Congratulations! The home buying journey is almost complete. You have been giving a closing date and time. What should you expect to happen at the closing table?',
    image    : closingDay,
    link     : 'closingDay',
    component: (props: any) => <ClosingDay { ...props } />,
  }, {
    title    : 'Cost of Waiting',
    text     : 'The key is the sooner you can start building equity the better. If now is the time, make the jump. If you need to wait, then just be prepared for the increases that are coming.',
    image    : costOfWaiting,
    link     : 'costOfWaiting',
    component: (props: any) => <CostOfWaiting { ...props } />,
  }, {
    title    : 'Divorce and Your Credit',
    text     : 'A big decisions divorcing couples face is what to do with the home. The options for divorcing couples depend on a number of factors, such as how their property was financed and titled, whether one partner wants to stay in the home, the amount of equity they have in the home and their credit rating.',
    image    : divorce,
    link     : 'DivorceAndYourCredit',
    component: (props: any) => <DivorceAndYourCredit { ...props } />,
  }, {
    title    : 'Final Walk Through',
    text     : 'The final walk-through is your last opportunity to ensure the home you are purchasing is exactly as you expected\n' +
      '        it to be and to the terms of your agreement with the seller. This allows you make sure any agreed upon repairs\n' +
      '        are completed to your satisfaction, all agreed upon fixtures and furniture are present, all systems and\n' +
      '        appliances are functioning properly, and the seller’s possessions have been completely moved out.',
    image    : finalWalkThrough,
    link     : 'finalWalkThrough',
    component: (props: any) => <FinalWalkThrough { ...props } />,
  }, {
    title    : 'Find Your Perfect Home',
    text     : '',
    image    : findYourPerfectHome,
    link     : 'findYourPerfectHome',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'Finding the Right Mortgage',
    text     : '',
    image    : findingTheRightMortgage,
    link     : 'findingTheRightMortgage',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'Getting a Loan with Student Loan Debt',
    text     : '',
    image    : gettingLoan,
    link     : 'gettingLoan',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'Getting Your Credit Score in Shape',
    text     : '',
    image    : gettingCredit,
    link     : 'gettingCredit',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'Home Maintenance for the First Timer',
    text     : '',
    image    : homeMaintenance,
    link     : 'homeMaintenance',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'How Much Can I Borrow',
    text     : '',
    image    : howMuchBorrow,
    link     : 'howMuchBorrow',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'I’m Ready to Make an Offer',
    text     : '',
    image    : makeOffer,
    link     : 'makeOffer',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'Online Estimators',
    text     : '',
    image    : onlineEstimators,
    link     : 'onlineEstimators',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'Option Fee and Earnest Money',
    text     : '',
    image    : earnestMoney,
    link     : 'earnestMoney',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'Preparing for Moving Day',
    text     : '',
    image    : movingDay,
    link     : 'movingDay',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'Sellers Disclosure',
    text     : '',
    image    : disclosure,
    link     : 'disclosure',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  }, {
    title    : 'The Home Buying Process',
    text     : '',
    image    : buyingProcess,
    link     : 'buyingProcess',
    component: (props: any) => <BuyingYourFirstHome { ...props } />,
  },
]
