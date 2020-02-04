import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => (
  <div className="circle">
    <span className="text">
      {text}
      &#8451;
    </span>
  </div>
);

Text.propTypes = {

};

export default Text;
