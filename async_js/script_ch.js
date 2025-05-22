'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////////////////////\

// API -> https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

const renderCountry = function(data, className = ''){
    const html = `
    <article class="country ${className}">
        <div class="country__data">
            <h3 class="country__name">${data.city}</h3>
            <h4 class="country__region">${data.countryName}</h4>
        </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
}

function where(lat, lng){
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.countryName}`);
        renderCountry(data);
    })
    .catch(err => renderError(`Something went wrong :( -> ${err.message}`))
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
}

where(52.508, 13.381);