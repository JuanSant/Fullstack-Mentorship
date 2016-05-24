var singleton = (function(){
	//variable to store singleton reference
	var instance;


	function init(){
		//Singleton
		var numberList = ["one", "two", "three"];

		//as in Module pattern, return is similar to a public API
		return{
			getNumberList: function(){
				return numberList;
			},

			countNumerList: function() {
				return numberList.length;
			}
		};

	};

	return{
		// Creates instance in case of it doesn't exist and retrieves it
		getInstance: function () {
			if(!instance){
				instance = init();
			}

			return instance;
		}
	};

})();

//Usage
var single1 = singleton.getInstance();
var single2 = singleton.getInstance();
console.log(single1.getNumberList() === single2.getNumberList());