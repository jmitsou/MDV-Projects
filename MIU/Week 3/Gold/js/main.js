/*  Jeff Mitsou/MIU/Week2/1208  */

// Wait until the DOM is ready.

var parseMemForm = function(data) {
	// uses form data here;
};

$(document).ready(function() {

		var mform = $('#addmemform');
		
		mform.validate({
				invalidHandler:  function(form, validator) {},
				submitHandler: function() {
						var data = mform.serializeArray();
						parseMemForm(data);
				}
		});
});

window.addEventListener("DOMContentLoaded", function () {

	
  
    //getElementById Function
    function ge(x) {
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    function showNumber(){
           var newNumber = ge("age").value;
           ge("number").innerHTML = newNumber + " yrs";
     }
     
     ge("age").addEventListener("change", showNumber);
    
    // Create select field element and populate with options.
    function makeCats() {
        var formTag = document.getElementsByTagName("form"); //formTag is an array of all the form tags
              selectLi = ge('select');
              makeSelect = document.createElement('select');
              makeSelect.setAttribute("id", "groups");
        for (var i=0, j=title.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = title [i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }

    //Find value of selected radio button.
    function getSelectedRadio() {
        var radios = document.forms[0].sex;
        for(var i = 0; i<radios.length; i++){
            if (radios[i].checked){
                sexValue = radios[i].value;
            }
        }
    }
    
    
    function getCheckboxValue(){
        if(ge('fav').checked){
            favValue = ge('fav').value;
        }else {
            favValue = "No";
        }
    }
        
   function toggleControls(n){
   	switch(n){
   		case "on":
   			ge("addTask").style.display = "none";
   			ge("clear").style.display = "inline";
   			ge("displayLink").style.display = "none";
   			ge("addNew").style.display = "inline";
   			break;
   		case "off":
   			ge("addTask").style.display = "block";
   			ge("clear").style.display = "inline";
   			ge("displayLink").style.display = "inline";
   			ge("addNew").style.display = "none";
   			ge("items").style.display = "none";
   			
   			break;
   		default:
   			return false;
   	 }
   
   }     
       
    function storeData(key) {
   		if (!key){ 
            var id                          = Math.floor(Math.random()*1000001);
        }else {
        	id = key;
        }
        getSelectedRadio();
        getCheckboxValue();
        var  item                     ={};
              item.group            = ["Group: " , ge('groups').value];
              item.fname           = ["First Name: " , ge('fname').value];
              item.lname           = ["Last Name: " , ge('lname').value];
              item.bdate              = ["Birthday: " , ge('bdate').value];
              item.ddate              = ["Death date: " , ge('ddate').value];
              item.age               = ["Age: " , ge('age').value];
              item.sex                = ["Gender: " , sexValue];
              item.notes             = ["Notes: " , ge('notes').value];
              item.fav                 = ["Save as Favorite: " , favValue];
            //Save data into Local Storage: Use stringify to convert our object to a string.
            localStorage.setItem(id, JSON.stringify(item)); 
            alert("Contact Saved!");         
    }
    
    // Write date from the local storage to the browser
    function getData(){
        toggleControls("on");
        if(localStorage.length === 0){
        	autoFillData();
        	alert("No Data Available in Local Storage so default data was added.")
        };
        //Write Data from Local Storage to the browser
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        ge("items").style.display = "block";
        for(var i =0, j=localStorage.length; i<j; i++ ){
            var makeLi = document.createElement("li");
            var linksLi = document.createElement('li');
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Convert string from local storage val back to an object using JSON.parse()
            var obj = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeLi.appendChild(makeSubList);
            getImage(obj.group[1], makeSubList);
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
   		editLink.href = "#";
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
    	//grab the data from our local storage
    	var value = localStorage.getItem(this.key);
    	var item = JSON.parse(value);
    	
		//show the form    	
    	toggleControls('off');
    	
    	//populate the form fields with current localStorage values
    	ge('groups').value  = item.group[1];
    	ge('fname').value       = item.fname[1];
    	ge('lname').value     = item.lname[1];
    	ge('bdate').value     = item.bdate[1];
    	ge('ddate').value     = item.ddate[1];
    	ge('age').value      = item.age[1];
    	ge('notes').value  = item.notes[1];
    	ge("number").innerHTML = item.age[1] + " yrs";
    	var radios = document.forms[0].sex;
    	for(var i=0; i<radios.length; i++){
    		if(radios[i].value === item.sex[1]){
    			radios[i].setAttribute("checked", "checked");
    		}
    	}
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
    	editSubmit.addEventListener("click", validate);
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
    
    function validate(e) {
    	//define the elements we want to check
    	var getGroups = ge('groups');
    	var getFname = ge('fname');
    	var getLname = ge('lname');
    	var getBdate = ge('bdate');
    	var getDdate = ge('ddate');
    	
    	//Reset Error Messages
    	errMsg.innerHTML = "";
    	getGroups.style.border 	= "1px solid black";
    	getFname.style.border 	= "1px solid black";
    	getLname.style.border 	= "1px solid black";
    	getBdate.style.border 	  	= "1px solid black";
    	getDdate.style.border 	  	= "1px solid black";
    
   	    
    	    		 
    	//get error messages 
    	var messageAry = [];
    	
    	//Group validation
    	if (getGroups.value ==="-- Entry Type --"){
    		var groupError = "Please select a group.";
    		getGroups.style.border = "1px solid red";
    		messageAry.push(groupError);
    	}
    	
    	//First Name Valadation 
    	if(getFname.value === ""){
    		 var fnameError = "Please enter a First Name."
    		 getFname.style.border = "1px solid red";
    		 messageAry.push(fnameError);
    	}
    	
    	//Last Name Valadation 
    	if(getLname.value === ""){
    		 var lnameError = "Please enter a Last Name."
    		 getLname.style.border = "1px solid red";
    		 messageAry.push(lnameError);
    	}
    	
    	//Date Valadation 
    	if(getBdate.value === "mm/dd/yyyy"){
    		 var bdateError = "Please enter a date."
    		 getBdate.style.border = "1px solid red";
    		 messageAry.push(bdateError);
    	}
    	
    	//Date Valadation 
    	if(getDdate.value === "mm/dd/yyyy"){
    		 var ddateError = "Please enter a date."
    		 getDdate.style.border = "1px solid red";
    		 messageAry.push(ddateError);
    	}
    	
    	//If there were errors, display them on the screen.
    	if(messageAry.length >= 1){
    		for(var i=0, j=messageAry.length; i < j; i++){
    			 var txt = document.createElement('li');
    			 txt.innerHTML = messageAry[i];
    			 errMsg.appendChild(txt);
    		}
    		e.preventDefault();
    		return false;
    	}else{
    		//If all is ok save our data!
    		storeData(this.key);
    	}
    	
    }

    //Variable defaults
    var title = ["-- Entry Type --", "Great Grandparent", "Grandparent", "Parent", "Sibling", "Aunt & Uncle",  "Cousin", "Children", "Grandchildren", "Great Grandchildren"],
     	 sexValue,
     	 favValue = "No",
     	 errMsg = ge('errors');   
    ;
    makeCats();
    
//    Set Link & Submit Click Events
    var displayLink = ge ('displayLink');
        displayLink.addEventListener("click", getData);
    var clearLink = ge ('clear');
    	clearLink.addEventListener("click", clearLocal);
    var save = ge('submit');
    	save.addEventListener("click", validate);    
});
