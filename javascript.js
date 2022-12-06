
let computerSelection = Math.random()
function getComputerChoice(){
   

    if (computerSelection <0.34){
    computerSelection = "rock";
    }else if (computerSelection <=0.67){
    computerSelection = "paper";
    }else{
    computerSelection = "scissors";
    }
    return(computerSelection); 
}
let rock = "rock"
let paper = "paper"
let scissors = "scissors"

function gameRound (playerSelection, computerSelection) {
    switch (playerSelection) {
        case rock:
            if (computerSelection = scissors) {
                return ("You Win! Rock beats Scissors")
            }else if (computerSelection = paper) {
                return("You Lose! Paper beats Rock")
            }else if (computerSelection = rock) {
                return ("It's a draw!")
            }
            break;

        case paper:
            if (computerSelection = rock) {
                return ("You Win! Paper beats Paper")
            }else if (computerSelection = scissors) {
                return("You Lose! Scissor beats Paper")
            }else if (computerSelection = paper) {
                return ("It's a draw!")
            }
            break;

            case scissors:
                if (computerSelection = paper) {
                    return ("You Win! Scissors beats Paper")
                }else if (computerSelection = rock) {
                    return("You Lose! Rock beats Scissors")
                }else if (computerSelection = scissors) {
                    return ("It's a draw!")
                }
                break;
           
       
            
    }
}
console.log(gameRound(rock));