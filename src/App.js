import logo from './logo.svg';
import './App.css';

//Routing & Context
import {BrowserRouter, HashRouter, Route, NavLink, Switch, UserContext} from './context.js';

//Components
import NavBar from './components/navbar.js';
import Home from './home';
import CreateAccount from './createaccount.js';
import Login from './login';

function App() {
  return (
    <div className="App">

      <BrowserRouter> 
        <NavBar/>
        <UserContext.Provider value={{users:[{name:'yaniel',email:'yaniel@gmail.com',password:'secret',balance:100}]}}>
          <Route path="/" exact component={Home}/>
          <Route path="/createaccount" exact component={CreateAccount}/>
          <Route path="/login" exact component={Login}/>
        </UserContext.Provider>
      </BrowserRouter>

      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
