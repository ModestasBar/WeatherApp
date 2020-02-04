import React from 'react';
import Map from './Map';
import Search from './Search';
import Table from './Table';
import Details from './Details';
// import PropTypes from 'prop-types';

const Body = ({ next15hours, weekDays, today }) => (
  <div className="tables">
    <Table data={next15hours} caption="15 hours forecast" />
    <Table data={weekDays} caption="5 days forecast" week />
    <Details data={today} caption="Details" />
    <Map data={today} />
  </div>
);

// Body.propTypes = {

// };

export default Body;
