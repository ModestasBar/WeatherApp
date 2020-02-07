import React, { memo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { countries } from 'countries-list';
import PropTypes from 'prop-types';
import Input from './Input';
import Search from './Search';

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
      <div className="headling">
        <h4>{`${data.sys.country}, ${data.name}`}</h4>
        <h2>
          {Math.round(data.main.temp)}
          &#8451;
          <FontAwesomeIcon
            icon={faStar}
            enabled={favorite.toString()}
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

Base.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }),
    sys: PropTypes.shape({
      country: PropTypes.string.isRequired,
    }),
  }).isRequired,
  bundle: PropTypes.shape({
    list: PropTypes.array.isRequired,
  }).isRequired,
  changeByName: PropTypes.func.isRequired,
  detectPosition: PropTypes.func.isRequired,
};

export default memo(Base);
