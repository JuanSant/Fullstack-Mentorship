import inventoryAPI from Inventory;
import guitarAPI from Guitar;

initializeInventory(inventoryAPI);

var whatErinLikes = guitarAPI.Guitar("", 0, guitarAPI.BuilderEnums.FENDER, "Stratocastor", 
										guitarAPI.TypeEnums.ELECTRIC, 
										guitarAPI.WoodEnums.ALDER, 
										guitarAPI.WoodEnums.ALDER);

var matchingGuitars = inventoryAPI.search(whatErinLikes);

if (!!matchingGuitars) {
	console.log("We have a" +
							guitarAPI.getBuilder() + " " + guitarAPI.getModel() + " " +
							guitarAPI.getType() + " guitar:\n" +
							guitarAPI.getBackWood() + " back and sides, \n" +
							guitarAPI.getTopWood() + " top.\n You can have it for only: $" +
							guitarAPI.getPrice() + "!\n ---------");
} else {
	console.log("Sorry, Erin, we have nothing for you.");
}

function initializeInventory(inventoryAPI){
	inventoryAPI.addGuitar("V95593", 1499.95, "Fender", "Stratocastor", "electric", "Alder", "Alder");
}
