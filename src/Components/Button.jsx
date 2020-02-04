import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/button.css';

const Button = ({ text }) => {
  return (
    <input className="button" type="button" value={text} />
  );
};

// Favorite.propTypes = {

// };

export default Button;