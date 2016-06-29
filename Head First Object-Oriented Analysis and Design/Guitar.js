import guitarSpecAPI from GuitarSpec;

var serialNumber, price, guitarSpec;

function Guitar(serialNumber, price){
	this.serialNumber = serialNumber;
	this.price = price;
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

function getGuitarSpec(){
	return guitarSpecAPI;
}

var guitarAPI{
	Guitar : Guitar,
	getPrice : getPrice,
	getGuitarSpec : getGuitarSpec
}

export guitarAPI;
