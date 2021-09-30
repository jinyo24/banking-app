import {
    BrowserRouter,
    HashRouter,
    Route,
    NavLink,
    Switch
  } from "react-router-dom";

import React from "react";
import { useState } from "react";

const UserContext = React.createContext(null);

function ContextProvider({children}){
  const [users, setUsers] = useState({
    users:
      [{name:"", email:"", password: "", balance: ""},
      {name:"yaniel", email:"", password: "", balance: 100},
      {name:"ana", email:"", password: "", balance: 100},
      {name:"pedro", email:"", password: "", balance: 100},
    ]});
  const [currentUser, setCurrentUser] = useState(users.users.length-1);
  // function setCurrentUser

  function updateCurretUser(props){
    setCurrentUser(props)
  }

  function updateUsers(props){
    setUsers(props)
  }
  
  return (
    <UserContext.Provider value={{users,setUsers, updateUsers, currentUser, setCurrentUser, updateCurretUser}}>
      {children}
    </UserContext.Provider>
  )
 
}

export {BrowserRouter, HashRouter, Route, NavLink, Switch, UserContext,ContextProvider}