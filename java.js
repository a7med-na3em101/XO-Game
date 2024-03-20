const title = document.querySelector(".hedo");
title.innerHTML = `<h1 class="toto">XO Game</h1>`;
const cube1 = document.querySelector(".cube1");
const cube2 = document.querySelector(".cube2");
const cube3 = document.querySelector(".cube3");
const cube4 = document.querySelector(".cube4");
const cube5 = document.querySelector(".cube5");
const cube6 = document.querySelector(".cube6");
const cube7 = document.querySelector(".cube7");
const cube8 = document.querySelector(".cube8");
const cube9 = document.querySelector(".cube9");
const array = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9];
const start = document.querySelector(".boton1");
const restart = document.querySelector(".boton2");

let b = "X";
restart.addEventListener("click", (event) => {
    event.preventDefault();

    title.innerHTML = `<h1 class="toto">XO Game</h1>`;

    for (let i = 0; i < array.length; i++) {
        array[i].innerHTML = " ";
    }
    b = "X";
});

start.addEventListener("click", (event) => {
    event.preventDefault();
    title.innerHTML = `<h1 class="toto">${b}</h1>`;

    for (let i = 0; i < array.length; i++) {
        array[i].addEventListener("click", handleCellClick);
    }
});

function handleCellClick(event) {
    event.preventDefault();

    if (!this.innerHTML.trim()) {
        this.innerHTML = `<h1 class="toto1">${b}</h1>`;

        if (checkWinCondition()) {
            title.innerHTML = `<h1 class="toto">${b} Win's</h1>`;
            setTimeout(() => {
                resetGame();
            }, 1500);
        } else {
            b = (b === "X") ? "O" : "X";
            title.innerHTML = `<h1 class="toto">${b}</h1>`;
        }
    }
}

function checkWinCondition() {
    const winConditions = [
        // Rows
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        // Columns
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        // Diagonals
        [0, 4, 8], [2, 4, 6]
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (array[a].innerHTML.trim() !== "" &&
            array[a].innerHTML === array[b].innerHTML &&
            array[b].innerHTML === array[c].innerHTML) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    title.innerHTML = `<h1 class="toto">XO Game</h1>`;
    for (let i = 0; i < array.length; i++) {
        array[i].innerHTML = " ";
    }
    b = "X";
}

