/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding 
* 2. Implicit Binding   
* 3. New Binding 
* 4. Exolicit Binding 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const myObject = {
    bestcar: "Camaro", 
    speak: function() {
        console.log(this); 
        return this.bestcar + " " + "best car ever"; 
    }
}; 
myObject.speak();  

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