'use-strict';

const personProto = {
    calcAge(){
        console.log(2025 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(personProto);

const studentProto = Object.create(personProto);
studentProto.init = function(firstName, birthYear, course) {
    personProto.init.call(this, firstName, birthYear);
    this.course = course;
}

const jay = Object.create(studentProto);
jay.init('jay', 2001, 'CS');
jay.calcAge();