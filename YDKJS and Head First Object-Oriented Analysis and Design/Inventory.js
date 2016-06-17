import guitarAPI from Guitar;

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