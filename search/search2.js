function getData(input) {
    // Get the data from the wunderground API
    $.ajax({
        url: input
        , dataType: "jsonp"
        , success: function (data) {
            console.log(data);
            let location = data.location.city + ', ' + data.location.state;
            let temp_f = data.current_observation.temp_f;
            console.log('Location is: ' + location);
            console.log('Temp is: ' + temp_f);
            $("#cityDisplay").text(location);
            $("title").html(location + " | Weather Center");
            $("#currentTemp").html(Math.round(temp_f) + '°');
            //$("#summary").text(toTitleCase(data.current_observation.icon));
            //$("#cover").fadeOut(250);
        }
    });
}

$('#query').keyup(function(){
    // All code will be inside of this block
    let value = $('#query').val();
    let rExp = new RegExp(value, "i");
    $.getJSON("//autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        //console.log(data);
        let output = '<ol class="sreturn">';
        $.each(data.RESULTS, function(key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="//api.wunderground.com/api/23ff9a854543e5a5/geolookup/conditions/q/' + val.l + '.json" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        }); // end each
        output += '</ol>';
        $("#searchResults").html(output); // send results to the page

        $(".sreturn").on("click", "a", function (evt) {
            evt.preventDefault();
            // With the text value get the needed value from the weather.json file
            let link = $(this).attr('href');
            console.log(link);
            $("ol").detach(".sreturn");
            getData(link);
            /*let jsonCity = $(this).text(); // Franklin, etc...
            console.log(jsonCity);
            console.log(data);
            console.log(data.RESULTS.name.jsonCity);*/
            //let zip = data.RESULTS[jsonCi.l;
            //console.log(zip);

            /*$.ajax({
                url: "//www.wunderground.com" + val.l
                , dataType: "json"
                , success: function (data) {
                    console.log(data);
                    console.log(data.RESULTS[jsonCity]);
                    let zip = data.RESULTS[jsonCity].l;
                    console.log(zip);
                    getData(zip);
                }
            });*/
        });
    }); // end getJSON


}); // end keyup
