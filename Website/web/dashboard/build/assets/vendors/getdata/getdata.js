$(function() {
  var config = {
      apiKey: "AIzaSyAa26eymRRlyftZGQhf2MFaZyyfUOqHJ6I",
      authDomain: "ios-login-c71ab.firebaseapp.com",
      databaseURL: "https://ios-login-c71ab.firebaseio.com",
      storageBucket: "ios-login-c71ab.appspot.com",
      messagingSenderId: "171966663099"
    };
    firebase.initializeApp(config);
var flightPlanCoordinates = []

const btnGetdata = document.getElementById('btn-getdata');
const btnGetdata1 = document.getElementById('btn-getdata1');
const btnAlert = document.getElementById('btn-getalert');
const btnLivemap = document.getElementById('live-maps');
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: {lat: 10.817947, lng: 106.660000},
  mapTypeId: 'terrain'
});
////////////////////////////////////////////////////////////////////////////////
btnAlert.addEventListener('click', e =>
{
  var firebaseRef = firebase.database().ref();
  var alertRef = firebaseRef.child("ALERT");
  alertRef.on("child_added", function(snap) {
    var message1 = snap.val();


    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: new google.maps.LatLng(message1.Latitude, message1.Longitude),
      radius: message1.Radius
    });
    });
});
/////////////////////////////////////////////////////////////////////////////////
btnGetdata.addEventListener('click', e =>
{
    console.log("Nguyen Tan hieu")
  NProgress.start();
  var firebaseRef = firebase.database().ref();
  var utenRef1 = firebaseRef.child("PATH").child("TEST-1"); // khai bao
  utenRef1.on('value', function(snap) {

        snap.forEach(function(snap) {
          var message2 = snap.val();
          flightPlanCoordinates.push({lat:message2.Latitude,lng:message2.Longitude})

        });
        var flightPath = new google.maps.Polyline({
              path: flightPlanCoordinates,
              geodesic: true,
              strokeColor: 'steelblue',
              strokeOpacity: 4,
              strokeWeight: 2.2
            });

            flightPath.setMap(map);
  /*  var message2 = snap.val();
    flightPlanCoordinates.push({lat:message2.Latitude,lng:message2.Longitude})
    var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: 'steelblue',
          strokeOpacity: 4,
          strokeWeight: 2.2
        });

    flightPath.setMap(map);*/
    NProgress.done();
});

utenRef1.limitToLast(1).on('value', function(snap) {

  snap.forEach(function(snap) {
    var tuneon = snap.val();
    var lat1 = tuneon.Latitude;
    var long1 = tuneon.Longitude;
    var myLatlng = new google.maps.LatLng(tuneon.Latitude,tuneon.Longitude);
    var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!",
      icon: "/css/end-marker.png"
  });
  var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">End-point</h1>'+
            '<div id="bodyContent">'+
            '<p><b></b>Location: </p>'+
            '<b> Latitude: </b>' + tuneon.Latitude +
            '<p></p><b> Longitude: </b>' + tuneon.Longitude +
            '<p><b>Time:</b> </p>'+ tuneon.Time
            '</div>'+
            '</div>';
  var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
  marker.addListener('click', function() {
           infowindow.open(map, marker);
         });
  marker.setMap(map);
});

});

utenRef1.limitToFirst(1).on('value', function(snap) {
snap.forEach(function(snap) {

  var tuneon = snap.val();
  var lat1 = tuneon.Latitude;
  var long1 = tuneon.Longitude;
  var myLatlng = new google.maps.LatLng(tuneon.Latitude,tuneon.Longitude);
  var marker = new google.maps.Marker({
    position: myLatlng,
    icon: "/css/start-marker.png"
});

//marker.setTitle(tuneon.Time);
//console.log(tuneon.Time);
var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Nguyen Le Trung Kien</h1>'+
          '<div id="bodyContent">'+
          '<b> Latitude: </b>' + tuneon.Latitude +
          '<p></p><b> Longitude: </b>' + tuneon.Longitude +
          '<p></p><b>Time:</b>'+ tuneon.Time
          '</div>'+
          '</div>';
var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
marker.addListener('click', function() {
         infowindow.open(map, marker);
       });

marker.setMap(map);
});
});
});
////////////////////////////////////////////////////////////////////////////////

