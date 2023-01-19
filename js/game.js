const params = new URLSearchParams(document.location.search);
const name = params.get("name");

const nameTag = document.getElementById("nameTag");
nameTag.innerText = ("Lets play " + name + "!");
const announcement = document.getElementById("announcement");

const choiceArray = ["Rock", "Paper", "Scissors"];
let playerChoice;
let opponentChoice;
let opponentScore = 0
let playerScore = 0;
const pointText = document.getElementById("pointText");
const scoreText = document.getElementById("scoreText");
const buttonContainer = document.getElementById("buttonContainer");
const playerChoicePara = document.getElementById("playerChoice");
const opponentChoicePara = document.getElementById("opponentChoice");
const playerScoreContainer = document.getElementById("playerScoreContainer");
const opponentScoreContainer = document.getElementById("opponentScoreContainer");

buttonContainer.addEventListener("click", event =>{
    switch (event.target.id){
        case "rockBtn":
            playerChoice = 0;
            break;
        case "paperBtn":
            playerChoice = 1;
            break;
        case "scissorsBtn":
            playerChoice = 2;
            break;
    }
    playerChoicePara.innerHTML=(name + " chose: " + choiceArray[playerChoice]);
    announcement.innerText="";
    gameSetPlay();
    
})
const choiceArrayImg = [
    `<img class="imgChoice" src="../images/stone.png" alt="Rock"/>`,
    `<img class="imgChoice" src="../images/toilet-paper.png" alt="Paper"/>`,
    `<img class="imgChoice" src="../images/scissors.png" alt="Scissors"/>`
]
function gameSetPlay(){
    opponentChoice = getRandomInt(3);
    playerChoicePara.innerHTML += ("</br>Opponent chose: " + choiceArray[opponentChoice]);
    opponentChoicePara.innerHTML = (choiceArrayImg[opponentChoice]);
    if(playerChoice == 0 && opponentChoice == 1){
        pointText.innerText="One point to your opponent!";
        opponentScore++;
    }else if(playerChoice == 0 && opponentChoice == 2){
        pointText.innerText="One point to you!";
        playerScore++;
    }else if(playerChoice == 1 && opponentChoice == 0){
        pointText.innerText="One point to you!";
        playerScore++;
    }else if(playerChoice == 1 && opponentChoice == 2){
        pointText.innerText="One point to your opponent!";
        opponentScore++;
    }else if(playerChoice == 2 && opponentChoice == 0){
        pointText.innerText="One point to your opponent!";
        opponentScore++;
    }else if(playerChoice == 2 && opponentChoice == 1){
        pointText.innerText="One point to you!";
        playerScore++;
    }else{
        pointText.innerText="Its a draw!"
    }
    playerScoreContainer.innerHTML ="";
    for(let i = 0; i < playerScore; i++){
        playerScoreContainer.innerHTML += `<img class="star" src="../images/star.png" alt="Star">`
    }
    opponentScoreContainer.innerHTML="";
    for(let i = 0; i < opponentScore; i++){
        opponentScoreContainer.innerHTML += `<img class="star" src="../images/star.png" alt="Star">`
    }
    if(playerScore >2 ){
        announcement.innerText = "You Win!"
        opponentScore=0;
        playerScore=0;
    }else if(opponentScore > 2){
        announcement.innerText = "Your opponent wins!"
        opponentScore=0;
        playerScore=0;
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }