import React from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/list" component={CountriesList} />
          <Route exact path="/details" component={CountryDetails} />
        </Switch>
      </div>
      <header className="container">
        <div className="row">
          <CountriesList />
          <CountryDetails />
        </div>
      </header>
    </div>
  );
}

export default App;
