import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Navbar from './core/components/Navbar';
import Form from './Pages/Form';
import Home from './Pages/Home';

const Routes = () => (
   <BrowserRouter>
    <Navbar />
    <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search">
          <Form />
        </Route>
    </Switch>
   </BrowserRouter>
);

export default Routes;