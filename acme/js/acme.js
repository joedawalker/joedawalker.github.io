$(function () {
    $("#products").css("display", "none");

    $.getJSON("/acme/js/acme.json", function (data) {
        console.log(data);
        // Create Navigation bar
        let output = '<ul class="navbar">';
        $.each(data, function (key, val) {
            output += '<li>';
            output += '<a href="#" title="Go to the ' + key + ' page">' + key + '</a>';
            output += '</li>';
        });
        output += '</ul>';
        $("#navigation").html(output);
    });

    $("#navigation").on("click", "a", function (evt) {
        evt.preventDefault();

        let pageName = $(this).text();
        console.log(pageName);

        if (pageName == "Home") {
            $("#products").css( "display", "none" );
            $("#home-content").css( "display", "block" );
            $("title").html(pageName + " | ACME | joedawalker.github.io");
        }
        else {
            $("#home-content").css( "display", "none" );
            $("#products").css( "display", "block" );

            $.ajax({
                url: "/acme/js/acme.json"
                , dataType: "json"
                , success: function (data) {
                    //console.log(data);
                    console.log(data[pageName]);
                    let name = data[pageName].name;
                    let imgPath = data[pageName].path;
                    let pathSmall= data[pageName].pathSmall;
                    //console.log(imgPath + " - " +pathSmall);
                    let desc = data[pageName].description;
                    let manufacturer = data[pageName].manufacturer;
                    let reviews = data[pageName].reviews;
                    let price = data[pageName].price;
                    //console.log(price);

                    $("title").html(pageName + " | ACME | joedawalker.github.io");
                    $("#item-name").text(name);
                    $("#item-image").html(
                        '<picture>' +
                        '  <source media="(min-width: 750px)" srcset="'+imgPath+'">' +
                        '  <img src="'+pathSmall+'" alt="This is a picture of our '+ name +'." id="'+lowerCase(pageName)+'">' +
                        '</picture>');
                    $("#description").text(desc);
                    $("#manufacturer").text(manufacturer);
                    $("#item-reviews").text(reviews + '/5 stars');
                    $("#price").text("$" + price);
                }
            });
        }

    });
});

function lowerCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toLowerCase() + txt.substr(1).toLowerCase();});
}