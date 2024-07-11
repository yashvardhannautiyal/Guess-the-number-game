let randomNum = Math.floor(Math.random() * 100 + 1);
let chances = 0;

function check() {
  do {
    let guessNum = document.getElementById("guess");
    guessNum = parseInt(guessNum.value);

    if (guessNum == randomNum) {
      document.getElementById("answer").textContent =
        "Congratulations!! You won";
      ++chances;
      let score = 100 - chances;
      document.getElementById("score").textContent = "Your score is " + score;
    } else if (guessNum < randomNum) {
      document.getElementById("answer").textContent =
        "You guessed smaller number! Try Again!!";
      ++chances;
      let score = 100 - chances;
      document.getElementById("score").textContent = "Your score is " + score;
    } else if (guessNum > randomNum) {
      document.getElementById("answer").textContent =
        "You guessed a higher number! Try Again!!";
      ++chances;
      let score = 100 - chances;
      document.getElementById("score").textContent = "Your score is " + score;
    }
  } while (guessNum != randomNum);
}
