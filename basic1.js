//What is JavaScript
// JavaScript is a scripting language used to create and control dynamic website content, i.e. anything that moves, refreshes, or otherwise changes on your screen without requiring you to manually reload a web page. Features like:

// animated graphics
// photo slideshows
// autocomplete text suggestions
// interactive forms

// Into to variable

//varable can store the information
//we can used the information
// we can change the information

// Note: Start with small letter and use camel case

// let  FirstName;
// console.log(typeof FirstName);
// FirstName="Rk"
// console.log(typeof FirstName,FirstName);

//----------------------String------------------------
// 0 -- n
// let firstname = "RITIK KUMAR";

// R I T I K   K U M A R
// 0 1 2 3 4 5 6 7 8 9 10

// console.log(firstname[0]);

// console.log(typeof firstname);

// length
// console.log(firstname.length);

// -----Method of String-----

//1. trim();

// let firstName = " RITIK ";
// console.log(firstName);
// console.log(firstName.trim());

//2.toUpperCase()
//3.toLowerCase()
//4. slice()

// let firstName = "RITIK KUMAR";

// console.log(firstName.slice(0, 5));

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Type of operator x

//-----data type------

//1. String
//2. number
//3. boolean
//4.undefined
//5.null
//6.BigInt
//7.Symbol

//BigInt

// let num = BigInt(111111111111111111111111111111);

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(num);

//xxxxxxxxxxxxxxxxxxxx booleans & comparison operator

//booleansb
// true, false

// ==         vs       ===

// === check both datatype and value

//xxxxxxxxxxxxxxxxxxxx truthy and falsy values

// -----falsy values

//false
//""
// null
//undefined
//0

// ---- truthy ----

//"abc"
//1 -1

// let firstName = "";

// if (firstName) {
//   console.log(firstName);
// } else {
//   console.log("First name is empty");
// }

//xxxxxxxxxxxxxxxxxxx ternary operator

// let age = 19;

// age > 18 ? console.log("You are eliable") : console.log("You are not eliable");

// xxxxxxxxxxxxxx   AND  OR  operator

// let age = 18;
// let firstname = "RITIK";

// if (firstname[0] === "R" && age >= 18) {
//   console.log("inside if");
// } else {
//   console.log("inside else");
// }

//xxxxxxxxxxxc switch case

//xxxxxxxxxxxx break and continous

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx array xxxxxx

// intro to arrays
//reference type
//how to create arrays

//ordered collection of items

// let fruits = ["apple", "mango", "grapes"];
// let number = [1, 2, 3, 4];
// let mixed = [1, 2, 3, 4, "String", null, undefined];

// console.log(fruits[0]);

// console.log(typeof number);
// console.log(Array.isArray(number));

//indexing   0-------------->n

// ---------------array method
//1. push-- add element

// let num = [1, 2, 3, 4];
// num.push(5,6,7,8);
// console.log(num);

//2. pop --- delete last element

// let num = [1, 2, 3, 4];
// console.log(num.pop());
// console.log(num);

//unshift -- add element on last point

// let num = [1, 2, 3, 4];
// num.unshift(-4, -3, -2, -1, 0);
// console.log(num);

//shift   --- remove start

//xxxxxxxxxxxxxxx How to clone array xxxxxxxxxxxxxx

//how to concatenate two array

//let array1 = ["item1", "item2"];

// let array2=array1.slice(0);

//let array2=[].concat(array1);

//new way to clone
// spread operator






//let array2=[...array1];

// let array2 = array1.slice(0).concat(["item4", "item5"]);
// console.log(array2);

//xxxxxxxxxxxxxxxxxxxxxx traversion of array xxxxxx
//------ for of loop

// const fruits = ["bananan", "cofeee", "graphs"];

// for (const item of fruits) {
//   console.log(item);
// }

// for in loop

// const fruits = ["item1", "item2", "item3", "item4"];
// const fruits2 = [];

// for (const key in fruits) {
//   fruits2.push(fruits[key].toUpperCase());
// }
// console.log(fruits2);


// array distructuring

// const myArray = ["value1", "value2", "value3", "value4", "value5"];

// let [array1, array2, array3, ...Myarray] = myArray;

// console.log(array1);
// console.log(array2);
// console.log(array3);
// console.log(Myarray);

