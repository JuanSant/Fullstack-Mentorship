/*Code for representing the "this" use.*/
function identify() {
	//"this" takes value depending on the context and changes all word to CAPITAL
	return this.name.toUpperCase();
}

function speak() {
	//"this" takes value depending on the context and it´s printed along with what is returned from identify function.
	var greeting = "Hello My name is: " + identify.call(this);
	console.log( greeting );
}

//variable that has an object assigned with a property
var me = {
	name: "Kyle"
}

//variable with similar property for deciding which to use and assign to "this"
var you = {
	name : "Reader"
}


identify.call(me);
identify.call(you);

speak.call(me);
speak.call(you);
