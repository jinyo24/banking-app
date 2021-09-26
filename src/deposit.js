import React from 'react';
import { UserContext } from "./context";
import Card from './components/card.js'
import {UseContext} from 'react';

function Deposit() {
    
    const {users} = React.useContext(UserContext);


    return (
        <>
            <div className="bgPage bgDeposit">
                <Card
                    header = "Deposit"
                    // title = "Add one or multiple accounts"
                    // status = {status}
                    body = 
                      {  <>
                            <div className="mb-3">
                                <label for="balance" className="form-label">BALANCE:</label>
                                <br/>
                                <strong><h2 className="ms-auto">{users.users[users.users.length-1].balance}</h2></strong>
                            </div>
                            <br/>
                            <div className="mb-3">
                                <label for="depositAmount" className="form-label">DEPOSIT AMOUNT:</label>
                                <input type="number" className="form-control" id="depositAmount" placeholder="100" /* value={email} onChange={(e)=>setEmail(e.currentTarget.value)} *//>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary">Deposit</button>
                            </div>
                        </>}              
                />    
            </div>
        </>
    );
}

export default Deposit;