let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof(guess));

    if(!guess)
    {
        document.querySelector('.message').textContent = "No number entered.";
    }
    else if(guess === secretNumber)
    {
        document.querySelector('.message').textContent = "Correct number.";
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore)
        {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } 
    else if(guess > secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = "You Lost.";
            document.querySelector('.score').textContent = 0;
        }
    }
    else if(guess < secretNumber)
    {
        if(score > 1)
        {
            document.querySelector('.message').textContent = "Too low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else
        {
            document.querySelector('.message').textContent = "You Lost.";
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});