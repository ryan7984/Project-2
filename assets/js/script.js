
/*jshint esversion: 6 */
const choices = ['rock','paper','scissors'];
const buttons= document.querySelectorAll('button');
const promptText = document.querySelector('#prompt');
let playerScore = 0;
let computerScore = 0;

//Click event listner. 
let playerChoice, computerChoice, result;
  buttons.forEach(button => {
  button.addEventListener('click', () => {
               
  //The players choice.
  playerChoice = button.id;

  //The computers choice.
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  //This will decide the winner between the player and computer and display the result in the prompt section.  
  if (playerChoice === computerChoice) {
    result = 'tie';
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
              (playerChoice === 'paper' && computerChoice === 'rock') ||
              (playerChoice === 'scissors' && computerChoice === 'paper')) {
              result = 'player';
      } else  {
              result = 'computer';
              }
              //The result that will appear on the screen after the player makes there choice. 
              promptText.textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}. You ${result === 'player' ? 'win' : result === 'tie' ? 'tie' : 'lose'}.`; 
            
            //This will determine the score.
            if (result === 'player'){
              playerScore++;
            } else if (result === 'computer'){
              computerScore++;
            }

            //This will display the score, player score on the left and computer score on right of the screen.
            document.querySelector('#game-left').textContent= `Player Score: ${playerScore}`;
            document.querySelector('#game-right').textContent= `Computer Score: ${computerScore}`;
      });
   });
            

        
    