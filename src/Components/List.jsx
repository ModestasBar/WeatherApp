import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import ListItem from './ListItem';

const List = ({ countries, changeByName }) => (
  <div className="dropdown">
    <Input text="Select country" type="button" classes="button drop-button" />
    <ul>
      {Object.values(countries).map((val) => (
        <ListItem
          key={val.name}
          country={val}
          changeByName={changeByName}
        />
      ))}
    </ul>
  </div>
);

List.propTypes = {
  countries: PropTypes.shape({}).isRequired,
  changeByName: PropTypes.func.isRequired,
};

export default memo(List);