// objects
// arrays are good but not sufficient
// for real world data
// object store key value pairs
//object don't have index

//how to create objects

// const person={
//   name:"Harshit",
//   age:"22",

// }

// how to access data from object

//how to add key value pair to object

// 1. Arrays
// Definition: A collection of data items, typically of the same type, stored in an ordered manner.

// Best For:

// When data is sequential or needs to be accessed by position (index).
// When you need to perform operations like sorting or iterating over a collection.

// Real-Life Examples

// Playlist in a Music App: Songs are stored in order and accessed by their position.
// Temperatures Over a Week: Store temperatures for 7 days in an ordered list.
// Game Scores: Keep track of the scores of players in a game.

// Advantages
// Easy to iterate through data.
// Efficient for operations requiring ordered data.
// Good for handling homogenous data (data of the same type).

// 2. Objects

// Definition: A collection of key-value pairs, where data can be stored and accessed using descriptive keys.

// Best For:

// When data has meaningful labels (keys) rather than just positions.
// When the structure is complex or hierarchical.

// Real-Life Examples

// User Profiles: Store user data like { name: "John", age: 30, email: "john@example.com" }.

// Inventory Management: Store details of items with properties like { itemName: "Laptop", price: 500, quantity: 10 }.
// Smart Home Systems: Manage devices with keys like { light: "on", thermostat: 22, doorLock: "locked" }.

// Advantages

// Easy to understand and access data by meaningful names (keys).
// Flexible; you can add or remove properties dynamically.
// Ideal for representing complex, real-world objects with multiple attributes.

// Comparison: Which is Better
// ?
// Aspect	Array	Object
// Structure	Simple and ordered (indexed).	Flexible with key-value pairs.

// Access	Access by index (e.g., arr[0]).	Access by key (e.g., obj.name).

// Use Case	Sequential, same-type data.	Complex, descriptive data.

// Scalability	Great for numerical and ordered data.	Great for hierarchical or labeled data.

//how to create an object

// const key = "email";

// const person = {
//   productName: "RITIK KUMAR",
//   price: "Software Engineer",
//   Description: {
//     brand: "Hp",
//     processor: "intel i7",
//     ram: "16 ram",
//   },
// };

//how to access data from object
// console.log(person.productName);

// how to add key value pair in object

// person.Description.rom = "500Gb";
// console.log(person);
// =========another way to create an array

// console.log(person["Description"]);

// different between dot and braket

// like  if key like sentance ex "personal hobbies0"

// person[key] = "RITIK";
// console.log(person);

// how to iterate object

// for in loop
//Object.keys

// const person = {
//   productName: "RITIK KUMAR",
//   price: "Software Engineer",
//   Description: {
//     brand: "Hp",
//     processor: "intel i7",
//     ram: "16 ram",
//   },
// };

// for (const key in person) {
//   console.log(`${key} : ${person[key]}`);
// }

// console.log(typeof Object.keys(person));

// compute properties

// const key1 = "obj1";
// const key2 = "obj2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//   [key1]: value1,
//   [key2]: value2,
// };

// console.log(obj);

//spread operator

// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const newArray = [..."RITIK"];
// console.log(newArray);
// let [a, b, ...array] = array1;
// console.log(a);
// console.log(b);
// console.log(array);

//spead operator in object

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };
// const obj2 = {
//   key3: "value3",
//   key4: "value4",
// };

// const newObject = { ...obj1, ...obj2, key6: "hello" };
// console.log(newObject);

// const newObject = { ..."abc" };
// const newObject = { ...["item1", "item2"] };
// console.log(newObject);

// object destructuring

// const band = {
//   bandName: "Apple",
//   famousSong: "stairway to heaven",
// };

// const { bandName, famousSong } = band;
// console.log(bandName);

//----------------------------object inside array-------------------------

const users = [
  { Name: "RITIK KUMAR", Uid: "21BCS1112" },
  { Name: "Vimlesh Kumar", Uid: "21BCS1110" },
  { Name: "Rishav Kumar", Uid: "21BCS1109" },
];


// for (const element of users) {
//   console.log(element);
// }

// const [{ Name: FirstName }, user2] = users;
// console.log(FirstName);
// console.log(user2);

////////--------------------------------------Function

// function HelloPrint() {
//   console.log("Happy Birthday to you");
// }

