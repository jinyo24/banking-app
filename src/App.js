import logo from './logo.svg';
import './App.css';

//Routing & Context
import {BrowserRouter, HashRouter, Route, NavLink, Switch, UserContext} from './context.js';

//Components
import NavBar from './navbar.js';
import Home from './home';
import CreateAccoount from './createaccount';
import Login from './login';

function App() {
  return (
    <div className="App">

      <BrowserRouter> 
        <NavBar/>
        <Route path="/" exact component={Home}/>
        <Route path="/createaccount" exact component={CreateAccoount}/>
        <Route path="/login" exact component={Login}/>
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
