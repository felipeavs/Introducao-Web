const X_IMAGE_URL = 'x.png'
const O_IMAGE_URL = 'o.png'

const freeBoxes = [];
const takenBoxes = {};
const allBoxes = document.querySelectorAll('#grid div');
for(const box of allBoxes){
    box.addEventListener('click', changeToX);
    freeBoxes.push(box);
}

function getWinner(){
    //verificar linhas
    let rowResult = checkBoxes('one', 'two', 'three') || checkBoxes('four', 'five', 'six') || checkBoxes('seven', 'eight', 'nine');
    //verificar colunas
    let colResult = checkBoxes('one', 'four', 'seven') || checkBoxes('two', 'five', 'eight') || checkBoxes('three', 'six', 'nine');
    //verificar diagonal
    let diagonalResult = checkBoxes('one', 'five', 'nine') || checkBoxes('three', 'five', 'seven'); 

    return rowResult || colResult || diagonalResult;
}

function checkBoxes(one, two, three){
    if(takenBoxes[one] !== undefined && takenBoxes[one] === takenBoxes[two] && takenBoxes[two] === takenBoxes[three]){
        return takenBoxes[one];
    }
    return null;
}

function displayWinner(){
    const winner = getWinner();

    const resultContainer = document.querySelector('#results');
    const header = document.createElement('h1');

    if(winner === 'x'){
        header.textContent = 'You win!';
    }
    else if(winner === 'o'){
        header.textContent = 'Computer wins!';
    }
    else{
        header.textContent = 'Tie';
    }
    resultContainer.appendChild(header);
}

function changeToX(event){
    assingSpace(event.currentTarget, 'x');

    if(isGameOver()){
        displayWinner();
    }
    else{
        computerChoose();
    }
}

function assingSpace(sapace, owner){
    const image = document.createElement('img');
    image.src = owner === 'x' ? X_IMAGE_URL : O_IMAGE_URL;
    sapace.appendChild(image);

    takenBoxes[sapace.id] = owner;
    const indexToRemove = freeBoxes.indexOf(sapace);
    freeBoxes.splice(indexToRemove, 1);
    sapace.removeEventListener('click', changeToX)
}

function computerChoose(){
    //const allBoxes = document.querySelectorAll('#grid div');
    const index = Math.floor(Math.random() * freeBoxes.length);
    const freeSpace = freeBoxes[index]
    
    assingSpace(freeSpace, 'o');
    if(isGameOver()){
        displayWinner();
    }
}

function isGameOver(){
    return freeBoxes.length === 0 || getWinner() !== null;
}


const boxes = document.querySelectorAll('#grid div');
for(const box of boxes){
    box.addEventListener('click', changeToX);
}