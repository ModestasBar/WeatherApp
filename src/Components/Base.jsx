import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Input from './Input';
import Search from './Search';
// import PropTypes from 'prop-types';

const Base = ({ today: { list } }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="base-info">
      <div>
        <h4>{list[0].name}</h4>
        <span>{new Date().toLocaleTimeString()}</span>
        <h2>
          {`${list[0].main.temp} C`}
          <FontAwesomeIcon icon={faStar} className="favorite" />
        </h2>
      </div>
      <div className="navigation">
        {console.log('Base')}
        <Input
          text="Search location"
          type="button"
          event={handleClick}
        />
        {click ? <Search /> : null}
      </div>
    </div>
  );
};

// Base.propTypes = {

// };

export default Base;
