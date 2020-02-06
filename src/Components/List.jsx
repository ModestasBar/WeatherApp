import React from 'react';
import Input from './Input';
import ListItem from './ListItem';
// import PropTypes from 'prop-types';

const List = ({ countries, changeByName }) => (
  <div className="dropdown">
    <Input text="Select country" type="button" classes="button drop-button" />
    <ul>
      {Object.values(countries).map((val) => (
        <ListItem
          country={val}
          changeByName={changeByName}
        />
      ))}
    </ul>
  </div>
);

// Search.propTypes = {

// };

export default List;
