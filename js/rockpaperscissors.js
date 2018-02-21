function getInput() {
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        winner = "tie";
    } else if ((playerMove === "rock" && computerMove === "scissors") || (playerMove === "paper" && computerMove === "rock") || (playerMove === "scissors" && computerMove === "paper")) {
        winner = "player";
    } else {
        winner = "computer";
    } return winner;
}

function playToFive() {
    alert("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while(playerWins < 5 && computerWins < 5) {
        var pMove = getPlayerMove();
        var cMove = getComputerMove();
        var winner = getWinner(pMove, cMove);
        if (winner === "player") {
            playerWins ++;
            alert("You won that game with  ---" + pMove + "---  against  ---"  + cMove + "---  [SCORES] (" + playerWins + ") to you and ("  + computerWins + ") to the  computer");
        } else if (winner === "computer") {
            computerWins ++;
            alert("You lost that game with  ---" + pMove + "---  against  ---"  + cMove + "---  [SCORES] (" + playerWins + ") to you and ("  + computerWins + ") to the  computer");
        } else if (winner === "tie") {
            alert("That was a tie with  ---" + pMove + "---  [SCORES] (" + playerWins + ") to you and (" + computerWins + ") to the  computer");
        }
    }
    return [playerWins, computerWins];
}

playToFive()
