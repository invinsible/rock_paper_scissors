const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const rollNumber = (arr) => {
        let num = Math.floor(Math.random() * arr.length);
        return num;        
    };

    const startGame = () => {
        const startBtn = document.querySelector('.intro button');
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');

        startBtn.addEventListener('click', function(){
            intro.classList.add('fadeOut');
            match.classList.remove('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const updateScore = () => {
        const pScore = document.querySelector('.score__player p');
        const cScore = document.querySelector('.score__computer p');

        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.hands__player');
        const computerHand = document.querySelector('.hands__computer');

        const computerOptions = ['rock', 'paper', 'scissors'];  
        
        options.forEach(option => {
            option.addEventListener('click', function(){
                const computerChoice = computerOptions[rollNumber(computerOptions)];
                console.log(computerChoice);
                comparison(this.textContent, computerChoice);

                // Update images
                let btnText = this.textContent;                
                playerHand.src = './img/' + btnText + '.png';
                computerHand.src = './img/' + computerChoice + '.png';
            });
        });

        
    };

    const comparison = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice) {
            winner.textContent = 'Ничья';
            return;
        }

        // Check rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                winner.textContent = 'Computer win';
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player win';
                playerScore++;
                updateScore();
                return;
            }            
        }

        // Check paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer win';
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player win';
                playerScore++;
                updateScore();
                return;
            }            
        }

        // Check scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer win';
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player win';
                playerScore++;
                updateScore();
                return;
            }            
        }

    };

    startGame();    
    playMatch();
}

game();