let timeRemaining = 0;
let time = questions.length * 15;
let timerId;

let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#time");
let choicesEl = document.querySelector("#choices");
let submitBtn = document.querySelector("#submit");
let startBtn = document.querySelector("#start");
let initialsEl = document.querySelector("#initials");
let feedbackEl = document.querySelector("#feedback");
//I had help from my tutor
function startQuiz() {
  let startScreenEl = document.querySelector("#start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  timerId = setInterval(clockTick, 1000);
  timerEl.textContent = time;
  getQuestion();
}

function getQuestion() {
  //it took me a long time to figure this part out. I had help from my tutor
  let currentQuestion = questions[timeRemaining];
  let titleEl = document.querySelector("#question-title");
  titleEl.textContent = currentQuestion.title;
  choicesEl.innerHTML = "";
  // my tutor helped me with this part as well
  currentQuestion.choices.forEach(function (choice, i) {
    let choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice", "value");

    choiceNode.setAttribute("value", choice);
    //this tells js if the user got the question right or wrong
    choiceNode.textContent = i + 1 + ". " + choice;

    choiceNode.onclick = questionClick;

    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  if (this.value !== questions[timeRemaining].answer) {
    time -= 10;
    // if the user chose the wrong answer, they are penalized 10sec.
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }

  // this tells the user if they got it right or wrong
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 950);

  timeRemaining++;
  //at the end of the question length then end
  if (timeRemaining === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  clearInterval(timerId);

  let endScreenEl = document.querySelector("#end-screen");
  endScreenEl.removeAttribute("class");

  let finalScoreEl = document.querySelector("#final-score");
  finalScoreEl.textContent = time;

  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  let initials = initialsEl.value.trim();


  if (initials !== "") {
    let highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    let newScore = {
      score: time,
      initials: initials,
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    //i found this on https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;
initialsEl.onkeyup = checkForEnter;
