//Notification

$('#push').click(function () {
	
	 	    showAlert();
	 alertDismissed();
	 
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