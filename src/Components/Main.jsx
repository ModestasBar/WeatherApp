import React, { memo } from 'react';
import Base from './Base';
import Body from './Body';
import { objectFilter } from '../dataFilter';


const Main = ({ today, forecast, background }) => {
  const { weekDays, next15hours, backgroundURL } = objectFilter(forecast, background);

  return (
    <div className="background">
      <img className="background-img" src={backgroundURL} alt="bg" />
      {console.log('Main')}
      <div className="box">
        <Base today={today} />
        <Body
          next15hours={next15hours}
          weekDays={weekDays}
          today={today}
        />
      </div>
    </div>
  );
};

// Main.propTypes = {

// };

export default memo(Main);
