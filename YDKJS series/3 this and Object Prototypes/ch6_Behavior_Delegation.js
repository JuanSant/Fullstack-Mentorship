//What's important to the functionality we can leverage in JS, is
//all about objects being linked to other objects.

//-Delegation-Oriented design
//Instead of solving problems by creating/simulating classes, Delegation points to
//define first an object with concrete behavior, then another object to hold a
//specific data/behavior, so you link the task-specific object(s) to the 1st object
//allowing them to delegate to it when necessary.
var Task = {
    setID: function(ID) { this.id = ID; },
    outputID : function() { console.log(this.id); }
 };

//this makes XYZ delegate to "Task"
var XYZ = Object.create( Task );

XYZ.prepateTask = function(ID, Label) {
    this.setID(ID);
    this.label = Label;
};

XYZ.outputTaskDetails = function(){
    this.outputID();
    console.log(this.label)
};

// 1. Both id and label are data properties directly on XYZ. In general, with
//[[Prototype]] delegation involved, you want state to be on the delegators (XYZ), not on the delegate (Task)
// 2. In behavior delegation, we avoid if at all possible naming things the same at different
//levels of [[Prototype]] chain. This design pattern calls for more descriptive method names,
//specific to the type of behavior each object is doing.
// 3. this.setID(ID) inside of a method on XYZ, first looks on XYZ, but since it doesn't find
//a method name on XYZ, [[Prototype]] delegation means it can follow the link to Task to look for setID(..).
//The General utility methods that exist on Task are availab le to us while interacting with XYZ, because
//XYZ can delegate to Task.

//Behavior delegation means: let me some object (XYZ) provide a delegation (to Task) for property or method 
//references if not found on the object (XYZ).
//Rather than organizing objects in mind vertically, with Parents flowing down to Children, think of
//objects side-by-side, as peers, with any direction of delegation links between the objects as necessary.

//Delegation is more propertly used as an internal implementation detail rather than exposed directly in the API
//interface design.

//Mutual Delegation
//It's not possible to create a cycle where two or more objects are mutually delegated to each other, an error will
//be displayed.

//-Debugged
//The JS specification does not control how browser developer tools should represent specific values/structures
//to a developer, so each browser/engine is free to interpret such things as they see fit. As such, browsers/tools
//don't always agree.

//When you code with OLOO and behavior delegation as your design pattern, who "constructed"
//(that is, which function was called with "new") some object is an irrelevant detail.

//--Mental Models
//--Comparison between OLOO and OO

//-OO Example

function Foo(who){
    this.me = who;
}

function.prototype.identify = function(){
    return "I am" + this.me;
};

function Bar(who){
        Foo.call(this, who);
}

Bar.prototype = Object.create( Foo.prototype );

Bar.prototype.speak = function(){
    alert("Hello, " + this.identify() + "." );
};

var b1 = new Bar("b1");
var b2 = new Bar("b2");

b1.speak();
b2.speak();
//Parent class Foo, inherited by child class Bar, which is instantiated twice as b1 and b2. What we have
//is b1 delegating to Bar.prototype which delegates to Foo.prototype.


//--OLOO example
var Foo2 = {
    init : function(who){
        this.me = who;
    },
    identify: function(){
        return "I am " + this.me;
    }
};

var Bar = Object.create( Foo );

Bar.speak = function(){
    alert("Hello, " + this.identify() + ".");
};

var b1 = Object.create( Bar );
b1.init( "b1" );
var b2 = Object.create( Bar );
b2.init( "b2" );

b1.speak();
b2.speak();
//The same advantage was taken of [[Prototype]] delegation from b1 to Bar to Foo, so the same 3 objects are linked together.
//By doing this, we simplify all the other stuff going on, because now we just set up objects
//linked to each other, without needing all the cruft and confusion of things that look like classes, with constructors
//and prototypes and new calls.

//OLOO-style code embraces the fact that the only thing we ever really care about is the objects linked to other objects.

//oin ES6 is implemented the class syntax, however, despite syntactic improvements, these are not real classes,
//as they still operate on top of the [[Prototype]] mechanism.

//-Delegating Widget Objects--//
var Widget = {
    init: function(width, height){
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    },
    insert: function($where){
                if(this.$elem){
                    this.$elem.css({
                        width: this.width + "px",
                        height: this.height + "px"
                        }).appendTo( $where );
                }
    }
};

