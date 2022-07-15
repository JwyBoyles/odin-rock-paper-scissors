
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
    
    let playeroutput2 = playerChoice.toLowerCase().slice(1);
    let playeroutput1 = playerChoice.charAt(0).toUpperCase();
    let playeroutput = playeroutput1 + playeroutput2;

    console.log (playeroutput)

}

getComputerChoice();
getPlayerChoice()