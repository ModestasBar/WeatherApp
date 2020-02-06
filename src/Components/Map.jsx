import React from 'react';
import GoogleMapReact from 'google-map-react';
import Circle from './Circle';
// import PropTypes from 'prop-types';

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
              text={main.temp}
            />
          </GoogleMapReact>
        </td>
      </tr>
    </table>
  );
};

// Map.propTypes = {

// };

export default Map;
