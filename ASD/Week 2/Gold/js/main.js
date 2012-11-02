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
    
    function getCheckboxValue() {
        if ($('fav').checked) {
            favValue = $('fav').value;
        } else {
            favValue = "No";
        }
    }
    
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
    
    function getImage(catName, makeSubList) {
        var imageLi = $('li');
        makeSubList.append(imageLi);
        var newImg = $('img');
        var setSrc = newImg.setAttribute("src", "images/tabIcons" + catName + ".png");
        imageLi.append(newImg);
    }
     
    function autoFillData() {
    //Store the JSON Object into Local Storage
    	for(var n in json){
    		var id 						=Math.floor(Math.random()*1000001);
    		localStorage.setItem(id, JSON.stringify(json[n]));
    	}
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
            var value = localStorage.getItem(this.key);
            var item = JSON.parse(value);
            //populate the form fields with current localStorage values
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
    
    favValue = "No";
    errMsg = $('errors');
    
}); // #addmem pageinit ends here 

//Fam Data
$("#xhr").on('pageinit', function() {

        //JSON
        $('#json').on('click', function() {
            $('#xhrdata').empty();
            

            $.ajax({
                url: "xhr/data.json",
                type: "GET",
                dataType: "json",
                success: function(result) {
                		console.log(result);
                		$('<h3>').html("JSON List").appendTo('#jtitle');
                				for(var i=0, j=result.memberdir.length; i<j; i++){
                							var member = result.memberdir[i];
                				
	                				$(''+
		                						'<li>'+
					                				'<p>'+"Title: "+ member.title + '<br />' + '</p>'+
					                				'<p>'+"First Name: "+ member.fname + '<br />' + '</p>'+
					                				'<p>'+"Last Name: "+ member.lname + '<br />' + '</p>'+
					                				'<p>'+"Birthday: "+ member.bday + '<br />' + '</p>'+
					                				'<p>'+"Death Date: "+ member.ddate + '<br />' + '</p>'+
					                				'<p>'+"Age: "+ member.age + '<br />' + '</p>'+
					                				'<p>'+"Gender: "+ member.sex + '<br />' + '</p>'+
					                				'<p >'+"Notes: "+ member.notes+ '<br />' + '</p>'+
					                				'<p>'+"Favorite?: "+ member.fav + '<br />' + '</p>'+
					                				'</li>'
	                					
	                				).appendTo("#xhrdata");
	                				
                   				}
                   				
                   				$('#xhrdata').listview('refresh');
                },				
                	error: function(data) {}
         	});

        });
        
        //CSV
//        $('#csv').on('click', function(){
//        		$('#xhr').empty();
//        		$('<p>').html('').appendTo('#xhr');
//        		
//        		$.ajax({
//        		    url      : "xhr/csvdata.csv",
//        		    type     : "GET",
//        		    dataType : "text",
//        		    success  : function(status, csv) {
//        		    	console.log(status, csv);
//        		    	 Assume that your entire CSV file is in the data variable.
//        		    	 The "\n" is the string escape for the end-of-line character.
//        		    	var lines = csv.split("\n");
//        		    	 The lines variable is now an array of lines of text.
//        		    	for (var lineNum = 0; lineNum < lines.length; lineNum++) {
//        		    	     Get the current line/row
//        		    	    var row = lines[lineNum];
//        		    	    var columns = row.split(",");
//        		    	     The columns variable is now an array.
//        		    	    console.log(columns);
//        		    	}; // for lineNum
//        		    
//        		    	$(''+
//        		    					'<li>'+
//        		    	 				'<p>'+"Title: "+ member.title + '<br />' + '</p>'+
//        		    	 				'<p>'+"First Name: "+ member.fname + '<br />' + '</p>'+
//        		    	 				'<p>'+"Last Name: "+ member.lname + '<br />' + '</p>'+
//        		    	 				'<p>'+"Birthday: "+ member.bday + '<br />' + '</p>'+
//        		    	 				'<p>'+"Death Date: "+ member.ddate + '<br />' + '</p>'+
//        		    	 				'<p>'+"Age: "+ member.age + '<br />' + '</p>'+
//        		    	 				'<p>'+"Gender: "+ member.sex + '<br />' + '</p>'+
//        		    	 				'<p >'+"Notes: "+ member.notes+ '<br />' + '</p>'+
//        		    	 				'<p>'+"Favorite?: "+ member.fav + '<br />' + '</p>'+
//        		    	 				'</li>'
//        		    			
//        		    			).appendTo("#xhrdata");
//        		    		
//        		    	}
//        		    	
//        		    	$('#xhrdata').listview('refresh');
//        		    	
//        		    },
//        		    error: function(data) {
//        		    	console.log(result);
//        		    }
//        		});
//                
//        });
        
    // XML
     $('#xml').on('click', function () {
     		$('#xhrdata').empty();
     		
     		$.ajax({
     		    url      : "xhr/xmldata.xml",
     		    type     : "GET",
     		    dataType : "xml",
     		    success  : function (xml,data) {
     		    		console.log(xml);
	     		    // assume that the XML above is in a string named "xml"
//	     		    var data = $.parseXML();
	     		    // wrap the XML in a jQuery object to make it easier to work with
//	     		    var xml = $(data);
	     		    $(data).find("member").each(function () {
	     		        var title 	 = $(this).find('title').text(),
	     		        	  fname = $(this).find('fname').text(),
	     		        	  lname = $(this).find('lname').text(),
	     		        	  bday  	 = $(this).find('bday').text(),
	     		        	  ddate  = $(this).find('ddate').text(),
	     		        	  age 	 = $(this).find('age').text(),
	     		        	  sex   	 = $(this).find('sex').text(),
	     		        	  notes  = $(this).find('notes').text(),
	     		        	  fav    	 = $(this).find('fav').text();
	     		 
	     		       $("#xhrdata").append($(
									     		                	'<li>'+"Title: "+ title + '<br />' + '</li>'+
									     		                	'<li>'+"First Name: "+ fname + '<br />' + '</li>'+
									     		                	'<li>'+"Last Name: "+ lname + '<br />' + '</li>'+
									     		                	'<li>'+"Birthday: "+ bday + '<br />' + '</li>'+
									     		                	'<li>'+"Death Date: "+ ddate + '<br />' + '</li>'+
									     		                	'<li>'+"Age: "+ age + '<br />' + '</li>'+
									     		                	'<li>'+"Gender: "+ sex + '<br />' + '</li>'+
									     		                	'<li>'+"Notes: "+ notes+ '<br />' + '</li>'+
									     		                	'<li>'+"Favorite?: "+ fav + '<br />' + '</li>'
	     		           									 ));
	     		           //.append("#xhrdata");
	     		        
//	     		        console.log("Title: ", item.find("title"));
	     		    });
	     		    $('#xhrdata').listview();
     		    	$('#xhrdata').listview('refresh');
     		    },
     		    error: function (data) {}
        	});
     });
        
});	