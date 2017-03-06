$(function() {
var config = {
  apiKey: "AIzaSyAa26eymRRlyftZGQhf2MFaZyyfUOqHJ6I",
  authDomain: "ios-login-c71ab.firebaseapp.com",
  databaseURL: "https://ios-login-c71ab.firebaseio.com",
  storageBucket: "ios-login-c71ab.appspot.com",
  messagingSenderId: "171966663099"
};

firebase.initializeApp(config);

const btnGetdata = document.getElementById('btn-getdata');
const btnGetdata1 = document.getElementById('btn-getdata1');
btnGetdata.addEventListener('click', e =>
{
  var message = snap.val();
  console.log("drawline ")
  var firebaseRef = firebase.database().ref();
  var utenRef1 = firebaseRef.child("PATH").child("TEST");
  utenRef1.on("child_added", function(snap) {
    var mapline = document.getElementById('map')
    var flightPath = new google.maps.Polyline({
          path: new google.maps.LatLng(message.Latitude, message.Longitude),
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        flightPath.setMap(mapline);
  });
});
btnGetdata1.addEventListener('click', e =>
{
  var image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
  var firebaseRef = firebase.database().ref();
  var utenRef = firebaseRef.child("PATH").child("TEST");
  console.log("Draw maps maps");
  var events = [];
  var breaks = [];

  utenRef.on("child_added", function(snap) {
    var message = snap.val();
    console.log(message.Latitude, message.Longitude)
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(message.Latitude, message.Longitude),
      map: map,
      icon : {
    path: google.maps.SymbolPath.CIRCLE,
    scale: 8.5,
    fillColor: "#F00",
    fillOpacity: 0.4,
    strokeWeight: 0.4
            },
    title: message.Speed

      });
    });

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


    var myLatlng = new google.maps.LatLng(10.817947, 106.660000);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: myLatlng,
      zoom: 12
    }
    var locs = [ ["10.84066404375906", "106.7419038806838"], ["10.84066404375906", "106.7419038806838"]];
    var map = new google.maps.Map(mapCanvas, mapOptions);

});
btnGetdata.addEventListener('click', e =>
{
  var image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
  var firebaseRef = firebase.database().ref();
  var utenRef = firebaseRef.child("PATH").child("TEST");
  console.log("Draw map");
  utenRef.on("child_added", function(snap) {
    var message = snap.val();
    var flightPath = new google.maps.Polyline({
        path: new google.maps.LatLng(message.Latitude, message.Longitude),
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      flightPath.setMap(map);
    });

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


    var myLatlng = new google.maps.LatLng(10.817947, 106.660000);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: myLatlng,
      zoom: 12
    }
    var locs = [ ["10.84066404375906", "106.7419038806838"], ["10.84066404375906", "106.7419038806838"]];
    var map = new google.maps.Map(mapCanvas, mapOptions);


});
});
