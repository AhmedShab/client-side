var xhr = require('xhr');
var greeting = require('./views/greeting.hbs');

var endpoint = 'https://api.wheretheiss.at/v1/satellites';

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err);
  }

  var result = JSON.parse(data.body);

  // In case you're curious
  // console.log(result[0].name); // FYI: data.body is a string

  // Replace 'Space' below with the response
  var target = document.getElementsByTagName('main')[0];
  target.innerHTML = greeting({name: result[0].name});
});

function getData() {
  console.log('get data');
}
