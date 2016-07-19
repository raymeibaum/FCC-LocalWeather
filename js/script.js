$(function() {
  //get position
  $("#weather").hide();
  navigator.geolocation.getCurrentPosition(function(position) {

    //get geocode
    $.get({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyCSCxRQ10BcXrr2_30d09T0g0xZRwr-Z1g'
      }).success(function(geoLoc) {
        $('#city').text(geoLoc.results[2].formatted_address);
      });

      //get weather
    $.get({
      url: 'https://api.forecast.io/forecast/5c385ccf0be0bed00815ac19b5fd7186/' + position.coords.latitude + ',' + position.coords.longitude,
      dataType: 'jsonp'
    }).success(function(weather) {

      //add weather icon
      var skycons = new Skycons();
      skycons.add("weatherIcon", weather.currently.icon);
      skycons.play();

      var fTemp = Math.round(weather.currently.temperature);
      var cTemp = Math.round(convertToCelsius(weather.currently.temperature));
      var $fTempToggle = $('#fTempToggle');
      var $cTempToggle = $('#cTempToggle');
      var $temperature = $('#temperature');

      //update html
      $temperature.text(fTemp);
      $('#summary').append(weather.currently.summary);
      $('#wind').append(Math.round(weather.currently.windSpeed) + ' mph');
      $('#humidity').append(Math.round(weather.currently.humidity * 100) + '%');
      $('#pressure').append(Math.round(weather.currently.pressure) + ' mb')
      $('#visability').append(weather.currently.visibility + ' mi');
      $('#weather').show();

      $fTempToggle.click(function(e) {
        e.preventDefault();
        $temperature.text(cTemp);
        $fTempToggle.hide();
        $cTempToggle.show();
      });
      $cTempToggle.click(function(e) {
        e.preventDefault();
        $temperature.text(fTemp);
        $fTempToggle.show();
        $cTempToggle.hide();
      });
    });
  }, function() {
    $('#city').text('Could not get location.');
  });
});

function convertToCelsius(temp) {
  return (temp - 32) * 5 / 9;
}$(function() {
  //get position
  $("#weather").hide();
  navigator.geolocation.getCurrentPosition(function(position) {

    //get geocode
    $.get({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&key=AIzaSyCSCxRQ10BcXrr2_30d09T0g0xZRwr-Z1g'
      }).success(function(geoLoc) {
        console.log(geoLoc);
        $('#city').text(geoLoc.results[2].formatted_address);
      });

      //get weather
    $.get({
      url: 'https://api.forecast.io/forecast/5c385ccf0be0bed00815ac19b5fd7186/' + position.coords.latitude + ',' + position.coords.longitude,
      dataType: 'jsonp'
    }).success(function(weather) {

      //add weather icon
      var skycons = new Skycons();
      skycons.add("weatherIcon", weather.currently.icon);
      skycons.play();

      var fTemp = Math.round(weather.currently.temperature);
      var cTemp = Math.round(convertToCelsius(weather.currently.temperature));
      var $fTempToggle = $('#fTempToggle');
      var $cTempToggle = $('#cTempToggle');
      var $temperature = $('#temperature');

      //update html
      $temperature.text(fTemp);
      $('#summary').append(weather.currently.summary);
      $('#wind').append(Math.round(weather.currently.windSpeed) + ' mph');
      $('#humidity').append(Math.round(weather.currently.humidity * 100) + '%');
      $('#pressure').append(Math.round(weather.currently.pressure) + ' mb')
      $('#visability').append(weather.currently.visibility + ' mi');
      $('#weather').show();

      $fTempToggle.click(function(e) {
        e.preventDefault();
        $temperature.text(cTemp);
        $fTempToggle.hide();
        $cTempToggle.show();
      });
      $cTempToggle.click(function(e) {
        e.preventDefault();
        $temperature.text(fTemp);
        $fTempToggle.show();
        $cTempToggle.hide();
      });
    });
  }, function() {
    $('#city').text('Could not get location.');
  });
});

function convertToCelsius(temp) {
  return (temp - 32) * 5 / 9;
}