import React from 'react';
import Countries from './Countries';
import Input from './Input';
// import PropTypes from 'prop-types';

const Search = (props) => {
  return (
    <div className="search">
      <Input text="Detect location" type="button" />
      <input className="country-input" type="text" placeholder="Country or ZIP code" />
      <Countries />
    </div>
  );
};

// Modal.propTypes = {

// };

export default Search;
