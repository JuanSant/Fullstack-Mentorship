//Sample code of scope
function foo(a){
	var b = a * 2;

	function bar(c) {
		console.log(a, b, c);
	}

	bar(b * 3);
}

foo(2); //2 4 12

//Sample Code eval() method implementation

function foo2(str, a){
	eval(str);

	console.log(a, b);
}

var b = 2;

foo2("var b = 3;", 1); //1 3

//Sample code with() method implementation
var obj = {
	a : 1,
	b : 2,
	c : 3
};

//tedious way for assigning values to object properties
obj.a = 2;
obj.b = 3;
obj.c = 4;

//short-hand way for assigning valued to object properties
with(obj){
	a = 3;
	b = 4;
	c = 5;
}

console.log(obj.a, obj.b, obj.c); //3 4 5