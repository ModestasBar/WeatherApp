import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import Input from './Input';

const Search = ({ countries, changeByName, detectPosition }) => {
  const [city, setCity] = useState('');
  return (
    <div className="search">
      <Input text="Detect location" type="button" event={detectPosition} />
      <input className="country-input" type="text" placeholder="Search by city" onChange={(e) => setCity(e.target.value)} />
      <input className="button" value="Submit" type="button" onClick={() => changeByName(city)} />
      <List countries={countries} changeByName={changeByName} />
    </div>
  );
};

Search.propTypes = {
  countries: PropTypes.shape({}).isRequired,
  changeByName: PropTypes.func.isRequired,
  detectPosition: PropTypes.func.isRequired,
};

export default memo(Search);
