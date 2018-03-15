console.log("Tic Tac Toe");

const player1 = 'X';
const player2 = 'O';
const noplayer = '';
let token = player1;
let xwinCount=0;
let owinCount=0;
$(document).ready(function(){
    let gameBoard = [
      ['','',''],
      ['','',''],
      ['','','']
    ];



const resetBoard = function(){
  //Clear the gameboard array
  for(let i=0;i<3;i++)
  {
    for(let j=0;j<3;j++)
    {
      gameBoard[i][j]="";
      $('.column[data-rowid='+i+'][data-colid='+j+']').html('');
      token=player1;
    };
    //$('.column[data-rowid=0][data-colid=0]').html('');

  };

};

const checkWinner = function(){
  // console.log(gameBoard);
  //check horizontal
  if(token !== noplayer) {
  for(let i = 0; i < 3; i++)
  {
    if(gameBoard[i][0]!== "" && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2])
    {
      console.log(`${gameBoard[i][0]} is the winner-horizontal`);
      token=noplayer;
      return gameBoard[i][0];
    }
  };
  //check vertical
  for(let j=0;j<3;j++)
  {
    if(gameBoard[0][j]!== "" && gameBoard[0][j] === gameBoard[1][j] && gameBoard[0][j] === gameBoard[2][j])
    {
      console.log(`${gameBoard[0][j]} is the winner - vertical`);
      token = noplayer;
      return gameBoard[0][j];
    }
  }
  //check diagonal 1
  if(gameBoard[0][0]!== "" && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2])
  {
    console.log(`${gameBoard[0][0]} is the winner- diagonal`);
    token = noplayer;
    return gameBoard[0][0];
  }
  //check diagonal 2
  if(gameBoard[0][2]!== "" && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2]===gameBoard[2][0])
  {
    console.log(`${gameBoard[0][2]} is the winner -diagonal`);
    token = noplayer;
    return gameBoard[0][2];
  }
  //check draw
  let counter=0;
    for(let i = 0;i < 3; i++)
    {
      for(let j = 0;j<3;j++)
      {
        if(gameBoard[i][j]!= "")
        {
          counter= counter + 1;
        }
      }
    }
    //if the entire board is filled and there is no winner then its a draw
    if(counter === 9)
    {
      return "draw" ;
    }
  }
}
//when a column is clicked
    $('.column').click(function()
    {
      $(this).css('color','#00ffe1fa');
      //if there is an X or O in the selected column, then return
      if ($(this).html() === "X" || $(this).html() === "O"){
          return;
      }



    $(this).html(token);
    // console.log($(this).html(token));

   const current_row = $(this).data('rowid');
   const current_col = $(this).data('colid');

   gameBoard[current_row][current_col] = token;
     //setting player1(X) to the selected column

    //prints the selected row and column
    //console.log(current_row, current_col);
    //print that particular row in gameBoard
    //console.log(gameBoard[current_row,current_col]);
    //print the value inside the gameBoard
    //console.log(`value of the gameBoard is ${gameBoard[current_row][current_col]}`);
    //print the full gameboard
    //console.log(gameBoard);

    if (token === player1)
    {
      token = player2;
    }
    else if(token === player2)
    {
      token = player1;
    }

let winner = checkWinner();
if(winner)
    {
   //$('.winner').css("color","aqua");

    if(winner ==='X')
    {
    $('.winner').addClass('animated zoomIn');
    $('.winner').css('color','#ffffff');
    $('.winner').html(`${winner} wins`);
    xwinCount = xwinCount + 1;
    $(".player1").css('color','#ebf802e3');
    $(".player1").html(`Player 1 (X): ${xwinCount}`);
    // $('.winner').html(`${winner} wins`);
    // $('.winner').html(`Player 1 using token:${winner} WINS!!!`);

    }
    if (winner === 'O')
    {
    $('.winner').addClass('animated zoomIn');
    $('.winner').css('color','#ffffff');

    $('.winner').html(`${winner} wins`);
    owinCount = owinCount + 1;
    $(".player2").css('color','#ebf802e3');

    $(".player2").html(`Player 2 (O): ${owinCount}`);
    // $('.winner').html(`Player 2 using token:${winner} WINS!!!`);
    }
    if (winner === 'draw')
    {
    $('.winner').addClass('animated jello');
    $('.winner').css('color','#ffffff');
    $('.winner').html(`Draw!`);
    }
    }

});

    //Clear the gameBoard
    $('#reset').click(function(){
    resetBoard();
    $('.winner').html(' ');
    $('.winner').removeClass('animated zoomIn');
    //console.log(gameBoard);
  });
});
