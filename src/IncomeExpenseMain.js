import React ,{useContext} from 'react'
import './IncomeExpenseMain.css';
import {transactioncontext} from './contextapi'
function IncomeExpenseMain() {
    
    let {transaction}=useContext(transactioncontext)
    const getBalance=()=>{
        let balance=0;
        for(var i=0; i<transaction.length;i++){
            balance=balance+transaction[i].amount;
        }
        return balance;
    }
    const getIncome=()=>{
        let Income=0;
        for(var i=0; i<transaction.length;i++){
            var str=String(transaction[i].amount);
            if(str.includes('-'))
            {
                Income=Income+0;
            }
            else{
                Income=Income+transaction[i].amount;
            }
        }
        return Income;
    }
    const getExpense=()=>{
        let Expense=0;
        for(var i=0; i<transaction.length;i++){
            var str=String(transaction[i].amount);
            if(str.includes('-'))
            {
                Expense=Expense+transaction[i].amount;
                
            }
            else{
                Expense=Expense+0;
            }
        }
        return Expense;
    }
    return (
        <div id='IEMbody'>
            <div className="TitleHeading"><h4>Expense Tracker</h4></div><br />
         <h6>Your Balance($):</h6>
         <b><p id="balancevalue">${getBalance()}</p></b>
         <div className="Income_Expense">
             <div className="Income">
                 <b>Income ($)</b>
                 <b><p id='Icolor'>{getIncome()}</p></b>
                 </div>
             <strong className="linee"></strong> 
             <div className="Expense">
                 <b>Expense ($)</b>
                 <b><p id='Ecolor'>{getExpense()}</p></b>
             </div>
             </div>
        </div>
    )
}

export default IncomeExpenseMain
