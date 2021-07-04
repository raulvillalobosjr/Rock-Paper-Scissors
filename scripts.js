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

let my_score = 0;
let cpu_score = 0;

function playRound(playerSelection, computerSelection) {
    if (computerSelection == 'Rock') {
        if (playerSelection.toLowerCase() == 'rock') {
            return `It's a tie!`;
        } else if (playerSelection.toLowerCase() == 'paper') {
            my_score += 1;
            return 'You win! Paper beats Rock';
        } else if (playerSelection.toLowerCase() == 'scissors') {
            cpu_score += 1;
            return 'You lose. Rock beats scissors';
        }
    } else if (computerSelection == 'Paper') {
        if (playerSelection.toLowerCase() == 'rock') {
            cpu_score += 1;
            return `You lose. Paper beats Rock`;
        } else if (playerSelection.toLowerCase() == 'paper') {
            return `It's a tie!`;
        } else if (playerSelection.toLowerCase() == 'scissors') {
            my_score += 1;
            return 'You win! Scissors beats Paper';
        }
    } else {
        if (playerSelection.toLowerCase() == 'rock') {
            my_score += 1;
            return `You win! Rock beats scissors`;
        } else if (playerSelection.toLowerCase() == 'paper') {
            cpu_score += 1;
            return 'You lose. Scissors beats paper';
        } else if (playerSelection.toLowerCase() == 'scissors') {
            return `It's a tie!`;
        }
    }
}

function game() {
    //return result of each round
    //if i win add 1 to score
    //if i lose add 1 to cpu score
    //return results of who won
    //possibly add all this to the play round function
    //and maybe I won't need this score function


    let my_choice1 = prompt("Round 1 choose: ");
    console.log(playRound(my_choice1, computerPlay()));
    let my_choice2 = prompt("Round 2 choose: ");
    console.log(playRound(my_choice2, computerPlay()));
    let my_choice3 = prompt("Round 3 choose: ");
    console.log(playRound(my_choice3, computerPlay()));
    let my_choice4 = prompt("Round 4 choose: ");
    console.log(playRound(my_choice4, computerPlay()));
    let my_choice5 = prompt("Round 5 choose: ");
    console.log(playRound(my_choice5, computerPlay()));
    
    if (my_score > cpu_score) {
        console.log("You won the game!")
    } else {
        console.log("You lose.")
    }
}

game();