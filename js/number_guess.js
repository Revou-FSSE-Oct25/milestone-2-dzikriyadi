// Pseudocode Tebak angka
// mulai

// buat object game
//     max_angka = 100
//     max_percobaan = 5
//     sisa_percobaan = 5
//     angka_random = 0
//     riwayat_tebakan = array kosong

// fungsi generate_angka_random
//     angka_random = angka acak dari 1 sampai max_angka
//     kembalikan angka_random

// fungsi reset_game
//     angka_random = panggil generate_angka_random
//     sisa_percobaan = max_percobaan
//     kosongkan riwayat_tebakan
//     tampilkan sisa_percobaan ke layar
//     kosongkan input
//     aktifkan tombol tebak
//     sembunyikan tombol reset

// fungsi cek_tebakan(tebakan_user)
//     jika tebakan_user lebih besar dari angka_random
//         hasil = "terlalu tinggi"
//     jika tebakan_user lebih kecil dari angka_random
//         hasil = "terlalu rendah"
//     selain itu
//         hasil = "benar"
//     kembalikan hasil

// ketika tombol tebak diklik
//     ambil angka dari input user
//     jika input kosong atau bukan 1 sampai 100
//         tampilkan pesan error
//         berhenti

//     kurangi sisa_percobaan
//     masukkan tebakan user ke riwayat_tebakan

//     hasil = panggil cek_tebakan(tebakan_user)
//     tampilkan hasil ke layar

//     jika hasil adalah "benar"
//         tampilkan pesan menang
//         matikan input
//         tampilkan tombol reset

//     jika sisa_percobaan sama dengan 0 dan tebakan salah
//         tampilkan pesan kalah
//         matikan input
//         tampilkan tombol reset

//     tampilkan sisa_percobaan terbaru

// ketika tombol reset diklik
//     panggil reset_game

// panggil reset_game saat game pertama kali dijalankan

// selesai

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
if (guess > gameData.randomNumber) {
  message = "Terlalu tinggi!";
} else if (guess < gameData.randomNumber) {
  message = "Terlalu rendah!";
} else {
  message = "Benar!";
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
