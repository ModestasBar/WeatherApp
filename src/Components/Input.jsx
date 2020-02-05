import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/input.css';

const Input = ({
  text, type, classes = 'button', event = null,
}) => (
    <input className={classes} type={type} value={text} onClick={() => event()} />
  );

// Favorite.propTypes = {


export default Input;
