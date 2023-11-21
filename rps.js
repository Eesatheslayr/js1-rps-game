let rock;
let paper;
let scissors;
let playerScore=0;
let computerScore=0;


function getComputerChoice(){
    let computerChoice= Math.floor(Math.random()*3); 
    if (computerChoice===0){
      return'rock';
    } else if(computerChoice===1){
      return 'paper';
    } else (computerChoice===2)
      return 'scissors';
  }
 
 function getPlayerChoice(){
   let playerChoice = prompt('ROCK, PAPER OR SCISSORS?').toLowerCase();
   if(playerChoice==='rock'){
   return 'Rock!';
   } else if(playerChoice==='paper'){
    return 'Paper!';
   }  else if (playerChoice==='scissors')
    return 'Scissors!';
}

function playRound(playerChoice=prompt('ROCK, PAPER OR SCISSORS?').toLowerCase, computerChoice){
    if (playerChoice==='Rock'&& computerChoice===2){
    return 'You Win! Rock beats Scissors.';
    } else if(playerChoice==='Rock' && computerChoice===1){
        return 'You Lose! Paper beats Rock'
    } else if(playerChoice==='Paper'&& computerChoice===0){
       return 'You Win! Paper beats Rock'
    } else if (playerChoice==='Paper' && computerChoice===2){ 
        return 'You Lose! Scissors beats Paper'
    } else if (playerChoice==='Scissors' && computerChoice===1){ 
        return 'You win! Scissors beats Paper'
    } else if (playerChoice==='Scissors' && computerChoice===0){ 
        return 'You Lose! Rock beats Scissors'
    } else if(playerChoice==='Rock'&& computerChoice===0){
        return 'Its a Draw!'
    } else if(playerChoice==='Paper'&& computerChoice===1){
        return 'Its a Draw!'
    } else if(playerChoice==='Scissors' && computerChoice===2){
        return 'Its a Draw!'
    }   
} 



/*
function playRound(playerChoice, computerChoice){
    switch (playerChoice, computerChoice){
        case playerChoice==='Rock'&& computerChoice===2:
        case playerChoice==='Paper' && computerChoice===0:
        case playerChoice==='Scissors' && computerChoice===1:
            return 'You Win!'
            break;

        case playerChoice==='Rock'&& computerChoice===1:
        case playerChoice==='Paper'&& computerChoice===2:
        case playerChoice==='Scissors'&& computerChoice===0:
            return 'You Lose!'
            break;
        
        default:
            return 'Tie Game!'              
    }         
}    */    


function game(){

let computerChoice= Math.floor(Math.random()*3); 
let playerChoice=prompt('ROCK, PAPER OR SCISSORS?')
    switch (playRound(playerChoice, computerChoice)){
        case 'You Win! Rock beats Scissors.':
        case 'You Win! Paper beats Rock':
        case 'You win! Scissors beats Paper':       
        return 'You Win!'                                       
        break;

        case 'You Lose! Paper beats Rock':
        case 'You Lose! Scissors beats Paper':
        case 'You Lose! Rock beats Scissors':
        return 'You Lose!'
        break;

        default:
        return 'Tie Game.'
        }
  }
  console.log(game());
  console.log(game());
  console.log(game());
  console.log(game());
  console.log(game());
  


/*
function getScore(){
    switch (game()){
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

        default:
        return 'Tie Game.'
        }
    }
*/

