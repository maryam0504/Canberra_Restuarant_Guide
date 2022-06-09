// JavaScript source code

// Declare a variable for map
    var map;
    // Get lattitude and longitude of Canberra Centre
    var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
    // Initialise the map
    function initMap() {
        // Define the properties for Canberra Centre map
        var canberraMap = {
            center: canberraCentre,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // Create a map object for Canberra Centre 
        // using canberraMap and the <div> element with id="googleMap"
        map = new google.maps.Map(
                  document.getElementById("googleMap"), canberraMap);

        // Add markers below this line
        addBellucisItalianMarker(map);
        addItalianandSonsMarker(map);
        addBluGingerMarker(map);
        addJewelofIndiaMarker(map);
        addChairmanandYipMarker(map);
        addDicksonMarker(map);

    }
    // Add other functions below this line

function addBellucisItalianMarker(map) {
        // Canberra Museum and Gallery
        var BellucisItalian = 
            new google.maps.LatLng(-35.319586, 149.132464);
        var markerBellucisItalian = new google.maps.Marker({
            position: BellucisItalian,
        });

        markerBellucisItalian.setMap(map);

        var contentBellucisItalian =
            ' <h1>Bellucis Italian</h1>' +
            ' <img src="../images/location/bellucis_logo.jpg" ' +
            '      style="float:left; width:25%; margin-right:10px;">' +
            ' <p>Bellucis demonstrates a new concept, a new food philosophy the dawn of a ' +
                 'new era in Canberra dining. Having been established more than 20 years ago, Bellucis fast  ' +
                 'became an iconic name in Canberra. To bring you the finest dishes, weve gone back to  ' +
                 'traditional Italian routes, creating simple, rustic food. ' + 
                 '<br>' +
                 '<a href="https://bellucis.com.au/home.php' +
                 '">Click Here</a>' + ' for the Bellucis Italian website'
            ' </p>';

        var infoBellucisItalian = new google.maps.InfoWindow({
            content: contentBellucisItalian
        });

        google.maps.event.addListener(markerBellucisItalian, 'click', 
        function () {
            infoBellucisItalian.open(map, markerBellucisItalian);
        });
    }

function addItalianandSonsMarker(map) {
        // Canberra Museum and Gallery
        var ItalianandSons = 
            new google.maps.LatLng(-35.275000, 149.132373);
        var markerItalianandSons = new google.maps.Marker({
            position: ItalianandSons,
        });

        markerItalianandSons.setMap(map);

        var contentItalianandSons =
            ' <h1>Italian and Sons</h1>' +
            ' <img src="../images/location/is_logo.jpg" ' +
            '      style="float:left; width:25%; margin-right:10px;">' +
            ' <p>A casual Italian trattoria that specialises in wood fired pizzas such as Rucola ' +
                 'with Prosciutto di Parma, rucola & reggiano. Dont miss daily changing main dishes of the day ' +
                 'such as their wood roast suckling pig, rosemary, garlic, ' +
                 + 
            'baked baby fennel & mustard fruits.' +
            '<br>' +
                 '<a href="http://italianandsons.com.au/' +
                 '">Click Here</a>' + ' for the Italian and Sons website'
            ' </p>';

        var infoItalianandSons = new google.maps.InfoWindow({
            content: contentItalianandSons
        });

        google.maps.event.addListener(markerItalianandSons, 'click', 
        function () {
            infoItalianandSons.open(map, markerItalianandSons);
        });
    }


function addBluGingerMarker(map) {
        // Canberra Museum and Gallery
        var BluGinger = 
            new google.maps.LatLng(-35.277062, 149.132072);
        var markerBluGinger = new google.maps.Marker({
            position: BluGinger,
        });

        markerBluGinger.setMap(map);

        var contentBluGinger =
            ' <h1>Blu Ginger</h1>' +
            ' <img src="../images/location/bluginger_logo.jpg" ' +
            '      style="float:left; width:25%; margin-right:10px;">' +
            ' <p>At Blu Ginger we use only the freshest locally sourced produce, combined with  ' +
                 'authentic spices imported directly from the sub-continent, to offer classic, traditional recipes ' +
                 'with a modern twist, creating a unique and memorable dining experience for you.' +
                  
                 '<br>' +
                 '<a href="http://www.bluginger.com.au/' +
                 '">Click Here</a>' + ' for the Blu Ginger website'
            ' </p>';

        var infoBluGinger = new google.maps.InfoWindow({
            content: contentBluGinger
        });

        google.maps.event.addListener(markerBluGinger, 'click', 
        function () {
            infoBluGinger.open(map, markerBluGinger);
        });
    }


function addJewelofIndiaMarker(map) {
        // Canberra Museum and Gallery
        var JewelofIndia = 
            new google.maps.LatLng(-35.320547, 149.132813);
        var markerJewelofIndia = new google.maps.Marker({
            position: JewelofIndia,
        });

        markerJewelofIndia.setMap(map);

        var contentJewelofIndia =
            ' <h1>Jewel of India</h1>' +
            ' <img src="../images/location/jewel_logo.jpg" ' +
            '      style="float:left; width:25%; margin-right:10px;">' +
            ' <p>Finding a balance between dishes inspired by authentic recipes and creating a   ' +
                 'modern take on classic cuisine sees a loyal following of Canberra locals returning for a mouth ' +
                 'watering feast.' +
                  
                 '<br>' +
                 '<a href="http://www.jewelofindia.com.au/' +
                 '">Click Here</a>' + ' for the Jewel of India website'
            ' </p>';

        var infoJewelofIndia = new google.maps.InfoWindow({
            content: contentJewelofIndia
        });

        google.maps.event.addListener(markerJewelofIndia, 'click', 
        function () {
            infoJewelofIndia.open(map, markerJewelofIndia);
        });
    }


function addChairmanandYipMarker(map) {
        // Canberra Museum and Gallery
        var ChairmanandYip = 
            new google.maps.LatLng(-35.311650, 149.133894);
    var markerChairmanandYip = new google.maps.Marker({
        position: ChairmanandYip,
        });

    markerChairmanandYip.setMap(map);

    var contentChairmanandYip =
            ' <h1>Chairman & Yip</h1>' +
            ' <img src="../images/location/chairman_logo.jpg" ' +
            '      style="float:left; width:25%; margin-right:10px;">' +
            ' <p>The Chairman & Yip has become one of Canberras longest standing and most ' +
                 'highly regarded institutions, having received numerous awards over the years, offering ' +
                 'an ever consistent and professional quality of service for corporate dining, conferences and presentations.' +
                  
                 '<br>' +
                 '<a href="http://chairmangroup.com.au/chairmanyip/' +
                 '">Click Here</a>' + ' for the Chairman & Yip website'
            ' </p>';

    var infoChairmanandYip = new google.maps.InfoWindow({
        content: contentChairmanandYip
        });

    google.maps.event.addListener(markerChairmanandYip, 'click', 
        function () {
            infoChairmanandYip.open(map, markerChairmanandYip);
        });
}




function addDicksonMarker(map) {
    // Canberra Museum and Gallery
    var Dickson =
        new google.maps.LatLng(-35.250360, 149.136574);
    var markerDickson = new google.maps.Marker({
        position: Dickson,
    });

    markerDickson.setMap(map);

    var contentDickson =
        ' <h1>Dickson Asian Noodle House</h1>' +
        ' <img src="../images/location/noodle_logo.jpg" ' +
        '      style="float:left; width:25%; margin-right:10px;">' +
        ' <p>The Dickson Asian Noodle House specialises in traditional ' +
        'Malaysian, Thai and Lao cuisine. The dining atmosphere is casual and cosy providing for a la ' +
        'carte dining, banquets and take away.' +

        '<br>' +
        '<a href="https://www.facebook.com/pages/Dickson-Asian-Noodle-House/156690017692038' +
        '">Click Here</a>' + ' for the Dickson Asian Noodle House Facebook page'
    ' </p>';

    var infoDickson = new google.maps.InfoWindow({
        content: contentDickson
    });

    google.maps.event.addListener(markerDickson, 'click',
        function () {
            infoDickson.open(map, markerDickson);
        });
}





    // Add a DOM listener that will execute the initMap function 
    // on window load (when the page is loaded)
    google.maps.event.addDomListener(window, 'load', initMap);        








function mousclickfunc1() {
    //document.getElementById("bgimage").innerHTML = "<img src=\"../images/carousel/bellucis.jpg\"/>";
    document.getElementById("bgimage").style = "background-image : url('../images/carousel/bellucis.jpg'); background-size : 100% 100%; background-repeat : no-repeat;";
}


function mousclickfunc2() {
    document.getElementById("bgimage").style = "background-image : url('../images/carousel/itandsons_car.jpg'); background-size : 100% 100%; background-repeat : no-repeat;";
}


function mousclickfunc3() {
    //document.getElementById("bgimage").innerHTML = "<img src=\"../images/carousel/bluginger_car.jpg\"/>";
    document.getElementById("bgimage").style = "background-image : url('../images/carousel/bluginger_car.jpg'); background-size : 100% 100%; background-repeat : no-repeat;";
}


function mousclickfunc4() {
    //document.getElementById("bgimage").innerHTML = "<img src=\"../images/carousel/jewel_car.jpg\"/>";
    document.getElementById("bgimage").style = "background-image : url('../images/carousel/jewel_car.jpg'); background-size : 100% 100%; background-repeat : no-repeat;";
}


function mousclickfunc5() {
    //document.getElementById("bgimage").innerHTML = "<img src=\"../images/carousel/chairman_car.jpeg\"/>";
    document.getElementById("bgimage").style = "background-image : url('../images/carousel/chairman_car.jpeg'); background-size : 100% 100%; background-repeat : no-repeat;";
}


function mousclickfunc6() {
    //document.getElementById("bgimage").innerHTML = "<img src=\"../images/carousel/dicksonnoodle_car.jpeg\"/>";
    document.getElementById("bgimage").style = "background-image : url('../images/carousel/dicksonnoodle_car.jpeg'); background-size : 100% 100%; background-repeat : no-repeat;";
}
