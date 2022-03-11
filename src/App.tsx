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
import MonthlyIncome from  './pages/SingleBorrowerQuestion/MonthlyIncome';
import MonthlyExpenses from './pages/SingleBorrowerQuestion/MonthlyExpenses';
import DTIGraphPause from './pages/SingleBorrowerQuestion/DTIGraphPause';
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
        <DTIGraphPause/>
      </Wizard>
    </div>
  );
}

export default App;
