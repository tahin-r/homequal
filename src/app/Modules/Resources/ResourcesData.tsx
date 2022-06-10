import {
  buyFirstHomeTips,
  buyingProcess,
  closingDay,
  costOfWaiting,
  disclosure,
  divorce,
  earnestMoney,
  finalWalkThrough,
  findingTheRightMortgage,
  findYourPerfectHome,
  gettingCredit,
  gettingLoan,
  homeMaintenance,
  howMuchBorrow,
  makeOffer,
  movingDay,
  onlineEstimators
} from '../../../assets/images/articles'
import { BuyingYourFirstHome } from './Components/Articles/BuyingYourFirstHome'
import { ClosingDay } from './Components/Articles/ClosingDay'
import { CostOfWaiting } from './Components/Articles/CostOfWaiting'
import { DivorceAndYourCredit } from './Components/Articles/DivorceAndYourCredit'
import { FinalWalkThrough } from './Components/Articles/FinalWalkThrough'
import { FindingYourHome } from './Components/Articles/FindingYourHome'
import { FindingTheRightMortgage } from './Components/Articles/FindingTheRightMortgage'
import { MortgageAndStudentLoanDebt } from './Components/Articles/MortgageAndStudentLoanDebt'
import { IsYourCreditScoreMortgageReady } from './Components/Articles/IsYourCreditScoreMortgageReady'
import { HomeMaintenanceTips } from './Components/Articles/HomeMaintenanceTips'
import { HowMuchCanIBorrow } from './Components/Articles/HowMuchCanIBorrow'
import { OnlineEstimators } from './Components/Articles/OnlineEstimators'
import { MakeOffer } from './Components/Articles/MakeOffer'
import { EarnestMoney } from './Components/Articles/EarnestMoney'
import { PreparingForMovingDay } from './Components/Articles/PreparingForMovingDay'
import { Disclosure } from './Components/Articles/sharedStyles/Disclosure'
import { HomeBuyingProcess } from './HomeBuyingProcess'

export interface Iarticle {

  title: string
  text: string
  link: string
  image: string
  component: (args: Iarticle) => JSX.Element
}

