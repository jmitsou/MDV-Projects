// Jeff Mitsou, VFW,12/07

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function () {

    //getElementById Function
    function $(x) {
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    // Create select field element and populate with options.
    function makeCats() {
        var formTag = document.getElementsByTagName("form"); //formTag is an array of all the form tags
              selectLi = $('select');
              makeSelect = document.createElement('select');
              makeSelect.setAttribute("id", "groups");
        for (var i=0, j=holderType.length; i<j; i++){
            var makeOption = document.createElement('option');
            var optText = holderType [i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }

    //Find value of selected radio button.
    function getSelectedRadio() {
        var radios = document.forms[0].readType;
        for(var i = 0; i<radios.length; i++){
            if (radios[i].checked){
                readValue = radios[i].value;
            }
        } return readValue;
    }
    
    
    function getCheckboxValue(){
        if($('fav').checked){
            favValue = $('fav').value;
        }else {
            favValue = "No";
        }
    }
        
   function toggleControls(n){
   	switch(n){
   		case "on":
   			$("addTask").style.display = "none";
   			$("clear").style.display = "inline";
   			$("displayLink").style.display = "none";
   			$("addNew").style.display = "inline";
   			break;
   		case "off":
   			$("addTask").style.display = "block";
   			$("clear").style.display = "inline";
   			$("displayLink").style.display = "inline";
   			$("addNew").style.display = "none";
   			$("items").style.display = "none";
   			
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
              item.group            = ["Group: " , $('groups').value];
              item.date              = ["Date: " , $('date').value];
              item.title               = ["Title: " , $('title').value];
              item.chap             = ["Chapter: " , $('chap').value];
              item.page             = ["Page: " , $('page').value];
              item.para              = ["Paragraph: " , $('para').value];
              item.line               = ["Line: " , $('line').value];
              item.time              = ["Time: " , $('time').value];
              item.notes            = ["Notes: " , $('notes').value];
              item.read              = ["Type of Reading: " , readValue];
              item.fav                = ["Save as Favorite: " , favValue];
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
        $("items").style.display = "block";
        for(var i =0, j=localStorage.length; i<j; i++ ){
            var makeLi = document.createElement("li");
            var linksLi = document.createElement('li');
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Convert string from local storage val back to an object using JSON.parse()
            var object = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeLi.appendChild(makeSubList);
            getImage(obj.group[1], makeSubList);
            for( var n in obj){
                var makeSubLi = document.createElement("li");
                makeSubList.appendChild(makeSubLi);
                var optSubText = object[n][0] +" " + object[n][1];
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
    	var json = {
    		 "marker1":   {
    		 		"group":  ["Group: " , "Book"],
    		 		"date":    ["Date: " , "01-01-2012" ],
    		 		"title":     ["Title: " , "Everybody poops"],
    		 		"chap":   ["Chapter: " , "Stage 1" ],
    		 		"page":   ["Page: " , "1" ],
    		 		"para":    ["Paragraph: " , "3" ],
    		 		"line":     ["Line: " , "50" ],
    		 		"time":    ["Time: " , "01:00" ],
    		 		"notes":  ["Notes: " , "book has fun activities"],
    		 		"read":    ["Type of Reading: " , "Book"],
    		 		"fav":      ["Save as Favorite: " , "Yes"]
        		 }	 
    	};
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
    	var editText = "Edit Marker";
    	editLink.addEventListener("click", editItem);
    	editLink.innerHTML = editText;
    	linksLi.appendChild(editLink);
    	
    	var space = document.createElement('br');
    	linksLi.appendChild(space);
    	
    	//add delete single item link
    	var deleteLink = document.createElement('a')
    	deleteLink.href = "#";
    	deleteLink.key = key;
    	var deleteText = "Delete Marker";
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
    	$('groups').value  = item.group[1];
    	$('title').value       = item.title[1];
    	$('chap').value     = item.chap[1];
    	$('page').value     = item.page[1];
    	$('para').value      = item.para[1];
    	$('line').value       = item.line[1];
    	var radios = document.forms[0].readType;
    	for(var i=0; i<radios.length; i++){
    		if(radios[i].value == "Book" && item.rType[1] == "Book"){
    			radios[1].setAttribute("checked", "checked");
    		}else if (radios[i].value == "Manga" && item.rType[1] == "Manga") {
    			radios[1].setAttribute("checked", "checked");
    		}
    	}
    	if(item.favorite[1] == "Yes"){
    		$( 'fav' ).setAttribute("checked", "checked");
    	}
    	$('time').value    = item.time[1];
    	$('date').value    = item.date[1];
    	$('notes').value  = item.notes[1];
    	
    	//Remove the initial listener from the input ' save contact ' button.
    	save.removeEventListener("click", storeData);
    	// Change Submit Button Value to edit button
    	$('submit').value = "Edit Contact";
    	var editSubmit = $('submit');
    	// Save the key value establsihed  in the this function as a property of the editSubmit event 
    	//so we can use that value when we save the data we edited. 
    	editSubmit.addEventListener("click", validate);
    	editSubmit.key = this.key;
    	console.log(this.key);
    }
    
    function deleteItem() {
    	 var ask = confirm("Are you sure you want to delete this Marker?");
    	 if (ask){
    	 		localStorage.removeItem(this.key);
    	 		alert("Marker has been deleted.");
    	 		window.location.reload();
    	 }else {
    	 	  alert("Marker not deleted.")
    	 }
    }
    
    function clearLocal(){
        if(localStorage.length === 0){
        	  alert("There is no data to clear!");    
        } else {
        	 localStorage.clear();
         	 alert("All contact deleted!");
       		 window.location.reload();
       		 return false;
        }
    } 
    
    function validate(e) {
    	//define the elements we want to check
    	var getGroups = $('groups');
    	var getTitle = $('title');
    	var getChap = $('chap');
    	var getPage = $('page');
    	var getPara = $('para');
    	
    	//Reset Error Messages
    	errMsg.innerHTML = "";
    	getGroups.style.border = "1px solid black";
    	getTitle.style.border 	  = "1px solid black";
    	getChap.style.border 	  = "1px solid black";
      	getPage.style.border 	  = "1px solid black";
   	    getPara.style.border 	  = "1px solid black";
    	    		 
    	//get error messages 
    	var messageAry = [];
    	
    	//group validation
    	if (getGroups.value ==="-- Entry Type --"){
    		var groupError = "Please choose a group.";
    		getGroups.style.border = "1px solid red";
    		messageAry.push(groupError);
    	}
    
    	//Title Valadation 
    	if(getTitle.value === ""){
    		 var titleError = "Please enter a title."
    		 getTitle.style.border = "1px solid red";
    		 messageAry.push(titleError);
    	}
    	
    	//Chapter Valadation 
    	if(getChap.value === ""){
    		 var chapError = "Please enter a chapter name."
    		 getChap.style.border = "1px solid red";
    		 messageAry.push(chapError);
    	}
    	
    	//Page Validation 
    	if(getPage.value === ""){
    		 var pageError = "Please enter a page number."
    		 getPage.style.border = "1px solid red";
    		 messageAry.push(pageError);
    	}
    	
    	//Paragraph Valadation 
    	if(getPara.value === ""){
    		 var paraError = "Please enter a paragraph number."
    		 getPara.style.border = "1px solid red";
    		 messageAry.push(paraError);
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
    var holderType = ["-- Entry Type --", "Video", "Book"],
     	 readValue,
     	 favValue = "No",
     	 errMsg = $('errors');   
    ;
    makeCats();
    
//    Set Link & Submit Click Events
    var displayLink = $ ('displayLink');
        displayLink.addEventListener("click", getData);
    var clearLink = $ ('clear');
    	clearLink.addEventListener("click", clearLocal);
    var save = $('submit');
    	save.addEventListener("click", validate);    
});
