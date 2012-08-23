$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#addmem').on('pageinit', function(){

		var mform = $('#addmemform');
		    mform.validate({
			invalidHandler: function(form, validator) {},
			submitHandler: function() {
		var data = mform.serializeArray();
			storeData(this.key);
		}
	});
	
	//any other code needed for addItem page goes here
	
	//getElementById Function
	function ge(x) {
	    var theElement = document.getElementById(x);
	    return theElement;
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
	    if(ge('fav').checked){
	        favValue = ge('fav').value;
	    }else {
	        favValue = "No";
	    }
	}
	
	function storeData(key) {
			if (!key){ 
	        var id                          = Math.floor(Math.random()*1000001);
	    }else {
	    	id = key;
	    }
	    //getSelectedRadio();
	    //getCheckboxValue();
	    var  item                     ={};
	          item.title            	   = ["Title: " , ge('title').value];
	          item.fname           = ["First Name: " , ge('fname').value];
	          item.lname           = ["Last Name: " , ge('lname').value];
	          item.bday            = ["Birthday: " , ge('bday').value];
	          item.ddate            = ["Death date: " , ge('ddate').value];
	          item.age               = ["Age: " , ge('age').value];
//	          item.sex         	   = ["Gender: " , sexValue];
	          item.notes            = ["Notes: " , ge('notes').value];
	          item.fav                = ["Save as Favorite: " , favValue];
	        //Save data into Local Storage: Use stringify to convert our object to a string.
	        localStorage.setItem(id, JSON.stringify(item)); 
	        alert("Contact Saved!");         
	}
	
	function getData(){
	    if(localStorage.length === 0){
	    	autoFillData();
	    	alert("No Data Available in Local Storage so default data was added.")
	    };
	    //Write Data from Local Storage to the browser
	    var makeDiv = ge("data")
	    var makeList = document.createElement("ul");
	    makeDiv.appendChild(makeList);
	    for(var i =0, j=localStorage.length; i<j; i++ ){
	        var makeLi = document.createElement("li");
	        var linksLi = document.createElement('li');
	        makeList.appendChild(makeLi);
	        var key = localStorage.key(i);
	        var value = localStorage.getItem(key);
	        //Convert string from local storage val back to an object using JSON.parse()
	        var obj = JSON.parse(value);
	        console.log(obj);
	        var makeSubList = document.createElement("ul");
	        makeLi.appendChild(makeSubList);
	        console.log(obj.title[1]);
	        getImage(obj.title[1], makeSubList);
	    
	        for( var n in obj){
	            var makeSubLi = document.createElement("li");
	            makeSubList.appendChild(makeSubLi);
	            var optSubText = obj[n][0] +" " + obj[n][1];
	            makeSubLi.innerHTML = optSubText;
	            makeSubList.appendChild(linksLi);
	        }
	        makeItemLinks(localStorage.key(i), linksLi); // Create our edit and delete buttons/link for each item in local storage.
	    }
	}
	
	//Get the image for the right catagory
	function getImage(catName, makeSubList) {
		var imageLi = document.createElement('li');
		makeSubList.appendChild(imageLi);
		var newImg = document.createElement( 'img' );
		var setSrc   = newImg.setAttribute("src", "images/" + catName + ".png");
		imageLi.appendChild(newImg);
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
	
	//Make Item Links:
	// Create the edit and delete links for each stored item when displayed
	function makeItemLinks(key, linksLi) {
		//add edit single item link
		var editLink = document.createElement('a');
			editLink.href = "#addmemform";
		editLink.key = key;
		var editText = "Edit Member";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var space = document.createElement('br');
		linksLi.appendChild(space);
		
		//add delete single item link
		var deleteLink = document.createElement('a')
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Member";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink); 
	}
	
	function editItem() {
		console.log("edit fires");
		//grab the data from our local storage
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		console.log(item.bday);
		//show the form    	
//		toggleControls('off');
		
		//populate the form fields with current localStorage values
		ge('title').value            = item.title[1];
		ge('fname').value       = item.fname[1];
		ge('lname').value     = item.lname[1];
		ge('bday').value     = item.bday[1];
		ge('ddate').value     = item.ddate[1];
		ge('age').value      = item.age[1];
		ge('notes').value  = item.notes[1];
	//	ge("number").innerHTML = item.age[1] + " yrs";
//		var radios = document.forms[0].sex;
//		console.log(radios);
//		for(var i=0; i<radios.length; i++){
//			if(radios[i].value === item.sex[1]){
//				radios[i].setAttribute("checked", "checked");
//			}
//		}
		if(item.fav[1] == "Yes"){
			ge( 'fav' ).setAttribute("checked", "checked");
		}
		
		//Remove the initial listener from the input ' save contact ' button.
		save.removeEventListener("click", storeData);
		// Change Submit Button Value to edit button
		ge("submit").value = "Edit Member";
		var editSubmit = ge("submit");
		// Save the key value established  in the this function as a property of the editSubmit event 
		//so we can use that value when we save the data we edited. 
		editSubmit.addEventListener("click", storeData);
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
		errMsg = ge('errors');   
	
	//    Set Link & Submit Click Events
	    var displayLink = ge ('displayLink');
	        displayLink.addEventListener("click", getData);
	    var clearLink = ge ('clear');
	    	clearLink.addEventListener("click", clearLocal);
	    var save = ge('submit');
	    	save.addEventListener("click", storeData);    
	   
	
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

