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
//1. If "foo" is found anywhere higher on the [[Prototype]] chain and is NOT set as writable:false, then a new property
//called "foo" is added to myObject, resulting in a shadowed property.
//2. If a foo is found higher on the [[Prototype]] chain, then both the setting of that existing property 
//as well as the creation of the shadowed property on myObj are disallowed. If strict mode is enabled,
//an error is thrown, otherwise the property value will be ignored. No shadowin occurs
//3. If a foo is found and it's a setter, then the setter will always be called. No foo will be (aka shadowed on) 
//created and the existing setter won't be redefined.

//in case of Shadowing is wanted to be implemented in scenarios #2 and #3, it's necessary to use Object.defineProperty(...) in order
//to add it directly to the desired object without affecting the existing property under same name.
//since shadowing is more complicated and nuanced than it's worth, it should be avoided if possible.

//Implicit Shadowing example. Consider:
var myObj1 = {
  a: 2
};

var myObj2 = Object.create( myObj1 );

myObj1.a; //2
myObj2.a; //2

myObj1.hasOwnProperty( "a" ); //true
myObj2.hasOwnProperty( "a" ); //false

myObj2.a++; //here occurs the implicit shadowing
//Since property hasn't been created under myObj2, another property will be added to myObj2

myObj1.a; //2
myObj2.a; //3

myObj2.hasOwnProperty( "a" ); //true

//so the only way to increment myObj1, it's by doing reference directly to it.

//--Class--//
//Class (since they don't exist) don't define the object behavior, instead the object itself
//sets its own behavior. There's just the object.

//--Class functions--//
//All functions have a property called prototype, which points at an arbitrary object.
function Foo1{
  //
};

Foo1.prototype; // {}

//So when X is created by calling "new Foo1()", X gets an internal [[Prototype]] link to the object Foo.prototype is pointing at.
var x = new Foo1();
Object.getPrototypeOf( x ) === Foo1.prototype; //true

//Foo1.prototype --> objX
//X (with new Foo1()) --> objX

//Unlike class oriented languages, JS don't use copy-behavior for objects. What it does is just to keep
//a similar reference to a certain [[Prototype]] from an object. So they just get "linked"

//when calling the new Foo1(), the result is two objects link to each other. That's it.
//That mechanism is called "prototypal inheritance"
