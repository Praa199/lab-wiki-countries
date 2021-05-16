import React from 'react';
import { Route } from 'react-router-dom';

function countryDetails() {
  return (
    <div className="col-7">
      {' '}
      <h1>Details</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>Dynamic Capital</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              Dynamic Area
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="/"> Dynamic Border</a>
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
