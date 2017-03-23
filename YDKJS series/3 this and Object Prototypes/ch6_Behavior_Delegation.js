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

