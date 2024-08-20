let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr){
    score = JSON.parse(scoreStr)  || {
    win:0,
    lost:0,
    tie:0,   
};



score.displayScore= function(){
    return `Won:${score.win}, Lost:${score.lost}, Tie: ${score.tie}`;
  }
  showResult();
}

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;

  if (randomNumber > 0 && randomNumber <= 1) {
    return "Bat";
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}


function getResult(userMove, computerMove){
     if(userMove ==='Bat'){
       if(computerMove === 'Ball'){
        score.win++; 
        return 'User won';
      }else if(computerMove === 'Bat'){
        score.tie++;
        return 'Match Tie';
      }else if(computerMove==='Stump'){
        score.lost++;
        return 'Computer won';
      }

     }else if(userMove === 'Ball'){
         if(computerMove === 'Ball'){
          score.tie++;
          return 'Match tie';

         }else if(computerMove === 'Stump'){
          score.win++; 
          return 'User won';
         }else if(computerMove === 'Bat'){
          score.lost++;
          return 'Computer won';
         }


     }else{
         if(computerMove === 'Stump'){
          score.tie++;
           return 'Match Tie';
         }else if(computerMove ==='Ball'){
          score.lost++;
          return 'computer won';

         }else if(computerMove  === 'Bat'){
            score.win++; 
             return 'User won'
         }
     }
}

function showResult(userMove, computerMove, result){
  localStorage.setItem('Score', JSON.stringify(score));
 document.querySelector('#user-move').innerText = userMove !== undefined ?`you have choose ${userMove}`: "";

 document.querySelector('#computer-move').innerText = computerMove   !== undefined ? `you have choose ${computerMove}`: "";

 document.querySelector('#result').innerText = result !== undefined ? result : "";

 document.querySelector('#score').innerText = score.displayScore();

}