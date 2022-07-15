
function getComputerChoice() {
    const compchoice = ["Rock", "Paper", "Scissors"];
    let compoutput = Math.floor(Math.random()*compchoice.length);
    
    if (compoutput == 0) {
        compoutput = "Rock"
    } 
    if (compoutput == 1) {
        compoutput = "Paper"
    } 
    if (compoutput == 2) {
        compoutput = "Scissors"
    } 

}

function getPlayerChoice() {
    const playerChoice = prompt("Will you select Rock, Paper, or Scissors?");
    let playeroutput = playerChoice.toLowerCase();

    if (playeroutput == "rock") {
        playeroutput = 0
    }
    if (playeroutput == "paper") {
        playeroutput = 1
    }
    if (playeroutput == "scissors") {
        playeroutput = 2
    }


    console.log (playeroutput)

}

getComputerChoice();
getPlayerChoice()