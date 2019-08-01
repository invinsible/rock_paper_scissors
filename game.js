const game = () => {
    // Стартовые очки игроков
    let playerScore = 0;
    let computerScore = 0;

    // Функция генерация числа от 0 до длины массива
    const rollNumber = (arr) => {
        let num = Math.floor(Math.random() * arr.length);
        return num;        
    };

    // Отображение экрана с игрой
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

    // Обновление очков
    const updateScore = () => {
        const pScore = document.querySelector('.score__player p');
        const cScore = document.querySelector('.score__computer p');

        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    };

    // Расчет одного раунда
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

                // Изменение картинки в соответствии с выбором
                let btnText = this.textContent;                
                playerHand.src = './img/' + btnText + '.png';
                computerHand.src = './img/' + computerChoice + '.png';
            });
        });
    };
    
    // Сравнение значение и определения победителя в раунде
    const comparison = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');

        const computerResult = () => {
            winner.textContent = 'Computer win';
            computerScore++;
            updateScore();
            return;
        };
    
        const playerResult = () => {
            winner.textContent = 'Player win';
            playerScore++;
            updateScore();
            return;
        };


        if (playerChoice === computerChoice) {
            winner.textContent = 'Ничья';
            return;
        }

        // Проверка значения Rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                computerResult(); 
            } else {
                playerResult();
            }            
        }

        // Проверка значения Paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                computerResult();
            } else {
                playerResult();
            }            
        }

        // Проверка значения Scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                computerResult();
            } else {
                playerResult();
            }            
        }

    };

    startGame();    
    playMatch();
}

game();