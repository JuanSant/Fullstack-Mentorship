//Classes describe a way for organizing the code in order to model it as a real world problem.
//Thus, through data structures, classes help us to operate on data and package it up along with a certain behavior (a.k.a. Encapsulate).
//It's possible to classify data structures by thinking about any given structure as a specific variation of a more general base definition.
 
//Example
//We can define a general class such as "Person" and it'll have some properties and specific behavior.
//However, this can be detailed in more specific classes or classifications like "Client" and "Employee". Thus,
//although each of these classes are "Person" at some point, they have their own properties and behaviors besides
//the ones from "Person" class. Saying that, classes, inheritance and instantiation arise.

//Polymorfism is another important topic in classes, since by using it, it's possible to override parent methods to re-use them in
//child classes, including more specific properties or other details that are not setup in parent class.

//Nevertheless, JavaScript is not a ¨class¨ language, so it only provides class-like synctactic elements that lets 
//you implementing approximations of classical class functionality.

//as other class-orientes-languages, JS offers a Stack class which is a standard library that provides a "stack" data structure 
//with some properties that store data and publicly accessible behaviors to interact with the (hidden) data. For using it
//it's necessary to instantiate the Stack class.

//Metaphorically, a class would be the equivalent to a Blue-print in terms of architecture, so in order to start using it
//it's mandatory to build it (a.k.a. Instantiate it). Once built, the result of such "construction" is an object, so this object
//acts like a copy with all the characteristics described by the class.

//Constructor is a method, usually called same way as class, whose explicit job is 
//to initialize any information (state) the instance will need.

//in most of class-oriented languages, it's necessary to type "new" 
//to let the language engine know you want to construct a new class instance

//Class Inheritance//
//As previously mentioned, it's possible to inherit from one class to another. The second class is named "child" whereas
//the first class is called "parent". Thus, once the child exists, it's separate from the parent, 
//so it only takes initally a copy of the behavior from the parent, but can override it and define new ones.

//Polymorphism is considered relative, in contrast with other class-oriented languages, since works under the idea that 
//any method cna reference another method at a higher level of the inheritance hierarchy. 
//Moreover, a method name can have multiple definitions at different levels of the inheritance so they're selected as apropiate
//when resolving which methods are being called.

//In JS is more apropiate to think of the "class" belonging to the constructor (The Foo.prototype... type references). 
//Since in JS the relationship between parent and child class exists only between the two ".prototype" objects of the
//respective constructors, the constructors themselves are not directly related, 
//and thus there's no simple way to relatively reference one from the other.
//Class inheritance implies copies.

//Mixins
//JS doesn't count with "classes" to instantiate only objects, so they're not copied to others, they just get linked together.
//It's possible to fake the missing copy behavior of classes in JavaScript mixins. There are two types: explicit and implicit.

//-Explicit Mixins
//Since JS doesn't count with classes, it uses object copies from one to another, respectively.
//Technically, functions are not actually duplicated, but rather references to the functions are copied.
//In this case, unlike class-oriented languages, it's necessary to use explicit references for each function
//to use as a maner of Explicit pseudo-polymorphism and since this could lead to harder-to-read and harder-to-maintain code
//should be avoided because the cost outweights the benefit in most respects.
//What mixins do is to duplicate a reference to the shared function instead of the function itself. In case of new properties
//are added to one of the "classes/Objects", it won't affect at all the child or parent class.
//However, this doesn't occur with arrays, since both "parent and child classes" reference the same source, so if one of them
//changes its value, the other will get those updates too.
//Through explicit mixin, devs are able to partially emulate the behavior of "multiple inheritance",
//but there's no direct way to handle collisions or other problems that could come up with this emulation.
//It exists many workarounds but require more effort than the pay-off.

//--Parasitic Inheritance
//This includes both explicit and implicit mixins, in which a copy is made initially from parent class, 
//then mixin the child class (object) definition and pass of the new composed obj as child instance.

//-Implicit Mixins
//This mixing basically consists on borrowing one object function or properties by calling it from another object, 
//so the assignments that the 1st object makes, are applied agains the 2nd object. That's why it's said 
//we can "mix in" an object behavior with or into another one.

//To Conclude, faking classes in JS can cause more problems for future coding than solving real problems.
