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

console.log(computerPlay());