const coin = document.getElementById("coin");
const tossBtn = document.getElementById("tossBtn");
const result = document.getElementById("result");

tossBtn.addEventListener("click", () => {
    tossBtn.disabled = true;
    result.textContent = "Flipping...";

    const randomResult = Math.random() < 0.5 ? "Heads" : "Tails";

    coin.classList.remove("flip-heads", "flip-tails");

    void coin.offsetWidth; // restart animation

    if (randomResult === "Heads") {
        coin.classList.add("flip-heads");
    } else {
        coin.classList.add("flip-tails");
    }

    setTimeout(() => {
        result.textContent = `Result: ${randomResult}`;
        tossBtn.disabled = false;
    }, 2000);
});