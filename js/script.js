$(function() {
  //get position
  navigator.geolocation.getCurrentPosition(function(position) {

    //get geocode
    $.get({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyCSCxRQ10BcXrr2_30d09T0g0xZRwr-Z1g'
      }).success(function(geoLoc) {
        $('#city').text(geoLoc.results[3].formatted_address);
      })

      //get weather
    $.get({
      url: 'https://api.forecast.io/forecast/5c385ccf0be0bed00815ac19b5fd7186/' + position.coords.latitude + ',' + position.coords.longitude,
      dataType: 'jsonp'
    }).success(function(weather) {

      //add weather icon
      var skycons = new Skycons();
      skycons.add("weatherIcon", weather.currently.icon);
      skycons.play();

      var fTemp = weather.currently.temperature;
      var cTemp = convertToCelsius(weather.currently.temperature);

      //update html
      $('#fTemperature').text(Math.round(fTemp) + '\u2109');
      $('#cTemperature').text(Math.round(cTemp) + '\u2103');
      $('#summary').text(weather.currently.summary);
      $('#wind').append(Math.round(weather.currently.windSpeed) + ' mph');
      $('#humidity').append(Math.round(weather.currently.humidity * 100) + '%');
      $('#pressure').append(Math.round(weather.currently.pressure) + ' mb')
      $('#visability').append(weather.currently.visibility + ' mi');

      $('#tempToggle').click(function() {
        $('#fTemperature').toggle();
        $('#cTemperature').toggle();
      })
    })
  }, function() {
    $('#city').text('Could not get location.');
  })
})

function convertToCelsius(temp) {
  return (temp - 32) * 5 / 9;
}

function convertCelsiusToFahrenheit(temp) {
  return temp * 9 / 5 + 32;
}

// °F to °C	Deduct 32, then multiply by 5, then divide by 9
// °C to °F	Multiply by 9, then divide by 5, then add 32
