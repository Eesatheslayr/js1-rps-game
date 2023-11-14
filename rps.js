let rock
let paper
let scissors

function getComputerChoice(){
    const computerChoice = Math.floor(Math.random()*3)
    if (computerChoice===1){
      return'rock';
    } else if(computerChoice===2){
      return 'paper';
    } else (computerChoice===3)
      return 'scissors';
  }
  
 function getPlayerChoice(){
   const playerChoice= prompt('ROCK, PAPER OR SCISSORS?').toLowerCase();
   if(playerChoice==='rock'){
   return 'You Chose Rock!';
   } else if(playerChoice==='paper'){
    return 'You Chose Paper!';
   }  else if (playerChoice==='scissors')
    return 'You Chose Scissors!';
}


    
 
 
