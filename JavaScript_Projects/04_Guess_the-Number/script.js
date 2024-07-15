let randomNumber = parseInt(Math.random() * 100 + 1 );

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector(".lastResult")
const lowOrhi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement('p');

let presGuess = [];
let numGuess = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
      e.preventDefault()
      const guess = parseInt(userInput.value)
      console.log(guess);
      validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter valid number')
    }else if(guess < 1){
        alert('please enter a number more than 1 ')
    }else if(guess > 100){
        alert('please enter a number less than 100')
    }else{
        presGuess.push(guess)
    }
    if (numGuess === 11) {
        displayGuess(guess)
        displayMessage(`Game Over. Random Number was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess){
if (guess === randomNumber) {
    displayMessage(`you guessed it right`)
    endGame()
}
else if(guess < randomNumber){
    displayMessage(`yout guess is TOO low`)
}
else if(guess > randomNumber){
    displayMessage(`yout guess is TOO high`)
}
}

//*Clean up method
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
lowOrhi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button');
p.innerHTML = `<button id='newGame'>start new game</button>`;
startOver.appendChild(p);
playGame = false;
newGame();
}

function newGame(){
const startNewGame = document.querySelector('#newGame')
startNewGame.addEventListener('click',function(e){
randomNumber = parseInt(Math.random() * 100 + 1 );
presGuess = []
numGuess = 1
guessSlot.innerHTML = ''
remaining.innerHTML = `${11 - numGuess}`;
userInput.removeAttribute('diasbled')
startOver.removeChild(p);
playGame = true
})
}