//Strings

// Phone Number Validation

function validatePhoneNumber(elementValue){  
	var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
	return phoneNumberPattern.test(elementValue);  
} 

//console.log(validatePhoneNumber(4017445030));
/* this code is pretty easy. The pattern shows that in order for you to get a true, you must have a number squence of 3#'s,3#'s,4#'s.*/

//http://www.zparacha.com/phone_number_regex/

// Email Validation

function validateForm(email)
	{
	var x=email;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
  {
  alert("Not a valid e-mail address");
  return false;
  }
  alert("Thank you this is an email");
  return true;
}

//console.log(validateForm("shinetachi88@gmail.com"));
// the function has two different validations it does to check. it checks the @ sign, then dot

//http://www.w3schools.com/js/js_form_validation.asp

//URL Validation

function checkURL(value) {
	var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");
	if(urlregex.test(value))
	{
	alert("Url is proper")
	return(true);
	}
	alert("Url is invalid format")
	return(false);
}

//console.log(checkURL("www.fullsail.edu"));
//http://forums.devshed.com/javascript-development-115/javascript-url-validation-349330.html

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//console.log(toTitleCase("jeff"))
//http://stackoverflow.com/questions/196972/convert-string-to-proper-case-with-javascript

function change (getChanged) {
	var changer = getChanged.replace(/,/g, "/");
	return changer;	
};

var changeString = change("Monday,Tuesday,Wednesday,Thursday,Friday");
//console.log(changeString);
//help from classmates.

// Numbers
var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}
 
var dString = "11/10/2011";
 
var d1 = new Date(dString);
var d2 = new Date();
 
//console.log("Number of days since "+dString+": "+DateDiff.inDays(d1, d2));
//http://ditio.net/2010/05/02/javascript-date-difference-calculation/


