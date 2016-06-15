//Modules Manager
var Modules = (function Manager() {
	var modules = {};

	function define(name, deps, impl){
		for (var i = 0; i < deps.length; i++) {
			deps[i] = modules[deps[i]];
		}

		modules[name] = impl.apply(impl, deps);
	}

	function get(name) {
		return modules[name];
	}

	return{
		define : define,
		get : get
	};

})();

Modules.define("Guitar", [], function(){
	var serialNumber, builder, model, type, backWood, topWood, price;

	var TypeEnums = Object.freeze({"ACOUSTIC" : "acoustic", "ELECTRIC" : "electric"});
	var WoodEmums = Object.freeze({"INDIAN_ROSEWOOD" : "Indian Rosewood", 
								   "BRAZILLIAN_ROSEWOOD" : "Brazillian Rosewood",
								   "MAHOGANY" : "Mahogany",
								   "MAPLE" : "Maple",
								   "CEDAR" : "Cedar",
								   "ADIRONDACK" : "Adirondack",
								   "ALDER" : "Alder",
								   "SITKA": "Sitka"});
	var BuilderEnums = Object.freeze({"FENDER" : "Fender",
									  "MARTIN" : "Martin",
									  "GIBSON" : "Gibson",
									  "COLLINGS" : "Collings",
									  "OLSON" : "Olson",
									  "RYAN" : "Ryan",
									  "PRS" : "Prs",
									  "ANY" : "Prs"});

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


	function getBackWood(){
		return backWood;
	}

	function getTopWood(){
		return topWood;
	}

	var guitarAPI{
		TypeEnums : TypeEnums,
		WoodEmums : WoodEmums,
		BuilderEnums : BuilderEnums,
		Guitar : Guitar,
		getBuilder : getBuilder,
		getType : getType,
		getModel : getModel,
		getPrice : getPrice,
		getTopWood : getTopWood,
		getBackWood : getBackWood
	}

	return guitarAPI;
}); 

Modules.define("Inventory", ["Guitar"], function() {


	function Inventory(){
		guitars = [];
	}

	function addGuitar(serialNumber, price, builder, model, type, backWood, topWood){
		Guitar.Guitar(serialNumber, price, builder, model, type, backWood, topWood);
		guitars.push(Guitar);
	}

	function getGuitar(serialNumber) {
		for (var i = 0; i <= guitars.length; i++) {
			if(Guitar.getSerialNumber() == serialNumber){
				return Guitar;
			}
		}
		return null;
	}

	function search(searchGuitar) {

		searchGuitar = new Guitar(searchGuitar);
		matchingGuitars = [];

		//SerianNumer and price not included since they're unique
		for (var i = 0; i <= guitars.length; i++) {
			
			if(searchGuitar.getBuilder() != Guitar.getBuilder()) continue;

			var model = searchGuitar.getModel().toLowerCase();
			if((model != null) && (model != "") && (model == Guitar.getModel().toLowerCase())) continue;

			
			if( searchGuitar.getType() != Guitar.getType()) continue;

			
			if( searchGuitar.getBackWood() != Guitar.getBackWood()) continue;

			
			if(searchGuitar.getTopWood() != Guitar.getTopWood()) continue;

			matchingGuitars.push(Guitar);
		}

		return matchingGuitars;
	}

	var inventoryAPI{
		Inventory : Inventory,
		addGuitar : addGuitar,
		getGuitar : getGuitar,
		search : search
	}

	return inventoryAPI;

} );

Modules.define("FindGuitarTester", ["Guitar", "Inventory"], function(){

	Inventory inventory = new Inventory();
	initializeInventory(inventory);

	Guitar whatErinLikes = new Guitar("", 0, BuilderEnums.FENDER, "Stratocastor", TypeEnums.ELECTRIC, WoodEmums.ALDER, WoodEmums.ALDER);
	var matchingGuitars = inventory.search(whatErinLikes);

	if(!!matchingGuitars){
		console.log("Erin, you might like these guitars:");

		for (var i = 0; i <= matchingGuitars.length; i++) {
			console.log(" We have a " +
						Guitar.getBuilder() + " " + Guitar.getModel() + " " +
						Guitar.getType() + " guitar:\n " +
						Guitar.getBackWood() + " back and sides,\n " +
						Guitar.getTopWood() + "top.\n You can have it for only: $" +
						Guitar.getPrice() + "!\n -----");
		}


	}else{
		console.log("Sorry, Erin, we have nothing for you.");
	}

	function initializeInventory(inventory){
		inventory.addGuitar("V95593", 1499.95, "Fender", "Stratocastor", "electric", "Alder", "Alder");
	}

} );
