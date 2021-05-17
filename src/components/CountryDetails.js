import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function countryDetails(props) {
  const singleCountryDet = countries.find(
    (singCountry) => singCountry.cca3 === props.match.params.id
  );

  console.log('borders***', singleCountryDet.borders);
  console.log('singleCountryDet***', singleCountryDet.cca3);
  console.log('singleCountryDet cca3***', props.match.params.id);

  return (
    <div className="col-7">
      {' '}
      <h1>Details</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{singleCountryDet.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {singleCountryDet.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {singleCountryDet.borders.map((borderCountry) => {
                  console.log(singleCountryDet.borders, borderCountry);
                  return (
                    <li key={borderCountry}>
                      <Link to={`/${borderCountry}`}>
                        {' '}
                        {
                          countries.find((el) => el.cca3 === borderCountry)
                            ?.name.common
                        }
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default countryDetails;
