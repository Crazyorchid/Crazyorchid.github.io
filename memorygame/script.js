const cards = document.querySelectorAll('.card');
// css class for different card image
const CARD_TECHS = [
  'html5',
  'css3',
  'js',
  'sass',
  'nodejs',
  'react',
  'linkedin',
  'heroku',
  'github',
  'aws'
];

// only list out some of the properties,
// add more when needed


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const game = {
  score: 0,
  level: 1,
  timer: 60,
  timerDisplay: null,
  scoreDisplay: null,
  levelDisplay: null,
  timerInterval: null,
  startButton: null
  
  // and much more
};

setGame();

/*******************************************
/     game process
/******************************************/

function setGame() {
  
  // register any element in your game object
}

function startGame() {
  

  resetBoard();
  updateTimerDisplay();
  


  var game = document.getElementById('game');
  var instruction = document.getElementById('instruction')
  // get the current value of the clock's display property
  var displaySetting = game.style.display;

  // also get the clock button, so we can change what it says
  var gameButton = document.getElementById('new-game');

  // now toggle the clock and the button text, depending on current state
  game.style.display = 'block';
  instruction.style.display = 'none';

}

function checkForMatch() {

  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
}

function handleCardFlip() {
  if(lockBoard)return;
  if(this === firstCard)return;
  this.classList.add('card--flipped');

  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;

   //console.log({hasFlippedCard, firstCard});
  }else {
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();

    
  }
  
  
}

function checkForMatch(){
  if (firstCard.dataset.tech === secondCard.dataset.tech){
    firstCard.removeEventListener('click', handleCardFlip);
    secondCard.removeEventListener('click', handleCardFlip);
    
    resetBoard();
    updateScore();
    
    
  }else{
    lockBoard = true;

    setTimeout(()=>{
    firstCard.classList.remove('card--flipped');
    secondCard.classList.remove('card--flipped');

    resetBoard();
  }, 1500);
}
}
//prevent from staying flipped after double clicked
function resetBoard(){
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function sheffle(){
  cards.forEach(card=>{
    let randomPos = Math.floor(Math.random()*4);
    card.style.order = randomPos;
  });
})();



function nextLevel() {}

function handleGameOver() {}

/*******************************************
/     UI update
/******************************************/
function updateScore() {
    const score = document.querySelectorAll('.game-stats__score--value');
    console.log(score); 
    game.score++;
	  document.getElementById("score").innerHTML = game.score; 
    console.log(game.score);
}

function updateTimerDisplay() {
  console.log("I have been called");
  
  

  
}



/*******************************************
/     bindings
/******************************************/
function bindStartButton() {}

function unBindCardClick(card) {}

function bindCardClick() {}

cards.forEach(card => card.addEventListener('click', handleCardFlip));
