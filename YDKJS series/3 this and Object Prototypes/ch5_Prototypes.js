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

//Commonly inheritance implies a copy operation,  but JS instead creates a link between two objects,
//where one object can delegate property/function access to another object.

//On the other hand, differential inheritance pretends that mental model is more important than what is
//physically occurring in the language. It overlooks the fact that an object is not actually
//differentialy constructed, but is instead built with specific characteristics, alongside some gaps
//that pretend to be filled with the delegation behavior.

//--Constructors --
//Functions aren't constructors, but function calls are "constructor calls" if "new" keyword is used.

function Foo3(name){
  this.name = name;
}

Foo3.prototype.myName = function (){
  return this.name;
}

//a&b endup with an internal [[Prototype]] linkage to Foo3.prototype
var a = new Foo3("a");
var b = new Foo3("b");

//When myName is not found, respectively, it's instead found via delegation on Foo3.prototype
a.myName(); //a
b.myName(); //b

//--Constructor Redux--
//The ".constructor" property on Foo.prototype is there by default on the object created
//when Foo the function is declared. If a new object is created and its prototype object reference is replaced,
//it won't get the ".constructor" on it.

//--(Prototypal) Inheritance--
function Foo4(name) {
  this.name = name;
}1

Foo4.prototype.myName = function(){
  return this.name;
};

function Bar4(name, label) {
  Foo4.call (this, name);
  this.label = label;
}

//new Bar4 prototype linked to Foo4.prototype
Bar4.prototype = Object.create(Foo4.prototype);
//here the Bar4.prototype.constructor is gone so it'd be necessary
//to include it manually in case of needing it.
//Object.create(...) creates a "new" object out of thin air, and 
//links that new object's internal [[Prototype]] to the object you specify (Foo4.prototype in this case)

Bar4.prototype.myLabel = function (){
  return this.label;
};

var g = new Bar4( "g", "obj g");

g.myName(); //"g"
g.myLabel(); //"obj g"

//this makes Bar4 prototype be another reference to Foo4.prototype,
//so it links Bar4 to the same object as Foo4, which is Foo4.prototype.
//Thus, if Bar4.prototype.myLabel is changed, it's going to update Foo4.prototype
//*should be avoided*
Bar4.prototype = Foo4.prototype; 

//This creates an object linked to Foo4.prototype, but uses the Foo4 "constructor call".
//In case of that function having side-effects, they will happen at the time of this linking
//rather than only when the Bar4() "children" are created.
Bar4.prototype = new Foo4();

//The best option is to use Object.create(...) to make a new object
//that's properly linked, but throwing the old one away, 
//instead of modifying the existing default object has been provided.

//Pre-ES6
//throws away default existing Bar4.prototype
Bar4.prototype = Object.create( Foo4.prototype );

//ES6+
// modifies existing Bar4.prototype
Object.setPrototypeOf( Bar4.prototype, Foo4.prototype );

//--Inspecting "class" relationships
//Introspection is called when it's wanted to inspect an instance
//for its inheritance ancestry.

function Foo5(){
  console.log("test");
}

Foo5.prototype.blah = {};

var h = Foo5();

//Here is where introspection is applied through the use of instanceof
h instanceof Foo5; //true
//"in the entire [[Prototype]] chain of h, 
//does the object arbitrarily pointed to by Foo5.prototype ever appear?"

//To inspect  relationshion between objects, it's necessary to use isPrototypeOf();
h.isPrototypeOf(b);
//does h appear anywhere in b's [[Prototype]] chain?

//The .__proto__ property retrieves the internal [[Prototype]] of an object as a reference.
//It exists only on the built-in Object.prototype, along with the other common utilities.
//Looks like a property but it's more a getter/setter
h.__proto__ === Foo5.prototype; //true

//The [[Prototype]] of an existing object shouldn't be changed generally.
//Object [[Prototype]] linkage should be treated as a read-only characteristic.
//double underscore could be found in JS community unoficially as "dunder", (e.g. dunder proto)

//--Object Links--/
//The [[Prototype]] mechanism is an internal link that exists on one object
//which references some other object
//The linkage is exercised when a property/method reference is made against the first 
//object, and no such property/method exists.
//When the object cannot find the property/method, its [[Prototype]] is followed.
//This series of links between forms is called "prototype chain".

//Creating Links
var Foo6 = {
    something: function(){
        console.log("Tell me something...")
    }
};

var Bar6 = Object.create( Foo6 );
//Object.create() creates a new object linked to the object specified, which gives us
//all the power (delegation) of the [[Prototype]] mechanism, but without any of the
//unnecessary complication of "new" functions acting as classes and constructor calls.
//By doing an Object.create(null), an empty object will be created and cannot delegate anywhere.

Bar6.something(); //Tell me something...
