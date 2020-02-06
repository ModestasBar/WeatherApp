import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
// import PropTypes from 'prop-types';

const ListItem = ({ country, changeByName }) => (
  <li>
    <input
      value={`${country.name}, ${country.capital}`}
      type="button"
      onClick={() => changeByName(country.capital)}
      className="button"
    />
    {localStorage.getItem(`${country.capital}`) ? <FontAwesomeIcon icon={faHeart} className="favorite" /> : null}
  </li>
);
// ListItem.propTypes = {

// };

export default ListItem;
