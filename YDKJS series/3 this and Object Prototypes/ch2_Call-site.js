//This script represents a sample for identifying both call-site and call-stack
function baz() {
	//Call-stack here is only: ´baz´
	console.log("baz");
	bar(); // this is the call site for bar function
}

function bar() {
	//Call-stack: ´baz´ -> ´bar´
	console.log("bar");
	foo();//call-site for foo
}

function foo() {
	// call-stack: ´baz´ -> ´bar´ -> ´foo´
	console.log("foo");

}

baz(); //call-site for ´baz´ function