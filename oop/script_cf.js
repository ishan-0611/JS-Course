'use-strict';

// Constructor functions

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;

    // NEVER DO THIS !!
    // Creates copy, attached to each obj, too much memory usage !!
    // this.calcAge = () => console.log(2025 - this.birthYear);
}

const ishan = new Person('ishan', 2001);
console.log(ishan);

const jack = new Person('jack', 1975);
console.log(jack);

console.log(jack instanceof Person);


// Using Prototypes (instead of the above approach)
Person.prototype.calcAge = function() {
    console.log(2025 - this.birthYear);
}
ishan.calcAge();
jack.calcAge();

console.log(ishan.__proto__);
console.log(ishan.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(ishan));

Person.prototype.species = 'Homo Sapiens';
console.log(ishan.species);

console.log(ishan.hasOwnProperty('firstName'));
console.log(ishan.hasOwnProperty('species'));


console.log(ishan.__proto__.__proto__);

// new Array === []
const arr = [3, 4, 6, 3];
console.dir(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

Array.prototype.unique = function() {
    return [...new Set(this)];
}

console.log(arr.unique());

// Static methods
Person.hey = function() {
    console.log('Hey there 👋');
}
Person.hey();