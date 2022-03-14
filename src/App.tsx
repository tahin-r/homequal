import { Wizard } from 'react-use-wizard';
import ContactInformationInput from './pages/InitialQuestions/ContactInformationInput';
import ContactPreference from './pages/InitialQuestions/ContactPreference';
import CoBuyerOption from './pages/InitialQuestions/CoBuyerOption';
import MaritalStatus from './pages/InitialQuestions/MaritalStatus';
import CoBuyerContact from './pages/InitialQuestions/CoBuyerContact';
import CoBuyerMaritalStatus from './pages/InitialQuestions/CoBuyerMaritalStatus';
import MoveDate from './pages/InitialQuestions/MoveDate';
import MonthlyMortgagePayment from './pages/InitialQuestions/MonthlyMortgagePayment';
import AvailableFunds from './pages/InitialQuestions/AvailableFunds';
import SourceOfFunds from './pages/InitialQuestions/SourceOfFunds'
import './App.css';
import SummaryPause from './pages/InitialQuestions/SummaryPause';
import MonthlyIncome from './pages/SingleBorrowerQuestion/MonthlyIncome';
import MonthlyExpenses from './pages/SingleBorrowerQuestion/MonthlyExpenses';
import DTIGraphPause from './pages/SingleBorrowerQuestion/DTIGraphPause';
import EmploymentHistory from './pages/SingleBorrowerQuestion/EmploymentHistory';
import CreditScore from './pages/SingleBorrowerQuestion/CreditScore';
import PaymentHistory from './pages/SingleBorrowerQuestion/PaymentHistory';
import StudentLoanDefault from './pages/SingleBorrowerQuestion/StudentLoanDefault';
import LienJudgement from './pages/SingleBorrowerQuestion/LienJudgement';
import LivingSituation from './pages/SingleBorrowerQuestion/LivingSituation';
import Veteran from './pages/SingleBorrowerQuestion/Veteran';

import CoMonthlyIncome from './pages/CoBorrowerQuestion/CoMonthlyIncome';
import CoMonthly from './pages/CoBorrowerQuestion/CoMonthly';
import CoEmployment from './pages/CoBorrowerQuestion/CoEmployment';
import CoCreditScore from './pages/CoBorrowerQuestion/CoCreditScore';
import CoPaymentHistory from './pages/CoBorrowerQuestion/CoPaymentHistory';
import CoStudentLoanDefault from './pages/CoBorrowerQuestion/CoStudentLoanDefault';
import CoLienJudgement from './pages/CoBorrowerQuestion/CoLienJudgement';
import CoLivingSituation from './pages/CoBorrowerQuestion/CoLivingSituation';
import CoVeteran from './pages/CoBorrowerQuestion/CoVeteran';

import CityStateChoices from './pages/FinalQuestions/CityStateChoices';
import CalculatingPause from './pages/FinalQuestions/CalculatingPause';

function App() {

  return (
    <div className="App">
      <Wizard>
        <ContactInformationInput />
        <ContactPreference />
        <CoBuyerOption />
        <MaritalStatus />
        <CoBuyerContact />
        <CoBuyerMaritalStatus />
        <MoveDate />
        <MonthlyMortgagePayment />
        <AvailableFunds />
        <SourceOfFunds />
        <SummaryPause />
        {/* single questions */}
        <MonthlyIncome />
        <MonthlyExpenses />
        <DTIGraphPause />
        <EmploymentHistory />
        <CreditScore />
        <PaymentHistory />
        <StudentLoanDefault />
        <LienJudgement />
        <LivingSituation />
        <Veteran />
        {/* Co-Borrower Question Series */}
        <CoMonthlyIncome />
        <CoMonthly />
        <DTIGraphPause />
        <CoEmployment />
        <CoCreditScore />
        <CoPaymentHistory />
        <CoStudentLoanDefault />
        <CoLienJudgement />
        <CoLivingSituation />
        <CoVeteran />
        {/* Final Questions */}
        <CityStateChoices />
        <CalculatingPause />
      </Wizard>
    </div>
  );
}

export default App;
