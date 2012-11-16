function(doc) {
  if (doc._id.substr(0, 6)=== "member") {
    emit(doc._id,{
    	"title":doc.title,
    	"fname":doc.fname,
    	"lname":doc.lname,
    	"bday":doc.bday,
    	"ddate":doc.ddate,
    	"age":doc.age,
    	"sex":doc.sex,
    	"notes":doc.notes,
    	"fav":doc.fav,
    }
    		
    );
  }
};