var possiblePlays = ["Rock","Paper","Scissors"];
var playerSelection; //Stores the player Selection
let finalResult = document.querySelector("#finalresult");
let logs = document.getElementById("logs");
let images = [ 'images/Rock.jpg','images/Paper.jpg','images/Scissors.jpg'];
let userScore = document.querySelector("#USERscore");
let cpuScore = document.querySelector("#CPUscore");
let userImg = document.querySelector("#userimg");
let cpuImg = document.querySelector("#cpuimg");
const buttons = document.querySelectorAll('button');



function computerPlay(){ // Return a random play from the possible plays for the computer
    let cpuPlay = (possiblePlays[Math.floor(Math.random()*possiblePlays.length)]);
    return cpuPlay;
}

// Animates the rock/paper/scissor images simulating real life and swapping to the final chosen one
function animateImage(playerSelection, computerSelection){
        userImg.classList.add("wobble-ver-left");
        cpuImg.classList.add("wobble-ver-right");
        userImg.addEventListener("animationend", () => {
            userImg.classList.remove("wobble-ver-left");
            cpuImg.classList.remove("wobble-ver-right");
            userImg.setAttribute('src', "images/"+playerSelection+".jpg");
            cpuImg.setAttribute('src', "images/"+computerSelection+".jpg");
          });
    }


function updateScore(winner){ // updates the score on the page given the winner
    if (winner === "user") {
        let newScore = parseInt(userScore.innerText);
        userScore.innerText = newScore + 1;
    }
    else if (winner === "cpu") {
        let newScore = parseInt(cpuScore.innerText);
        cpuScore.innerText = newScore + 1;
    }
}


// Toggles the buttons to disable/enable when the game ends/restarts
function disableButtons(){
    document.getElementById("Rock").disabled = true;
    document.getElementById("Paper").disabled = true;
    document.getElementById("Scissors").disabled = true;
}
function enableButtons(){
    document.getElementById("Rock").disabled = false;
    document.getElementById("Paper").disabled = false;
    document.getElementById("Scissors").disabled = false;
}


function playRound(playerSelection, computerSelection) {  // plays a round of rock-paper-scissors given 2 player inputs (Player vs Computer), returns the result
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1).toLowerCase(); // converts player selection to allow case sensitive words
    userImg.setAttribute('src', images[0]);
    cpuImg.setAttribute('src', images[0]);
    animateImage(playerSelection, computerSelection); // playing animation for given selection
    if (playerSelection == computerSelection) {
        return "It\'s a tie!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        updateScore("user");
        return "You win! Paper beats Rock!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        updateScore("cpu");
        return "You lose! Rock beats Scissors!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        updateScore("cpu");
        return "You lose! Paper beats Rock!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        updateScore("user");
        return "You win! Scissors beat Paper!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        updateScore("user");
        return "You win! Rock beats Scissors!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        updateScore("cpu");
        return "You lose! Scissors beat Paper";
    }
}

function restart(){ //clears all the game session variables
    userScore.innerText = 0;
    cpuScore.innerText = 0;
    finalResult.innerText = "";
    logs.innerHTML = '';
    cpuImg.style.opacity= 1;
    userImg.style.opacity= 1;
    userImg.setAttribute('src', images[0]);
    cpuImg.setAttribute('src', images[0]);
    enableButtons();
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
        if (button.id=="restart"){  // reset logs and score
            restart();
        }
        else  {
            result = playRound(button.id, computerPlay()); // appends logs at the end
            logs.insertAdjacentHTML("beforeend", result);
            logs.insertAdjacentHTML("beforeend", "<br>");
            if (parseInt(userScore.innerText)>=5){
                cpuImg.style.opacity= 0.3;
                finalResult.innerText= "You won!!!  " + userScore.innerText + " to " + cpuScore.innerText;
                disableButtons();
            }
            else if (parseInt(cpuScore.innerText)>=5){
                userImg.style.opacity= 0.3;
                finalResult.innerText= "You lost!!!  " + userScore.innerText + " to " + cpuScore.innerText;
                disableButtons();
            }
        }
    });
  });