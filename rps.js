function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3)
    if (computerChoice===1){
      return'rock';
    } else if(computerChoice===2){
      return 'paper';
    } else (computerChoice===3)
      return 'scissors';
  }
   
