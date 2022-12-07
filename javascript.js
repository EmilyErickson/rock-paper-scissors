

let rock = "rock"
let paper = "paper"
let scissors = "scissors"

function gameRound () {

    let computerSelection = Math.random()

    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();


    switch (playerSelection) {
        case rock:
            if (computerSelection >=0.67) {
                return ("You Win! Rock beats Scissors")
            }else if (computerSelection >=0.34) {
                return("You Lose! Paper beats Rock")
            }else if (computerSelection <0.34) {
                return ("It's a draw!")
            }
            break;

        case paper:
            if (computerSelection <0.34) {
                return ("You Win! Paper beats Rock")
            }else if (computerSelection >=0.67) {
                return("You Lose! Scissor beats Paper")
            }else if (computerSelection >=0.34) {
                return ("It's a draw!")
            }
            break;

        case scissors:
            if (computerSelection >=0.34) {
                return ("You Win! Scissors beats Paper")
            }else if (computerSelection <0.34) {
                return("You Lose! Rock beats Scissors")
            }else if (computerSelection >=0.67) {
                return ("It's a draw!")
            }
            break;
           
        default:
            return("Something went wrong")
            
    }
}

function game() {
    
    for (let i = 0; i < 5; i++) {

        console.log(gameRound())
        console.log ("round " + (i+1))
    }


}

game()