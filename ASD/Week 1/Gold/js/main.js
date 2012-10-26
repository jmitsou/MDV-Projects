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
    
    function storeData(data) {
            console.log('storeData');
    var id = Math.floor(Math.random() * 1000001);
    // if (!data.key) {
    // } else {
    // id = key;
    // }

            var item = {};
            item.title = ["Title: ", $('#title').val()];
            item.fname = ["First Name: ", $('#fname').val()];
            item.lname = ["Last Name: ", $('#lname').val()];
            item.bday = ["Birthday: ", $('#bday').val()];
            item.ddate = ["Death date: ", $('#ddate').val()];
            item.age = ["Age: ", $('#age').value];
            item.notes = ["Notes: ", $('#notes').value];
            item.fav = ["Save as Favorite: ", favValue];
            item.key = id;
            //Save data into Local Storage: Use stringify to convert our object to a string.
            localStorage.setItem(id, JSON.stringify(item));
            alert("Contact Saved!");
            changePage("showdata");
            console.log('changePage');
            getData();
            console.log('getData');
          
    }
    
    function getData() {
       $('#familyMembers').empty();
               $.ajax({
                   url: "js/data.json",
                   type: "GET",
                   dataType: "json",
                   success: function(result) {
                   		console.log(result);
                   				$.each(result.rows, function(index, member){
                   				
                       				$(''+
       	                						'<li>'+
       					                				'<p>'+"Title: "+ member.value.title + '<br />' + '</p>'+
       					                				'<p>'+"First Name: "+ member.value.fname + '<br />' + '</p>'+
       					                				'<p>'+"Last Name: "+ member.value.lname + '<br />' + '</p>'+
       					                				'<p>'+"Birthday: "+ member.value.bday + '<br />' + '</p>'+
       					                				'<p>'+"Death Date: "+ member.value.ddate + '<br />' + '</p>'+
       					                				'<p>'+"Age: "+ member.value.age + '<br />' + '</p>'+
       					                				'<p>'+"Gender: "+ member.value.sex + '<br />' + '</p>'+
       					                				'<p >'+"Notes: "+ member.value.notes+ '<br />' + '</p>'+
       					                				'<p>'+"Favorite?: "+ member.value.fav + '<br />' + '</p>'+
       				                				'</li>'
                       					
                       				).appendTo("#familyMembers");
                       				
                      				});
                      				$('#familyMembers').listview('refresh');
                   },				
                   	error: function(data) {}
            	}); 
     
    }
     
    function autoFillData() {
    //Store the JSON Object into Local Storage
    	for(var n in json){
    		var id 						=Math.floor(Math.random()*1000001);
    		localStorage.setItem(id, JSON.stringify(json[n]));
    	}
    } 
    
    //Delete Function
    function deleteItem() {
    	 var ask = confirm("Are you sure you want to delete this member?");
    	 if (ask){
    	 		localStorage.removeItem(this.key);
    	 		alert("Member has been deleted.");
    	 		window.location.reload();
    	 }else {
    	 	  alert("Member not deleted.")
    	 }
    }
    
    
    //Clear Function
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

					



