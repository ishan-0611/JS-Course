const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
],
score: '4:0',
scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
date: 'Nov 9th, 2037',
odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
};

// Challenge 1 --------------------------------------------
const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const finalPlayers = [...players1, 'Thiago', 'Coutinho', 'Peristic'];
console.log(finalPlayers);

const {team1, x:draw, team2} = game.odds;
console.log(team1, draw, team2);

function printGoals(...players)
{
    console.log('-----------------');
    console.log('Goals scored : ');
    for(let p of players)
    {
        let g = 0;
        for(let p1 of game.scored)
        {
            if(p == p1) g++;
        }
        console.log(p, g);
    }
}

printGoals('Lewandowski', 'Hummels', 'Kimmich', 'Gnarby');
printGoals('Abc', 'Lewandowski');

// Challenge 2 --------------------------------------------

console.log('--------------------------------------------');
for(const [idx, name] of game.scored.entries())
{
    console.log(`Goal ${idx+1} : ${name}`);
}

let sum = 0;
const odd_vals = Object.entries(game.odds);
for(const [name, odd] of odd_vals) sum += odd;
console.log(sum / odd_vals.length);

for(const [name, odd] of odd_vals)
{
    if(name === 'x') console.log(`Odd of draw : ${odd}`);
    else console.log(`Odd of ${game[name]} : ${odd}`);
}

const scorers = {};
for(const plr of game.scored)
{
    scorers[plr] ? scorers[plr]++ : scorers[plr] = 1;
}
console.log(scorers);

// Challenge 3 --------------------------------------------

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
  ]);
  
const eve = new Set();
const events = [];
for(const [key, value] of gameEvents)
{
    if(eve.has(value)) continue;
    else 
    {
        eve.add(value);
        events.push([key, value]);
    }
}
console.log(events);

const events2 = [...new Set(gameEvents.values())];
console.log(events2);

gameEvents.delete(64);

for(const [key, value] of gameEvents)
{
    if(key <= 45) console.log("[FIRST HALF] : " + key + value);
    else console.log("[SECOND HALF] : " + key + value);
}