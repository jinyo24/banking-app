import React from 'react';
import { UserContext } from "./context";
import Card from './components/card.js'
import { useState, useEffect } from 'react';
import { Modal } from './components/modal';

function Deposit() {
    
    const {users} = React.useContext(UserContext);
    const [balance, setBalance] = useState(parseFloat(users.users[users.users.length-1].balance))
    const [tempBalance, setTempBalance] = useState(users.users[users.users.length-1].balance);
    console.log(balance);
    const [deposit, setDeposit] = useState(null);
    console.log(deposit);
    const [status, setStatus] = React.useState('');
    const [btnDisable, setBtnDisable] = React.useState(true);

    function validate(amount) {
        if (!amount || amount<0) {
            setStatus('Please enter a positive number');
            setTimeout(()=>setStatus(''),3000);
            return false;
        }
        return true;
    };

    function clearForm() {
        setDeposit(0);
        setBtnDisable(true);
    };

    useEffect(()=>{
        if (validate(deposit)) 
            {setBtnDisable(false); 
            setTempBalance((parseFloat(balance) + parseFloat(deposit)))
            }
        else {
            setBtnDisable(true);             
        }   
    },[balance, deposit]);

    function handleClick() {
        if(!validate(deposit)) return;
        users.users[users.users.length-1].balance = parseFloat(balance) + parseFloat(deposit);
        setBalance(parseFloat(users.users[users.users.length-1].balance));
        clearForm();
    };

    return (
        <>
            <div className="bgPage bgDeposit">
                <Card
                    header = "Deposit"
                    // title = "Add one or multiple accounts"
                    status = {status ? (<p className="alert alert-danger" role="alert" style={ {
                        marginTop: "10px"}}>{status}</p>) : (null)}
                    body = 
                      {  <>
                            <div className="mb-3">
                                <label className="form-label">CURRENT BALANCE:</label>
                                <br/>
                                <strong><h2 className="ms-auto">{ isNaN(balance) ? 0 : balance }</h2></strong>
                                <br/>
                                <label className="form-label">FUTURE BALANCE:</label>
                                <br/>
                                <h2 className="ms-auto">{tempBalance}</h2>
                            </div>
                            <br/>
                            <div className="mb-3">
                                <label className="form-label">AMOUNT TO DEPOSIT:</label>
                                <input type="number" required min="0" className="form-control" id="depositAmount" placeholder="10" value={deposit} onChange={(e)=>setDeposit(e.currentTarget.value)}/>
                                
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary" onClick={handleClick} disabled={btnDisable} data-bs-toggle="modal" data-bs-target="#depositSuccess">Deposit</button>
                            </div>

                            <Modal 
                                id="depositSuccess" 
                                labelledby="successModal" 
                                title="Success operation"
                                body={"The deposit was succesful, your current balance is: " + balance}/>
                        </>}/>    
            </div>
        </>
    );
}

export default Deposit;