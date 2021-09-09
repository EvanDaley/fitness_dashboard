import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import { focusHandling } from 'cruip-js-toolkit';
import './charts/ChartjsConfig';

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./utils/firebase";

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login/Login';

function App() {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  console.log(user)

  if (!user) {
    return <Login />
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
