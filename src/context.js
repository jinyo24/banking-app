import {
    BrowserRouter,
    HashRouter,
    Route,
    NavLink,
    Switch
  } from "react-router-dom";

import React from "react";

const UserContext = React.createContext(null);

export {BrowserRouter, HashRouter, Route, NavLink, Switch, UserContext};