import React from 'react';
import { UserContext } from "./context";
import { useEffect } from 'react';
import Card from './components/card.js'
 

function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordCheck, setPasswordCheck] = React.useState('');
    const [btnDisable, setBtnDisable] = React.useState(true);
    
    const {users, setUsers, setCurrentUser} = React.useContext(UserContext);

    let usr = users;     

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
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
        } else if(pwd1.length < 8) {
            setStatus('Error: the password must be at laest 8 characters');
            setTimeout(()=>setStatus(''),3000);
            return false; 
        }
        return true;
    };

    useEffect(()=>{
        if (name && email && password && passwordCheck) 
            setBtnDisable(false); 
        else {
            setBtnDisable(true);            
        }   
    },[name, email, password, passwordCheck]);

    function handleCreate() {
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        if (!validatePassword(password, passwordCheck)) return;

        usr.users.push({name,email,password,balance:100});
        setUsers(usr);
        setCurrentUser(usr.users.length-1);
        setShow(false);
    };

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setPasswordCheck('');
        setStatus('');
        setShow(true);
        setBtnDisable(true);
        // alert('All clear');
    };

    return (
        <>
            <div className="bgPage bgCreateAccount">
                <Card
                    header = "Create Account Page"
                    // title = "Add one or multiple accounts"
                    status = {status ? (<p className="alert alert-danger" role="alert" style={ {
                    marginTop: "10px"}}>{status}</p>) : (null)}
                    body = {show ? (
                        <>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="username" value={name} onChange={(e)=>setName(e.currentTarget.value)}/>                          
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm your Password</label>
                                <input type="password" className="form-control" id="passwordCheck" placeholder="Enter your password" value={passwordCheck} onChange={(e)=>setPasswordCheck(e.currentTarget.value)}/>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-primary" onClick={handleCreate} disabled={btnDisable}>Confirm identity</button>
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
            </div>
        </>
    );
}

export default CreateAccount;