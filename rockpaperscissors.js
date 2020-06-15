var possiblePlays = ["Rock","Paper","Scissors"];
var playerSelection; //Stores the player Selection
let finalresult;  //Stores the winner and final result
let addhtml = document.getElementById("game");


function computerPlay(){ // Return a random play from the possible plays for the computer
    let cpuPlay = (possiblePlays[Math.floor(Math.random()*possiblePlays.length)]);
    return cpuPlay;
}


function playRound(playerSelection, computerSelection) {  // plays a round of rock-paper-scissors given 2 player inputs (Player vs Computer), returns the result
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase(); // converts player selection to allow case sensitive words
    if (playerSelection == computerSelection) {
        return "It\'s a tie!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock beats Scissors!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper beats Rock!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win! Scissors beat Paper!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock beats Scissors!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beat Paper";
    }
}


function game(){
    var i;
    let result;
    let playerRounds = 0;
    let cpuRounds = 0;
    for ( i = 0; i < 5; i++) {
        playerSelection = window.prompt("Insert your move here:");
        result = playRound(playerSelection, computerPlay());
        if (result.includes("win")){  //If outputted result has "win", add a round to the player and display result
            playerRounds++;
            console.log(result); 
        } 
        else if (result.includes("lose")){    //If outputted result has "lose", add a round to the cpu and display result
            cpuRounds++;
            console.log(result); 

        }
        else {   // If outputter result has "tie", add no rounds, just display
            console.log(result); 
        }
        addhtml.insertAdjacentHTML("beforeend", result);
        addhtml.insertAdjacentHTML("beforeend", "<p>");
    }
    // Displays the winner and final result of all 5 rounds
    if (playerRounds > cpuRounds){
        let finalresult= "You win! " + playerRounds + " to " + cpuRounds;
        console.log(finalresult);
        addhtml.insertAdjacentHTML("beforeend", finalresult);
    }
    else if (playerRounds < cpuRounds){
        let finalresult= "You lose! " + cpuRounds + " to " + playerRounds;
        console.log(finalresult);
        addhtml.insertAdjacentHTML("beforeend", finalresult);
    }
    else {
        let finalresult= "No one won, It's a TIE!! " + playerRounds + " to " + cpuRounds;
        console.log(finalresult);
        addhtml.insertAdjacentHTML("beforeend", finalresult);
    }
}

game();