let boxes = document.querySelectorAll(".box");
let resetbt = document.querySelector("#resetbuttone");
let newgamebt = document.querySelector("#new-bt");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked ");
    if (turn) {
      box.innerText = "0";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }

    box.disabled = true;
    checkwinner();
  });
});

const resetgame = () => {
  turn = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const desableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showwinner = (winner) => {
  msg.innerText = `WINNER is --- ${winner}`;
  msgcontainer.classList.remove("hide");
  desableboxes();
};
const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
      }
    }
  }
};

resetbt.addEventListener("click", resetgame);
newgamebt.addEventListener("click", resetgame);
