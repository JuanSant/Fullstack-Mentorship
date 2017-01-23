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
