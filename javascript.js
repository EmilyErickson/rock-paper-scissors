
let playerChoice = function (winner) {
    document.querySelector(".winner").textContent = message;
};

let scoreChart = function (score) {
    document.querySelector(".score").textContent = message;
  };


let rock = document.querySelector("#rock").addEventListener("click", gameRound)
let paper = document.querySelector("#paper").addEventListener("click", gameRound)
let scissors = document.querySelector("#scissors").addEventListener("click", gameRound)


let restart = document.querySelector("#restart").addEventListener("click", restartGame)

let playerSelection = this.id

let playerScore = 0
let computerScore = 0

document.querySelector('.winner').textContent = "Who will win?"

document.querySelector('.score').textContent = `Your score = ${playerScore}   ` + `\nComputer score =  ${computerScore}`


let computerSelection = Math.random()

function gameRound () {


    if (playerScore < 5 && computerScore < 5) {

        let computerSelection = Math.random()

        let playerSelection = this.id
        
        switch (playerSelection) {
            case "rock":
                if (computerSelection >=0.67) {
                    playerScore += 1
                    document.querySelector('.winner').textContent =  "You Win! Rock beats Scissors"
                }else if (computerSelection >=0.34) {
                    computerScore +=1
                    document.querySelector('.winner').textContent ="You Lose! Paper beats Rock"
                }else if (computerSelection <0.34) {
                    document.querySelector('.winner').textContent ="It's a draw!"
                }
                break;

            case "paper":
                if (computerSelection <0.34) {
                    playerScore += 1
                    document.querySelector('.winner').textContent = "You Win! Paper beats Rock"
                }else if (computerSelection >=0.67) {
                    computerScore += 1
                    document.querySelector('.winner').textContent = "You Lose! Scissor beats Paper"
                }else if (computerSelection >=0.34) {
                    document.querySelector('.winner').textContent = "It's a draw!"
                }
                break;

            case "scissors":
                if (computerSelection >=0.34) {
                    playerScore += 1
                    document.querySelector('.winner').textContent = "You Win! Scissors beats Paper"
                }else if (computerSelection <0.34) {
                    computerScore +=1
                    document.querySelector('.winner').textContent ="You Lose! Rock beats Scissors"
                }else if (computerSelection >=0.67) {
                    document.querySelector('.winner').textContent = "It's a draw!"
                }
                break;
            
            default:
                document.querySelector('.winner').textContent = "Something went wrong"
                
        }

    document.querySelector('.score').textContent = `Your score = ${playerScore}   ` + `\nComputer score =  ${computerScore}`
    }

    if (playerScore == 5) {
        document.querySelector('.winner').textContent = "GAME OVER! \nYOU WON!!"
    } else if (computerScore == 5) {
        document.querySelector('.winner').textContent = "GAME OVER! \nYOU LOST!"
    }

}

function restartGame () {
    playerScore = 0
    computerScore = 0

    document.querySelector('.winner').textContent = "Who will win?"
    document.querySelector('.score').textContent = `Your score = ${playerScore}   ` + `\nComputer score =  ${computerScore}`
}
