import React, {useState, useContext} from 'react'
import './InputAreaMain.css'
import  Button  from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {transactioncontext} from './contextapi'

function InputAreaMain() {
let [AmountDesc, setAmountDesc]= useState("");
let [TranAmount, setTranAmount]= useState(0);
let { transaction, addTransaction } = useContext(transactioncontext);

    return (
        <div id="mainn" className="InputAreaMainBody">
            <form action="#" onSubmit={()=>{
                if (document.getElementById('TAmount').value !=0)
                {
                setAmountDesc(AmountDesc=document.getElementById('TDesc').value);
                setTranAmount(TranAmount=document.getElementById('TAmount').value);
                addTransaction({
                    amount:Number(TranAmount), desc:AmountDesc
                })
                }
                else{
                    alert("Invalid Amount ")
                }
               // document.getElementById("mainn").reset(); 
               // document.mainn.reset();
            }}>
                <h5 id="InputAreaheading">Add New Transaction</h5>
                <strong className="linee2"></strong> 
                <b><label>Transaction Description:</label></b><br/> 
                <input type="text" id="TDesc" required></input><br />
                <b><label>Amount:</label></b><span id="explain">(Negative-Expense, Postive-Expense)</span><br/>
                <input type="number" id="TAmount" ></input><br />
                <Button type="submit" variant="success"className='btn'>Add Transaction</Button>
            </form>
          
        </div>
    )
}

export default InputAreaMain
