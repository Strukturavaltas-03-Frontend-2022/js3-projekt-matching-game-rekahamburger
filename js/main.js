//Én most ennyire voltm képes:( a Js nem működik, de már nincs lelkierőm újabb 10 órát ülni a gép elött. 


let counter = 0;
let timeout;
let timer_on = 0;

function timedCount() {
  document.getElementById("demo").value = counter;
  counter++;
  timeout = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_on) {
    timer_on = 1;
    timedCount();
  }
}

function stopCount() {
  clearTimeout(timeout);
  timer_on = 0;
}



/*

const cards = document.querySelectorAll('.flip-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
  	if (lockBoard) return;
  	if (this === firstCard) return;
  
    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
     return;
   }

   secondCard = this;

   checkForMatch();
 }

 function checkForMatch() {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
     disableCards();
     return;
   }

   unflipCards();
 }

 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);
   
   resetBoard();
 }

 function unflipCards() {
  lockBoard = true;
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
     
     
     resetBoard();
   }, 1500);
 }
 
  function resetBoard() {
   [hasFlippedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
 }
 
 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));



*/


