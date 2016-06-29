var catalogModule(function(){
	//Array in which pictures will be stored
	var picturesList = [];

	//function for adding pictures into the list
	var addPicture = function(picture){
		picturesList.push(picture);
		console.log(this.picturesList);
	}

	//function for counting current number of pictures
	var countPictures = function(){
		console.log(this.picturesList.length);
	}
	
	//this removes a picture from the catalog list
	var removePicture = function(picture){
		//Get index from picture received
		var index = picturesList.indexOf(picture);
		
		//Validates whether index is greater than -1 
		//-1 is returned when index was not found in list
		if(index > -1){
			picturesList.splice(index, 1);
		}
		
		console.log(this.picturesList);
	}

	//This will expose to data to public
	return{
		addPic: addPicture,
		countPic: countPictures,
		removePic: removePicture
	};


})();

catalogModule.addPic("Photo1");
catalogModule.countPic();
catalogModule.removePic("Photo1");