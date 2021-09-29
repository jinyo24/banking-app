import './App.css';

//Routing & Context
import {BrowserRouter, ContextProvider, Route} from './context.js';

//Components
import NavBar from './components/navbar.js';
import Home from './home';
import CreateAccount from './createaccount.js';
import Deposit from './deposit.js';
import AllData from './alldata';
import Withdraw from './withdraw';

function App() {

  return (
  <ContextProvider
     children={
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
    </div>}>
  </ContextProvider>)

}

export default App;
