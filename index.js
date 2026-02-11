let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player={
  name:"Reen",
  chip:169
}
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let playerEl=document.querySelector("#player-el")
playerEl.textContent=player.name+":  ₹"+player.chip

function startGame() {
  isAlive = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += " " + cards[i];
  }
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want a new card? ";
  } else if (sum === 21) {
    message = "You've got Blackjack! ";
    hasBlackJack = true;
  } else {
    message = "You are out of the game! ";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let thirdCard = randomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    renderGame();
  }
}

function randomCard() {
  let num = Math.floor(Math.random() * 13) + 1;
  if (num > 10) {
    return 10;
  } else if (num === 1) {
    return 11;
  } else {
    return num;
  }
}
