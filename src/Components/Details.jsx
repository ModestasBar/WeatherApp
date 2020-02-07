import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Details = ({ data: { main, wind, weather }, caption }) => (
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
          {Math.round(main.temp)}
          &#8451;
        </td>
      </tr>
      <tr>
        <td>Min-temp</td>
        <td>
          {Math.round(main.temp_min)}
          &#8451;
        </td>
      </tr>
      <tr>
        <td>Max-temp</td>
        <td>
          {Math.round(main.temp_max)}
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

Details.propTypes = {
  data: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  caption: PropTypes.string.isRequired,
};

export default memo(Details);
