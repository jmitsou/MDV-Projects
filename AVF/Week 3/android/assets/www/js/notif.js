//Notification

$('#push').click(function () {
	
	 	    showAlert();
	 alertDismissed();
	 
});

$('#weather.html').click(function () {
	weatherAlert();
});

    // Cordova is ready
    //
    function onDeviceReady() {
        // Empty
    }

    // alert dialog dismissed
    function alertDismissed() {
        // do something
    }

    // Show a custom alertDismissed
    //
    function showAlert() {
        navigator.notification.alert(
		 'Congrads you just pushed the button, Vanna Tell them what they won!!',  // message
		 alertDismissed,         // callback
		 'Winner',            // title
		 'Done'                  // buttonName
        );
    }
    
    function weatherAlert() {
        navigator.notification.alert(
    	 'Congrads you just pushed the button, Vanna Tell them what they won!!',  // message
    	 alertDismissed,         // callback
    	 'Current Weather',            // title
    	 'Done'                  // buttonName
        );
    }