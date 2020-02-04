import React, { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import Unsplash, { toJson } from 'unsplash-js';
import dummyData from '../dummyData';
import Map from './Components/Map';
import Main from './Components/Main';
import Countries from './Components/Countries';
import Search from './Components/Search';
import Background from './Components/Background';
import Test from './Components/Test';

const unsplash = new Unsplash({ accessKey: '7934871a66aaa23b5a2d016e6ccdeb7caa1e7bc9f46d7f6b467a80211e33aed5' });

const App = () => {
  unsplash.search.photos('Weather Vilnius sunny', 1, 1, { orientation: 'portrait' })
    .then((val) => toJson(val))
    .then((json) => console.log(json));

  return (
    <Main today={dummyData.today} forecast={dummyData.forecast} background={dummyData.pictureData} />
    // <Test />
  );
};
// const APPID = '9e7d0e7cbd1db75e9fd5cf2bc71752c5';
// const [coordinates] = useState({
//   lat: 54,
//   lot: 25,
// });
// const [data, setData] = useState({});

// useEffect(() => {
//   fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lot}&APPID=${APPID}`)
//     .then((respons) => respons.json())
//     .then((val) => setData(val));
// }, []);

// if (!isEmpty(data)) {
//   console.log(data);
// }
export default App;
