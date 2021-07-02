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

console.log(playRound('rOck', computerPlay()));