$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addmem').on('pageinit', function(){

//		var mform = $('#addmemform');
//		    mform.validate({
//			invalidHandler: function(form, validator) {},
//			submitHandler: function() {
//		var data = mform.serializeArray();
//			storeData(this.key);
//		}
//	});
	//    Set Link & Submit Click Events
	    var displayLink = $('#displayLink');
	        displayLink.on("click", getData);
	    console.log()    
	    var clearLink = $ ('#clear');
	    	clearLink.on("click", clearLocal);
	    	
	    var save = $('#submit');
	    	save.on("click", validate);  
	
	//any other code needed for addItem page goes here
	var validate= function (){
	console.log('made it')
		var mform = $('#addmemform');
			    mform.validate({
				invalidHandler: function(form, validator) {},
				submitHandler: function() {
			var data = mform.serializeArray();
				storeData(this.key);
			}
		});
		
	}

//	Find value of selected radio button.
//	function getSelectedRadio() {
//	    var radios = document.forms[0].sex;
//	    for(var i = 0; i<radios.length; i++){
//	        if (radios[i].checked){
//	            sexValue = radios[i].value;
//	        }
//	    }
//	}
	
	//	Find value of favorite button.
	function getCheckboxValue(){
	    if($('fav').checked){
	        favValue = $('fav').value;
	    }else {
	        favValue = "No";
	    }
	}
	
	function storeData(key) {
	console.log('storeData') 
			if (!key){ 
	        var id                          = Math.floor(Math.random()*1000001);
	    }else {
	    	id = key;
	    }
	    //getSelectedRadio();
	    //getCheckboxValue();
	    var  item                     ={};
	          item.title            	   = ["Title: " , $('#title').val()];
	          item.fname           = ["First Name: " , $('#fname').val()];
	          item.lname           = ["Last Name: " , $('$lname').val()];
	          item.bday            = ["Birthday: " , $('#bday').val()];
	          item.ddate            = ["Death date: " , $('#ddate').val()];
	          item.age               = ["Age: " , $('#age').value];
//	          item.sex         	   = ["Gender: " , sexValue];
	          item.notes            = ["Notes: " , $('#notes').value];
	          item.fav                = ["Save as Favorite: " , favValue];
	        //Save data into Local Storage: Use stringify to convert our object to a string.
	        localStorage.setItem(id, JSON.stringify(item)); 
	        alert("Contact Saved!");         
	}
	
	function getData(){
	console.log('getData fired') 
	    if(localStorage.length === 0){
	    	alert("No Data Available in Local Storage so default data was added.")
	    	autoFillData();
	    };
	    
	    //Write Data from Local Storage to the browser
	    var makeDiv = $("#data" )
	    var makeList = $("ul");
	    makeDiv.append(makeList);
	    
	    for(var i =0, j=localStorage.length; i<j; i++ ){
	        var makeLi = $("li");
	        makeLi.addClass("makeLi")
	        	.appendTo(makeList)
	        var linksLi = $('li');
	        var key = localStorage.key(i);
	        var value = localStorage.getItem(key);
	        //Convert string from local storage val back to an object using JSON.parse()
	        var obj = JSON.parse(value);
	        var makeSubList = $("ul");
	        makeSubList.appendTo(makeLi)
	        getImage(obj.title[1], makeSubList);
	        for( var n in obj){
	            var makeSubLi = $("li");
	            makeSubLi.appendTo(makeSubList);
	            var optSubText = obj[n][0] +" " + obj[n][1];
	            				.html(optSubText);
	            makeSubList.append(linksLi);
	        }
	    makeItemLinks(localStorage.key(i), linksLi); // Create our edit and delete buttons/link for each item in local storage.
	    }
	}
	
	//Get the image for the right catagory
	function getImage(catName, makeSubList) {
		var imageLi = $('li');
		makeSubList.append(imageLi);
		var newImg = $( 'img' );
		var setSrc   = newImg.setAttribute("src", "images/tabIcons" + catName + ".png");
		imageLi.append(newImg);
	}  
	
	//JSON Object which will auto populate local storage
	function autoFillData() {
		/*var json = {*/
			 
		//Store the JSON Object into Local Storage
		for(var n in json){
			var id 						=Math.floor(Math.random()*1000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}
	
//	function name(){
//		if($("#idInput").val() === "yes"){
//			$('#slider').show();
//		}else{
//			$('#slider').hide();
//		}
//	};
	//Make Item Links:
	// Create the edit and delete links for each stored item when displayed
	function makeItemLinks(key, linksLi) {
		//add edit single item link
		var editLink = $('a');
			editLink.attr("href","#addmemform");
		editLink.key = key;
		var editText = "Edit Member";
		editLink.addClass("editLink")
				.on("click", editItem)
				.html(editText);
		linksLi.append(editLink);
		
		var space = $('<br/>');
		linksLi.append(space);
		
		//add delete single item link
		var deleteLink = $('a');
		deleteLink.attr("href","#");
		deleteLink.key = key;
		var deleteText = "Delete Member";
		deleteLink.addClass("deleteLink")
					.on("click", deleteItem)
					.html(deleteText);
		linksLi.append(deleteLink); 
	}
	
	function editItem() {
		//grab the data from our local storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		//show the form    	
//		toggleControls('off');
		
		//populate the form fields with current localStorage values
		$('#title').val(item.title[1]);
		$('#fname').val(item.fname[1]);
		$('#lname').val(item.lname[1]);
		$('#bday').val(item.bday[1]);
		$('#ddate').val(item.ddate[1]);
		$('#age').val(item.age[1]);
		$('#notes').val(item.notes[1]);
	//	ge("number").innerHTML = item.age[1] + " yrs";
//		var radios = document.forms[0].sex;
//		console.log(radios);
//		for(var i=0; i<radios.length; i++){
//			if(radios[i].value === item.sex[1]){
//				radios[i].setAttribute("checked", "checked");
//			}
//		}
		if(item.fav[1] == "Yes"){
			$( '#fav' ).attr("checked", "checked");
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
		 if (ask){
		 		localStorage.removeItem(this.key);
		 		alert("Member has been deleted.");
		 		window.location.reload();
		 }else {
		 	  alert("Member not deleted.")
		 }
	}
	
	
	function clearLocal(){
	    if(localStorage.length === 0){
	    	  alert("There is no data to clear!");    
	    } else {
	    	 localStorage.clear();
	     	 alert("All members deleted!");
	   		 window.location.reload();
	   		 return false;
	    }
	} 
//		sexValue,
		favValue = "No",
		errMsg = $('errors');   
	
	//    Set Link & Submit Click Events
	    var displayLink = $('#displayLink');
	        displayLink.on("click", getData);
	        
	    var clearLink = $ ('#clear');
	    	clearLink.on("click", clearLocal);
	    	
	    var save = $('#submit');
	    	save.on("click", storeData);    
	   
	
});

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});

$('#').on('pageinit', function(){
	//code needed for home page goes here
});

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});


