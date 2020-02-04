import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Map from './Map';
import Search from './Search';
import Button from './Button';
import Table from './Table';
import Details from './Details';


const Main = ({ today, forecast, background }) => {

  const filterDays = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

  const weekDays = filterDays(forecast.list, 8);
  const next15hours = forecast.list.slice(0, 5);

  const backgroundURL = background.results[0].urls.small;

  return (
    <div className="background">
      <img className="background-img" src={backgroundURL} alt="bg" />
      <div className="box">
        <div className="base-info">
          <div className="weather">
            <h4>{today.list.map((val) => val.name)}</h4>
            <span>{new Date().toLocaleTimeString()}</span>
            <h2>
              {`${today.list.map((val) => val.main.temp)} C`}
              <FontAwesomeIcon icon={faStar} className="favorite" />
            </h2>
          </div>
          <Button text="Search location" />
        </div>

        <div className="tables">
          <Table data={next15hours} caption="15 hours forecast" />
          <Table data={weekDays} caption="5 days forecast" week />
          <Details data={today} caption="Details" />
          <Map />
        </div>
      </div>
    </div>
  );
};

// Main.propTypes = {

// };

export default Main;
