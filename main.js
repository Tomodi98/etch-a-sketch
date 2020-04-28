const container = document.querySelector('#container');
let content = [];

let number = 16;
let numberOfPixels = number*number; //pixels (divs) in a row / column.

let buttonClear;

let sizeOfCanvas = 320;
let sizeOfPixels = sizeOfCanvas / number;

buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', clearGrid);
buttonClear.addEventListener('click', changeGridSize);
buttonClear.addEventListener('click', setGridSize);

setGridSize();

function setGridSize () {
    sizeOfPixels = sizeOfCanvas / number;
    for (let i = 0; i < numberOfPixels; i++) {

        content[i] = document.createElement('div');
        content[i].classList.add('content');

        content[i].style.width = sizeOfPixels + 'px';
        content[i].style.height = sizeOfPixels + 'px';

        content[i].addEventListener('mouseover', changeColor);
        container.appendChild(content[i]);
}


}

function changeColor () {
    this.style.backgroundColor = 'black';
}

function clearGrid () {
    for (let i = 0; i < numberOfPixels; i++) {
        content[i].style.backgroundColor = 'lightgray';
    }
}

function changeGridSize () {
    for (let i = 0; i < numberOfPixels; i++) {
        content[i].remove();
    }

    do {
        number = prompt('Select canvas size (between 1 and 100): ');
    } while (number < 1 || number > 100);

    numberOfPixels = number*number;
}