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