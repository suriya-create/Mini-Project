function playGame(userChoice) {
    const choices = ["stone", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw!";
    } 
    else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "stone") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
    } 
    else {
        result = "Computer Wins! 🤖";
    }

    document.getElementById("userChoice").textContent =
        "Your Choice: " + userChoice;

    document.getElementById("computerChoice").textContent =
        "Computer Choice: " + computerChoice;

    document.getElementById("winner").textContent = result;
}