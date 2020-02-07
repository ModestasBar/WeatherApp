import React, { memo } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import Circle from './Circle';

const Map = ({ data: { main, coord } }) => {
  const defaultSettings = {
    center: {
      lat: coord.lat,
      lng: coord.lon,
    },
    zoom: 11,
  };
  return (
    <table className="google-maps">
      <caption>Map</caption>
      <tbody>
        <tr>
          <td>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyCA8-4RdSQg0lSrYKB3jsNmeFbPfynfzbk' }}
              defaultZoom={defaultSettings.zoom}
              center={defaultSettings.center}
            >
              <Circle
                lat={coord.lat}
                lng={coord.lon}
                text={Math.round(main.temp)}
              />
            </GoogleMapReact>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Map.propTypes = {
  data: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    coord: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default memo(Map);
