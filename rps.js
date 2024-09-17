
let playerScore=0;
let computerScore=0;
let maxScore=5;

const btnOne = document.querySelector('#btn-1');
const btnTwo =document.querySelector('#btn-2');
const btnThree =document.querySelector('#btn-3');

btnOne.addEventListener("click",function(){playRound('Rock')});
btnTwo.addEventListener("click",function(){playRound('paper')});   
btnThree.addEventListener("click",function(){playRound('scissors')});   

const results =document.querySelector("#results");
const resultWin =document.createElement('Win');
const resultLose =document.createElement('lose');
const resultTie =document.createElement('tie');

results.appendChild(resultWin);
results.appendChild(resultLose);
results.appendChild(resultTie);



// Function to play a round of Rock-Paper-Scissors
function playRound(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3); // 0 = Rock, 1 = Paper, 2 = Scissors

    // Check if someone has already won
    if (playerScore === maxScore || computerScore === maxScore) {
        return; // Stop the game if a player has reached max score
    }

    // Game logic
    if (
        (playerChoice === 'Rock' && computerChoice === 0) ||
        (playerChoice === 'paper' && computerChoice === 1) ||
        (playerChoice === 'scissors' && computerChoice === 2)
    ) {
        return playRound(playerChoice); // Tie case, no score change
    } else if (
        (playerChoice === 'Rock' && computerChoice === 2) ||
        (playerChoice === 'paper' && computerChoice === 0) ||
        (playerChoice === 'scissors' && computerChoice === 1)
    ) {
        playerScore++; // Increment player score
        resultWin.textContent = `You win! Player score: ${playerScore}`;
    } else if(
        (playerChoice==='Rock' && computerChoice===1)
        || (playerChoice==='paper' && computerChoice===2)
        || (playerChoice==='scissors' && computerChoice===0)
    ) {
        computerScore++; // Increment computer score
        resultLose.textContent = `You lose! Computer score: ${computerScore}`;
    }

    // Check if the game should end
    checkForWinner();
}

// Function to check for a winner
function checkForWinner() {
    if (playerScore === maxScore) {
        alert('Congratulations! You won the game!');
        resetGame(); // Reset the game when someone wins
    } else if (computerScore === maxScore) {
        alert('Game over! The computer won the game.');
        resetGame(); // Reset the game when the computer wins
    }
}

// Function to reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    resultWin.textContent = ''; // Clear the result text
    resultLose.textContent = ''; // Clear the result text
    alert('The game has been reset. Play again!');
}

resultWin.style.color='Green';
resultWin.style.fontSize='25px';
resultWin.style.fontFamily='monospace';




resultLose.style.color='Red';
resultLose.style.fontSize='25px';
resultLose.style.fontFamily='monospace';

btnOne.style.color='orange';
btnTwo.style.color='royalblue';
btnThree.style.color='red';

btnOne.style.background='Gray';
btnThree.style.background='blue';
btnTwo.style.background='white';

btnOne.style.fontSize='50px';
btnTwo.style.fontSize='50px';
btnThree.style.fontSize='50px';