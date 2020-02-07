import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Circle = ({ text }) => (
  <div className="circle">
    {text}
    &#8451;
  </div>
);

Circle.propTypes = {
  text: PropTypes.number.isRequired,
};

export default memo(Circle);
