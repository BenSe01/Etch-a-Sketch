let rows = 16;
let cols = 16;
const gridSide = 600;

const gridContainer = document.querySelector(".grid-container");
gridContainer.style.width = `${gridSide}px`;
gridContainer.style.height = `${gridSide}px`;


function createGrid() {
    for (let i = 0; i < (rows * cols); i++) {
       const gridCell = document.createElement("div");
       
       gridCell.style.width = `${(gridSide / cols) - 2}px`;
       gridCell.style.height = `${(gridSide / rows) - 2}px`;
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



createGrid();



