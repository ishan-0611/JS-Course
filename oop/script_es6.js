'use-strict';

// 1. Classes are NOT hoisted. (Function declaration ARE HOISTED)
// 2. Classes are also first-class citizens (Can pass them to fns, can return them from fns)
// 3. Classes are executed in strict mode

// Class Expression
const Pr = class {}

// Class Declaration
class Person {
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Methods will be added to the .prototype property
    calcAge(){
        console.log(2025 - this.birthYear);
    }

    get age(){
        return 2025 - this.birthYear;
    }

    // Setting a property that already exists !!!
    set fullName(name){
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else console.log('Not full name');
    }

    get fullName(){
        return this._fullName;
    }

    // Static method
    static hey(){
        console.log('Hey there 👋...');
    }
}

const ishan = new Person('ishan chaturvedi', 2001);
ishan.calcAge(); 

Person.prototype.greet = function() {
    console.log(`Hey, hiiii ${this.fullName}`);
}

ishan.greet();

// Using the getter function
console.log(ishan.age);

 
// Getters and Setters
const account = {
    owner: 'ishan',
    mov: [10, 20, -30, 40],

    get latest(){
        return this.mov.slice(-1).pop();
    },

    set latest(x){
        this.mov.push(x);
    }
}

console.log(account.latest);

account.latest = 69;
console.log(account.mov);

// Calling static method
Person.hey();


// Inheritence
class Student extends Person {
    constructor(fullName, birthYear, course){
        // Always happens first
        super(fullName, birthYear);
        this.course = course;
    }

    introduce(){
        console.log(`Hi, my name is ${this.fullName} and i study ${this.course}`);
    }

    calcAge(){
        console.log('CalcAge overridden');
    }
}

const martha = new Student('martha jones', 1995, 'CS');
martha.introduce();
martha.calcAge();