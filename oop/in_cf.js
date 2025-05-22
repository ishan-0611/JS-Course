'use-strict';

const Person = function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function() {
    console.log(2025 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    Person.call(this, firstName, birthYear);
    this.course = course;
}

// Linking ProtoTypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`Hi, my name is ${this.firstName}, studying ${this.course}`);
}

const mike = new Student('mike', 1997, 'CS');
mike.introduce();

// Can call because of inheritence
mike.calcAge();