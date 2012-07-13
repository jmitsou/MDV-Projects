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
        var radios = document.forms(0).readType;
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
        
        
    function storeData() {
        console.log("storeData fires");
            var id                          = Math.floor(Math.random()*1000001);
            getSelectedRadio();
            getCheckboxValue();
            var item                     = {};
                 item.group           	 = ["Group: " , $('groups').value];
                 item.date              = ["Date: " , $('date').value];
                 item.title               = ["Title: " , $('title').value];
                 item.chap             = ["Chapter: " , $('chap').value];
                 item.page             = ["Page: " , $('page').value];
                 item.para              = ["Paragraph: " , $('para').value];
                 item.line               = ["Line: " , $('line').value];
                 item.time              = ["Time: " , $('time').value];
                 item.note              = ["Note: " , $('notes').value];
                 item.read              = ["Type of Reading: " , readValue];
                 item.fav                = ["Save as Favorite: " , favValue];
            //Save data into Local Storage: Use stringify to convert our object to a string.
            localStorage.setItem(id, JSON.stringify(item)); 
            alert("Contact Saved!");         
    }
    
    // Write date from the local storage to the browser
    function getData(){
        toggleControls("on");
        var makeDiv = document.createElement("div");
        makeDiv.setAttribute("id", "items");
        var makeList = document.createElement("ul");
        makeDiv.appendChild(makeList);
        document.body.appendChild(makeDiv);
        $("items").style.display = "block";
        for(var i =0, j=localStorage.length; i<j; i++ ){
            var makeLi = document.createElement("li");
            makeList.appendChild(makeLi);
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            //Convert string from loc stor val back to an object using JSON.parse()
            var object = JSON.parse(value);
            var makeSubList = document.createElement("ul");
            makeLi.appendChild(makeSubList);
            for( var n in object){
                var makeSubLi = document.createElement("li");
                makeSubList.appendChild(makeSubLi);
                var optSubText = object[n][0] +" " + object[n][1];
                makeSubLi.innerHTML = optSubText;
            }
        }
    };    
    
    function clearLocal(){
        if(localStorage.length === 0){
        alert("There is no data to clear!");    
        } else {
        localStorage.clear();
        alert("All contact deleted!");
        window.location.reload();
        return false;
        }
    }; 
    
    
    //Variable defaults
    var holderType = ["-- Entry Type --", "Video", "Book"];
     var  readValue;
          favValue = "No";    
    
    makeCats();
    
//    Set Link & Submit Click Events
    var displayLink = $ ('displayLink');
        displayLink.addEventListener("click", getData);
    var clearLink = $ ('clear');
    clearLink.addEventListener("click", clearLocal);
    var save = $('submit');
    save.addEventListener("click", storeData);    
});