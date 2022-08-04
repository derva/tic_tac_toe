let fields = document.querySelectorAll('.field');
let fieldsArr = Array.from(fields);
let index,mark = 'X';
let counter = 0;
let restartButton = document.getElementById('restartButton');


let game = ( () => {
    let gameBoard = [];
    let display = () =>{
        console.log(gameBoard);
    }
    let move = (() => {
        fields.forEach( (i) => {
            i.addEventListener('click', () => {
                index = i.getAttribute('data-position');
                // console.log(i.getAttribute('data-position'));
                if(gameBoard[index-1] == 'X' || gameBoard[index-1] == 'O'){
                    alert('cannot play there');
                }
                else{
                    //counter ? (mark ='X'; counter =1) : (mark='O'; counter = 0);
                    if(counter == 0){
                        mark = 'X';
                        counter =1;
                    }else{
                        mark = 'O';
                        counter = 0;
                    }
                    gameBoard[index-1] = mark;
                    i.innerText = mark;
                    
                    // display();
                    displayController.checkWinner();
                    // displayController.checkColumns();
                }
            })
        })
    })();
    return {move, display, gameBoard};
})();

let displayController = ( ()=> {
    let restart = () => {
        
    }
    let winner = (name) => {
        alert('Player ' + name + ' win this game!');
    }
    let checkRows = () =>{
        if(game.gameBoard[0] === game.gameBoard[1] && game.gameBoard[1] === game.gameBoard[2]){
            if(!(game.gameBoard[0] == undefined &&game.gameBoard[1] == undefined && game.gameBoard[2] == undefined)){
                console.log('winner in row1, and winner is: ' + game.gameBoard[0]);
                winner(game.gameBoard[0]);
            }
        }
        else if(game.gameBoard[3] === game.gameBoard[4] && game.gameBoard[4] === game.gameBoard[5]){
            if(!(game.gameBoard[3] == undefined &&game.gameBoard[4] == undefined && game.gameBoard[5] == undefined)){
                console.log('winner in row2, and winner is: ' + game.gameBoard[3]);
                winner(game.gameBoard[3]);
            }
        }
        else if(game.gameBoard[6] === game.gameBoard[7] && game.gameBoard[7] === game.gameBoard[8]){
            if(!(game.gameBoard[6] == undefined &&game.gameBoard[7] == undefined && game.gameBoard[8] == undefined)){
                console.log('winner in row3, and winner is: ' + game.gameBoard[6]);
                winner(game.gameBoard[6]);
            }
        }
    }

    let checkColumns = () =>{
        if(game.gameBoard[0] === game.gameBoard[3] && game.gameBoard[3] === game.gameBoard[6]){
            if(!(game.gameBoard[0] == undefined &&game.gameBoard[3] == undefined && game.gameBoard[6] == undefined)){
                console.log('winner in column1, and winner is: ' + game.gameBoard[0]);
                winner(game.gameBoard[0]);
            }
        }
        else if(game.gameBoard[1] === game.gameBoard[4] && game.gameBoard[4] === game.gameBoard[7]){
            if(!(game.gameBoard[1] == undefined &&game.gameBoard[4] == undefined && game.gameBoard[7] == undefined)){
                console.log('winner in column2, and winner is: ' + game.gameBoard[4]);
                winner(game.gameBoard[4]);
            }
        }
        else if(game.gameBoard[2] === game.gameBoard[5] && game.gameBoard[5] === game.gameBoard[8]){
            if(!(game.gameBoard[2] == undefined &&game.gameBoard[5] == undefined && game.gameBoard[8] == undefined)){
                console.log('winner in column3, and winner is: ' + game.gameBoard[5]);
                winner(game.gameBoard[5]);
            }
        }
    }
    let checkDiagonals = () =>{
        if(game.gameBoard[0] === game.gameBoard[4] && game.gameBoard[4] === game.gameBoard[8]){
            if(!(game.gameBoard[0] == undefined && game.gameBoard[4] == undefined && game.gameBoard[8] == undefined)){
                console.log('winner in digaonal1, and winner is: ' + game.gameBoard[0]);
                winner(game.gameBoard[0]);
            }
        }
        else if(game.gameBoard[2] === game.gameBoard[4] && game.gameBoard[4] === game.gameBoard[6]){
            if(!(game.gameBoard[2] == undefined && game.gameBoard[4] == undefined && game.gameBoard[6] == undefined)){
                console.log('winner in diagonal2, and winner is: ' + game.gameBoard[4]);
                winner(game.gameBoard[4]);
            }
        }
    }
    let checkWinner = () => {
        checkRows();
        checkColumns();
        checkDiagonals();
        
    }
    return {checkWinner,restart};
})();

let Player = (name) =>{
    let getName = () => name;
    return {getName}
}

let id = Array.from(document.querySelectorAll('.field'));

restartButton.addEventListener('click', () => {
    for(i = 0; i < 9; i++){
        
        game.gameBoard[i] = undefined;
        id[i].innerText = '';
        // console.log('i: ' + i);
    }
});
// fields.forEach( (i) => {
//     i.addEventListener('click', ()=>{
//         console.log('index: ' + i.getAttribute('data-position'));
//         index = i.getAttribute('data-position');
//         game.gameBoard[index-1]=mark;
//         i.innerText = mark;
//     })
// })
