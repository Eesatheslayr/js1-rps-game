let rock
let paper
let scissors

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3)
    if (computerChoice===0){
      return'rock';
    } else if(computerChoice===1){
      return 'paper';
    } else (computerChoice===2)
      return 'scissors';
  }
  
 /*function getPlayerChoice(){
   const playerChoice= prompt('ROCK, PAPER OR SCISSORS?').toLowerCase();
   if(playerChoice==='rock'){
   return 'You Chose Rock!';
   } else if(playerChoice==='paper'){
    return 'You Chose Paper!';
   }  else if (playerChoice==='scissors')
    return 'You Chose Scissors!';
} */

function playRound(playerChoice, computerChoice){
    if (playerChoice==='Rock'&& computerChoice===2){/*rock beats scissors*/
    return 'You Win! Rock beats Scissors.';
    } else if(playerChoice==='Rock' && computerChoice===1){/*paper beats rock*/
        return 'You Lose! Paper beats Rock'
    } else if(playerChoice==='Paper'&& computerChoice===0){/*paper beats rock*/
       return 'You Win! Paper beats Rock'
    } else if (playerChoice==='Paper' && computerChoice===2){/*scissors beats paper*/ 
        return 'You Lose! Scissors beats Paper'
    } else if (playerChoice==='Scissors' && computerChoice===1){ /*scissors beats paper*/
        return 'You win! Scissors beats Paper'
    } else if (playerChoice==='Scissors' && computerChoice===0){ /* rock beats scissors*/
        return 'You Lose! Rock beats Scissors'
    } else if(playerChoice==='Rock'&& computerChoice===0){
        return 'Its a Draw!'
    } else if(playerChoice==='Paper'&& computerChoice===1){
        return 'Its a Draw!'
    } else if(playerChoice==='Scissors' && computerChoice===2){
        return 'Its a Draw!'
    }
}
