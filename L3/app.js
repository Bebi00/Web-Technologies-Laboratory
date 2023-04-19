
const DEFAULT_COLOR = "yellow";
const GRID_COLOR = "white";

var container = document.getElementById("container-cells");
var color = DEFAULT_COLOR;
var gridColor = GRID_COLOR;
let SIZE = 20;

function createGrid(SIZE){
    container.style.gridTemplateColumns = `repeat(${SIZE}, 1fr)`
    container.style.gridTemplateRows = `repeat(${SIZE}, 1fr)`
    for (var i = 0; i < SIZE*SIZE; i++) {
        const cell = document.createElement('div');
        cell.classList.add('square-cell');
        cell.style.backgroundColor = gridColor;
        const text = document.createTextNode(i+1);
        cell.append(text)
        cell.addEventListener("click", paint);
        container.appendChild(cell);
    }
}

function paint(e){
    e.target.style.backgroundColor = color;
}

function removeGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}
var sizeValue = document.getElementById('sizeValue');

function updateGrid(SIZE){
    removeGrid();
    createGrid(SIZE);
    sizeValue.innerHTML = `${SIZE} x ${SIZE}`
    container.setAttribute("style","grid-template-columns: repeat("+SIZE+",1fr);");
}


var slider = document.getElementById("myRange");
slider.oninput = function() {
    SIZE = this.value;
    console.log(SIZE);
    updateGrid(SIZE);
}


window.onload = () => {
    createGrid(SIZE);
}



