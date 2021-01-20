let nodeGeocoder = require('node-geocoder');
 
let options = {
  provider: 'openstreetmap'
};
 
let geoCoder = nodeGeocoder(options);

geoCoder.geocode('8 nomad crescent, brampton')
  .then((res)=> {
    console.log(res[0]['latitude'],res[0]['longitude'] );
  })
  .catch((err)=> {
    console.log(err);
  });