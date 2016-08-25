//This code illustrates how closure works.

function wait(message) {
	
	//timer is passed as a parameter to setTimeOut function.
	setTimeOut(function timer(message) {
		//although message is received as a parameter of wait, 
		//the inner function can access to the outter scope
		console.log( message );
	}, 1000);

}

wait( "Hello There!" );
