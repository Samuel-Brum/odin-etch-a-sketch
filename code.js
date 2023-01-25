container = document.querySelector('#container');

const INIT_SQUARES = 12;


function createGrid(numberOfSquares) {
    const container = document.getElementById("container");
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    let grid = document.getElementById("container");
    grid.setAttribute("style", "grid-template-rows: repeat(" + numberOfSquares + ", 1fr)");
    grid.setAttribute("style", "grid-template-columns: repeat(" + numberOfSquares + ", 12px)");

    for (let i = 0; i < INIT_SQUARES * INIT_SQUARES; i++) {
        const div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
        div.style.width = height/numberOfSquares+"px";
        div.style.height = height/numberOfSquares+"px";
    };
}

createGrid(INIT_SQUARES);