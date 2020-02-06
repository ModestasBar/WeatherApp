import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';


const unsplash = new Unsplash({
  accessKey: 'ece5c91e2cea4d8ba76726dc4b99d134e8c6dbf68091470dfa23b9e3a1e301ff',
  secret: '2559581b2c23972362f2e93b879cfbfdbd727d11016ecf36016aa2ded147f557',
});
const Test = () => {
  unsplash.search.photos('dogs', 1, 10, { orientation: 'portrait' })
    .then(toJson)
    .then((val) => console.log(val));

  return <h1>Hello word!</h1>;
};

export default Test;
