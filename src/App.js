import logo from './logo.svg';
import './App.css';
import  Button  from 'react-bootstrap/Button'
import IncomeExpenseMain from './IncomeExpenseMain';
import HistoryMain from './HistoryMain';
import 'bootstrap/dist/css/bootstrap.min.css'
import InputAreaMain from './InputAreaMain';
import FooterArea from './FooterArea';
import {TransactionProvider} from './contextapi'

function App() {
  return (
  <div className="App-body">
      <TransactionProvider>
    <IncomeExpenseMain />
    <HistoryMain />
    <InputAreaMain />
    <FooterArea />
    </TransactionProvider>
  </div>
  );
}

export default App;
