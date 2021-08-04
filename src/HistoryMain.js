import React,{useContext} from 'react'
import './HistoryMain.css'
import {transactioncontext} from './contextapi'

function HistoryMain() {
    let {transaction}=useContext(transactioncontext)
    return (
        <div className="HistoryMainBody">
           <h5 id="InputAreaheading">Transaction History</h5>
                <strong className="linee2"></strong> 
                <div className="transactionData" >{
                transaction.map((transobj,ind)=>{
                      let str =String(transobj.amount);
                      if(str.includes('-'))
                      {
                        return(<ul><li className="negativeli">
                            <span className="HAmount">{transobj.amount}</span>
                            <span className="HDesc">{transobj.desc}</span>
                            </li>
                            </ul>)
                        }
                      else{
                        return(
                            <ul>
                        <li>
                            <span className="HPAmount">{transobj.amount}</span>
                            <span className="HPDesc">{transobj.desc}</span>
                            </li>
                            </ul>)
                      }
                        /*return(<li>
                            <span className="HAmount">{transobj.amount}</span>
                            <span className="HDesc">{transobj.desc}</span><span className="HColor">.</span>
                            </li>)*/
                        })
                    }
    </div>
        </div>
    )
}

export default HistoryMain