// HelloPrint();

//function expression and anomonans function

// const sum = function (num1, num2) {
//   return num1 + num2;
// };

// console.log(sum(45, 64));

//arrow function

// const sum = (num1, num2) => {
//   console.log(num1 + num2);
// };

// sum(2, 5);

//hosting

//function inside function

// let and const are block scope
// var is function scope

//rest parameter

//param destructuring

// call back function

// const calculator = (a, b, callback) => {
//   const c = callback();
//   console.log(a + b + c);
// };

// calculator(24, 64, function () {
//   return 6;
// });

// let num = [1, 2, 3, 4, 5];

// num.forEach((num, index) => {
//   console.log(`${index}:${num * 2}`);
// });

// const students = [
//   { name: "Alice", score: 80 },
//   { name: "Bob", score: 85 },
// ];
// students.forEach((student) => {
//   student.passed = student.score >= 50;
// });
// console.log(students);



// Array important callback method

// 1.forEach() method

// forEach() Method: Executes a callback function once for each array element without returning a new array.

//2.  map method

// map() Method: Creates a new array by applying a callback function to each element of the original array.

// map method
// const numbers = [3, 4, 5, 6, 1, 8];

// const numbers2 = numbers.map((number) => number * 2);

// console.log(numbers2);

// const users = [
//   { firstName: "harshit", age: "23" },
//   { firstName: "mohit", age: 21 },
//   { firstName: "nitish", age: 22 },
//   { firstName: "garima", age: 20 },
// ];

// const userName = users.map((user) => user.firstName);

// console.log(userName);

//filter method


// const evenNumber = numbers.filter((num) => num % 2 == 0);
// console.log(evenNumber);

//reduce  method

//aim: sum of all the element

// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);


// console.log(sum);

// accumulator , currentValue , return
//    0               1             1
//    1               2             3
//    3               3             6
//    6               4            10
//    10              5            15

// sort method

// "A" 65 to 90
// "a" 97 to 122

// const arr = [665444, 1, 90, 3, 5];

// arr.sort();

// console.log(arr);

// Yes, the sort() method modifies the original array by sorting its ////elements in place

// const numbers = [5, 9, 1200, 3000];
// accending
// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

// 1200 ,410
// a-b---->  790
// a-b ---> positive (greater than 0) -->b ,a
//410,1200

//a-b ---> negative
//5,9 --- -4;

// for decending

// numbers.sort((a, b) => {
//   return b - a;
// });
// console.log(numbers);

// const products = [
//   { productId: 1, productName: "p1", price: 300 },
//   { productId: 2, productName: "p2", price: 5000 },
//   { productId: 3, productName: "p3", price: 100 },
// ];

// const lowtoHight = products.slice(0).sort((a, b) => {
//   return a.price - b.price;
// });

// console.log(lowtoHight);

//find method

// const myArray = ["Hello", "cat", "dog", "lion"];

// const ans = myArray.find((string) => string.length === 3);
// console.log(ans);

// const users = [
//   { userId: 1, userName: "harshit" },
//   { userId: 2, userName: "harsh" },
//   { userId: 3, userName: "nitish" },
//   { userId: 4, userName: "mohit" },
//   { userId: 5, userName: "aaditiya" },
// ];

// const myUser = users.find((user) => user.userId === 3);

// console.log(myUser);

//every method

//callback function ---------> true /false (boolean)
//every method   --------->  true /false (boolean)

// const numbers = [1, 2, 3, 4, 56, 6];

// const ans = numbers.every((number) => {
//   return number % 2 === 0;
// });

// console.log(ans);

// const userCard = [
//   { productId: 1, productName: "mobile", price: 12000 },
//   { productId: 2, productName: "laptop", price: 22000 },
//   { productId: 3, productName: "tv", price: 15000 },
// ];

// const ans = userCard.every((item) => {
//   return item.price <= 30000;
// });

// console.log(ans);

//some method

// kya ek bhi number esa hai jo even hai
// true

// const numbers = [1, 2, 3, 5, 6, 7];
// const ans = numbers.some((num) => num % 2 == 0);
// console.log(ans);

//---------------------------------fill method---------

//fill method
// value ,start, end

// const myArray = new Array(10).fill(0);

// console.log(myArray);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// number.fill(10, 1, 4);

// console.log(number);

