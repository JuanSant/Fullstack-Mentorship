//*This demonstrates how let and const words can be used in JS*//

//*"Let" hijacks any block scope for its variable declaration*//
{
	let j;
	for (var j = 0; j <= 10; j++) {
		let i = j; //This re-binds variable for each iteration
		console.log(i);
	}

}

//*Const*//
var foo = true;

if(foo){
	var a = 2;
	const b = 3; //block-scoped to the 'if'

	a = 3; //assigns 3 to variable
	b = 4; //error
}

console.log(a); //3
console.log(b); //Reference Error
