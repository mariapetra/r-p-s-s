const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    // Function to
    const playGame = () => {
        const rockBtn = document.getElementById('rock');
        const paperBtn = document.getElementById('paper');
        const scissorBtn = document.getElementById('scissors');
        const lizardBtn = document.getElementById('lizard');
        const spockBtn = document.getElementById('spock');
        const playerOptions = [rockBtn, paperBtn, scissorBtn, lizardBtn, spockBtn];
        const computerOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock']
         
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;
                 
 
                const choiceNumber = Math.floor(Math.random()*5);
                const computerChoice = computerOptions[choiceNumber];
 
                // Function to check who wins
                winner(this.innerText,computerChoice)
                 
                // Calling gameOver function after 10 moves
                if(moves == 10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
         
    }
 
    // Function to decide winner
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();

        const increasePlayerScore = () => {
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
        
        const increaseCompScore = () => {
            computerScore++;
            computerScoreBoard.textContent = computerScore; 
        }
        
        const tie = result.textContent = 'Tie';
       
       switch (player == 'rock') {
        case computer == 'paper':
            result.textContent = 'Computer Won - Paper covers Rock';
            increaseCompScore();
            break;
        case computer == 'lizard':
            result.textContent = 'You Won - Rock crushes Lizard';
            increasePlayerScore();
            break;
         case computer == 'scissors':
            result.textContent = 'You Won - Rock crushes Scissors';
            increasePlayerScore();
            break;
        case computer == 'spock':
            result.textContent = 'Computer Won - Spock vaporizes Rock';
            increaseCompScore();
            break;
        default:
            tie;
        } 
        
        switch (player == 'paper') {
            case computer == 'rock':
                result.textContent = 'You Won - Paper covers Rock';
                increaseCompScore();
                break;
            case computer == 'lizard':
                result.textContent = 'Computer Won - Lizard eats Paper';
                increasePlayerScore();
                break;
             case computer == 'scissors':
                result.textContent = 'Computer Won - Scissors cuts Paper';
                increasePlayerScore();
                break;
            case computer == 'spock':
                result.textContent = 'You Won - Paper disproves Spock';
                increaseCompScore();
                break;
            default:
                tie
            }        

            switch (player == 'scissors') {
                case computer == 'rock':
                    result.textContent = 'You Won - Paper covers Rock';
                    increaseCompScore();
                    break;
                case computer == 'lizard':
                    result.textContent = 'Computer Won - Lizard eats Paper';
                    increasePlayerScore();
                    break;
                 case computer == 'paper':
                    result.textContent = 'Computer Won - Scissors cuts Paper';
                    increasePlayerScore();
                    break;
                case computer == 'spock':
                    result.textContent = 'You Won - Paper disproves Spock';
                    increaseCompScore();
                    break;
                default:
                    tie
                } 

        switch (player == 'lizard') {
            case computer == 'rock':
                result.textContent = 'You Won - Paper covers Rock';
                increaseCompScore();
                break;
            case computer == 'paper':
                result.textContent = 'Computer Won - Lizard eats Paper';
                increasePlayerScore();
                break;
                case computer == 'scissors':
                result.textContent = 'Computer Won - Scissors cuts Paper';
                increasePlayerScore();
                break;
            case computer == 'spock':
                result.textContent = 'You Won - Paper disproves Spock';
                increaseCompScore();
                break;
            default:
                tie
            } 
                    
        switch (player == 'spock') {
            case computer == 'rock':
                result.textContent = 'You Won - Paper covers Rock';
                increaseCompScore();
                break;
            case computer == 'lizard':
                result.textContent = 'Computer Won - Lizard eats Paper';
                increasePlayerScore();
                break;
                case computer == 'scissors':
                result.textContent = 'Computer Won - Scissors cuts Paper';
                increasePlayerScore();
                break;
            case computer == 'paper':
                result.textContent = 'You Won - Paper disproves Spock';
                increaseCompScore();
                break;
            default:
                tie
            } 
       }
       
       
       
       
       
       
       
       
       
    //     if(player === computer){
    //         result.textContent = 'Tie'
    //     }
    //     else if(player == 'rock'){
    //         if(computer == 'paper'){
    //             result.textContent = 'Computer Won - Paper covers Rock';
    //             computerScore++;
    //             computerScoreBoard.textContent = computerScore;
 
    //         }else{
    //             result.textContent = 'Player Won'
    //             playerScore++;
    //             playerScoreBoard.textContent = playerScore;
    //         }
    //     }
    //     else if(player == 'scissors'){
    //         if(computer == 'rock'){
    //             result.textContent = 'Computer Won';
    //             computerScore++;
    //             computerScoreBoard.textContent = computerScore;
    //         }else{
    //             result.textContent = 'Player Won';
    //             playerScore++;
    //             playerScoreBoard.textContent = playerScore;
    //         }
    //     }
    //     else if(player == 'lizard'){
    //         if(computer == 'scissors'){
    //             result.textContent = 'Computer Won';
    //             computerScore++;
    //             computerScoreBoard.textContent = computerScore;
    //         }else{
    //             result.textContent = 'Player Won';
    //             playerScore++;
    //             playerScoreBoard.textContent = playerScore;
    //         }
    //     }

    //     else if(player == 'spock'){
    //         if(computer == 'scissors'){
    //             result.textContent = 'Computer Won';
    //             computerScore++;
    //             computerScoreBoard.textContent = computerScore;
    //         }else{
    //             result.textContent = 'Player Won';
    //             playerScore++;
    //             playerScoreBoard.textContent = playerScore;
    //         }
    //     }
    // }
 
    // Function to run when game is over
    const gameOver = (playerOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(playerScore > computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
     
}
 
// Calling the game function
game();
// const rock = document.getElementById("rock")
// const paper = document.getElementById("paper")
// const scissors = document.getElementById("scissors")
// const bomb = document.getElementById("bomb")
// let userInput = ""

// const getUserChoice = () => {
//         if (document.getElementById("rock"))
        
        
        
        
        
        
//         onclick() rock) {
//             userInput === "rock";   
//         } else if (scissors) {
//             userInput === "scissors"; 
//         } else if (rock) {
//             userInput === "rock";
//         } else {
//             userInput === "bomb"
//         }
// }

//   const getComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random() * 3);
//       switch (randomNumber) {
//         case 0:
//           return 'rock';
//         case 1:
//           return 'paper';
//         case 2:
//           return 'scissors'
//     }
//   };
  
//   const determineWinner = (userChoice, computerChoice) => {
//     if (userChoice === computerChoice) {
//       return 'this game was a tie';
//     }
   
//     if (userChoice === rock) {
//       if (computerChoice === 'paper') {
//         return "computer wins";
//         } else {
//           return "you win!";
//         }
//       }
  
//   if (userChoice === paper) {
//     if (computerChoice === 'scissors') {
//      return "computer wins";
//       } else {
//       return "you win!";
//       }
//     }
  
//   if (userChoice === scissors) {
//       if (computerChoice === 'rock') {
//         return "computer wins";
//       } else {
//         return "you win!";
//       }  
//     }
  
//     if (userChoice === bomb) {
//         return "you win!";
      
//     }
//   };
  
//   const playGame = () => {
//     const userChoice = getUserChoice(userInput);
//     const computerChoice = getComputerChoice();
//     console.log('you threw: ' + userChoice); 
//     console.log ('The computer threw: ' + computerChoice);
    
//     console.log(determineWinner(userChoice, computerChoice));
//     };
  
  
//   playGame();