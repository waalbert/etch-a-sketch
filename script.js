const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear");
const alertText = document.querySelector("#text");
const squaresBtn = document.querySelector("#squaresBtn");
squaresBtn.addEventListener("click", () => {
    resetGrid();
    generateGrid(getNumSquares());
    addFunctionality();
});

function resetGrid() {
    container.textContent = "";
    alertText.textContent = "";
}

function getNumSquares() {
    let numSquares = Number(prompt("How many squares?"));
    if (numSquares === 0) { /* An empty string converted to a number is 0. 
                            Therefore,if the user cancels the prompt, a 16 x 16 grid will be automatically formed. */
        numSquares = 16;
        alertText.textContent = "You canceled the prompt. A 16 x 16 grid has been created for you.";
    } else if (numSquares > 100) {
        numSquares = 100;
        alertText.textContent = "You cannot input a number greater than 100. Instead, a 100 x 100 grid has been created for you.";
    }
    container.style["grid-template-rows"] = `repeat(${numSquares}, 1fr)`;
    container.style["grid-template-columns"] = `repeat(${numSquares}, 1fr)`;
    return numSquares;
}

function generateGrid(numSquares) {
    for (let i = 0; i < numSquares ** 2; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = "square";
        container.appendChild(newDiv);
    }
}

function addFunctionality() {
    const divs = document.querySelectorAll("#square");
    divs.forEach(div => div.addEventListener("mouseover", () => {
        div.style.backgroundColor = randomizeColors();
    }));
    clearBtn.addEventListener("click", () => divs.forEach(div => div.style.backgroundColor = "#FFFFFF"));
}

function randomizeColors() {
    return `rgb(${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)})`
}