var  builder, model, type, backWood, topWood;

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

function GuitarSpec(builder, model, type, backWood, topWood){
	
	this.builder = builder;
	this.model = model;
	this.type = type;
	this.backWood = backWood;
	this.topWood = topWood;
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

var guitarSpecAPI{
	TypeEnums : TypeEnums,
	WoodEmums : WoodEmums,
	BuilderEnums : BuilderEnums,
	Guitar : Guitar,
	getBuilder : getBuilder,
	getType : getType,
	getModel : getModel,
	getTopWood : getTopWood,
	getBackWood : getBackWood
}

export guitarSpecAPI;
