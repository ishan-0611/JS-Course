'use-strict';

const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 200 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    bookings.push(booking);
}

createBooking('LH1023');
createBooking('LH1024', 300, 8000);
createBooking('LH1025', 30);
createBooking('LH1026', undefined, 9000);

console.log(bookings);


const flight = 'LH234';
const ishan = {
    name: 'Ishan Chaturvedi',
    passport: 1234,
    age: 23
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 1234) console.log('Checked in.');
    else console.log('Wrong passport');
}

checkIn(flight, ishan);
console.log(flight);
console.log(ishan);


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000);
}

newPassport(ishan);
console.log(ishan);
checkIn(flight, ishan);
