import React from 'react';
import { UserContext } from "./context";
import Card from './components/card.js'
import { useState, useEffect } from 'react';

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
                                <label className="form-label">BALANCE:</label>
                                <br/>
                                <strong><h2 className="ms-auto">{balance}</h2></strong>
                                <br/>
                                <label className="form-label">FUTURE BALANCE:</label>
                                <br/>
                                <h2 className="ms-auto">{tempBalance}</h2>
                            </div>
                            <br/>
                            <div className="mb-3">
                                <label className="form-label">DEPOSIT AMOUNT:</label>
                                <input type="number" required min="0" className="form-control" id="depositAmount" placeholder="10" value={deposit} onChange={(e)=>setDeposit(e.currentTarget.value)}/>
                                
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary" onClick={handleClick} disabled={btnDisable}>Deposit</button>
                            </div>

                            {/* Modal Example */}
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Launch demo modal
                            </button>

                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                            </div>

                        </>}              
                />    
            </div>
        </>
    );
}

export default Deposit;