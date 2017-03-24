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
