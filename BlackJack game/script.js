let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message;

let textMessage = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

   function startgame() {
   	if(sum <= 20) {
	message = "do you want to draw a new card?";

} else if(sum === 20) {
	message = "You've got blackjack!";
	hasBlackjack = true;
} else {
	message = "You lost! try again later.";
	isAlive = false;
}
   textMessage.textContent = message;
   sumEl.textContent += sum;
   cardsEl.textContent += firstCard + ", " +  secondCard;
   }
