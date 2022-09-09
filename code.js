container = document.querySelector('#container');

const INIT_SQUARES = 5;


function createGrid(numberOfSquares) {
    const container = document.getElementById("container");
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    container.style.setProperty("--grid-rows", numberOfSquares);
    container.style.setProperty("--grid-cols", numberOfSquares);

    for (let i = 0; i < INIT_SQUARES; i++) {
        const div = document.createElement('div');
        div.className = 'square';
        container.appendChild(div);
        div.style.width = height/numberOfSquares+"px";
        div.style.height = height/numberOfSquares+"px";
    };
}

createGrid(INIT_SQUARES);