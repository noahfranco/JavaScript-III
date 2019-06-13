/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding 
//If no other binding rules apply the “.this" keyword is going to default to the window object 
* 2. Implicit Binding  
//  When you call a function and the function is invoked look to the left if the dot (“.”)  and that’s what the keyword is going to reference
* 3. New Binding 
//  is whenever you have a function invoked with the new keyword 
* 4. Exolicit Binding 
//  is when a function is in the global scope 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myObject = {
    bestcar: "Camaro", 
    sayName: function() {
        console.log(this); 
        return this.bestcar + " " + "best car ever"; 
    }
}; 
myObject.sayName();  

// Principle 2

// code example for Implicit Binding
const myVariable = {
    faster: "The Camaro is faster then the Mustang",
    nicer: function(awesome) {
        console.log(this.faster + " " + "and" + " " + awesome); 
        console.log(this); 
    }
}
myVariable.nicer("nicer"); 

// Principle 3

// code example for New Binding
function EventGreeters(greetername) {
    this.nameis = "Hello, my name is"; 
    this.speech = "Welcome, to coca cola annual event ";
    this.greetername = greetername; 
    this.speak = function() {
        console.log(this.nameis + " " + this.greetername + " " + this.speech); 
        console.log(this); 
    }; 
}
const Bob = new EventGreeters("Bob"); 
const Sam = new EventGreeters("Sam")

Bob.speak(); 
Sam.speak();

// Principle 4

// code example for Explicit Binding

let sayName = function() {
    console.log("My name is" + " " + this.name + " " + "I am" + " " + this.age + " " + "years old."); 
}; 

const personsName = {
    name: "Noah Franco!",
    age: 20
    
}; 

sayName.call(personsName); 