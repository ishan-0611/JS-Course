'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
    countriesContainer.style.opacity = 1;
}


// const whereAmI = async function (country){
//     const res = await fetch(`https://restcountries.com/v2/name/${country}`);

//     const data = await res.json();
//     console.log(data);
//     renderCountry(data[0]);
// }

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getJSON = function(url, errorMsg = 'Something went wrong : '){
    return fetch(`${url}`)
    .then((response) => {
        if(!response.ok) throw new Error(`${errorMsg} ${response.status}`);
        return response.json();
    })
}

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data
    const res = await fetch(`https://restcountries.com/v2/alpha/${dataGeo.countryCode}`);

    
    // BUG in video:
    // if (!resGeo.ok) throw new Error('Problem getting country');
    
    // FIX:
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();

    renderCountry(data);
    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } 
  catch (err) 
  {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

console.log('1. Getting Location...');
// const city = whereAmI();
// console.log(city);\

// Returning from async function
// whereAmI()
// .then((city) => console.log(`2. ${city}`))
// .catch((err) => console.log(`2. ${err.message}`))
// .finally(() => console.log('3. Finished Getting Location...'));

(async function(){
    try{
        const city = await whereAmI();
        console.log(city);
    }
    catch(err){
        console.log(`2. ${err.message}`);
    }
    console.log('3. Finished Getting Location...')
})();


// Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');