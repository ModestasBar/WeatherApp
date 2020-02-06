import React from 'react';
// import PropTypes from 'prop-types';

const Input = ({
  text, type, classes = 'button', event = null,
}) => (
    <input
      className={classes}
      type={type}
      value={text}
      onClick={event ? () => event() : null}
    />
  );

// Favorite.propTypes = {


export default Input;
