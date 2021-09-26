import './App.css';
import { useState } from 'react';

//Routing & Context
import {BrowserRouter, HashRouter, Route, NavLink, Switch, UserContext} from './context.js';

//Components
import NavBar from './components/navbar.js';
import Home from './home';
import CreateAccount from './createaccount.js';
import Deposit from './deposit.js';
import AllData from './alldata';

function App() {

  const [users, setUsers] = useState({users:[{name:"", email:"", password: "", balance: ""}]});


/*   var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
console.log(tooltipTriggerList) */

  return (
    <div className="App">
      <BrowserRouter> 
        <UserContext.Provider value={{users, setUsers}}>
          <NavBar/>  
          <Route path="/" exact component={Home}/>
          <Route path="/createaccount" component={CreateAccount}/>
          {/* <Route path="/login" component={Login}/> */}
          <Route path="/deposit" component={Deposit}/>
          <Route path="/withdraw" component={CreateAccount}/>
          <Route path="/alldata" component={AllData}/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}


// tooltipTriggerList.Tooltip();

/* var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
}) */


export default App;
