const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
    thu: { open: 12, close: 22,},
    fri: { open: 11, close: 23,},
    sat: { open: 0, close: 24,}, },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be 
            delivered to ${address} at ${time}`);
    },        

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza : function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient, otherIngredients);
    }
};

restaurant.orderDelivery({
    starterIndex: 1, 
    mainIndex: 1, 
    time: '12:30', 
    address: 'Kanpur'
});

// ----------------------------------------------------------
// Destructuring arrays

const arr = [1, 2, 3];
// Destructuring assignment
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
const [first1, , third1] = restaurant.categories;
console.log(first, second);
console.log(first1, third1);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 3, [1, 15, 6], 5];
const [i, ,[a, b, c], e, f=1] = nested;

console.log(i, a, b, c, e, f);

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[x1, rating], [x2, ratingsCount]] = ratings;
console.log(rating, ratingsCount);
// ----------------------------------------------------------

// ----------------------------------------------------------
// Destructuring objects

const {name: rest_name, openingHours: openhr, categories: cat} = restaurant;
console.log(rest_name, openhr ,cat);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);
// ----------------------------------------------------------


// ----------------------------------------------------------
// Mutating variables
let a1 = 9;
let b1 = 7; 

const obj = {a1: 10, b1: 8, c1: 12};

// Cannot use const/let so wrap it in parentheses
({a1, b1} = obj);
console.log(a1, b1);

// Nested objects
const {fri: {open: open1, close: close1}} = openhr;
console.log(open1, close1);


// Spread Operator
const arr2 = [7, 8, 9];
const newArr = [1, 2, arr2[0], arr2[1], arr2[2]];

const newArr2 = [1, 2, ...arr2];
console.log(newArr2);
console.log(...newArr2);

// ----------------------------------------------------------
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Shallow copy of arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 or more arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

// Iterables : Arrays, Strings, Maps, Sets : Not Objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// ----------------------------------------------------------
// const ingredients = [prompt('Enter ing 1 : '), prompt('Enter ing 2 : '), prompt('Enter ing 3 : ')];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
// ----------------------------------------------------------

// ----------------------------------------------------------
// Objects
const newRestaurant = {...restaurant, founder : 'Ishan', founded : '2025'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'New_name';
console.log(restaurant.name);
console.log(restaurantCopy.name);

// ----------------------------------------------------------
// Spread (Right side ...)
const arr3 = [1, 2, ...[3, 4]];

// Rest (Left side ...)
const [a2, b2, ...others] = [1, 2, 3, 4, 5]

console.log(a2, b2, others);

const [pizza, , rissoto, ...other_foods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, rissoto, other_foods);

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// Functions
const add = function (...numbers) {
    let res = 0;
    for(let i of numbers) res += i;
    console.log(res);
}

add(2, 3);
add(3, 4, 5, 2, 3); 

const arrr = [1, 2, 3];
add(...arrr);
// ----------------------------------------------------------
restaurant.orderPizza('Olives', 'Paprika', 'Mushrooms');
// ----------------------------------------------------------

const rest1 = {
    name: 'Capri',
    guests: 20
}

const rest2 = {
    name: 'Capri2',
    owner: 'Ishan'
}

// OR Assignment operator
rest1.guests ||= 10;
rest2.guests ||= 10;

// Nullish assignment
rest1.owner ??= 'Ishan_new';

rest2.owner &&= 'ANONYMOUS';

console.log(rest2.guests);
console.log(rest1.owner);
console.log(rest2.owner);

// ----------------------------------------------------------
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const [item, el] of menu2.entries())
{
    console.log(`${item+1} : ${el}`);
}
// ----------------------------------------------------------

if(restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

// Optional Chaining
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of days)
{
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`At day ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order ?. (0, 1) ?? 'Method dne');
console.log(restaurant.abc ?.() ?? 'Method dne');

// Arrays
const users = [{name:'Ishan', email:'ishan@gmail.com'}];
console.log(users[0]?.name);
console.log(users[0]?.job ?? 'No Job');

// ----------------------------------------------------------

// Looping over Objects

// Property Names
const properties = Object.keys(restaurant.openingHours);
for(const day of properties) console.log(day);

// Property Values
const values = Object.values(restaurant.openingHours);
console.log(values);
