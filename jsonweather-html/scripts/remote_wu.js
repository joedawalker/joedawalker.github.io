// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
        url : "http://api.wunderground.com/api/23ff9a854543e5a5/geolookup/conditions/q/" + lat + "," + long + ".json",
        dataType : "jsonp",
        success : function(data) {
            let location = data['location']['city'] + ", " + data['location']['state'];
            let temp_f = data['current_observation']['temp_f'];
            console.log("Current temperature in " + location + " is: " + temp_f);
            let summary_data = data['current_observation']['weather'];
            let relative_humidity = "Humidity: " + data['current_observation']['relative_humidity'];
            let wind = "Wind: " + data['current_observation']['wind_mph'] + " MPH " + data['current_observation']['wind_dir'];
            let uv = "UV: " + data['current_observation']['UV'];

            let city = document.getElementById("cityDisplay");
            let currentTemp = document.getElementById("currentTemp");
            let summary = document.getElementById("summary");
            let humidity = document.getElementById("add1");
            let wind_sum = document.getElementById("add2");
            let uv_index = document.getElementById("add3");

            city.innerHTML = location;
            currentTemp.innerHTML = parseInt(temp_f) + "&#8457;";
            summary.innerHTML = summary_data;
            humidity.innerHTML = relative_humidity;
            wind_sum.innerHTML = wind;
            uv_index.innerHTML = uv;




      $("#cover").fadeOut(250);
    }
           });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
