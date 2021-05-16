import React from 'react';
import { Route } from 'react-router-dom';

function countryDetails(props) {
  const { capital, area, borders } = props;
  console.log(capital, area, borders);

  return (
    <div className="col-7">
      {' '}
      <h1>Details</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/"> {borders}</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default countryDetails;
