const PHONE_PRICE = 99.99;
const ACCESORY_PHONE = 9.99;
const TAX_RATE = 1.6;
const SPENDING_THRESHOLD = 200;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount){
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed( 2 );
}

//Keeping buying phones while still there´s money
while (amount < bank_balance){

	amount = amount + PHONE_PRICE;

	if(amount < SPENDING_THRESHOLD){
		amount = amount + ACCESORY_PHONE;
	}

}

amount = amount + calculateTax(amount);

console.log("Your Purchase: " + formatAmount(amount));

if(amount > bank_balance){
	console.log("You can´t afford this Purchase");
}