console.log("welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let audiogameOver = new Audio("gameover.mp3");
let turn = "X";
let gameOver = false;

// function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// function to check win
const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 65, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxText[e[0]].innerText + " won ";
      gameOver = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
    }
  });
};

// game logic
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((Element) => {
  let boxText = Element.querySelector(".boxText");
  Element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          " Turn of " + turn;
      }
    }
  });
});

// Add onClick AddListner to reset button

reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach((Element) => {
    Element.innerText = "";
  });
  turn = "X";
  gameOver = false;
  document.getElementsByClassName("info")[0].innerText = " Turn of " + turn;
  document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width =
    "0px";
  document.querySelector(".line").style.width = "0vw";
});

