import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Navbar from './core/components/Navbar';
import FormContainer from './Pages/components/FormContainer';
import Home from './Pages/Home';

const Routes = () => (
   <BrowserRouter>
    <Navbar />
    <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <FormContainer />
        </Route>
    </Switch>
   </BrowserRouter>
);

export default Routes;