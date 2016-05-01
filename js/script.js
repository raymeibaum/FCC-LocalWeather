$(function() {
    var position = getPosition();
    var geolocation = getGeolocation(position);
    var weather = getWeather(position);
})

function getPosition() {
  return navigator.geolocation.getCurrentPosition()
}

function getGeolocation(position) {
  $.get({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyCSCxRQ10BcXrr2_30d09T0g0xZRwr-Z1g'
  }).success(function(geolocation) {
    return geolocation;
  })
}

function getWeather(position) {
  $.get({
    url: 'https://api.forecast.io/forecast/5c385ccf0be0bed00815ac19b5fd7186/' + position.coords.latitude + ',' + position.coords.longitude,
    dataType: 'jsonp'
  }).success(function(weather) {
    return weather;
  })
}
