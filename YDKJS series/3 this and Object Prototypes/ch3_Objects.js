/*This script is a demonstration 
about how objects work in JS*/

//Object with literal sintax
var myObj = {
	a : 3
};

//Object with constructed form
var myObj2 = new Object();
myObj2.b = 5;

//--Primitive vs. Built-in Objects, String in this case--

//Primitive Object
var strPrimitive = "This is a string as primitive object";
typeof strPrimitive; //"string"
strPrimitive instanceof String; //false (since String is a subtype, but the one used above refers to primitive string)

//Built-in Object
var strObject = new String("This is a string as Built-in (subtype) object");
typeof strObject; //"object"
strObject instanceof String; //true (because this obj points to the built-in String object subtype)

//inspect the object subtype
Object.prototype.toString.call( strObject ); //[object String]

//--Array object
var myArray = ["foo", 42, "bar"];
myArray["3"] = "baz";
myArray.length; //4
myArray[3]; //"baz"

//--Duplicating Objects--
function anotherFunction() {
	console.log("anotherFunction");
}

var anotherObject = {
	c: true
};

var anotherArray = [];

var myObject = {
	a:2,
	b: anotherObject, //reference, not a copy
	c: anotherArray, //another reference
	d: anotherFunction
}

anotherArray.push( anotherObject, myObject );

//assigns/duplicates myObject into an empty Object
var newObj = Object.assign( {}, myObject );

newObj.a; //2
newObj.b === anotherObject; //true
newObj.c === anotherArray; //true
newObj.d === anotherFunction; //true

//--Property Descriptors--//
//--these are used in order to set our properties with a 
//--desired configuration (i.e. read-only, enumerable, configurable...)
var myObject2 = {
	a:2
};

Object.getOwnPropertyDescriptor(myObject2, "a");
//--default values printed: 
//--value: 2, writable: true, enumerable: true, configurable: true//


//----Writable property descriptor
//Sets property into a non-writable way
var myObject3 = {};

Object.defineProperty(myObject3, "a", {
	value: 2,
	writable : false, //not writable
	configurable: true,
	enumerable: true
});

myObject3.a = 3;
myObject3.a; //prints 2 because the property cannot be overwritten.

//----Configurable property descriptor
//Sets property into a non-configurable way to be deleted or configured in any other way
myObject4 = {
	a : 2
};

myObject4.a; //2
delete myObject4.a;
myObject4.a; //undefined

Object.defineProperty (myObject4, "a", {
	value:2,
	writable: true,
	configurable: false,
	enumerable: true
});

myObject4.a; //2
delete myObject4.a
myObject4.a; //2, since configurable is set to false

//immutability
//To make an object immutable, it´s necessary to freeze object
//just to avoid it to be edited/ deleted.
var myImmutableObject = {};

Object.defineProperty(myImmutableObject, "FAVORITE_NUMBER", {
	value: 42,
	writable: false,
	configurable: false
}); //once object becomes immutable, it´s considered a constant whose value won´t never change

//Prevent extensions
//It´s also possible to prevent new properties to be added into existing objects
var myPreventExtensionObject = {
	a: 2
};

Object.preventExtensions(myPreventExtensionObject);
myPreventExtensionObject.b = 3;
myPreventExtensionObject.b; //undefined

//Seal and Freeze
//On one side, seal is used when object value can me modified 
//but reconfigure/delete object itself or add more properties is not allowed.
//On the other hand, Frezze is used when object becomes a constant and 
//is not allowed to modify the value, or do any change on it
var myFrozenObject = {};
var mySealedObject = {};

Object.defineProperty(myFrozenObject, "Weather", {
	value: "cold";
});

Object.defineProperty(mySealedObject, "Weather", {
	value: "hot";
});

myFrozenObject.Weather = "hot";
console.log(myFrozenObject.Weather); //cold

mySealedObject.Weather = "cold";
console.log(mySealedObject.Weather); //cold

//--Getters & Setters--//
//These are functions (set as properties) used to either get or set an object value.
//They can be defined in defineProperty(...) or as a common named-function inside object.
var myGetSetObj = {
	
	//Common function for definning obj Getter
	get x(){ 
		return this._x_;
	},

	set x(val){
		this._x_ = val * 2
	}
};

//another way to define a getter/setter
Object.defineProperty(myGetSetObj, "y",
		{ 
			get: function(){return this.x * 3},
			enumerable: true;
		}
);

Object.defineProperty(myGetSetObj, "w",
	{enumerable: false, value: 3}
);

myGetSetObj.x = 5;
myGetSetObj.x; //10
myGetSetObj.y; //30

//Existence.
//This is used when we want to check whether the property is
//in the object or not. Thus, it´s possible to verify it
//by two ways. One is using "in" which checks on the whole object,
//(including Prototype). The second one is hasOwnProperty() function,
//that  checks only on the object whether the property exists or not.
("x" in myGetSetObj); //true
myGetSetObj.hasOwnProperty("y"); //true
myGetSetObj.hasOwnProperty("z"); //false

//Enumeration.
//When a Object property is set as enumerable:false, 
//it won't be displayed when applying a "for" on the object,
//except for those having it set as true.
var myEnumerableObj = {};

Object.defineProperty(myEnumerableObj, "o",
	{enumerable : false, value: 2});

Object.defineProperty(myEnumerableObj, "p",
	{enumerable: true, value: 3})

for(k in myEnumerableObj){
	console.log(k, myGetSetObj[k]);
}
//"p" 3

//Checking whether obj property is enumerable or not
myEnumerableObj.propertyIsEnumerable("o"); //false
myEnumerableObj.propertyIsEnumerable("p"); //true

//Checking all enumerable obj properties
Object.keys( myEnumerableObj ); //["p"]

//checking all properties (enumerable or not)
Object.getOwnPropertyNames(myEnumerableObj); // ["o", "p"]

//Iteration
//While "for..in" iterates only over indices from array, 
//"for..of" iterates directly over the values
//which is part of an ES6 implementation for ES5 @@iterator buil-in object
var myIteratedArray = [1, 2, 3];

for (var k of myIteratedArray){
	console.log(k);
}
//1
//2
//3
