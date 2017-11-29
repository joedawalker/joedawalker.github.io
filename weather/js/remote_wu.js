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
            url: "https://api.wunderground.com/api/23ff9a854543e5a5/geolookup/conditions/forecast/q/" + lat + "," + long + ".json",
            dataType: "jsonp",
            success: function (data) {
                let location = data['location']['city'] + ", " + data['location']['state'];
                let temp_f = data['current_observation']['temp_f'];
                console.log("Current temperature in " + location + " is: " + temp_f);
                let summary_data = data['current_observation']['weather'];
                let wind = data['current_observation']['wind_dir'] + " @ " + data['current_observation']['wind_mph'] + " MPH ";
                let hi = data['forecast']['simpleforecast']['forecastday'][1]['high']['fahrenheit'];
                let lo = data['forecast']['simpleforecast']['forecastday'][1]['low']['fahrenheit'];
                let icon = data['current_observation']['icon_url'];


                $("#location").text(location);
                $("#temp").html(parseInt(temp_f) + "&#8457;");
                $("#high-low").html(parseInt(hi) + "&#8457; / " + parseInt(lo) + "&#8457;");

                $("#summary").text(summary_data);
                $("#wind").text(wind);
                $("title").html(location + " | Weather Site | joedawalker.github.io");
                $("#cur-sum-img, #sum-img").attr("src", icon);


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
