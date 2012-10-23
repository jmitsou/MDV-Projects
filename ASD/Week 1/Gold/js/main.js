$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addmem').on('pageinit', function() {

    //    Set Link & Submit Click Events
    var displayLink = $('#displayLink');
    displayLink.on("click", getData);
    var clearLink = $('#clear');
    clearLink.on("click", clearLocal);
    var save = $('#submit');
    save.on("click", validate);

	// Validate function
    var validate = function() {
        console.log('made it');
        var mform = $('#addmemform');
        mform.validate({
            invalidHandler: function(form, validator) {},
            submitHandler: function() {
                var data = mform.serializeArray();
                storeData(data);
            }
        });
    };
    
    
    //clear function
    function clearLocal() {
        if (localStorage.length === 0) {
            alert("There is no data to clear!");
        } else {
            localStorage.clear();
            alert("All members deleted!");
            window.location.reload();
            return false;
        }
    }
    
    //change page function
    var changePage = function(pageID){
    			$('#' + pageID).trigger('pageinit');
    			$.mobile.changePage($('#' + pageID), {transition: 'fade'});
    
    }
    
}); // #addmem pageinit ends here

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


