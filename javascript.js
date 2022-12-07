

let rock = "rock"
let paper = "paper"
let scissors = "scissors"
let playerScore = 0
let computerScore = 0
function gameRound () {

    let computerSelection = Math.random()

    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();


    switch (playerSelection) {
        case rock:
            if (computerSelection >=0.67) {
                playerScore += 1
                return ("You Win! Rock beats Scissors")
            }else if (computerSelection >=0.34) {
                computerScore +=1
                return("You Lose! Paper beats Rock")
            }else if (computerSelection <0.34) {
                return ("It's a draw!")
            }
            break;

        case paper:
            if (computerSelection <0.34) {
                playerScore += 1
                return ("You Win! Paper beats Rock")
            }else if (computerSelection >=0.67) {
                computerScore += 1
                return("You Lose! Scissor beats Paper")
            }else if (computerSelection >=0.34) {
                return ("It's a draw!")
            }
            break;

        case scissors:
            if (computerSelection >=0.34) {
                playerScore += 1
                return ("You Win! Scissors beats Paper")
            }else if (computerSelection <0.34) {
                computerScore +=1
                return("You Lose! Rock beats Scissors")
            }else if (computerSelection >=0.67) {
                return ("It's a draw!")
            }
            break;
           
        default:
            return("Something went wrong")
            
    }
    return (`Computer = ${computerScore}`, `Player = ${playerScore}`)
}


function game() {
    
    for (let i = 0; i < 5; i++) {

        console.log(gameRound())
        console.log ("round " + (i+1))
        console.log (`Computer = ${computerScore}`, `Player = ${playerScore}`)
    }
}
    function score() {
        if (computerScore > playerScore) {
        return ("You lost the game")
    } else if (computerScore < playerScore) {
        return ("You won the game")
    } else {
        return ("The game is a draw")
    }
}

game()
console.log(score())
