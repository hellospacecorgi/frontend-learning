// Variables
var a = 1;
let b = 2;
const c = 3;

let myName;
console.log(myName); // undefined
myName = 'John';
console.log(myName); // John

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

let names = ['John', 'Mary', 'Bob', 'Bob', 'Katie'];
for (let i = 0; i < names.length; i++) {
  names[i] = names[i] + ' Smith';
}

names.forEach((name) => {
  name = name + ' Smith';
})

names.map((name) => {
  name = name + ' Smith';
})

names.filter((name) => {
  return name != 'Bob';
})

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

// Arrow functions
const MyComponent = () => {
  return <div><h1>hello</h1></div>
}
/**
 * export default function
 * export const
 */

//Anonymous function
<button onClick={() => {console.log('Clicked');}}>Click me</button>

// turnary operator
let x = 10;
const color = x > 10 ? 'red' : 'blue';
let colorText = x > 10 && 'red';


// Async + Await + Fetch
const event = new Promise((resolve, reject) => {
  var name = 'John';
  if (name == 'John') {
    resolve(); // function on success
  } else {
    reject('Name is not John'); // function on failure
  }
});

event.then((name) => {
  console.log(name); // data received 
}).catch((err) => {
  console.log(err);
}).finally(() => {
  console.log('always runs');
});

const axios = require("axios"); //allows us to fetch apis
const promise = axios.get("https://cat-fact.herokuapp.com/facts");

data.then((response) => {
  console.log(response.data);
}).catch((err) => {
  console.log(err);
});


// async + await
async function fetchData() {
  try {
    const promise = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log(promise.data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('always runs');
  }
  
}

const fetchData = async () => {
  try {
    const promise = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log(promise.data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('always runs');
  }
}

fetchData