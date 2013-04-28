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
  "<img src='" +
  data.results[i].profile_image_url + "' />" +
  "<h1>" +
  data.results[i].from_user_name +
  "<br />" +
  "<br />" +
  "<p>" +
  data.results[i].text
  );
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

