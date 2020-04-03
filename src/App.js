import React from 'react';
import {BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './private/PrivateRoutes';
import PublicRoute from './public/PublicRoutes';
import { FirstPage } from './public/components/FirstPage';
import DisplayVideos from './private/DisplayVideos';
import Display from './private/Display';
import { DisplayUser } from './private/DisplayUser';

function App() {
  return (
    <Router>
    <Switch>
      <PublicRoute component = {FirstPage} path="/login" />
      <PrivateRoute component = {Display} path="/display" />
      <PrivateRoute component = {DisplayVideos} path= "/displayVideo" />
      <PrivateRoute component = {DisplayUser} path= "/profile" />
      <Redirect from='/' to='display'  />
    </Switch>
</Router>
  );
}

export default App;
