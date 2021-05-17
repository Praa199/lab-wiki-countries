import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div className="col-5">
      {' '}
      <h1> Countries</h1>
      <div className="list-group">
        {countries.map((singleCountry) => {
          return (
            <Link
              to={`/${singleCountry.cca3}`}
              key={singleCountry.cca3}
              className="list-group-item list-group-item-action"
            >
              {singleCountry.flag}
              {singleCountry.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
