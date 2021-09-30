import React from 'react';
import { UserContext } from "./context";
import Card from './components/card.js'
import { useState, useEffect } from 'react';
import { Modal } from './components/modal';

function Withdraw() {
    
    const {users, currentUser} = React.useContext(UserContext);
    const [affectedUser, setaffectedUser] = useState(currentUser);
    const [balance, setBalance] = useState(parseFloat(users.users[currentUser].balance))
    const [tempBalance, setTempBalance] = useState(users.users[currentUser].balance);
    const [withdraw, setWithdraw] = useState(undefined);
    const [status, setStatus] = React.useState('');
    const [btnDisable, setBtnDisable] = React.useState(true);

    useEffect(()=>{
        if (validate(withdraw)) 
            {setBtnDisable(false); 
            setTempBalance((parseFloat(balance) - parseFloat(withdraw)))
            }
        else {
            setBtnDisable(true);             
        }   
    },[balance, withdraw]);

    useEffect(()=>{
        if (affectedUser !== currentUser){
            setaffectedUser(currentUser);
            setBalance(users.users[currentUser].balance);
            setTempBalance(users.users[currentUser].balance);
        }
    }, [affectedUser, currentUser, balance, users.users]);

    function validate(amount) {
        if (!amount || amount<0) {
            setStatus('Please enter a positive number');
            setTimeout(()=>setStatus(''),3000);
            return false;
        }
        if (amount>balance) {
            setStatus('The amount can not be higher than your current balance');
            setTimeout(()=>setStatus(''),3000);
            return false;
        }

        return true;
    };

    function clearForm() {
        setWithdraw(0);
        setBtnDisable(true);
    };

    function handleClick() {
        if(!validate(withdraw)) return;
        users.users[currentUser].balance = parseFloat(balance) - parseFloat(withdraw);
        setBalance(parseFloat(users.users[currentUser].balance));
        clearForm();
    };

    return (
        <>
            <div className="bgPage bgWithdraw">
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
                                <label className="form-label">AMOUNT TO WITHDRAW:</label>
                                <input type="number" required min="0" className="form-control" id="depositAmount" placeholder="10" value={withdraw} onChange={(e)=>setWithdraw(e.currentTarget.value)}/>
                                
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary" onClick={handleClick} disabled={btnDisable} data-bs-toggle="modal" data-bs-target="#withdrawSuccess">Withdraw</button>
                            </div>

                            <Modal 
                                id="withdrawSuccess" 
                                labelledby="successModal" 
                                title="Success operation"
                                body={"The withdrawal was succesful, your current balance is: " + balance}/>
                        </>}/>    
            </div>
        </>
    );
}

export default Withdraw;