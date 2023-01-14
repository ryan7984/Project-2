
const choices = ['rock','paper','scissors'];
const buttons= document.querySelectorAll('button');
const prompt = document.querySelector('#prompt');

        let playerChoice, computerChoice, result;
            buttons.forEach(button => {
            button.addEventListener('click', () => {
                //This will be the choice from the player.
                 playerChoice = button.id;

                //This will be the computers choice
                computerChoice = choices[Math.floor(Math.random() * choices.length)];


                //This will determine who the winner is between player and computer. 
        
                if (playerChoice === computerChoice) {
                    result = 'tie';
                } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
                    (playerChoice === 'paper' && computerChoice === 'rock') ||
                    (playerChoice === 'scissors' && computerChoice === 'paper')) {
                    result = 'player';
                } else {
                    result = 'computer';
                }
                prompt.textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}. You ${result === 'player' ? 'win' : result === 'tie' ? 'tie' : 'lose'}.`;

            });
        });
            

        
    