//------------------------------splice-------------

//splice method
// start , delete ,insert

// const myArray = ["items1", "items2", "items3", "items4"];

// myArray.splice(1, 2, "Hello");

// console.log(myArray);


//---------------- iterable ------
// jispa hum for of loop laga sake in
// string ,array are iterable

// const firstName = "Harshit";
// for (const element of firstName) {
//   console.log(element);
// }

// const items = ["item1", "item2", "item3", "item4"];
// for (const element of items) {
//   console.log(element);
// }

//array like object
// jinke pas length properties hoti hai
// aur jiko hum index se access kar sakte hai
//example: string



//-----------------------------------------------set (iterable)-------------------------

//store data
//sets also have its own method
// no index-based access
//order is not guaranted
// unique item only (no duplicates allowed)



// const numbers = new Set([1, 2, 3, 4, 4]);

// console.log(numbers);

// const Name = new Set("RITIKKUMAR");
// console.log(Name);

// const items = ["item1", "item2", "item3", "item4"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(items);

const number=new Set();
number.add(1);
number.add(2);
number.delete(1);
console.log(number);

// console.log(numbers);

// for (const element of numbers) {
//   console.log(element);
// }

//----------------------------Maps-------------

// map is an iterable
// store data in ordered fasion
// store key value pair (lie object)
//duplicate key are not allowed like object

// different  between maps and objects

///object can only have string or symbol
//as key

//in maps you can use anything as key
//like array ,number,string

// const person = {
//   firstName: "harshit",
//   age: 7,
//   1: "fggg",
// };

// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person["1"]);

// key value pair

// const person = new Map();
// console.log(person);

// person.set("FirstName", "RITIK KUMAR");
// person.set("Uid", "21BCS1112");
// person.set("Class", "15");

// console.log(person);

// //access key value pair

// console.log(person.get("FirstName"));
// console.log(person.keys());

// for (const element of person.keys()) {
//   console.log(element);
// }

// 2. Set Example: Storing Unique Visitors on a Website
// A Set is used when you need a collection of unique values.

// Scenario:
// Track unique visitors to your website based on their IP addresses.

// Create a Set to store unique visitors
// const uniqueVisitors = new Set();

// // Add IP addresses
// uniqueVisitors.add('192.168.1.1');
// uniqueVisitors.add('192.168.1.2');
// uniqueVisitors.add('192.168.1.1'); // Duplicate, won't be added

// // Check the total unique visitors
// console.log(uniqueVisitors.size); // Output: 2

// // Check if a specific IP visited
// console.log(uniqueVisitors.has('192.168.1.1')); // Output: true

// // Iterate through the Set
// for (let ip of uniqueVisitors) {
//   console.log(ip);
// }

// . Map Example: Tracking User Preferences in a Web App
// A Map is often used when you need a key-value pair collection where the keys can be of any data type.

// Scenario:
// In a shopping app, you want to store user preferences, like their selected theme and language.

// // Create a Map to store user preferences
// const userPreferences = new Map();

// // Add user preferences
// userPreferences.set('theme', 'dark'); // Key: 'theme', Value: 'dark'
// userPreferences.set('language', 'English'); // Key: 'language', Value: 'English'

// // Access preferences
// console.log(userPreferences.get('theme')); // Output: 'dark'
// console.log(userPreferences.get('language')); // Output: 'English'

// // Check if a preference exists
// console.log(userPreferences.has('theme')); // Output: true

// // Iterate through the Map
// for (let [key, value] of userPreferences) {
//   console.log(`${key}: ${value}`);
// }

// const person1 = {
//   id: 1,
//   Name: "RITIK",
// };

// const extraInfo = new Map();
// extraInfo.set(person1, { age: 21, gender: "Male" });

// console.log(extraInfo.get(person1).gender);

// clone using Object.assign

//memory

// const obj = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = { ...obj };

// const obj3 = Object.assign({}, obj);

//------------------optional chaining---------------------

// let user = {
//   firstName: "harshit",
//   // address: { houseNumber: "123" },
// };

// // console.log(user.address.houseNumber);

// console.log(user?.firstName);
// console.log(user?.firstName?.houseNumber);

//methods
// function inside method is called method

// const person = {
//   firstName: "harshit",
//   age: 8,
//   about: function () {
//     console.log(
//       `person name is ${this.firstName} and person age is ${this.age} `
//     );
//   },
// };

