//function onBodyLoad() {
//	document.addEventListener("deviceready",onDeviceReady,false);
//}
	var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for PhoneGap to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);
    
    $('#cambtn').click(function () {
    		
    		capturePhoto();
    		
    });

    // PhoneGap is ready to be used!
    //
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, saveToPhotoAlbum: true });
    }


    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }


//Connection Test

$('#status').click(function () {
		
		checkConnection();
});

    $(document).on("deviceready", onDeviceReady, false);

//     PhoneGap is loaded and it is now safe to make calls PhoneGap methods
    
    function onDeviceReady() {
    }

    function checkConnection() {
        var networkState = navigator.network.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);
    }

//Notification

$('#push').click(function () {

		function alertDismissed() {
		    // do something
		}
		
		navigator.notification.alert(
		    'Congrads you just pushed the button, Vanna Tell them what they won!!',  // message
		    alertDismissed,         // callback
		    'Winner',            // title
		    'Done'                  // buttonName
		);
});

//Mashup


//Geo

$('#grabGeo').click(function () {


var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);

});

// Device

    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        var element = document.getElementById('deviceProperties');

        element.innerHTML = 'Device Name: '     + device.name     + '<br />' + 
				                            'Device Cordova: '  + device.cordova + '<br />' + 
				                            'Device Platform: ' + device.platform + '<br />' + 
				                            'Device UUID: '     + device.uuid     + '<br />' + 
				                            'Device Model: '    + device.model     + '<br />' + 
				                            'Device Version: '  + device.version  + '<br />';
    }

//Geo Maps

$("#geoM").on("pageinit", function () {

function success(position) {
  var mapcanvas = document.createElement('div');
	  mapcanvas.id = 'map';
	  mapcanvas.style.height = '500px';
	  mapcanvas.style.width = '700px';
	  document.querySelector('article').appendChild(mapcanvas);
  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var options = {
	  zoom: 15,
	  center: coords,
	  mapTypeControl: true,
	  navigationControlOptions: {
	  style: google.maps.NavigationControlStyle.Large
  },
  mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
  var marker = new google.maps.Marker({
  position: coords,
  map: map,
  title:"This is your Location"
  });
}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  error('Geo Location is not working');
}
});