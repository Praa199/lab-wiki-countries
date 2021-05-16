import React from 'react';
import countriesList from '../countries.json';
import { Link } from 'react-router-dom';

// let newCountries = countriesList;

function CountriesList() {
  return (
    <div className="col-5">
      {' '}
      <h1> Countries</h1>
      <div className="list-group"></div>
      {/* {newCountries.map((singleNewCountry) => {
        return <div>{singleNewCountry.name} </div>;
      })} */}
      <a className="list-group-item list-group-item-action" href="/">
        Country
      </a>
    </div>
  );
}

export default CountriesList;
