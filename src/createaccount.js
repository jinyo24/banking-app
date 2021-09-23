import React from 'react';
import { UserContext } from "./context";
import Card from './components/card.js'

function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordCheck, setPasswordCheck] = React.useState('');
    
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
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
        alert('Account created');
        setShow(false);
    };

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordCheck('');
        setStatus('');
        setShow(true);

        alert('All clear');
    };

    return (
        <>
            <h1>HOME PAGE</h1>
            <br/>
            <p>{JSON.stringify(ctx)}</p> 
            <br/>
            <Card
                header = "Create Account Page"
                title = "Add one or multiple accounts"
                status = {status}
                body = {show ? (
                    <>
                        <div className="mb-1">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="username" value={name} onChange={(e)=>setName(e.currentTarget.value)}/>
                            <label className="form-label">{name}</label>
                        </div>
                        <div className="mb-1">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
                            <label className="form-label">{email}</label>
                        </div>
                        <div className="mb-1">
                            <label for="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/>
                            <label className="form-label">{email}</label>
                        </div>
                        <div className="mb-1">
                            <label for="passwordCheck" className="form-label">Confirm your Password</label>
                            <input type="password" className="form-control" id="passwordCheck" placeholder="Enter your password" value={passwordCheck} onChange={(e)=>setPasswordCheck(e.currentTarget.value)}/>
                            <label className="form-label">{email}</label>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary" onClick={handleCreate}>Confirm identity</button>
                        </div>
                    </>
                ) : (
                    <>
                        <h5>Success</h5>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-light" onClick={clearForm}>Add another account</button>
                        </div>
                    </>
                )}                
            />    
        </>
    );
}

export default CreateAccount;