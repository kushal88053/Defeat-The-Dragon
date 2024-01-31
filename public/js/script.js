// Twitter @anniebombanie_

// -- HTML elements --
const board = document.getElementById( 'board' );
const cells = document.querySelectorAll( '[data-cell]' );
const currentStatus = document.getElementById( 'currentStatus' );
const resetButton = document.getElementById( 'resetButton' );
const gameEndOverlay = document.getElementById( 'gameEndOverlay' );
const currentBeastStatusImg = document.getElementById( 'currentBeastImg' );
const winningMessage = document.querySelector( '[data-winning-message]' );
const winningMessageText = document.querySelector( '[data-winning-message] p' );
const winningMessageImg = document.createElement( 'img' );

// -- Game Variables --
let gameIsLive = true;
let unicornTurn = true;
let winner = null;
let computer = true ; 
isfirst_chance = true ;
let computer_board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]; 

// -- Functions --
const setBoardHoverClass = () => {
  board.classList.remove( 'unicorn' );
  board.classList.remove( 'dragon' );

  if ( unicornTurn ) {
    board.classList.add( 'unicorn' );
  } else {
    board.classList.add( 'dragon' );
  }
}

const placeBeastImg = ( cell, currentBeast ) => {
  cell.classList.add( currentBeast );
}

const swapTurns = () => {
  unicornTurn = !unicornTurn;
}

const updateCurrentStatus = () => {
  if ( unicornTurn ) {
    currentBeastStatusImg.src = './asset/unicorn.png';
    currentBeastStatusImg.alt = 'unicorn';
  } else {
    currentBeastStatusImg.src = './asset/dragon.png';
    currentBeastStatusImg.alt = 'dragon';
  }
}

const checkWin = (currentBeast) => {
  const winningCombination = winningCombinations.find((combination) => {
    return combination.every((i) => {
      return cells[i].classList.contains(currentBeast);
    });
  });
  return winningCombination || false; // Return the winning combination or false if not found
};

const isDraw = () => {
  return [...cells].every( cell => {
    return cell.classList.contains( 'unicorn' ) || cell.classList.contains( 'dragon' );
  })
}

const startGame = () => {
  cells.forEach( cell => {
    winningMessageImg.remove();
    cell.classList.remove( 'unicorn' );
    cell.classList.remove( 'dragon' );
    cell.removeEventListener( 'click', handleCellClick );
    cell.addEventListener( 'click', handleCellClick, { once: true });
    computer_board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]; 
    isfirst_chance = true ;
    unicornTurn = true;
    cells.forEach(cell => {
      cell.style.pointerEvents = 'auto';
     });
  });

  setBoardHoverClass();
  gameEndOverlay.classList.remove( 'show' );
}

const endGame = ( draw ) => {
  if ( draw ) {
    winningMessageText.innerText = `draw!`;
    setTimeout(function ()
    {
      gameEndOverlay.classList.add( 'show' );
      cells.forEach(cell => {
        cell.style.pointerEvents = '';
        if (cell.style.border === "2px solid green") {
          cell.style.border = "";
          cell.style.transform = "";
        }
        cell.style.transition ="";
        cell.style.opacity = "";
        cell.style.filter = "";
       });
    },2000) ;
  } else {
    winningMessageImg.src = unicornTurn ? './asset/unicorn.png' : './asset/dragon.png';
    winningMessageImg.alt = unicornTurn ? 'unicorn' : 'dragon';
    winningMessage.insertBefore( winningMessageImg, winningMessageText );
    winningMessageText.innerText = `wins!!!`;

    setTimeout(function ()
  {
    gameEndOverlay.classList.add( 'show' );
    cells.forEach(cell => {
      cell.style.pointerEvents = '';
      if (cell.style.border === "2px solid green") {
        cell.style.border = "";
        cell.style.transform = "";
      }
      cell.style.transition ="";
      cell.style.opacity = "";
      cell.style.filter = "";
     });
  },4000) ;
  }
  

  // Add non-clickable class to all cells
  setTimeout(function ()
  {
    gameEndOverlay.classList.add( 'show' );
    cells.forEach(cell => {
      cell.style.pointerEvents = '';
      if (cell.style.border === "2px solid green") {
        cell.style.border = "";
        cell.style.transform = "";
      }
      cell.style.transition ="";
      cell.style.opacity = "";
      cell.style.filter = "";
     });
  },4000) ;

}

