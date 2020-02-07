import React, { memo } from 'react';
import PropTypes from 'prop-types';

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

Input.defaultProps = {
  classes: 'button',
  event: () => {},
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  classes: PropTypes.string,
  event: PropTypes.func,
};

export default memo(Input);
