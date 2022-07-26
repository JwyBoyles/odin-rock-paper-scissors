let result;
let playeroutput;
let compoutput;
let c = 0;
let p = 0;


const choiceRock = document.querySelector('#choiceRock');
const choicePaper = document.querySelector('#choicePaper');
const choiceScissors = document.querySelector('#choiceScissors');
const compText = document.querySelector('#compText');
const playerText = document.querySelector('#playerText');
const resultText = document.querySelector('#resultText');
const scoreText = document.querySelector('#scoreText');

function getComputerChoice() {
    const compchoice = ["Rock", "Paper", "Scissors"];
    let compoutput = Math.floor(Math.random()*compchoice.length);
    
    if (compoutput == 0) {
        compoutput = "Rock"
        compText.textContent = "Computer Chose Rock!";
    } 
    if (compoutput == 1) {
        compoutput = "Paper"
        compText.textContent = "Computer Chose Paper!";
    } 
    if (compoutput == 2) {
        compoutput = "Scissors"
        compText.textContent = "Computer Chose Scissors!";
    } 
    
    return compoutput;
    

}


    choiceRock.addEventListener ("click", () => {
        playeroutput = "Rock";
        compoutput = getComputerChoice();
        playerText.textContent = "You Chose Rock!";
        playRound();
    });

    choicePaper.addEventListener ("click", () => {
        playeroutput = "Paper";
        compoutput = getComputerChoice();
        playerText.textContent = "You Chose Paper!";
        playRound();
    });

    choiceScissors.addEventListener ("click", () => {
        playeroutput = "Scissors";
        compoutput = getComputerChoice();
        playerText.textContent = "You Chose Scissors!";
        playRound();
    });
   



function playRound() {
    
    if ((compoutput == "Rock") && (playeroutput == "Rock") ) {
        resultText.textContent = "You Tied!";
        result = "Tie";
    }
    else if ((compoutput == "Paper") && (playeroutput == "Rock") ) {
        resultText.textContent = "You Lose!";
        ++c;
        result = "Lose";
    }
    else if ((compoutput == "Scissors") && (playeroutput == "Rock") ) {
        resultText.textContent = "You Win!";
        ++p;
        result = "Win";
    }
    else if ((compoutput == "Rock") && (playeroutput == "Paper") ) {
        resultText.textContent = "You Win!";
        ++p;
        result = "Win";
    }
    else if ((compoutput == "Paper") && (playeroutput == "Paper") ) {
        resultText.textContent = "You Tied!";
        result = "Tie";
    }
    else if ((compoutput == "Scissors") && (playeroutput == "Paper") ) {
        resultText.textContent = "You Lose!";
        ++c;
        result = "Lose";
    }
    else if ((compoutput == "Rock") && (playeroutput == "Scissors") ) {
        resultText.textContent = "You Lose!";
        ++c;
        result = "Lose";
    }
    else if ((compoutput == "Paper") && (playeroutput == "Scissors") ) {
        resultText.textContent = "You Win!";
        ++p
        result = "Win";
    }
    else if ((compoutput == "Scissors") && (playeroutput == "Scissors") ) {
        resultText.textContent = "You Tied!";
        result = "Tie";
    } 
    
    if (p == 5) {
        resultText.textContent = "Congrats you have beat the computer! Click on a button to start a new round";
    }
    else if (c == 5){
        resultText.textContent = "You have lost to the computer :( Click on a button to start a new round"
    };
    

    scoreText.textContent = "Computer Score" + " " + c + " " + "Player Score" + " " + p;

    if (p == 5) {
        p = 0;
        c = 0;
    }
    if (c == 5) {
        p = 0;
        c = 0;
    }
} 