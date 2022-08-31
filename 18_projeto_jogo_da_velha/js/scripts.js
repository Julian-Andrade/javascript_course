let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// Plays count
let player1 = 0;
let player2 = 0;

// Add event click at the boxes
for (let i = 0; i < boxes.length; i++) {
  // When someone clicks on the box
  boxes[i].addEventListener("click", function () {
    let mark = checkMark(player1, player2);

    // Verify if have "X" ou "O"
    if (this.childNodes.length == 0) {
      let cloneMark = mark.cloneNode(true);

      this.appendChild(cloneMark);

      // Computation played
      if (player1 == player2) {
        player1++;

        if (secondPlayer == "ia-player") {
          // Function about exec game
          computerPlay();
          player2++;
        }
      } else {
        player2++;
      }

      // Check who win
      checkWinCondtion();
    }
  });
}

// Event choose a player or IA
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    secondPlayer = this.getAttribute("id");

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none";
    }

    setTimeout(function () {
      let container = document.querySelector("#container");
      container.classList.remove("hide");
    }, 500);
  });
}

// Verify who will play
function checkMark(player1, player2) {
  if (player1 == player2) {
    // X
    mark = x;
  } else {
    // O
    mark = o;
  }
  return mark;
}

// Verify who will win
function checkWinCondtion() {
  let b1 = document.querySelector("#box1");
  let b2 = document.querySelector("#box2");
  let b3 = document.querySelector("#box3");
  let b4 = document.querySelector("#box4");
  let b5 = document.querySelector("#box5");
  let b6 = document.querySelector("#box6");
  let b7 = document.querySelector("#box7");
  let b8 = document.querySelector("#box8");
  let b9 = document.querySelector("#box9");

  // Horizontal Win
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      // X Win
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      // O Win
      declareWinner("o");
    }
  }

  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      // X Win
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      // O Win
      declareWinner("o");
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      // X Win
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      // O Win
      declareWinner("o");
    }
  }

  // Vertical Win
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      // X Win
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      // O Win
      declareWinner("o");
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      // X Win
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      // O Win
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      // X Win
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      // O Win
      declareWinner("o");
    }
  }

  // Diagonal Win
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      // X Win
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      // O Win
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      // X Win
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      // O Win
      declareWinner("o");
    }
  }

  // End game
  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declareWinner("Final do jogo!");
  }

  // Clean the game, declare the winner and att the score

  function declareWinner(winner) {
    let scoreboardX = document.querySelector("#first-scoreboard");
    let scoreboardO = document.querySelector("#second-scoreboard");
    let msg = "";

    if (winner == "x") {
      scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
      msg = "Jogador 01 ganhou a partida!";
    } else if (winner == "o") {
      scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
      msg = "Jogador 02 ganhou a partida!";
    } else {
      msg = "Final de jogo!";
    }

    // Show the message
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // Hide message
    setTimeout(() => {
      messageContainer.classList.add("hide");
    }, 2000);

    // Reset score
    player1 = 0;
    player2 = 0;

    // Remove marks
    let boxesToRemove = document.querySelectorAll(".box div");

    for (let i = 0; i < boxesToRemove.length; i++) {
      boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
  }
}

// Function about IA execution
function computerPlay() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;

  // Mark if just box has empty
  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);
    if (boxes[i].childNodes[0] == undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneO);
        counter++;
        break;
      }
      // Check how many boxes are marked
    } else {
      filled++;
    }
  }

  if (counter == 0 && filled < 9) {
    computerPlay();
  }
}
