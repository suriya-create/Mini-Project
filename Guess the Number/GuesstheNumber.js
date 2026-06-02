let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    attempts++;
    document.getElementById("attempts").textContent =
        "Attempts: " + attempts;

    if (guess === secretNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
    } else if (guess < secretNumber) {
        message.textContent = "📉 Too low! Try again.";
    } else {
        message.textContent = "📈 Too high! Try again.";
    }
}