// -- Event Handler --
const handleCellClick = ( e ) => {
  
  const cell = e.target;
  const currentBeast = unicornTurn ? 'unicorn' : 'dragon';
  const cellIndex = Array.from(cells).indexOf(cell);
  
  if ( currentBeast == 'dragon') {
    // Cell is non-clickable, do nothing
    return;
  }

  computer_board[parseInt(cellIndex/3)][ cellIndex%3] = currentBeast ;  
  placeBeastImg( cell, currentBeast );
  let isWin = checkWin( currentBeast ) ;
  if ( isWin) {
    ChangeOnWin(isWin , "purple" ) ;
    endGame( false );
  } else if ( isDraw()) {
    endGame( true );
  } else {
    swapTurns();
    updateCurrentStatus();
    setBoardHoverClass();
    if(computer)
    {
      setTimeout(() => {
        chance_of_computer();
      }, 1000);
    }
  }
}

// -- Event Listener --
resetButton.addEventListener( 'click', startGame );

// -- Start Game --
 startGame();

function chance_of_computer() 
{
      if(isfirst_chance)
      { 
          if(computer_board[1][1] == ' ')
          { 
            computer_board[1][1] = unicornTurn ? 'unicorn' : 'dragon';
            placeBeastImg(cells[4], computer_board[1][1]);
          }
          else
          { 
            computer_board[0][0] = unicornTurn ? 'unicorn' : 'dragon';
            placeBeastImg(cells[0], computer_board[0][0]);
            
          }
          isfirst_chance = false ;
          swapTurns();
          updateCurrentStatus();
          setBoardHoverClass();
          return ;
      }

      let cellNumber = findBestMove(computer_board , unicornTurn) ;
 

     // Check if the cellNumber is within valid range

      const clickedCell = cells[cellNumber.row * 3 + cellNumber.col];
      const currentBeast = unicornTurn ? 'unicorn' : 'dragon';
      computer_board[cellNumber.row][cellNumber.col] = currentBeast;

      // Your existing logic for handling a cell click
      placeBeastImg(clickedCell, currentBeast);

      let isWin = checkWin( currentBeast ) ;

      if ( isWin) {
        ChangeOnWin(isWin , "green" ) ;
        endGame(false);
      } else if (isDraw()) {
        endGame(true);
      } else {
        swapTurns();
        updateCurrentStatus();
        setBoardHoverClass();
      }
}
  
// Function to find the best move for the computer
function findBestMove(board,Turn) 
{
  let bestVal = -Infinity;
  let bestMove = { row: -1, col: -1 };

  for (let i = 0; i < 3; i++) 
  {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === ' ') {

        board[i][j] = Turn ? 'unicorn' : 'dragon';
        const winScore = evaluateBoard(board);

        if (winScore === 1) {
          board[i][j] = ' '; // Undo the move
          return  bestMove = {row : i , col: j}; // Winning move
        }
        const moveVal = minimax(board, 0, false);
        board[i][j] = ' '; // Undo the move

        if (moveVal > bestVal) {
          bestMove = {row : i , col: j};
        
          bestVal = moveVal;
        }
      }
    }
  }
  return bestMove;
}

// Minimax algorithm implementation
function minimax(board, depth, maximizingPlayer) 
{
  const score = evaluateBoard(board);

  if (score !== null) {
    return score;
  }

  if (maximizingPlayer) {
    let maxEval = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === ' ') {
          board[i][j] = 'dragon'; // Make the move for the maximizing player
          const eval = minimax(board, depth + 1, false);
          board[i][j] = ' '; // Undo the move
          maxEval = Math.max(maxEval, eval);
        }
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === ' ') {
          board[i][j] = 'unicorn'; // Make the move for the minimizing player
          const eval = minimax(board, depth + 1, true);
          board[i][j] = ' '; // Undo the move
          minEval = Math.min(minEval, eval);
        }
      }
    }
    return minEval;
  }
}



function evaluateBoard(board) 
{

  if (checkWinner(board, 'dragon')) {
    return 1; // Computer wins
  } else if (checkWinner(board, 'unicorn')) {
    return -1; // Human wins
  } else if (isBoardFull(board)) {
    return 0; // It's a draw
  } else {
    return null; // Game still in progress
  }
}

function checkWinner(board, player) 
{
  // Check rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    
    if (board[i].every(cell => cell === player) || board.every(row => row[i] === player)) {
      return true;
    }
  }
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }
  return false; 
}

// Function to check if the board is full
function isBoardFull(board) 
{
  return board.every(row => row.every(cell => cell !== ' '));
}

function ChangeOnWin(WinArray , color)
{
    cells.forEach((cell) => {
      cell.style.transition = "opacity 0.5s, filter 0.5s,, transform 0.5s";
    });
    let  c=1 ;
    WinArray.forEach((index) => {
      
      setTimeout(function () {  cells[index].style.border = "2px solid "+color; cells[index].style.transform = "scale(1.2)";} , (c++) * 1000) ;
    
    });
    
    cells.forEach((cell, index) => {
      if (!WinArray.includes(index)) {
        cell.style.opacity = 0.5; // Adjust the opacity value as needed (e.g., 0.5 for 50% opacity)
        cell.style.filter = "blur(4px)"; // Adjust the blur value as needed
      }
    });
}
