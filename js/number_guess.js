// object untuk menyimpan data game
const gameData = {
  maxNumber: 100,
  maxAttempts: 5,
  randomNumber: 0,
  attemptsLeft: 5,
  guessHistory: [],
};

//
// AMBIL ELEMENT MENGGUNAKAN DOM

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const resultText = document.getElementById("resultText");
const attemptInfo = document.getElementById("attemptInfo");

// FUNGIS GAMENYA

// generate angka random
function generateRandomNumber() {
  return Math.floor(Math.random() * gameData.maxNumber) + 1;
}

// reset game
function resetGame() {
  gameData.randomNumber = generateRandomNumber();
  gameData.attemptsLeft = gameData.maxAttempts;
  gameData.guessHistory = [];

  resultText.textContent = "";
  resultText.className = "result";
  attemptInfo.textContent = `Sisa percobaan: ${gameData.attemptsLeft}`;

  guessInput.value = "";
  guessInput.disabled = false;
  guessBtn.disabled = false;

  resetBtn.classList.add("hidden");
}

// cek hasil tebakan
function checkGuess(guess) {
  let message = "";

  switch (true) {
    case guess > gameData.randomNumber:
      message = "Terlalu tinggi!";
      break;

    case guess < gameData.randomNumber:
      message = "Terlalu rendah!";
      break;

    default:
      message = `🎉 Benar! Angkanya adalah ${gameData.randomNumber}`;
  }

  return message;
}

// fungsi ketika tombol tebak di klik

guessBtn.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);

  // validasi input
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    resultText.textContent = "Masukkan angka 1 - 100!";
    resultText.classList.add("error");
    return;
  }

  // ngurangin nyawa setiap nebak
  gameData.attemptsLeft--;

  gameData.guessHistory.push(userGuess);

  const resultMessage = checkGuess(userGuess);
  resultText.textContent = resultMessage;

  // kalo menang
  if (userGuess === gameData.randomNumber) {
    resultText.classList.add("success");
    guessInput.disabled = true;
    guessBtn.disabled = true;
    resetBtn.classList.remove("hidden");
  }
  // kalo kalah
  else if (gameData.attemptsLeft === 0) {
    resultText.textContent = `Game Over! Angkanya adalah ${gameData.randomNumber}`;
    resultText.classList.add("error");
    guessInput.disabled = true;
    guessBtn.disabled = true;
    resetBtn.classList.remove("hidden");
  }

  attemptInfo.textContent = `Sisa percobaan: ${gameData.attemptsLeft}`;
  guessInput.value = "";
});

resetBtn.addEventListener("click", resetGame);

resetGame();
