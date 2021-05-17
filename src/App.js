import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <header className="container">
        <div className="row">
          <CountriesList />
          <Route exact path="/:id" component={CountryDetails} />
        </div>
      </header>
    </div>
  );
}

export default App;
