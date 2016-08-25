/*This script covers some key points included in appendix C, 
like arrow functions and a brief introduction to "this"*/

//Arrow Function sample

var foo = a => {
	console.log(a);
};

foo(2); //2

//Arrow function with lexical this
var obj = {
	count: 0,
	cool : function coolFn(){
		if(this.count < 1){
			setTimeout( () => { //arrow function
				this.count++;
				console.log("awesome!");
			}, 100);
		}
	}
}

obj.cool(); //awesome!
//The Difference between normal functions and the arrow ones, 
//is that arrow functions do behave a bit different when using "this", 
//since takes it from immediate lexical enclosing scope
