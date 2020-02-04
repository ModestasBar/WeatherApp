import React from 'react';
import Countries from './Countries';
// import PropTypes from 'prop-types';

const Search = (props) => {
  return (
    <div className="search">
      <input className="location-detect" type="button" value="Detect my location" />
      <input className="country-input" type="text" placeholder="Country or ZIP code" />
      <Countries />
    </div>
  );
};

// Modal.propTypes = {

// };

export default Search;
