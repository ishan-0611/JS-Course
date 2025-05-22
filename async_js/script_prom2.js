'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const lottery_prm = new Promise(function(resolve, reject){
    console.log('Lottery is happening....');
    setTimeout(function(){
        if(Math.random() >= 0.5) resolve('You won !!');
        else reject(new Error('You Lost !!'));
    }, 2000);

})

lottery_prm.then((res) => console.log(res))
.catch((err) => console.error(err));

// Promisifying SetTimeOut function
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000);
    })
}

wait(2).then(() => {
    console.log('Waited for 2 seconds');
    return wait(1);
}).then(() => {
    console.log('Waited for 1 more second');
})

Promise.resolve('abc').then((x) => console.log(x));
Promise.reject('abc').catch((err) => console.error(err));
