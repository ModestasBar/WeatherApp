import React from 'react';
import '../styles/table.css';
// import PropTypes from 'prop-types';
import { dateFilter } from '../dataFilter';

const Table = ({ data, caption, week = false }) => (
  <table className="custom-table">
    <caption>{caption}</caption>
    <thead>
      <tr>
        {week ? data.map((val) => <th>{dateFilter(val.dt_txt).days}</th>)
          : data.map((val) => <th>{dateFilter(val.dt_txt).hours}</th>)}
      </tr>
    </thead>
    <tbody>
      <tr>
        {data.map((val) => <td>{val.weather[0].description}</td>)}
      </tr>
      <tr>
        {data.map((val) => <td><img src={`http://openweathermap.org/img/wn/${val.weather[0].icon}.png`} alt="icon" /></td>)}
      </tr>
      <tr>
        {data.map((val) => (
          <td>
            {val.main.temp}
            &#8451;
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);

// Table.propTypes = {

// };

export default Table;
