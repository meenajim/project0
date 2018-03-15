console.log("Tic Tac Toe");
//Set player1 to X and player2 to O.
const player1 = 'X';
const player2 = 'O';
//Set noplayer for gameover cases
const noplayer = '';
//start the game with player1
let token = player1;
//counter for scoreboard
let xwinCount = 0;
let owinCount = 0;
//wait for the DOM to load.
$(document).ready(function() {
    //create a gameboard array to check for the winner.
    let gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    //This function clears the gameboard array and the page
    const resetBoard = function() {
        //Clear the gameboard array
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gameBoard[i][j] = "";
                //clear the page
                //$('.column[data-rowid=0][data-colid=0]').html('');
                $('.column[data-rowid=' + i + '][data-colid=' + j + ']').html('');
                token = player1;
            };
        };
    };
    //check the status of the game - winner or tie or continue playing
    const checkWinner = function() {
        //Dont execute the function if the game is over(set token to noplayer when the game is over)
        if (token !== noplayer) {
            //check horizontal
            for (let i = 0; i < 3; i++) {
                if (gameBoard[i][0] !== "" && gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2]) {
                    console.log(`${gameBoard[i][0]} is the winner-horizontal`);
                    //stop the game from proceeding by setting the noplayer to null.
                    token = noplayer;
                    return gameBoard[i][0];
                }
            };
            //check vertical
            for (let j = 0; j < 3; j++) {
                if (gameBoard[0][j] !== "" && gameBoard[0][j] === gameBoard[1][j] && gameBoard[0][j] === gameBoard[2][j]) {
                    console.log(`${gameBoard[0][j]} is the winner - vertical`);
                    token = noplayer;
                    return gameBoard[0][j];
                }
            }
            //check diagonal 1
            if (gameBoard[0][0] !== "" && gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2]) {
                console.log(`${gameBoard[0][0]} is the winner- diagonal`);
                token = noplayer;
                return gameBoard[0][0];
            }
            //check diagonal 2
            if (gameBoard[0][2] !== "" && gameBoard[0][2] === gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]) {
                console.log(`${gameBoard[0][2]} is the winner -diagonal`);
                token = noplayer;
                return gameBoard[0][2];
            }
            //check draw
            let counter = 0;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (gameBoard[i][j] != "") {
                        counter = counter + 1;
                    }
                }
            }
            //if the entire board is filled and there is no winner then its a draw
            if (counter === 9) {
                return "draw";
            }
        }
    }
    //when a column is clicked
    $('.column').click(function() {
        //if there is an X or O in the selected column, then return(to avoid overwriting the written cell)
        if ($(this).html() === "X" || $(this).html() === "O") {
            return;
        }
        //display token(player1 or player2) to the selected position
        $(this).html(token);
        //storing the data rowid and columnid into variables
        const current_row = $(this).data('rowid');
        const current_col = $(this).data('colid');
        //inserting token to the same position in the gameboard array.
        gameBoard[current_row][current_col] = token;
        console.log(gameBoard);
        //switch player
        if (token === player1) {
            token = player2;
        } else if (token === player2) {
            token = player1;
        }
        //Call the checkWinner() and storing it to a variable
        let winner = checkWinner();
        //if the checkWinner function has returned a value
        if (winner) {
            if (winner === 'X') {
                $('.winner').addClass('animated zoomIn');
                $('.winner').css('color', '#ffffff');
                $('.winner').html(`Player 1 (${winner}) wins`);
                //Increment win count for Player 1 and display
                xwinCount = xwinCount + 1;
                $(".player1").css('color', '#00ffe1fa');
                $(".player1").html(`Player 1 (X): ${xwinCount}`);
                // $(".player1").html(`${xwinCount}`);

            }
            if (winner === 'O') {
                $('.winner').addClass('animated zoomIn');
                $('.winner').css('color', '#ffffff');
                $('.winner').html(`Player 2 (${winner}) wins`);
                //Increment win count for Player 2 and display
                owinCount = owinCount + 1;
                $(".player2").css('color', '#00ffe1fa');
                $(".player2").html(`Player 2 (O): ${owinCount}`);
            }
            if (winner === 'draw') {
                $('.winner').addClass('animated jello');
                $('.winner').css('color', '#ffffff');
                $('.winner').html(` DRAW!`);
            }
        }
    });
    //Clear the gameBoard
    $('#reset').click(function() {
        resetBoard();
        $('.winner').html(' ');
        $('.winner').removeClass('animated zoomIn');
    });
});
