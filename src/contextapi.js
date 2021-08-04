import { createContext,useReducer } from "react";
import TransactionReducer from './TransactionReducer';

let transactionlist=[
    {amount:0, desc:"Nil"}
]

export const transactioncontext=createContext(transactionlist);
export const TransactionProvider = ({children})=> {    //{childern} is component  declared inside Transactionprovider inside App.js
    //console.log(children);
    let [state, dispatch] = useReducer(TransactionReducer, transactionlist);
    // console.log(state); value of transactionlist
    //console.log(dispatch);   dispactch is action
    function addTransaction(transObj){  // addfuction (use Context) is defined in inputAreaMain File data we entered in input box is passed to this function
        dispatch({     
            type: "ADD_TRANSACTION", // intialization of action.type of Transaction reducer
            payload: {               //intiazlizing values 
                amount: transObj.amount, 
                desc: transObj.desc 
            },
        })
    }

    return(
        <transactioncontext.Provider value={{
            transaction: state,
            addTransaction
        }}>
            {children}
        </transactioncontext.Provider>
    )
}