let comSq = ['rock', 'paper', 'scissor'];
let computerGuess = '';

let userScore = 0;
let comScore = 0;

let userPoint = document.querySelector('#userPoint');
let comPoint = document.querySelector('#comPoint');
let keyText = document.querySelector('#keyText');


let gameStarted = false;
document.addEventListener("keypress", () => {
  if(gameStarted == false) {
    gameStarted = true;

    randomGuess();
  }
});

let randomGuess = () => {
  keyText.innerText = '';
  let randomNum = Math.floor(Math.random() * 3);
  computerGuess = comSq[randomNum];
}


let allBoxes = document.querySelectorAll(".box");

for(let box of allBoxes) {
  box.addEventListener("click", () => {
    if(gameStarted == false) {
      return;
    }
    let userGuess = box.getAttribute("id");

    if(userGuess === computerGuess) {
      keyText.innerText = "Oppss! It's a tie";
      setTimeout(() => {
        keyText.innerText = "";
      }, 1000);

    } else if(
      (userGuess === 'rock' && computerGuess === 'scissor') ||
      (userGuess === 'paper' && computerGuess === 'rock') ||
      (userGuess === 'scissor' && computerGuess === 'paper')
    ) {
      userScore++;
      userPoint.innerText = userScore;
    } else {
      comScore++;
      comPoint.innerText = comScore;
      keyText.innerText = "Hahahah!!, stupid you lose the point";
      setTimeout(() => {
        keyText.innerText = '';
      }, 2000);
    }

    setTimeout(() => {
      randomGuess();
    }, 500);
  });
}

