import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
