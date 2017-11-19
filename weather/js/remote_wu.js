// Current Location Scripts
$(function () {

    let status = $('#location');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, long) {
        $.ajax({
            url: "http://api.wunderground.com/api/23ff9a854543e5a5/geolookup/conditions/q/" + lat + "," + long + ".json",
            dataType: "jsonp",
            success: function (data) {
                let location = data['location']['city'] + ", " + data['location']['state'];
                let temp_f = data['current_observation']['temp_f'] + "&#8457;";
                console.log("Current temperature in " + location + " is: " + temp_f);
                let summary_data = data['current_observation']['weather'];
                let wind = data['current_observation']['wind_dir'] + " @ " + data['current_observation']['wind_mph'] + " MPH ";

                let city = document.getElementById("location");
                let currentTemp = document.getElementById("temp");
                let summary = document.getElementById("summary");
                let wind_sum = document.getElementById("wind");


                city.innerHTML = location;
                currentTemp.innerHTML = temp_f;
                summary.innerHTML = summary_data;
                wind_sum.innerHTML = wind;
                img.innerHTML = sum_img;
                hi_lo.innerHTML = high_low;



                $("#cover").fadeOut(250);
            }
        });

    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});
