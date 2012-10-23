$('#home').on('pageinit', function() {
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

    //any other code needed for addItem page goes here
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

    

    var storeData = function (data) {
    	console.log(data);
    
    	if(!data._id){
    		var key = Math.floor(Math.random()*100000001);
    	}else{
    
    		//Set the id to the existing key we're editing so that it will save our the data.
    		//The key is the same key that's been passed along from the editSubmit event handler
    		//to the validate function, and then passed here, into the storeFilm function.
    		key =	data._id;
    }
   

    	var item = {};
    		item.title = ["Title: ", $('#title').val()];
    		item.fname = ["First Name: ", $('#fname').val()];
    		item.lname = ["Last Name: ", $('#lname').val()];
		    item.bday = ["Birthday: ", $('#bday').val()];
		    item.ddate = ["Death date: ", $('#ddate').val()];
		    item.age = ["Age: ", $('#age').value];
		    item.notes = ["Notes: ", $('#notes').value];
		    item.fav = ["Save as Favorite: ", favValue];
		    item._id = key;
		    //Save into couch.
		    console.log(id, item);
		    $.couch.db("asdproject").saveDoc(item, {
		    	success: function(data) {
		    		console.log(data);
		    		var save = $("#submit");
		    		save.on("click", validate);
		    		$.mobile.changePage("showData");
		    		getData();
		    	},
		    		error: function(status) {
		    			console.log(status);
		    		}
		    });

    	};


    function getData() {
      console.log("getData fires");  
    	$('#familyMembers').empty();
        $.couch.db("asdproject").view("app/members",{
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

    //Get the image for the right catagory
    
    var doc = {
    	    _id: "",
    	    _rev: ""
    	};
    	$.couch.db("asdproject").removeDoc(doc, {
    	     success: function(data) {
    	         console.log(data);
    	    },
    	    error: function(status) {
    	        console.log(status);
    	    }
    	});


    function getImage(catName, makeSubList) {
        var imageLi = $('li');
        makeSubList.append(imageLi);
        var newImg = $('img');
        var setSrc = newImg.setAttribute("src", + catName + ".png");
        imageLi.append(newImg);
    }
    
    //url functions
    var urlVar = function() {
    	var urlData=$($.mobile.activePage).data("url";)
    	var urlParts = urlData.split('?');
    	var urlPairs = urlParts[1].split('&');
    	var urlValues = {};
    	for (var pair in urlPairs) {
    		var keyValue = urlPairs[pair].split('=');
    		var key = decodeURIComponent(keyValue[0]);
    		var value = decodeURIComponent(keyValue[1]);
    		urlValue[key] = value;
    	}
    	return urlValues;
    }

    
    //Make Item Links:
    // Create the edit and delete links for each stored item when displayed

    function makeItemLinks(key, linksLi) {
        //add edit single item link
        var editLink = $('a');
        editLink.attr("href", "#addmemform");
        editLink.key = key;
        var editText = "Edit Member";
        editLink.addClass("editLink").on("click", editItem).html(editText);
        linksLi.append(editLink);

        var space = $('<br/>');
        linksLi.append(space);

        //add delete single item link
        var deleteLink = $('a');
        deleteLink.attr("href", "#");
        deleteLink.key = key;
        var deleteText = "Delete Member";
        deleteLink.addClass("deleteLink").on("click", deleteItem).html(deleteText);
        linksLi.append(deleteLink);
    }

    function editItem() {
        //grab the data from our local storage
        
        
        $('#title').val(item.title[1]);
        $('#fname').val(item.fname[1]);
        $('#lname').val(item.lname[1]);
        $('#bday').val(item.bday[1]);
        $('#ddate').val(item.ddate[1]);
        $('#age').val(item.age[1]);
        $('#notes').val(item.notes[1]);
      
        if (item.fav[1] == "Yes") {
            $('#fav').attr("checked", "checked");
        }

        //Remove the initial listener from the input ' save contact ' button.
        editSubmit.off("click", storeData);
        // Change Submit Button Value to edit button
        $("#submit").val("Edit Member");
        var editSubmit = $("submit");
        // Save the key value established  in the this function as a property of the editSubmit event
        //so we can use that value when we save the data we edited.
        editSubmit.on("click", storeData);
        editSubmit.key = this.key;

    }

    function deleteItem() {
        var ask = confirm("Are you sure you want to delete this member?");
        if (ask) {
            
            alert("Member has been deleted.");
            window.location.reload();
        } else {
            alert("Member not deleted.");
        }
    }

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

    favValue = "No";
    errMsg = $('errors');


    
    var changePage = function(pageID){
    			$('#' + pageID).trigger('pageinit');
    			$.mobile.changePage($('#' + pageID), {transition: 'fade'});
    
    }
    
}); // #addmem pageinit



    
