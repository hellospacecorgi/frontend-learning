// Variables
var a = 1;
let b = 2;
const c = 3;

let myName;
console.log(myName); // undefined
myName = 'John';
console.log(myName); // Flora

/* Primitive/Value Data Types
    * 1. String
    * 2. Number
    * 3. Boolean
    * 4. Undefined
    * 5. Null
    * 6. Symbol (ES6)
*/
let name = 'John'; // String literal
let age = 30; // Number literal
let isApproved = true; // Boolean literal
let firstName = undefined;
let selectedColor = null;

// Reference types

// Give me examples of objects in JavaScript
let person  = {name: 'John', age: 30};
person.name = 'Johnson'; // dot notation
person['name'] = 'Mary'; // bracket notation

let selection = 'age';
person[selection] = 40;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//Arrays
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors.length);

//Functions
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}
greet('John'); // Hello John undefined (lastName undefined)
greet('John', 'Smith');

function square(number) {
    return number * number;
}
console.log(square(2));
