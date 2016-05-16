//The following describes how the Constructor Pattern works in JS

//Person Object constructor
function personObj(name, age, dni, salary){
	this.name = name;
	this.age = age;
	this.dni = dni,
	this.salary = salary;
}

//Method that returns person object properties through toString function
personObj.prototype.toString = function(){
	return this.name + " is " + this.age + " years old and earns " + this.salary + " USD";
}

//Creating memory for object based on Constructor
var employee1 = new personObj("Hansel", 25, "FJSKEP17000SDFSDF", 30000);

//printing output
console.log(employee1.toString());
