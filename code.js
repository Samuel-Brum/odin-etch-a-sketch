container = document.querySelector('#container');

const INIT_SQUARES = 10;

function createGrid(numberOfSquares) {
    const container = document.getElementById("container");
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    let grid = document.getElementById("container");
    grid.setAttribute("style", "grid-template-rows: repeat(" + numberOfSquares + ", 12px);");
    grid.setAttribute("style", "grid-template-columns: repeat(" + numberOfSquares + ", 12px);");

    for (let i = 0; i < INIT_SQUARES * INIT_SQUARES; i++) {
        const div = document.createElement('div');
        div.className = 'square';
        div.onmouseover = function () {
            div.style.backgroundColor = "black";
        }
        container.appendChild(div);
        div.style.width = height/numberOfSquares+"px";
        div.style.height = height/numberOfSquares+"px";
    };
}

function deleteChild(parentNode) {
    let parent = document.getElementById(parentNode);
    let first = parent.firstElementChild;
    while (first) {
        first.remove();
        first = parent.firstElementChild;
    }
}

function resetGrid() {
    let allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => {
        square.setAttribute("style", "backgroundColor: white;");
    });
}

function changeGrid() {
    const newSize = document.getElementById('size_of_grid').value;
    if (newSize != "") {
        deleteChild('container');
        createGrid(newSize);
    } else {
        document.getElementById('form_label').innerHTML = "You must enter a valid number";
    }
}

createGrid(INIT_SQUARES);