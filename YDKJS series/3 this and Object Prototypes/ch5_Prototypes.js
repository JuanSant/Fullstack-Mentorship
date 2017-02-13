//[[PROTOTYPES]]
//Every Object in JS has an internal property called [[Prototype]] whichs is a reference to another object. 
//Almost all objects are given a non-null value for this property, when they're created

//At the moment of calling an object property, JS uses the method [[Get]] to obtain the value, however, if it doesn't exist, 
//proceeds to follow the [[Prototype]] link of the object.

var anotherObj = {
  a: 2
};

//Creating an object linked to "anotherObj"
var myObject = Object.create( anotherObj );

myObject.a; //2
//If "a" property were not found, the process continues until [[Prototype]] chain ends and if no matching
//is ever found, the [[Get]] operation will show "undefined".

//All normal built-in, not host-specific extension objects in JS "descend from" Object.prototype object.
//Some of the utilities it includes are: .toString(), .valueOf(), .hasOwnProperty(), .isPrototypeOf(), and so on.

//-Setting and Shadowing Properties-//
myObject.foo = "bar";
//if foo was already created, the new value is added to that property. However, if it's not present, the property and its value
//will be added to the object.

//in case of more properties under same name appear at a higher level in the [[Prototype]] chain,
//the property directly on the Object shadows any property with same name, because the property call from Object
//would always find the property that's lowest in the chain.

//Scenarios:
//1. If "foo" is found anywhere higher on the [[Prototype]] chain and is set as writable:false, then a new property
//called "foo" is added to myObject, resulting in a shadowed property.
//2.
