let compoutput;
let playeroutput;
let result;

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
    
    return compoutput;


}

function getPlayerChoice() {
    const playerChoice = prompt("Will you select Rock, Paper, or Scissors?");
    
    let playeroutput2 = playerChoice.toLowerCase().slice(1);
    let playeroutput1 = playerChoice.charAt(0).toUpperCase();
    let playeroutput = playeroutput1 + playeroutput2;

    return playeroutput;

}




function playRound() {
    const computerpick = getComputerChoice();
    const playerpick = getPlayerChoice();
    if ((computerpick == "Rock") && (playerpick == "Rock") ) {
        console.log ("Tie");
        result = "Tie";
    }
    else if ((computerpick == "Paper") && (playerpick == "Rock") ) {
        console.log ("Lose");
        result = "Lose";
    }
    else if ((computerpick == "Scissors") && (playerpick == "Rock") ) {
        console.log ("Win");
        result = "Win";
    }
    else if ((computerpick == "Rock") && (playerpick == "Paper") ) {
        console.log ("Win");
        result = "Win";
    }
    else if ((computerpick == "Paper") && (playerpick == "Paper") ) {
        console.log ("Tie");
        result = "Tie";
    }
    else if ((computerpick == "Scissors") && (playerpick == "Paper") ) {
        console.log ("Lose");
        result = "Lose";
    }
    else if ((computerpick == "Rock") && (playerpick == "Scissors") ) {
        console.log ("Lose");
        result = "Lose";
    }
    else if ((computerpick == "Paper") && (playerpick == "Scissors") ) {
        console.log ("Win");
        result = "Win";
    }
    else if ((computerpick == "Scissors") && (playerpick == "Scissors") ) {
        console.log ("Tie");
        result = "Tie";
    }
}



function game() {

    let playerscore = 0;
    let compscore = 0;

    for (let i = 0; i < 5; i++) {
        playRound ()
        if (result == "Tie" ) {
            console.log ("Draw!" + " " + "Player" + playerscore + " " + "Computer" + compscore)
        }
        else if (result == "Lose"){
            console.log ("Computer Wins Round!" + " " + "Player" + playerscore + " " + "Computer" + ++compscore)
        }
        else if (result == "Win"){
            console.log ("Player Wins Round!" + " " + "Player" + ++playerscore + " " + "Computer" + compscore)
        }
     }
     
     if (playerscore > compscore) {
        console.log("Good Job You Beat the Computer!")
     }
     else if (compscore > playerscore) {
        console.log("The Computer won try again next time :(")
     }
     else {
        console.log("The game ended in a draw")
     }
}

game();