// Higher Order Functions

const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
} 

// Higher Order Function (Takes another function as input)
const transformer = function(str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    
    console.log(`Transformed using ${fn.name}`);
    console.log('--------------------------------')
}

transformer('ishan chaturvedi', upperFirstWord);
transformer('ishan chaturvedi', oneWord);

// Callback Functions in JS
const high5 = function() {
    console.log('High 5555555');
}

let names = ['Adam', 'Martha', 'John'];
names.forEach(high5);


// Functions returning other functions
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas'); 
greeterHey('Ishan');

greet('Hello')('Ishan Chaturvedi');
greet('Kaise hoooo')('Bhai');


// Using only Arrow Functions
const greet2 = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
};

const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`);

greet2('Second greet hai')('Ishan');
greet3('Third greet hai')('Ishan');