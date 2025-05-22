'use-strict';

const poll = {
    question: 'What is your favorite lang?',
    options: ['0: JS', '1: C++', '2: Python', '3:Rust'],
    answers: new Array(4).fill(0)
}

poll.registerNewAns = function() {
    const val = Number(prompt('Fav coding language :'));
    this.answers[val]++;
    console.log(this.answers);
}

document.querySelector('.poll').addEventListener('click',
    poll.registerNewAns.bind(poll));