import React from 'react';
import GoogleMapReact from 'google-map-react';
import Circle from './Circle';
// import PropTypes from 'prop-types';

const Map = ({ data: { list } }) => {
  const defaultSettings = {
    center: {
      lat: 56,
      lng: 24,
    },
    zoom: 7,
  };
  const temperature = list[0].main.temp;
  return (
    <table className="google-maps">
      <caption>Map</caption>
      <tr>
        <td>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCA8-4RdSQg0lSrYKB3jsNmeFbPfynfzbk' }}
            defaultCenter={defaultSettings.center}
            defaultZoom={defaultSettings.zoom}
          >
            <Circle
              lat={56}
              lng={24}
              text={temperature}
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
