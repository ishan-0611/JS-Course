'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////////////////////

const getJSON = function(url, errorMsg = 'Something went wrong : '){
    return fetch(`${url}`)
    .then((response) => {
        if(!response.ok) throw new Error(`${errorMsg} ${response.status}`);
        return response.json();
    })
}

const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend', msg);
}

const renderCountry = function(data, className = ''){
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
}

const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
//         console.log(response);
//         return response.json();
//     }).then(function(data){
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => {
//         if(!response.ok) throw new Error(`Country not found !! -> ${response.status}`);
//         return response.json();
//     })
//     .then((data) => {
//         renderCountry(data[0]);

//         const neighbour = data[0].borders?.[0];
//         if(!neighbour) return;

//         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//     })
//     .then((response) => {
//         if(!response.ok) throw new Error(`Country not found !! -> ${response.status}`);
//         return response.json();
//     })
//     .then((data) => renderCountry(data, 'neighbour'))
//     .catch(err => renderError(`Something went wrong :( -> ${err.message}`))
//     .finally(() => {
//         countriesContainer.style.opacity = 1;
//     })
// };

const getCountryData = function(country){
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found !!')
    .then((data) => {
        renderCountry(data[0]);

        const neighbour = data[0].borders?.[0];
        if(!neighbour) throw new Error('No Neighbouring country');

        return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`,'Country not found !!');
    })
    .then((data) => renderCountry(data, 'neighbour'))
    .catch(err => renderError(`Something went wrong :( -> ${err.message}`))
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
};

btn.addEventListener('click', function(){
    getCountryData('australia');
});