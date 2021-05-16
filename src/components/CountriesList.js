import React from 'react';
import { Link } from 'react-router-dom';

// let newCountries = countriesList;

function CountriesList(props) {
  const { name } = props;
  console.log(name);
  return (
    <div className="col-5">
      {' '}
      <h1> Countries</h1>
      <div className="list-group"></div>
      {/* {newCountries.map((singleNewCountry) => {
        return <div>{singleNewCountry.name} </div>;
      })} */}
      <a className="list-group-item list-group-item-action" href="/">
        {name}
      </a>
    </div>
  );
}

export default CountriesList;
