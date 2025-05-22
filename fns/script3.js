'use-strict';
// Call and Apply methods

const emirates = {
    airline: 'emirates',
    iataCode: 'LH',
    bookings: [],
    book: function(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,name
        })
    }
}

emirates.book(123, 'ishan');
emirates.book(234, 'ishan2');
console.log(emirates.bookings);

const emirates2 = {
    airline: 'emirates2',
    iataCode: 'LM',
    bookings: []
}

const book = emirates.book; 

// Does not work because This points to original emirates object
// book(23, 'ishan');

book.call(emirates2, 23, 'ishan3');
console.log(emirates2.bookings);

book.call(emirates, 24, 'ishan4');
console.log(emirates.bookings);


// Apply method
const flightData = [583, 'ishan5'];
book.apply(emirates2, flightData);
console.log(emirates2.bookings);


// Bind method
const bookem2 = book.bind(emirates2);
bookem2(27, 'ishan6');

const bookem2_23 = book.bind(emirates, 23);
bookem2_23('ishan7');


// With Event Listeners
emirates.planes = 300;
emirates.buyPlane = function() {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', 
    emirates.buyPlane.bind(emirates));


// Partial Application
const addTax = (tax, rate) => rate + rate * tax;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));


// Making this a higher order function
const tax = function(rate) {
    return function() {
        return rate + rate * 0.23;
    }
}
console.log(tax(100)());


// Immediately invoked function expressions (IIFE)
const runOnce = function() {
    console.log('This will never run again');
};

(function(){
    console.log('abc');
})();

(function(){
    console.log('ab2');
})();

(() => console.log('abbbbb'))();


// Closures
const secureBooking = function() {
    let passCount = 0;
    
    return function() {
        passCount++;
        console.log(passCount);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

// Closure examples

let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}
g();
f();

(function() {
    header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function() {
        header.style.color = 'blue';
    });
})();