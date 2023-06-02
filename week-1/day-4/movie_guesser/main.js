
const movies = [
    { title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic' },
    { title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer' },
    { title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger' },
    { title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon' },
    { title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...' },
    { title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow' },
    { title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka' },
    { title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo' },
    { title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...' },
    { title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands' },
    { title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position' }
]


let userGuess = document.getElementById('guess');

let num = 0;
document.addEventListener("DOMContentLoaded", pickMovie());

function pickMovie() {
    num = Math.floor(Math.random() * 11)
    let clueDiv = document.getElementById('clue');
    clueDiv.innerHTML = movies[num].explanation;

}

function checkGuess() {
    const guess = userGuess.value;
    console.log(guess);
    userGuess.value = ' ';

    let result = document.getElementById('result');
    if (guess === movies[num].title) {
        result.innerHTML = "correct";

        let newBtn = document.createElement('button');
        newBtn.innerHTML = 'Play Again';
        newBtn.className = 'btn btn-success'
        newBtn.onclick = () => {
            pickMovie();
            parent.removeChild(newBtn);
            result.innerHTML = ' ';
            let hintDiv = document.getElementById('hint');
            hintDiv.innerHTML = ' ';
        };
        let parent = document.getElementById('card');
        parent.appendChild(newBtn)

    } else {
        result.innerHTML = "wrong! try again";

    }
}

function showHint() {
    const hintDiv = document.getElementById('hint');
    hintDiv.innerHTML = 'Hint: ' + movies[num].hint;
}