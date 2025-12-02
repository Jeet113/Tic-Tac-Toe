let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".btn");
let newGame = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;
let count = 0;

const winner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame = () => {
    turn0 = true;
    count = 0;
    enableboxes();
    msg.innerText = "";
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        count++;
        let win = checkwinner();
        if (count === 9 && !win) {
            gamedraw();
        }
    });
});

const gamedraw = () => {
    msg.innerText = `Game Draw!!`;
    disableboxes();
};

const checkwinner = () => {
    for (let p of winner) {
        let pos1 = boxes[p[0]].innerText;
        let pos2 = boxes[p[1]].innerText;
        let pos3 = boxes[p[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner winner");
                showWinner(pos1);
                return true;
            }
        }
    }
};

const showWinner = (w) => {
    msg.innerText = `Congratulation!! Winner is ${w}`;
    disableboxes();
};

const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disableboxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};

resetButton.addEventListener("click", resetgame);
newGame.addEventListener("click", resetgame);