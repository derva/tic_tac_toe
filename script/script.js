let fields = document.querySelectorAll('.field');
let fieldsArr = Array.from(fields);
let index,mark = 'X';
let counter = 0;

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
                    
                    display();
                }
            })
        })
    })();
    return {move, display, gameBoard};
})();

let displayController = ( ()=> {
    
    return {};
})();

let Player = (name) =>{
    let getName = () => name;
    return {getName}
}

// fields.forEach( (i) => {
//     i.addEventListener('click', ()=>{
//         console.log('index: ' + i.getAttribute('data-position'));
//         index = i.getAttribute('data-position');
//         game.gameBoard[index-1]=mark;
//         i.innerText = mark;
//     })
// })
