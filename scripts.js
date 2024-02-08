let squaresPerSide = 16
const gridSide = 600;

const gridContainer = document.querySelector(".grid-container");
gridContainer.style.width = gridContainer.style.height = `${gridSide}px`;


function createGrid(squaresPerSide) {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${gridSide / squaresPerSide - 2}px`


    for (let i = 0; i < numOfSquares; i++) {
       const gridCell = document.createElement("div");
       gridCell.style.width = gridCell.style.height = widthOrHeight;
       gridCell.classList.add("cell"); 

       gridContainer.appendChild(gridCell);
       
       gridCell.addEventListener("mouseover", hoverOverBlack);

       // Color the Grid Black
       function hoverOverBlack() {
        gridCell.classList.add("hoverOver");

        // Reset Button
        const resetBTN = document.querySelector("#resetBTN");

        function resetGrid() {
            gridCell.classList.remove("hoverOver");
        }

        resetBTN.addEventListener("click", resetGrid);
    }
    }
    
}

const sizeBTN = document.querySelector("#sizeBTN");


function getSize() {
    let newSize = prompt("How many cells per Side do you want? (2 - 100)");
    
    if (newSize > 100 || newSize < 1) {
        newSize = prompt("Invalid Input, please enter a Number from 2 to 100");
    }else if (newSize >= 2 && newSize <= 100) {
        removeGrid();
        createGrid(newSize);
    }else if (newSize.typeOf !== "number") {
        newSize = prompt("Invalid Input, please enter a Number from 2 to 100");
    }
}

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


createGrid(16);



