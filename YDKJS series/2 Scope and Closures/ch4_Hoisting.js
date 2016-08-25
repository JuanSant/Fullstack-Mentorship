//*This code demonstrates how Hoisting is handled in JS*//

//Calling function, but since is not a declaration, it'll be interpreted after declaration
foo();//a

//variable declaration containing a function
var foo = function(){

	console.log("b")
}

//function declaration
function foo(){

	console.log("a");
}

//Although variable was first declared, functions have priority