export const articles: Array<Iarticle> = [
  {
    title: 'Buying Your First Home Tips',
    text: `Purchasing your first home is a wonderful feeling! Yes, it may be scary taking 
    that first step, but how awesome it is when you finally do. From this moment on, you will
     begin making a lifetime of memories and no matter how mIarticle homes you own in the future,
      you never forget the first one!`,
    image: buyFirstHomeTips,
    link: 'buyFirstHomeTips',
    component: (props) => <BuyingYourFirstHome { ...props } />
  }, {
    title: 'Closing Day',
    text: `Congratulations! The home buying journey is almost complete. You have been giving a 
      closing date and time. What should you expect to happen at the closing table?`,
    image: closingDay,
    link: 'closingDay',
    component: (props) => <ClosingDay { ...props } />
  }, {
    title: 'Cost of Waiting',
    text: `The key is the sooner you can start building equity the better. If now is the time, 
      make the jump. If you need to wait, then just be prepared for the increases that are coming.`,
    image: costOfWaiting,
    link: 'costOfWaiting',
    component: (props) => <CostOfWaiting { ...props } />
  }, {
    title: 'Divorce and Your Credit',
    text: `A big decisions divorcing couples face is what to do with the home. 
      The options for divorcing couples depend on a number of factors, such as how their 
      property was financed and titled, whether one partner wants to stay in the home, the amount of
      equity they have in the home and their credit rating.`,
    image: divorce,
    link: 'DivorceAndYourCredit',
    component: (props) => <DivorceAndYourCredit { ...props } />
  }, {
    title: 'Final Walk Through',
    text: `The final walk-through is your last opportunity to ensure the home you are 
      purchasing is exactly as you expected it to be and to the terms of your agreement with the seller. 
      This allows you make sure Iarticle agreed upon repairs are completed to your satisfaction, all agreed 
      upon fixtures and furniture are present, all systems and appliances are functioning properly, and 
      the seller’s possessions have been completely moved out.`,
    image: finalWalkThrough,
    link: 'finalWalkThrough',
    component: (props) => <FinalWalkThrough { ...props } />
  }, {
    title: 'Find Your Perfect Home',
    text: `Home shopping begins at your computer. You can view interior and exterior photos, find school
     district ratings and Google street maps give you the ability to virtually drive around the neighborhood. 
     Doing this homework in advance saves you a lot of time and wasted trips to homes that won’t match your criteria.`,
    image: findYourPerfectHome,
    link: 'findYourPerfectHome',
    component: (props) => <FindingYourHome { ...props } />
  }, {
    title: 'Finding the Right Mortgage',
    text: `Your mortgage is likely to be the biggest financial commitment of your life, so think carefully about it. 
      There are a number of mortgages to choose from, some much riskier than others. Today, the most widely used mortgage is 
      the 30-year fixed mortgage. The monthly payment is the same each month and cannot change, unless you refinance.`,
    image: findingTheRightMortgage,
    link: 'findingTheRightMortgage',
    component: (props) => <FindingTheRightMortgage { ...props } />
  }, {
    title: 'Getting a Loan with Student Loan Debt',
    text: `Today, more than two-thirds of college graduates have student debt. In fact, 
      Americans are now more burdened by student loan debt than they are by credit card or auto debt. 
      However, student loans don’t have to stop you from buying a home if you prepare properly. 
      So what are your options? Here are a few things to keep in mind`,
    image: gettingLoan,
    link: 'gettingLoan',
    component: (props) => <MortgageAndStudentLoanDebt { ...props } />
  }, {
    title: 'Getting Your Credit Score in Shape',
    text: `Your credit score is a 3-digit number that helps lenders decide if you are a good investment.
     A high credit score demonstrates you have a history of borrowing money and successfully paying it back. 
     It shows you have the discipline to make payments on time and take control of your finances.
     FICO scores range from 350 to 850.`,
    image: gettingCredit,
    link: 'gettingCredit',
    component: (props) => <IsYourCreditScoreMortgageReady { ...props } />
  }, {
    title: 'Home Maintenance for the First Timer',
    text: `Congrats on buying your first home. However, with all of this excitement, 
      it’s easy to overlook routine home maintenance, especially when you’ve never had to tackle 
      these tasks before. To keep things from getting overwhelming, it’s a good idea to tackle home maintenance routinely. 
      Dive into these 8 home maintenance tips you’ll need to handle in the first year of buying a home.`,
    image: homeMaintenance,
    link: 'homeMaintenance',
    component: (props) => <HomeMaintenanceTips { ...props } />
  }, {
    title: 'How Much Can I Borrow',
    text: `You want to buy your first home, but can you afford it? In a lot of cases, if you can afford to pay rent, 
      you can afford to own a home. What keeps many from being homeowners is the fear of the unknown. Before you sign 
      another lease, see what you can afford or steps you can take now to be ready later down the road.`,
    image: howMuchBorrow,
    link: 'howMuchBorrow',
    component: (props) => <HowMuchCanIBorrow { ...props } />
  }, {
    title: 'I’m Ready to Make an Offer',
    text: `You’ve found a home you love. Most likely if you love it, so will other potential buyers.
     So you must act fast and smart.`,
    image: makeOffer,
    link: 'makeOffer',
    component: (props) => <MakeOffer { ...props } />
  }, {
    title: 'Online Estimators',
    text: `Online home estimators are designed to give a “general” estimate of what you would expect
     to pay for a home and should be only used as a guide. Also, some estimators do not incorporate taxes and 
     insurance into the monthly payment meaning what you see on the screen is not an accurate account 
     of what you will end up paying.`,
    image: onlineEstimators,
    link: 'onlineEstimators',
    component: (props) => <OnlineEstimators { ...props } />
  }, {
    title: 'Option Fee and Earnest Money',
    text: `Within 3 days of your contract execution, you must deliver to the title company both your
     Option Fee and Earnest Money. If not, you are in violation of your contract and the seller may cancel.
     So what protection does the Option Fee or Earnest Money give you? Read below.`,
    image: earnestMoney,
    link: 'earnestMoney',
    component: (props) => <EarnestMoney { ...props } />
  }, {
    title: 'Preparing for Moving Day',
    text: `Now that you are under contract and you have a closing date set, it’s time to start 
      planning your move. It is common for your closing date to be extended so keep that in mind when you 
      schedule your movers, utilities, etc. Give yourself some wiggle room and be in constant communication with your lender.`,
    image: movingDay,
    link: 'movingDay',
    component: (props) => <PreparingForMovingDay { ...props } />
  }, {
    title: 'Sellers Disclosure',
    text: `A seller's disclosure brings transparency to a real estate transaction and 
      can protect both buyers and sellers. In the disclosure, a seller provides written 
      information about known issues that could hurt the property's value, such as termite damage, 
      improper drainage or a leaky roof, as well as details like homeowner’s association fees and restrictions.`,
    image: disclosure,
    link: 'disclosure',
    component: (props) => <Disclosure { ...props } />
  }, {
    title: 'The Home Buying Process',
    text: `Once you have your credit in shape, budget under control, it’s time to start the really 
      fun part- finding your ideal home and moving in. Each stage of the process has many moving parts
      so below is a helpful overview of the keys steps you’ll need to take.`,
    image: buyingProcess,
    link: 'buyingProcess',
    component: (props) => <HomeBuyingProcess { ...props } />
  }
]
