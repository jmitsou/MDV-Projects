//$(document).ready(function() {

$('#api').on('pageinit', function () {
	
	$.simpleWeather({
	  zipcode: '02909',
	  woeid: '',
	  location: '',
	  unit: 'f',
	  success: function(weather) {
	    html = '<h2>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
	    html += '<img style= width="125px" src="images/'+weather.code+'.png">';
	    html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
	    html += '<li class="currently">'+weather.currently+'</li>';
	    html += '<li>'+weather.high+'&deg;</li>';
	    html += '<li>'+weather.updated+'</li></ul>';
	    
	
	    $("#weather").html(html);
	  },
	  error: function(error) {
	    $("#weather").html('<p>'+error+'</p>');
	  }
	});
});

  
//});