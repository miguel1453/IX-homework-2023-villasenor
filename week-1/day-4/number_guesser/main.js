let guess = document.getElementById('user-guess');

function checkGuess(e) {
    e.preventDefault();

    const userGuess = guess.value;
    let output = document.getElementById('output');
    output.innerHTML = (userGuess == 6 ? 'Correct' : 'nope');
}