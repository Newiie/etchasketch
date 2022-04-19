let color = 'black';
function populateBoard(size) {
    const board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let squares = document.querySelectorAll('.box');
    squares.forEach(square => square.remove());

    for (let i = 0; i < size * size; i++)
    {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = 'background: white;'
        box.addEventListener('mouseover', hover);
        board.appendChild(box);
    }
}

populateBoard(16);

function hover() {
    if (color === 'random')
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    else
        this.style.backgroundColor = color;
}

function changeSize(size) {
    let error = document.querySelector('.error');

    if (size >= 2 || size <= 100) {
        populateBoard(size);
        error.style.display = 'none';
    }
    else {
        error.style.display = 'flex';
        console.log('Error');
    }

}

function changeColor(input) {
    color = input;
}

function resetColor() {
    let squares = document.querySelectorAll('.box');
    squares.forEach(square => square.style.backgroundColor = 'white');
}
