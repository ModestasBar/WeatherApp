import React from 'react';
import '../styles/table.css';
// import PropTypes from 'prop-types';

const Details = ({ data, caption }) => {
  const { main, wind, weather } = { ...data.list[0] };
  return (
    <table className="details-table">
      <caption>{caption}</caption>
      <tbody>
        <tr>
          <td rowSpan="6">
            <h3>{weather[0].main}</h3>
            <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="img" />
          </td>
        </tr>
        <tr>
          <td>Temperature</td>
          <td>
            {main.temp}
            &#8451;
          </td>
        </tr>
        <tr>
          <td>Min-temp</td>
          <td>
            {main.temp_min}
            &#8451;
          </td>
        </tr>
        <tr>
          <td>Max-temp</td>
          <td>
            {main.temp_max}
            &#8451;
          </td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{`${main.humidity} %`}</td>
        </tr>
        <tr>
          <td>Wind Speed</td>
          <td>{`${wind.speed} m/s`}</td>
        </tr>
      </tbody>
    </table>
  );
};

// Details.propTypes = {

// };

export default Details;