// person.about();

//------------------this  it represent the currect object ---------

// function userInfo() {
//   console.log(`Person name is ${this.firstName} and Person age is ${this.age}`);
// }

// const person1 = {
//   firstName: "RITIK",
//   age: "24",
//   about: userInfo,
// };
// const person2 = {
//   firstName: "Rohan",
//   age: "21",
//   about: userInfo,
// };
// const person3 = {
//   firstName: "Raskhit",
//   age: "24",
//   about: userInfo,
// };

// person1.about();
// person2.about();
// person3.about();

///////-------- call()---  apply()------    bind()  -----    ////////////

// function userInfo() {
//   console.log(
//     `First Name of the user ${this.firstName} and the age ${this.age}`
//   );
// }

// const person1 = {
//   firstName: "RITIK",
//   age: 21,
// };
// const person2 = {
//   firstName: "Roahn",
//   age: 21,
// };
// const person3 = {
//   firstName: "Roushan",
//   age: 21,
// };
// userInfo.call(person1);
// userInfo.call(person2);

// function greet(greeting, punctuation) {
//   console.log(`${greeting}, ${this.name}${punctuation}`);
// }

// const person = { name: "Ritik" };

// greet.call(person, "Hello", "!"); // Output: "Hello, Ritik!"

// The call method invokes a function immediately and allows you to specify the value of this and the arguments to pass.

// The call method sets this to the person object and passes "Hello" and "!" as arguments.

// The call method is used to call a function immediately and set the value of this to a specific object. You can also pass arguments to the function individually.
//-----------------------apply

// Simple Definition of apply Method in JavaScript:
// The apply method is used to call a function immediately and set the value of this to a specific object. The arguments are passed as an array.

// function userInfo(state, city) {
//   console.log(
//     `FirstName": ${this.firstName}, age: ${this.age} , State: ${state}, city ${city}`
//   );
// }

// const person1 = {
//   firstName: "RITIK",
//   age: "21",
//   about: userInfo,
// };

// const person2 = {
//   firstName: "Rohan",
//   age: "21",
// };

// person1.about.apply(person2, ["Bihar", "Patna"]);

// Imagine you’re building a customer support system. Each support agent has a profile, and you need to use different functions to log greetings and resolve issues for customers.
// The bind method creates a new function that allows you to set the value of this and optionally predefine some arguments. The new function can be called later.
// 1. Using call
// Real-Life Example:
// An agent greets the customer immediately.

// function greetCustomer(greeting) {
//   console.log(`${greeting}, I am ${this.name}, how can I assist you?`);
// }

// const agent = { name: "John" };
// greetCustomer.call(agent, "Hello"); // Output: "Hello, I am John, how can I assist you?"

// call is used here to greet the customer immediately with this set to the agent object.

// Using apply
// Real-Life Example:
// An agent resolves a customer’s issue and logs the resolution details.

// function resolveIssue(issue, resolution) {
//   console.log(
//     `${this.name} resolved the issue: ${issue}. Resolution: ${resolution}`
//   );
// }

// const agent = { name: "Sarah" };

// resolveIssue.apply(agent, [
//   "Payment not processed",
//   "Payment processed successfully",
// ]);
// // Output: "Sarah resolved the issue: Payment not processed. Resolution: Payment processed successfully"

// An agent creates a reusable function to follow up with customers.
// function followUp(message) {
//   console.log(`${this.name} says: ${message}`);
// }

// const agent = { name: "Alex" };

// const followUpFunction = followUp.bind(agent, "I am following up on your ticket.");
// followUpFunction(); // Output: "Alex says: I am following up on your ticket."

// bind is used to create a reusable function for follow-ups, which can be called later.

// call: Greet or assist the customer immediately with a specific agent.
// apply: Resolve an issue by passing details as an array.
// bind: Create a function that can be reused later for follow-ups or reminders.

//-------------------------method
// const person1 = {
//   firstName: "RITIK",
//   age: "21",
//   about() {
//     console.log(`firstName:${this.firstName} and age:${this.age}`);
//   },
// };

//-----------------------OOPS---------------

// proto ,prottype ,class

// let a = Object.freeze([1, 2, 3, 4, 5]);
// a[0] = 45;
// console.log(a);
