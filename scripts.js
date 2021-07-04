// Randomly genarate rock, paper, or scissors
function computerPlay() {
    let num = Math.random();
    let result;
    if (num < 0.3333) {
        result = 'Rock';
    } else if (num < 0.6666) {
        result = 'Paper';
    } else {
        result = 'Scissors';
    }
    return result;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Rock') {
        if (playerSelection.toLowerCase() == 'rock') {
            return `It's a tie!`;
        } else if (playerSelection.toLowerCase() == 'paper') {
            return 'You win! Paper beats Rock';
        } else if (playerSelection.toLowerCase() == 'scissors') {
            return 'You lose. Rock beats scissors';
        }
    } else if (computerSelection == 'Paper') {
        if (playerSelection.toLowerCase() == 'rock') {
            return `You lose. Paper beats Rock`;
        } else if (playerSelection.toLowerCase() == 'paper') {
            return `It's a tie!`;
        } else if (playerSelection.toLowerCase() == 'scissors') {
            return 'You win! Scissors beats Paper';
        }
    } else {
        if (playerSelection.toLowerCase() == 'rock') {
            return `You win! Rock beats scissors`;
        } else if (playerSelection.toLowerCase() == 'paper') {
            return 'You lose. Scissors beats paper';
        } else if (playerSelection.toLowerCase() == 'scissors') {
            return `It's a tie!`;
        }
    }
}

function game() {
    let my_score = 0;
    let cpu_score = 0;
    function score() {
        //return result of each round
        //if i win add 1 to score
        //if i lose add 1 to cpu score
        //return results of who won
    }


    let my_choice1 = prompt("Choose: ");
    playRound(my_choice1, computerPlay());
    let my_choice2 = prompt("Choose: ");
    playRound(my_choice2, computerPlay());
    let my_choice3 = prompt("Choose: ");
    playRound(my_choice3, computerPlay());
    let my_choice4 = prompt("Choose: ");
    playRound(my_choice4, computerPlay());
    let my_choice5 = prompt("Choose: ");
    playRound(my_choice5, computerPlay());
}

console.log(playRound('rOck', computerPlay()));