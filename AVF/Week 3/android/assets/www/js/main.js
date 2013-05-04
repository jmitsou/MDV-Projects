<!-- Twitter API -->

var getData = function() {
 	var tquery = $('#tquery').val();
 	$.getJSON('http://search.twitter.com/search.json?q=' + tquery + '&rpp=10&lang=en&include_entities=true&result_type=mixed&callback=?',
  		function(data) {
  		console.log(data);
 		for (i=0, j=data.results.length; i<j; i++) {
  	$("#res-Data")
  	.append(
	  "<li>" +
	  "<img src='" + data.results[i].profile_image_url + "' />" +
	  "<h1>" + data.results[i].from_user_name + "<br />" +"<br />" +
	  "<p>" + data.results[i].text);
	 }
  
  		$("#res-Data").listview("refresh");
  		});
  	};

$('#getData').on('click', function() {
 getData();
});
  
$('#clear').on('click', function() {
 location.reload();
});


<!--Map API -->

$("#geoM").on("pageinit", function () {

function success(position) {
  var mapcanvas = document.createElement('div');
	  mapcanvas.id = 'map';
	  mapcanvas.style.height = '320px';
	  mapcanvas.style.width = '340px';
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