// player pilih batu / gunting / kertas
// komputer pilih secara random
// ada hasil menang / kalah / seri
// ada score sederhana (player vs komputer)

// datanya apa aja

const gameData = {
  choices: ["rock", "paper", "scissors"],
  playerScore: 0,
  computerScore: 0,
};

// membuat element dom untuk iteraksi html

const buttons = document.querySelectorAll(".choices button");
const resultText = document.getElementById("resultText");
const scoreText = document.getElementById("scoreText");

// Fungsigamenya

// pilihan random komputer
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * gameData.choices.length);
  return gameData.choices[randomIndex];
}

// cek pemenang
function checkWinner(player, computer) {
  let result = "";

  switch (true) {
    case player === computer:
      result = "Seri!";
      break;

    case player === "rock" && computer === "scissors":
    case player === "paper" && computer === "rock":
    case player === "scissors" && computer === "paper":
      result = "Player Menang!";
      gameData.playerScore++;
      break;

    default:
      result = "Komputer Menang!";
      gameData.computerScore++;
  }

  return result;
}

// update score ke layar
function updateScore() {
  scoreText.textContent = `Player: ${gameData.playerScore} | Komputer: ${gameData.computerScore}`;
}

// add event ke html buttonnya

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const playerChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();

    const winner = checkWinner(playerChoice, computerChoice);

    resultText.textContent = `
        Player pilih ${playerChoice}, 
        Komputer pilih ${computerChoice}.
        ${winner}
      `;

    updateScore();
  });
});
