let fields = document.querySelectorAll('.field');
let fieldsArr = Array.from(fields);
let index,mark = 'X';

let game = ( () => {
    let gameBoard = [];
    let move = () => {
        fields.forEach( (i) => {
            i.addEventListener('click', ()=>{
                console.log(i.getAttribute('data-position'));
                index = i.getAttribute('data-position');
                gameBoard[index] = mark;
                i.innerText = mark;
            })
        })
    }
    let display = () =>{
        console.log(gameBoard);
    }
    return {move, display,gameBoard};
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