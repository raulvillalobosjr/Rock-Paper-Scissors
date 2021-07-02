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
        if (playerSelection == 'Rock') {
            return `It's a tie!`;
        } else if (playerSelection == 'Paper') {
            return 'You win! Paper beats Rock';
        } else {
            return 'You lose. Rock beats scissors';
        }
    } else if (computerSelection == 'Paper') {
        if (playerSelection == 'Rock') {
            return `You lose. Paper beats Rock`;
        } else if (playerSelection == 'Paper') {
            return `It's a tie!`;
        } else {
            return 'You win! Scissors beats Paper';
        }
    } else {
        if (playerSelection == 'Rock') {
            return `You win! Rock beats scissors`;
        } else if (playerSelection == 'Paper') {
            return 'You lose. Scissors beats paper';
        } else {
            return `It's a tie!`;
        }
    }
}

console.log(playRound('Rock', computerPlay()));