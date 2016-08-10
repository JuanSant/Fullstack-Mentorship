//This code shows the difference between a function declaration and function expression.

/*Function Declaration*/
var a = 2;

function foo() {
	var a = 3;
	console.log(a); //3
}

foo(); //function invocation

console.log(a); //2
//------------------------------//

/*Function expression*/
var b = 2;

(function foo() {
	var b = 3;
	console.log(b); //3
})(); //function invocation

console.log(b); //2