import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Map from './Map';
import Table from './Table';
import Details from './Details';

const Body = ({ next15hours, weekDays, today }) => (
  <div className="tables">
    <Table data={next15hours} caption="15 hours forecast" />
    <Table data={weekDays} caption="5 days forecast" week />
    <Details data={today} caption="Details" />
    <Map data={today} />
  </div>
);

Body.propTypes = {
  next15hours: PropTypes.arrayOf(PropTypes.object).isRequired,
  weekDays: PropTypes.arrayOf(PropTypes.object).isRequired,
  today: PropTypes.shape({}).isRequired,
};

export default memo(Body);
