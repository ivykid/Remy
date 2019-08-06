$(document).ready(function() {
    console.log( "ready! test for calling information" );
var harvard_yard_map;
/* John Harvard Status
42.374474,-71.117207 */

var statue_latlng = new google.maps.LatLng(42.374474, -71.117207), north_west_latln;

/* Varible for cordindate on North west building */
var north_west_latlng = new google.maps.LatLng(42.3795462, -71.1156024);

// Varialble for Remmy
var remy_1_latlng = new google.maps.LatLng(42.3791462, -71.1151024);
var remy_2_latlng = new google.maps.LatLng(42.3792462, -71.1152024);
var remy_3_latlng = new google.maps.LatLng(42.3793462, -71.1153024);
var remy_4_latlng = new google.maps.LatLng(42.3794462, -71.1154024);
var remy_5_latlng = new google.maps.LatLng(42.3795462, -71.1155024);
var remy_6_latlng = new google.maps.LatLng(42.3796462, -71.1156024);
var remy_7_latlng = new google.maps.LatLng(42.3797462, -71.1157024);
var remy_8_latlng = new google.maps.LatLng(42.3797462, -71.1157024);
var remy_9_latlng = new google.maps.LatLng(42.3797462, -71.1157024);

/*
Variable for center of  */
var center = new google.maps.LatLng(42.3595462, -71.1146024);

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: statue_latlng
    };
    harvard_yard_map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    /* Statue of John Hawrvard */
    var statue_info = "<strong>Remy One<br/> <img src='images/maps/pic1.jpg'>" +
        "<a href='http://summer.jacob.zone/images/thums/pic1.jpg'>Link to photo</a>";


    var statue_infowindow = new google.maps.InfoWindow({
        content: statue_info
    });

    var statue_marker = new google.maps.Marker({
      position: statue_latlng,
      map: harvard_yard_map,
      title: 'John Harvard Statue'
    });
    /*End of Statue*/

   /*  Begining of Science center */

    var north_west_info = "<strong>Remy Two<br/> <img src='images/maps/pic2.jpg'>" +
        "<a href='http://summer.jacob.zone/images/thums/pic2.jpg'>Link to photo</a>";

    var north_west_infowindow = new google.maps.InfoWindow({
        content: north_west_info
    });

    var north_west_marker = new google.maps.Marker({
      position: remy_1_latlng,
      map: harvard_yard_map,
      title: 'North West Science Building'
    });
// End of science center

// Remy all
var remy_info = "<strong>Remy one</strong><br/>  <img src='images/maps/pic2.jpg'>" +
    "<a href='http://summer.jacob.zone/images/thums/pic2.jpg'>Link to picture</a>";

var remy_infowindow_1 = new google.maps.InfoWindow({
    content: remy_info
});

var remy_marker_1 = new google.maps.Marker({
  position: remy_2_latlng,
  map: harvard_yard_map,
  title: 'Remy 1'
});

// 1
var remy_info_1 = "<strong>Remy two</strong><br/> <img src='images/maps/pic3.jpg'>" +
    "<a href='http://summer.jacob.zone/images/thums/pic3.jpg'>Link to picture</a>";


var remy_infowindow_2 = new google.maps.InfoWindow({
    content: remy_info_1
});

var remy_marker_2 = new google.maps.Marker({
  position: remy_3_latlng,
  map: harvard_yard_map,
  title: 'Remy 1'
});

// 2

var remy_info_2 = "<strong>Remy three</strong><br/> <img src='images/maps/pic4.jpg'>" +
    "<a href='http://summer.jacob.zone/images/thums/pic4.jpg'>Link to picture</a>";


var remy_infowindow_3 = new google.maps.InfoWindow({
    content: remy_info_2
});

var remy_marker_3 = new google.maps.Marker({
  position: remy_4_latlng,
  map: harvard_yard_map,
  title: 'Remy 1'
});

// 3
var remy_info_3 = "<strong>Remy four</strong><br/> <img src='images/maps/pic5.jpg'>" +
    "<a href='http://summer.jacob.zone/images/thums/pic5.jpg'>Link to picture</a>";


var remy_infowindow_4 = new google.maps.InfoWindow({
    content: remy_info_3
});

var remy_marker_4 = new google.maps.Marker({
  position: remy_5_latlng,
  map: harvard_yard_map,
  title: 'Remy 1'
});
// 4

var remy_info_4 = "<strong>Remy five test</strong><br/> <img src='images/maps/pic6.jpg'>"  +
    "<a href='http://summer.jacob.zone/images/thums/pic6.jpg'>Link to picture</a>";


var remy_infowindow_5 = new google.maps.InfoWindow({
    content: remy_info_4
});

var remy_marker_5 = new google.maps.Marker({
  position: remy_6_latlng,
  map: harvard_yard_map,
  title: 'Remy 1'
});

// 5

var remy_info_5 = "<strong>Remy six</strong><br/> <img src='images/maps/pic7.jpg'>" +
    "<a href='http://summer.jacob.zone/images/thums/pic7.jpg'>Link to picture</a>";


var remy_infowindow_6 = new google.maps.InfoWindow({
    content: remy_info_5
});

var remy_marker_6 = new google.maps.Marker({
  position: remy_7_latlng,
  map: harvard_yard_map,
  title: 'Remy 1'
});


var remy_marker_7 = new google.maps.Marker({
  position: remy_8_latlng,
  map: harvard_yard_map,
  title: 'Remy 1'
});

// 7

var remy_info_6 = "<strong>Remy seven</strong><br/> <img src='images/maps/pic7.jpg'>" +
    "<a href='http://summer.jacob.zone/images/thums/pic7.jpg'>Link to picture</a>";

var remy_infowindow_7 = new google.maps.InfoWindow({
    content: remy_info
});

var remy_marker = new google.maps.Marker({
  position: remy_9_latlng,
  map: harvard_yard_map,
  title: 'Remy 1'
});

    google.maps.event.addListener(statue_marker, 'click', function() {
      statue_infowindow.open(harvard_yard_map,statue_marker);
    });

    google.maps.event.addListener(north_west_marker, 'click', function() {
      north_west_infowindow.open(harvard_yard_map,north_west_marker);
    });

    // remy

    google.maps.event.addListener(remy_marker_1, 'click', function() {
      remy_infowindow_1.open(harvard_yard_map,remy_marker_1);
    });

    google.maps.event.addListener(remy_marker_2, 'click', function() {
      remy_infowindow_2.open(harvard_yard_map,remy_marker_2);
    });

    google.maps.event.addListener(remy_marker_3, 'click', function() {
      remy_infowindow_3.open(harvard_yard_map,remy_marker_3);
    });

    google.maps.event.addListener(remy_marker_4, 'click', function() {
      remy_infowindow_4.open(harvard_yard_map,remy_marker_4);
    });

    google.maps.event.addListener(remy_marker_5, 'click', function() {
      remy_infowindow_5.open(harvard_yard_map,remy_marker_5);
    });

    google.maps.event.addListener(remy_marker_6, 'click', function() {
      remy_infowindow_6.open(harvard_yard_map,remy_marker_6);
    });

    google.maps.event.addListener(remy_marker_7, 'click', function() {
      remy_infowindow_7.open(harvard_yard_map,remy_marker_7);
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
});
