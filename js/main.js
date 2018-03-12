console.log("Tic Tac Toe");

const player1 = 'X';
const player2 = 'O';
let token = player1;

$(document).ready(function(){
    let gameBoard = [
      ['','',''],
      ['','',''],
      ['','','']
    ];

// const switchPlayer= function(token){
// console.log(token);
//   if (token === player1)
//   {
//     token = player2;
//     console.log(token);
//     return token;
//   }
// else if(token === player2)
//   {
//     token = player1;
//   }
//   return token;
// }

    $('.column').click(function()
    {
    //console.log(`token is ${token}`)
    if ($(this).html()==="X" || $(this).html()==="O") {
     return;
    }


     $(this).html(token);

    const current_row = $(this).data('rowid');
    const current_col = $(this).data('colid');
    gameBoard[current_row][current_col] = token;
    //prints the selected row and column
    //console.log(current_row, current_col);
    //print that particular row in gameBoard
    //console.log(gameBoard[current_row,current_col]);
    //print the value inside the gameBoard
    //console.log(`value of the gameBoard is ${gameBoard[current_row][current_col]}`);
    //print the full gameboard
    //console.log(gameBoard);
    // switchPlayer

    if (token === player1)
    {
      token = player2;
      //console.log(token);
    }
    else if(token === player2)
    {
      token = player1;
    }

//    });

const checkWinner = function(){
  // console.log(gameBoard);

  //check horizontal
  for(let i = 0; i < 3; i++)
  {
    if(gameBoard[i][0]!= "" && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2])
    {
      console.log(`${gameBoard[i][0]} is the winner-horizontal`);
      return gameBoard[i][0];
    }
  };


  //check vertical
  for(let j=0;j<3;j++)
  {
    if(gameBoard[0][j]!="" && gameBoard[0][j] === gameBoard[1][j] && gameBoard[0][j] === gameBoard[2][j])
    {
      console.log(`${gameBoard[0][j]} is the winner - vertical`);
      return gameBoard[0][j];
    }

  }
  //check diagonal
  if(gameBoard[0][0]!="" && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2])
  {

    console.log(`${gameBoard[0][0]} is the winner- diagonal`);
    return gameBoard[0][0];
  }


  //check diagonal
  if(gameBoard[0][2]!="" && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2]===gameBoard[2][0])
  {

    console.log(`${gameBoard[0][2]} is the winner -diagonal`);
    return gameBoard[0][2];
  }



//check if there are any empty cells
  // for(let i = 0;i < 3; i++)
  // {
  //   for(let j = 0;j<3;j++)
  //   {
  //     if(gameBoard[i][j]= "")
  //     return false;
  //   }
  // }
}
checkWinner();
//if there is a winner, display the output
// console.log(`${checkWinner()} is the winner`);
// console.log(`${checkWinner()} is the winner`);

//Clear the gameBoard
$('#reset').click(function(){

//Clear the gameboard array
for(let i=0;i<3;i++)
{
  for(let j=0;j<3;j++)
  {
    gameBoard[i][j]="";
  };
};
console.log(gameBoard);
});

});

  });
