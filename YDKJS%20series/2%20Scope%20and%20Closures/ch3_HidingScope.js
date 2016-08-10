//This is for simulating how to Hide Scope.
function doSomething(a) {

	/*returns a different value from the received one to hide the real one*/
	function doSomethingElse(a) {
		return a - 1;
	}

	var b;

	b = a + doSomethingElse(a * 2);

	console.log(b * 3);
}

doSomething(2); //15