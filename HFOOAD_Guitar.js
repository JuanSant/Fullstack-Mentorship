var Guitar = (function(){
	var serialNumber, builder, model, type, backWood, topWood, price;

	function Guitar(serialNumber, builder, model, type, backWood, topWood, price){
		this.serialNumber = serialNumber;
		this.builder = builder;
		this.model = model;
		this.type = type;
		this.backWood = backWood;
		this.topWood = topWood;
	}

	function getSerialNumber(){
		return serialNumber;
	}

	function getPrice(){
		return price;
	}

	function setPrice(newPrice){
		this.price = newPrice;
	}

	function getBuilder() {
		return builder;
	}

	function getModel(){
		return model;
	}

	function getType(){
		return type;
	}

	function setType(selectedType){
		switch(selectedType){
			case "ACOUSTIC": 
				selectedType = "acoustic";
				break;
			case "ELECTRIC":
				selectedType = "electric";
				break;
			default:
				console.log("Type not found.");
				selectedType = "";
				break;
		}

		this.type = selectedType;
	}


	function getBackWood(){
		return backWood;
	}

	function getTopWood(){
		return topWood;
	}

	function setWood(wood){
		switch(wood){
			case "INDIAN_ROSEWOOD":
				wood = "Indian Rosewood";
				break;
			case "BRAZILLIAN_ROSEWOOD":
				wood = "Brazillian Rosewood";
				break;
			case "MAHOGANY":
				wood = "Mahogany";
				break;
			case "MAPLE":
				wood = "Maple";
				break;
			case "COCOBOLO":
				wood = "Cocobolo";
				break;
			case "CEDAR":
				wood = "Cedar";
				break;
			case "ADIRONDACK":
				wood = "Adirondack";
				break;
			case "ALDER":
				wood = "Alder";
				break;
			case "SITKA":
				wood = "Sitka";
				break;
			default:
				console.log("Wood not found");
				wood = "";
		}
	}

})();

var Inventory = (function() {
	var guitars ;
	Guitar guitar;

	function Inventory(){
		guitars = [];
	}

	function addGuitar(serialNumber, price, builder, model, type, backWood, topWood){
		guitar = new Guitar(serialNumber, price, builder, model, type, backWood, topWood);
		guitars.push(guitar);
	}

	function getGuitar(serialNumber) {
		for (var i = 0; i <= guitars.length; i++) {
			if(guitar.getSerialNumber() == serialNumber){
				return guitar;
			}
		}
		return null;
	}

	function search(guitar) {

		//SerianNumer and price not included since they're unique
		for (var i = 0; i <= guitars.length; i++) {
			var builder = guitar.getBuilder();
			if((builder != null) && (builder != "") && (builder==guitar.getBuilder())) continue;

			var model = guitar.getModel();
			if((model != null) && (model != "") && (model == guitar.getModel())) continue;

			var type = guitar.getType();
			if((type != null) && (type != "") && (type == guitar.getType())) continue;

			var backWood = guitar.getBackWood();
			if((backWood != null) && (backWood != "") && (backWood == guitar.getBackWood())) continue;

			var topWood = guitar.getTopWood();
			if((topWood != null) && (topWood != "") && (topWood == guitar.getTopWood())) continue;

		}

		return null;
	}

})();

var FindGuitarTester = (function(){

	Inventory inventory = new Inventory();
	initializeInventory(inventory);

	Guitar whatErinLikes = new Guitar("", 0, "fender", "Stratocastor", "electric", "Alder", "Alder");
	Guitar guitar = inventory.search(whatErinLikes);

	if(guitar != null){
		console.log("Erin, you might like this " + guitar.getBuilder() + " " + 
					guitar.getModel() + " " + guitar.getType() + " guitar:\n " + 
					guitar.getBackWood() + " back and sides, \n " + guitar.getTopWood() + 
					" top.\n You can have it for only $" + guitar.getPrice() + "!");
	}else{
		console.log("Sorry, Erin, we have nothing for you.");
	}


})();

function initializeInventory(inventory){
	inventory.addGuitar("V95593", 1499.95, "Fender", "Stratocastor", "electric", "Alder", "Alder");
}