import './App.css';
import { useState } from 'react';

//Routing & Context
import {BrowserRouter, Route, UserContext} from './context.js';

//Components
import NavBar from './components/navbar.js';
import Home from './home';
import CreateAccount from './createaccount.js';
import Deposit from './deposit.js';
import AllData from './alldata';
import Withdraw from './withdraw';

function App() {

  const [users, setUsers] = useState({users:[{name:"", email:"", password: "", balance: ""}]});

  return (
  <UserContext.Provider value={{users, setUsers}}>
    <div className="App">
      <BrowserRouter>         
          <NavBar/>  
          <Route path="/" exact component={Home}/>
          <Route path="/createaccount" component={CreateAccount}/>
          {/* <Route path="/login" component={Login}/> */}
          <Route path="/deposit" component={Deposit}/>
          <Route path="/withdraw" component={Withdraw}/>
          <Route path="/alldata" component={AllData}/>
      </BrowserRouter>
    </div>
    </UserContext.Provider>
  );
}

export default App;
