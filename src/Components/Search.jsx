import React, { useState } from 'react';
import List from './List';
import Input from './Input';
// import PropTypes from 'prop-types';

const Search = ({ countries, changeByName, detectPosition }) => {
  const [city, setCity] = useState('');
  return (
    <div className="search">
      <Input text="Detect location" type="button" event={detectPosition} />
      <input className="country-input" type="text" placeholder="Search by city" onChange={(e) => setCity(e.target.value)} />
      <input className="button" value="Submit" onClick={() => changeByName(city)} />
      <List countries={countries} changeByName={changeByName} />
    </div>
  );
};

// Modal.propTypes = {

// };

export default Search;
