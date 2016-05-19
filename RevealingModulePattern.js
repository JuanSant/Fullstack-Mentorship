//Module that compares two numbers
var numberModule = (function(){
	//var declarations
	var number1, number2;

	//Function for storing received number into declared variable
	function setNumber1(num1){
		number1 = num1;
		console.log(number1);
	}

	function setNumber2(num2){
		number2 = num2;
		console.log(number2);
	}

	//Function for comparing which is greater or whether they're equal
	function compareNumbers(){
		if(number1 > number2){
			console.log(number1 + " is greater than " + number2);
		}else if(number2 > number1){
			console.log(number2 + " is greater than " + number1);
		}else if(number1 === number2){
			console.log("Both numbers are equal");
		}else{
			console.log("Error");
		}
	}

	//Expose private functions through a designated public identifier
	return{
		send1stNumber: setNumber1,
		send2ndNumber: setNumber2,
		compare: compareNumbers
	}


})();

numberModule.send1stNumber(2);
numberModule.send2ndNumber(5);
numberModule.compare();