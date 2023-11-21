let rock;
let paper;
let scissors;
let playerScore=1;
let computerScore=1;


function getComputerChoice(){
    let computerChoice= Math.floor(Math.random()*3); 
    if (computerChoice===0){
      return'rock';
    } else if(computerChoice===1){
      return 'paper';
    } else (computerChoice===2)
      return 'scissors';
  }
 

function playRound(playerChoice=prompt('ROCK, PAPER OR SCISSORS?').toLowerCase, computerChoice){
    if (playerChoice==='rock'&& computerChoice===2){
    return 'You Win! Rock beats Scissors.';
    } else if(playerChoice==='rock' && computerChoice===1){
        return 'You Lose! Paper beats Rock'
    } else if(playerChoice==='paper'&& computerChoice===0){
       return 'You Win! Paper beats Rock'
    } else if (playerChoice==='paper' && computerChoice===2){ 
        return 'You Lose! Scissors beats Paper'
    } else if (playerChoice==='scissors' && computerChoice===1){ 
        return 'You win! Scissors beats Paper'
    } else if (playerChoice==='scissors' && computerChoice===0){ 
        return 'You Lose! Rock beats Scissors'
    } else if(playerChoice==='rock'&& computerChoice===0){
        return 'Its a Draw!'
    } else if(playerChoice==='paper'&& computerChoice===1){
        return 'Its a Draw!'
    } else if(playerChoice==='scissors' && computerChoice===2){
        return 'Its a Draw!'
    }   
} 

function getScore(){
    if (playerScore===5 || playerScore===4 || playerScore===3 && computerScore===0||computerScore===1||computerScore===2){
        return 'You Win!'
    } else if(computerScore===5 || computerScore===4 || computerScore===3 && playerScore===0 || playerScore===1 || playerScore===2){
        return 'You Lose, Try Again!'
    }
}


function game(){
let computerChoice= Math.floor(Math.random()*3); 
let playerChoice=prompt('ROCK, PAPER OR SCISSORS?').toLocaleLowerCase();
    switch (playRound(playerChoice, computerChoice)){
        case 'You Win! Rock beats Scissors.':
        case 'You Win! Paper beats Rock':
        case 'You win! Scissors beats Paper':       
        return playerScore++                                
        break;

        case 'You Lose! Paper beats Rock':
        case 'You Lose! Scissors beats Paper':
        case 'You Lose! Rock beats Scissors':
        return computerScore++
        break;

        default: 'Its a Draw!'
        return game();    
    }
  }
  
 function fullGame(){
    console.log(game());
    console.log(game());
    console.log(game());
    console.log(game());
    console.log(game());
    console.log(getScore());
 }

 fullGame();
