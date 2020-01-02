// CONST & LET
var name = 'John'; // ES5
const nameTwo = 'Anthony'; // CONST Cannot be changed
let nameTWo = 'Vincent'; // LET Can be changed

const person = {
	name: 'Anthony',
	age: 30,
};

person.name = 'Vincent'; // Object values can be changed even though declared with const.
// Although, you cannot recreate the object.

// Same with an aray.

const nums = [1, 2, 3, 4];
nums.push(5);

// ARROW FUCNTIONS

// Regular Function
function sayHello() {
	console.log('Hello');
}

sayHello();

// Arrow Function
const helloAgain = () => {
	console.log('Hello again');
};

helloAgain();

// If an arrow function only contains one line of code, you don't require curly braces.
// With Arrow Functions, with only ONE parameter, or argument, you don't need paranthesis.

// Without Curly Braces
const helloOneLine = () => console.log('Hello One Line');
helloOneLine();

// With only 1 parameter
const oneParam = name => console.log('Hello, ' + name);
oneParam('Anthony');

// Template Literals
const tempLit = name => console.log(`Hello again, ${name}`);
tempLit('Anthony');

// FOREACH
// A way to loop through an array
// FOREACH takes in a Function, below I am using an arrow function.

const fruits = ['apples', 'oranges', 'grapes'];
fruits.forEach((fruit, index) => console.log(fruit));

// MAP
// Almost same as forEach except it returns an array.
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
console.log(singleFruit);
// We use MAP in React to loop through what are called Lists.

// FILTER
// Filter, while also similar to forEach and Map, Filter returns an array with things filtered out.
// Often this is used in State Managers like Redux or even the Context API.
// The reason FIlter is used a lot in React is because State is immutable, you can't directly change it.
// Filter allows you to create a new Array, or a copy of one, with things filtered out.

const people = [
	{ id: 1, name: 'Anthony' },
	{ id: 2, name: 'Debra' },
	{ id: 3, name: 'Vincent' },
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// SPREAD
// SPREAD I think is just opposite of Filter.
// The Spread operator allows you to make a new copy of an array, but also allows you to add values into it.
// Whereas with filter, you can only remove or FILTER things out of it instead of in.

const arr = [1, 2, 3];
const arr2 = [...arr, 4];

console.log(arr2);

// Can also be done with objects as well.

const anotherPerson = {
	name: 'Anthony',
	age: 30,
};

const newPerson = {
	...anotherPerson,
	email: 'Anthony@gmail.com',
};

// Using the Spread operator, I was able to make a copy of my existing object, and add a new key/value pair to it.
console.log(newPerson);

// You can also mix the Spread Operator with something like Filter.
const arr3 = [...arr.filter(num => num !== 2)];
console.log(arr3);

// DESTRUCTURING
// Destructuring is something else you will use A LOT in React.
// It allows you to pull values out of an array or object.

const profile = {
	userName: 'Anthony Eriksen',
	address: {
		street: '123 Main St',
		city: 'Boise',
	},
	hobbies: ['Code', 'Music', 'Woodworking'],
};

console.log(profile.userName);

// Creating a variable using curly braces, you can pull a value from an array or object, see below.

const { userName, address, hobbies } = profile;
console.log(userName, address, hobbies[0]);

// What is you wanted just the street inside of the address?
// Create a new destructuring variable(?)

const { street } = profile.address;
console.log(street);

// CLASSES
// a React component class is just an ES6 Class.
// Inside a class you can have properties and methods.
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		return `Hello, my name is ${this.name} and I am ${this.age}`;
	}
}

const person10 = new Person('Anthony', 30);
const person11 = new Person('Vincent', 1);

console.log(person10.age);
console.log(person10.greet());

// SUBCLASSES
// Subclasses are ways you can Extend a class.

class Customer extends Person {
	constructor(name, age, balance) {
		super(name, age);
		this.balance = balance;
	}

	info() {
		return `${this.name} owes ${this.balance}`;
	}
}

const customer1 = new Customer('Debra', 29, 300);
console.log(customer1.name);
console.log(customer1.info());

// MODULES
// Modules are like SASS files(?) allowing you to keep different code or react components in different filters, and import them.
// Helps to keep code organized and clean. Easier to read and understand.
// Webpack is a Module Bundler
// Babel allows you to use ES6 modules
// React actually uses the Webpack module bundler, and babel. Even with the React app CLI.
