import React from 'react';
import GoogleMapReact from 'google-map-react';
// import PropTypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div><h1>{text}</h1></div>;

const Map = (props) => {
  const defaultSettings = {
    center: {
      lat: 56,
      lng: 24,
    },
    zoom: 7,
  };
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
            <AnyReactComponent
              lat={56}
              lng={24}
              text="My marker"
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
