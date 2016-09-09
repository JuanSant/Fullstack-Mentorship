/****Binding Rules****/
/*There are 4 rules that "this" follows to decide what call-site should point to*/

//--Default Building--//
//This rule points to function call made in global scope
function foo() {
	console.log(this.a); //reference to global property
}

var a = 2;

foo(); //prints 2

//--Implicit Binding--//
//Rule where call-site has a context object
function bar() {
	console.log( this.b ) //reference to object property
}

var obj = {
	b : 10,
	bar: bar
};

obj.bar(); //10

//--Explicit Binding--//
//Rule in which the function call is forced to use a specific object for the "this" binding
function fn() {
	console.log(this.c);
}

var obj = {
	c : 4
};

fn.call( obj ); //4 -Call forcing "this" to be obj

//--new Binding--//
//Rule in which is necessary to use the word "new" that suppose to construct a new object 
//and set that new object as the "this" for the call of function.
function newBinding(d) {
	this.d = d;
}

var x = new newBinding( 2 );

console.log(x.d) //2
