import React from 'react';
import '../styles/table.css';
import PropTypes from 'prop-types';

const Table = ({
  data, caption, week = false,
}) => (
    <table className="custom-table">
      <caption>{caption}</caption>
      <thead>
        <tr>
          {week ? data.map((val) => <th>{val.dt_txt.split(' ')[0].slice(-5)}</th>)
            : data.map((val) => <th>{val.dt_txt.split(' ')[1].slice(0, 5)}</th>)}
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
          {data.map((val) => <td>{`${val.main.temp} C`}</td>)}
        </tr>
      </tbody>
    </table>
  );

Table.propTypes = {

};

export default Table;
