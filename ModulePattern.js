//Module Pattern
var catalogModule(function(){
	//Array in which pictures will be stored
	var picturesList = [];

	//function for adding pictures into the list
	var addPicture = function(picture){
		picturesList.push(picture);
	}

	//function for counting number of pictures
	var countPictures = function(){
		console.log(this.picturesList.length);
	}

	//This will expose to data to public
	return{

	}


});