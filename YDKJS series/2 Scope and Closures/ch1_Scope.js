//Sample Script

//simple scope representation
function foo(a){
	var b = a;

	console.log(b, a);

}

foo(2);

//Sample code of nested scope
function foo2(b){
	console.log( a + b);
}

var a = 3;

foo2(2);