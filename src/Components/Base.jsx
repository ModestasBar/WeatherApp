import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Button from './Button';
// import PropTypes from 'prop-types';

const Base = ({ today: { list } }) => (
  <div className="base-info">
    <div>
      <h4>{list[0].name}</h4>
      <span>{new Date().toLocaleTimeString()}</span>
      <h2>
        {`${list[0].main.temp} C`}
        <FontAwesomeIcon icon={faStar} className="favorite" />
      </h2>
    </div>
    <Button text="Search location" />
  </div>
);

// Base.propTypes = {

// };

export default Base;
