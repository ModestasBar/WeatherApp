import React from 'react';
import '../styles/table.css';
// import PropTypes from 'prop-types';

const Details = ({ data, caption }) => (
  <table className="details-table">
    <caption>{caption}</caption>
    <tbody>
      <tr>
        <td rowSpan="6">
          <img src="http://openweathermap.org/img/wn/10d@2x.png" />
        </td>
      </tr>
      <tr>
        <td>Temperature</td>
        <td>{data.list.map((val) => val.main.temp)}</td>
      </tr>
      <tr>
        <td>Min-temp</td>
        <td>{data.list.map((val) => val.main.temp_min)}</td>
      </tr>
      <tr>
        <td>Max-temp</td>
        <td>{data.list.map((val) => val.main.temp_max)}</td>
      </tr>
      <tr>
        <td>Humidity</td>
        <td>{`${data.list.map((val) => val.main.humidity)} %`}</td>
      </tr>
      <tr>
        <td>Wind Speed</td>
        <td>{`${data.list.map((val) => val.wind.speed)} m/s`}</td>
      </tr>
    </tbody>
  </table>
);

// Details.propTypes = {

// };

export default Details;
