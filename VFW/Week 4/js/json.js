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
    		 },
    		 
    		 "marker2":   {
    		 		"group":  ["Group: " , "Video"],
    		 		"date":    ["Date: " , "01-01-2012" ],
    		 		"title":     ["Title: " , "Everybody Poops the Movie"],
    		 		"chap":   ["Chapter: " , "Stage 1" ],
    		 		"page":   ["Page: " , "1" ],
    		 		"para":    ["Paragraph: " , "" ],
    		 		"line":     ["Line: " , "" ],
    		 		"time":    ["Time: " , "01:00" ],
    		 		"notes":  ["Notes: " , "love the videos"],
    		 		"read":    ["Type of Reading: " , "N/A"],
    		 		"fav":      ["Save as Favorite: " , "Yes"]
    		 	 }	 
    		 	 
	};
	//Store the JSON Object into Local Storage
	for(var n in json){
		var id 						=Math.floor(Math.random()*1000001);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
};
