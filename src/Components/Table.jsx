import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { dateFilter } from '../dataFilter';

const Table = ({ data, caption, week = false }) => (
  <table className="custom-table">
    <caption>{caption}</caption>
    <thead>
      <tr>
        {week ? data.map((val) => <th key={val.dt + 1}>{dateFilter(val.dt_txt).days}</th>)
          : data.map((val) => <th key={val.dt + 1}>{dateFilter(val.dt_txt).hours}</th>)}
      </tr>
    </thead>
    <tbody>
      <tr>
        {data.map((val) => <td key={val.dt + 2}>{val.weather[0].description}</td>)}
      </tr>
      <tr>
        {data.map((val) => <td key={val.dt + 3}><img src={`http://openweathermap.org/img/wn/${val.weather[0].icon}.png`} alt="icon" /></td>)}
      </tr>
      <tr>
        {data.map((val) => (
          <td key={val.dt + 5}>
            {Math.round(val.main.temp)}
            &#8451;
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);

Table.defaultProps = {
  week: false,
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  caption: PropTypes.string.isRequired,
  week: PropTypes.bool,
};

export default memo(Table);
