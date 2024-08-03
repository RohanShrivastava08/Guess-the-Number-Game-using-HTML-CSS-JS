document.addEventListener('DOMContentLoaded', () => {
    const guessInput = document.getElementById('guessInput');
    const submitGuess = document.getElementById('submitGuess');
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const popupRestart = document.getElementById('popupRestart');
    const message = document.getElementById('message');
    const guessCount = document.getElementById('guessCount');

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessCounter = 0;

    function resetGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guessCounter = 0;
        guessInput.value = '';
        message.textContent = '';
        guessCount.classList.add('hidden');
        popup.classList.add('hidden');
    }

    function handleGuess() {
        const userGuess = Number(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.textContent = 'Please enter a number between 1 and 100.';
            message.style.color = 'red';
        } else {
            guessCounter++;
            if (userGuess === randomNumber) {
                popupMessage.textContent = `Congratulations! You guessed the number in ${guessCounter} attempts!`;
                guessCount.textContent = `Number of guesses: ${guessCounter}`;
                guessCount.classList.remove('hidden');
                popup.classList.remove('hidden');
            } else if (userGuess < randomNumber) {
                message.textContent = 'Too low! Try again.';
                message.style.color = 'blue';
            } else {
                message.textContent = 'Too high! Try again.';
                message.style.color = 'blue';
            }
            guessCount.textContent = `Number of guesses: ${guessCounter}`;
            guessCount.classList.remove('hidden');
        }
    }

    submitGuess.addEventListener('click', handleGuess);
    popupRestart.addEventListener('click', resetGame);
});