var Button = Object.create( Widget );

Button.setup = function(width, height, label){
    //Delegated call
    this.init(width, height);
    this.label = label || "Default";
    
    this.$elem = $( "<button>" ).text( this.label );
};

Button.build = function($where){
    //Delegated call
    this.insert($where);
    this.$elem.click( this.onClick.bind( this ) );
};

Button.onClick = function(evt){
    console.log( "Button '" + this.label + "' clicked!" );
};

$( document ).ready( function(){
        var $body = $( document.body );
        var btn1 = Object.create( Button );
        btn1.setup(125, 30, "hello");
    
        var btn2 = Object.create( Button );
        btn2.setup(150, 40, "World!");
    
        btn1.build( $body );
        btn2.build( $body );
});

//with the OLOO-style approach, we don't think of Widget as a parent and Button as a child. Rather,
//Widget is just an object and is sort of a utility collection that any specific type of widget might
//want to delegate to, and Button is also just a stand-alone object (with a delegation link to Widget).

//From design pattern perspective, were chosen different names that are more descriptive of what
//task does specifically. The initialization methods are called init() and setup()
//By doing so, one avoids the ugliness of the explicit pseudo-polymorphic calls (Widget.call),
//as you can see by the simple, relative, delegated calls to this.init() and this.insert().

//With class constructors, you are "forced" to do both construction and initialization in the same step.
//However, there are many cases where being able to do these two steps separately is more flexible.

//OLOO supports better the principle of separation of concerns, where creation and initialization are not 
//necessarily conflated into the same operation.

//--Simpler Design
//Besides OLOO provides simpler code, behavior delegation as a pattern can actually lead to
//simpler code architecture.

//For this example, we need two controller objects, one for handling the login form
//of a web page, and another for actually handling the authentication (communication) with the server.
//Also is needed a utility helper for making the Ajax communication to the server.

var LoginController = {
    errors: [],
    getUser: function(){
        return document.getElementById("login_username").value;
    },
    getPassword: function(){
        return document.getElementById("login_password").value;
    },
    validateEntry: function(user,pw){
        user = user || this.getUser();
        pw = pw || this.getPassword();
        
        if(!(user && pw)){
            return this.failure("Please enter a username && password!");
        }
        else if (pw.length < 5){
            return this.failure("Password must be 5+ characters!")
        }
        
        //validated
        return true;
    },
    showDialog: function(title, msg){
        //display success message to user in dialog
    },
    failure: function(err){
        this.errors.push( err );
        this.showDialog("Error", "Login invalid" + err)
    }
};

var AuthController = Object.create( LoginController );

AuthController.errors: [];
AuthController.checkAuth = function(){
    var user = this.getUser();
    var pw = this.getPassword();
    
    if(this.validateEntry(user, pw)){
        this.server( "/check-auth", {
          user : user,
          pw : pw
        })
        .then( this.accepted.bind( this ) )
        .fail( this.rejected.bind( this ) );
    }
};

AuthController.server = function(url, data){
   return $.ajax({
        url: url,
        data: data
   });  
};

AuthController.accepted = function(){
    this.showDialog("Success", "Authenticated!")
};

AuthController.rejected = function(err){
    this.failure("Auth Failed: " + err)
};

//doesn't need to be instantiated through calling it along with "new" word, since it's just an object
AuthController.checkAuth();

//to create more additional objects in the delegation chain
var controller1 = Object.create( AuthController );
var controller2 = Object.create( AuthController );

//With behavior delegation, AuthController and LoginController are just objects, horizontal peers of each other.
//By using this approach, we are taking advance since we only have two entities instead of three, as it'd be with Class-style

//It's not necessary a base Controller class to share behavior between the two.
//Furthermore, there's no need for composition as delegation gives the two objects the ability to cooperate differentially as needed.
//also, Polymorphism pitfalls of class-oriented design by not having the names be the same on both objects
//instead, more descriptive names were set.

//--Nicer Syntax--//
//As of ES6, we can use concise method declarations in any object literal, so an object in OLOO style can be declared
//this way
var LoginController = {
    errors: [],
    getUser(){
        //
    },
    getPassword(){
        //
    }
};

//link AuthController to delegate to LoginController
Object.setPrototypeOf( AuthController, LoginController);

//--Unlexical
