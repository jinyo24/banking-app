import React from 'react';
import { UserContext } from "./context";
import Card from './components/card.js'

function Deposit() {
/*  const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordCheck, setPasswordCheck] = React.useState(''); */
    
    const ctx = React.useContext(UserContext);

/*     function validate(field, label) {
        if (!field) {
            setStatus('Error ' + label);
            setTimeout(()=>setStatus(''),3000);
            return false;
        }
        return true;
    };

    function validatePassword(pwd1, pwd2) {
        if (pwd1 !== pwd2) {
            setStatus('Error: the password does not match');
            setTimeout(()=>setStatus(''),3000);
            return false;
        }
        return true;
    };

    function handleCreate() {
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'name')) return;
        if (!validatePassword(password, passwordCheck)) return;
        
        ctx.users.push({name,email,password,balance:100});
        // alert('Account created');
        setShow(false);
    };

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordCheck('');
        setStatus('');
        setShow(true);
        // alert('All clear');
    }; */

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
                                <strong><h2 className="ms-auto">${ctx.users[ctx.users.length - 1].balance}</h2></strong>
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