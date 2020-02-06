import React, { memo } from 'react';
import Base from './Base';
import Body from './Body';
import { objectFilter } from '../dataFilter';


const Main = ({
  today, bundle, background, changeByName, detectPosition,
}) => {
  const { weekDays, next15hours, backgroundURL } = objectFilter(bundle, background);

  return (
    <div className="background">
      <img className="background-img" src={backgroundURL} alt="bg" />
      <div className="box">
        {console.log(background)}
        <Base
          data={today}
          changeByName={changeByName}
          detectPosition={detectPosition}
          bundle={bundle}
        />
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
