// Jeff Mitsou, VFW,12/07

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function() {

	//getElementById Function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	// Create select feild element and populate with options.
	function makeCats() {
		var formTag = document.getElementsByTagName("form"); //formTag is an array of all the form tags
			  selectLi = $('select')
			  makeSelect = document.createElement('select');
			  makeSelect.setAttribute("id", "groups")
		for (var i=0, j=holderType.length; i<j; i++){
			var makeOption = document.createElement('option')
			var optText = holderType [i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText:
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	//Variable defaults
	var holderType = ["-- Entry Type --", "Video", "Book"];
	makeCats();
	/*
	//Set Link & Submit Click Events
	var displayLink = $ ('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $ ('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $ ('submit');
	save.addEventListener("click", storeData);
*/	
});