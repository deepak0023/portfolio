import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import HobbyProject from './components/HobbyProject';
import Skill from './components/Skill';
import PersonalInfo from './components/PersonalInfo';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/hobby_projects">
          <HobbyProject />
        </Route>
        <Route path="/skill">
          <Skill />
        </Route>
        <Route path="/personal_info">
          <PersonalInfo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
