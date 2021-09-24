import './App.css';

//Routing & Context
import {BrowserRouter, HashRouter, Route, NavLink, Switch, UserContext} from './context.js';

//Components
import NavBar from './components/navbar.js';
import Home from './home';
import CreateAccount from './createaccount.js';
import Deposit from './deposit.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'yaniel',email:'yaniel@gmail.com',password:'secret',balance:100}]}}>
          
            <Route path="/" exact component={Home}/>
            <Route path="/createaccount" component={CreateAccount}/>
            {/* <Route path="/login" component={Login}/> */}
            <Route path="/deposit" component={Deposit}/>
            <Route path="/withdraw" component={CreateAccount}/>
            <Route path="/alldata" component={CreateAccount}/>
          
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
