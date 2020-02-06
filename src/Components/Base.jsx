import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { countries } from 'countries-list';
import Input from './Input';
import Search from './Search';
// import PropTypes from 'prop-types';

const Base = ({
  data, detectPosition, changeByName, bundle,
}) => {
  const expTime = 3600000;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [favorite, setFavorite] = useState(false);
  const [countriesList] = useState(countries);

  const handleFavorite = (isFavorite) => {
    if (isFavorite) {
      const allData = JSON.stringify({
        expire: new Date().getTime() + expTime,
        bundleList: bundle,
        data,
      });
      localStorage.setItem(`${data.name}`, allData);
    } else {
      localStorage.removeItem(`${data.name}`);
    }
    setFavorite(isFavorite);
  };

  return (
    <div className="base-info">
      {console.log("base load")}
      <div className="headling">
        <h4>{`${data.sys.country}, ${data.name}`}</h4>
        <h2>
          {data.main.temp}
          &#8451;
          <FontAwesomeIcon
            icon={faStar}
            enabled={favorite}
            className={localStorage.getItem(`${data.name}`) ? 'star favorite' : 'star'}
            onClick={() => handleFavorite(!favorite)}
          />
        </h2>
      </div>
      <div className="navigation">
        <Input
          text="Search location"
          type="button"
          event={handleClick}
        />
        {click
          ? (
            <Search
              countries={countriesList}
              changeByName={changeByName}
              detectPosition={detectPosition}
            />
          ) : null}
      </div>
    </div>
  );
};

// Base.propTypes = {

// };

export default Base;
