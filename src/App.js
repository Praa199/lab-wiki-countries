import React from 'react';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import countries from './countries.json';

function App() {
  const [countriesArr, setCountriesArr] = React.useState(countries.slice(0, 5));
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
        {countriesArr.map((singleCountry, index) => {
          const { name, capital, area, borders, cca3 } = singleCountry;
          console.log(name.common);

          return (
            <div className="row">
              <CountriesList name={name.common} />
              <CountryDetails
                capital={capital}
                area={area}
                borders={borders}
                cca3={cca3}
              />
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
