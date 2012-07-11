// Jeff Mitsou, VFW,12/07

window.addEventListener("DOMContentLoaded", function() {

	//getElementById Function
	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	
	//Variable defaults
	var 
	
	
	//Set Link & Submit Click Events
	var displayLink = $ ('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $ ('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $ ('submit');
	save.addEventListener("click", storeData);
	
});