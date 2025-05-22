'use-strict';

// Challenge 1 --------------------------------------------------------
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.acc = function() {
    this.speed += 10;
    console.log(`New Speed of ${this.make} : ${this.speed}`);
}

Car.prototype.decc = function() {
    this.speed -= 5;
    console.log(`New Speed of ${this.make} : ${this.speed}`);
}

const Honda = new Car('Honda', 80);
const Maruti = new Car('Maruti', 60);

Honda.acc();
Honda.acc();
Maruti.decc();
Maruti.decc();


// Challenge 2 --------------------------------------------------------
const car2 = function(make, speed){
    this.make = make;
    this.speed = speed;
}

const ev = function(make, speed, charge){
    car2.call(this, make, speed);
    this.charge = charge;
}

// For linking prototypes
ev.prototype = Object.create(car2.prototype);

ev.prototype.battery = function(chargeTo){
    this.charge = chargeTo;
}

ev.prototype.acc2 = function(){
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} is going at ${this.speed} and charge ${this.charge}`);
}


const tesla = new ev('Tesla', 120, 50);
tesla.battery(200);
tesla.acc2();
tesla.acc2();