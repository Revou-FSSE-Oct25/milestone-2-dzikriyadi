//data gambar kartu yang dibutuhkan

const board = document.getElementById("board");
const infoText = document.getElementById("infoText");

const symbols = ["🍎", "🍌", "🍇", "🍉", "🍓", "🍒"];

let cards = [];
let openedCards = [];
let matchedGroup = 0;

/////Fungsi gamenya

function setupGame() {
  cards = [];
  openedCards = [];
  matchedGroup = 0;
  infoText.textContent = "";

  // masukin simbol 3 kali
  symbols.forEach(function (symbol) {
    cards.push(symbol);
    cards.push(symbol);
    cards.push(symbol);
  });

  // randomin kartu
  cards.sort(function () {
    return 0.5 - Math.random();
  });

  board.innerHTML = "";

  // even menamiplkan kartu pakai js
  cards.forEach(function (symbol) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = symbol;
    card.dataset.symbol = symbol;

    card.addEventListener("click", function () {
      openCard(card);
    });

    board.appendChild(card);
  });
}

//fungsi ketika kartu di klik dan terbuka
function openCard(card) {
  if (card.classList.contains("open")) return;
  if (card.classList.contains("matched")) return;
  if (openedCards.length === 3) return;

  card.classList.add("open");
  openedCards.push(card);

  if (openedCards.length === 3) {
    checkMatch();
  }
}

function checkMatch() {
  const s1 = openedCards[0].dataset.symbol;
  const s2 = openedCards[1].dataset.symbol;
  const s3 = openedCards[2].dataset.symbol;

  if (s1 === s2 && s2 === s3) {
    openedCards.forEach(function (card) {
      card.classList.add("matched");
    });

    matchedGroup++;
    openedCards = [];

    if (matchedGroup === symbols.length) {
      infoText.textContent = "Selamat, Semua kartu ditemukan!";
    }
  } else {
    setTimeout(function () {
      openedCards.forEach(function (card) {
        card.classList.remove("open");
      });
      openedCards = [];
    }, 800);
  }
}

setupGame();