btnGetdata1.addEventListener('click', e =>
{
  console.log("Nguyen Le Trung Kien")
  var firebaseRef = firebase.database().ref();
  var utenRef1 = firebaseRef.child("PATH").child("TEST-3");
   // khai bao
  utenRef1.on("child_added", function(snap) {

    var message2 = snap.val();
    flightPlanCoordinates.push({lat:message2.Latitude,lng:message2.Longitude})
    var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: 'steelblue',
          strokeOpacity: 4,
          strokeWeight: 2.2
        });

    flightPath.setMap(map);
    function mapnull()
    {
      flightPath.setMap(null);
    }
});
utenRef1.limitToLast(1).on('child_added', function(snap) {
  var tuneon = snap.val();
  var lat1 = tuneon.Latitude;
  var long1 = tuneon.Longitude;
  var myLatlng = new google.maps.LatLng(tuneon.Latitude,tuneon.Longitude);
  var marker = new google.maps.Marker({
    position: myLatlng,
    title:"Hello World!",
    icon: "/css/end-marker.png"
});
var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">End-point</h1>'+
          '<div id="bodyContent">'+
          '<p><b></b>Location: </p>'+
          '<b> Latitude: </b>' + tuneon.Latitude +
          '<p></p><b> Longitude: </b>' + tuneon.Longitude +
          '<p><b>Time:</b> </p>'+ tuneon.Time
          '</div>'+
          '</div>';
var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
marker.addListener('click', function() {
         infowindow.open(map, marker);
       });
marker.setMap(map);
});

utenRef1.limitToFirst(1).on('child_added', function(snap) {
  var tuneon = snap.val();
  var lat1 = tuneon.Latitude;
  var long1 = tuneon.Longitude;
  var myLatlng = new google.maps.LatLng(tuneon.Latitude,tuneon.Longitude);
  var image = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxFoh469eOsZQkuPOLpZn3R6yyIExkZCxOxf4ywfeY3v330EwP3Q";
  var marker = new google.maps.Marker({
    position: myLatlng,
    icon: "/css/start-marker.png"
});
marker.setTitle(tuneon.Time);
console.log(tuneon.Time);
var contentString = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h1 id="firstHeading" class="firstHeading">Nguyen Le Trung Kien</h1>'+
          '<div id="bodyContent">'+
          '<b> Latitude: </b>' + tuneon.Latitude +
          '<p></p><b> Longitude: </b>' + tuneon.Longitude +
          '<p></p><b>Time:</b>'+ tuneon.Time
          '</div>'+
          '</div>';
var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
marker.addListener('click', function() {
         infowindow.open(map, marker);
       });
marker.setMap(map);
});

});
////////////////////////////////////////////////////////////////////////////////
btnLivemap.addEventListener('click', e =>
{
    var firebaseRef = firebase.database().ref();
  var utenRef1 = firebaseRef.child("PATH").child("TEST-4");
console.log("Live Maps")
  var markersArray = [];
  utenRef1.limitToLast(1).on('child_added', function(snap) {
    var tuneon = snap.val();
    var lat1 = tuneon.Latitude;
    var long1 = tuneon.Longitude;

    var myLatlng = new google.maps.LatLng(tuneon.Latitude,tuneon.Longitude);

    var marker = new google.maps.Marker({
      position: myLatlng,
      title:"Hello World!",
      icon: "/css/kien-icon.png"
  });
  markersArray.push(marker);
  for (var i = 0; i < markersArray.length; i++ ) {
   markersArray[i].setMap(null);
}

  var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">End-point</h1>'+
            '<div id="bodyContent">'+
            '<p><b></b>Location: </p>'+
            '<b> Latitude: </b>' + tuneon.Latitude +
            '<p></p><b> Longitude: </b>' + tuneon.Longitude +
            '<p><b>Time:</b> </p>'+ tuneon.Time
            '</div>'+
            '</div>';
  var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
  marker.addListener('click', function() {
           infowindow.open(map, marker);
         });


  marker.setMap(map);

  });

});

});
