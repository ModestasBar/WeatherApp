import React, { useState, useEffect } from 'react';
import { useCurrentPosition } from 'react-use-geolocation';
import Unsplash, { toJson } from 'unsplash-js';
import Main from './Components/Main';

const appID = '9e7d0e7cbd1db75e9fd5cf2bc71752c5';
const unsplashKey = 'ece5c91e2cea4d8ba76726dc4b99d134e8c6dbf68091470dfa23b9e3a1e301ff';
const unsplashSecret = '2559581b2c23972362f2e93b879cfbfdbd727d11016ecf36016aa2ded147f557';

const weatherAPI = (key, q = '', lat = 0, lot = 0) => ({
  todayAPI: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&units=metric&APPID=${key}`,
  bundleAPI: `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lot}&units=metric&APPID=${key}`,
  todayNameAPI: `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=${key}`,
  bundleNameAPI: `http://api.openweathermap.org/data/2.5/forecast?q=${q}&units=metric&APPID=${key}`,
});

const App = () => {
  const [position, error] = useCurrentPosition();
  const [today, setToday] = useState();
  const [bundle, setBundle] = useState();
  const [background, setBackground] = useState();
  const [pos, setPos] = useState(false);

  const unsplash = new Unsplash({ accessKey: unsplashKey, secret: unsplashSecret });

  useEffect(() => {
    if (position && !error) {
      const { latitude, longitude } = position.coords;
      const { todayAPI, bundleAPI } = weatherAPI(appID, '', latitude, longitude);

      fetch(bundleAPI)
        .then((respons) => respons.json())
        .then((val) => setBundle(val));


      fetch(todayAPI)
        .then((respons) => respons.json())
        .then((val) => {
          unsplash.search.photos(val.weather[0].main, 1, 1)
            .then(toJson)
            .then((json) => setBackground(json));
          setToday(val);
        });
    }
  }, [position, pos]);

  const detectMyLocation = () => {
    setPos(!pos);
  };

  const handleChangeByName = (name) => {
    if (name.length > 0) {
      if (localStorage.getItem(`${name}`)) {
        const storageData = JSON.parse(localStorage.getItem(`${name}`));
        if (storageData.expire > new Date().getTime()) {
          const { data, bundleList } = storageData;
          setToday(data);
          setBundle(bundleList);
          unsplash.search.photos(data.weather[0].main, 1, 1)
            .then(toJson)
            .then((json) => setBackground(json));
          return;
        }
        localStorage.removeItem(`${name}`);
      }

      const { todayNameAPI, bundleNameAPI } = weatherAPI(appID, name);
      fetch(todayNameAPI)
        .then((respons) => respons.json())
        .then((val) => {
          unsplash.search.photos(`${val.name} ${val.weather[0].main}`, 1, 1)
            .then(toJson)
            .then((json) => setBackground(json));
          setToday(val);
        })
        .catch(() => {
          alert('Opps.. something went wrong');
        });
      fetch(bundleNameAPI)
        .then((respons) => respons.json())
        .then((val) => setBundle(val));
    }
  };

  return ((today && bundle && background)
    ? (
      <Main
        today={today}
        bundle={bundle}
        background={background}
        changeByName={handleChangeByName}
        detectPosition={detectMyLocation}
      />
    )
    : <h1>Loading...</h1>);
};

export default App;
