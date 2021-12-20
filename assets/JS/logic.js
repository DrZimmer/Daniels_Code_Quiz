//Javascript for Code Quiz
//setTimeout(()=> {
// console.log("hello")}, 1000)    say hello after 1 second

function startQuiz() {
  //hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  //make the questions section appear
  questionsEl.removeAttribute("class");

  //start timer
  timerId = setInterval(clockTick, 1000);

  //show starting time
  timeEl.textContent = time;

  getQuestion();
};

function getQuestion() {
  //get the current question object from the array
  var presentedQuestion = quiz[presentedQuestionIndex];
  //finish the rest of this function
};

function clickAnswer() {
  //check if user guessed wrong
  if (this.value !== quiz[presentedQuestionIndex].answer) {
    //penalize time
    time -= 10;

    if (time < 0) {
      time = 0;
    }

  //display new time on page
  timerEl.textContent = time;
  };

  //move to next question
  presentedQuestionIndex++;

  //check if the last question has been presented
  if (presentedQuestionIndex === quiz.length) {
    quizEnd();
  } else {
    getQuestion();
  }

  //anything else need to be done before showing end screen and final score here?

  //show end screen
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  //show final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  //hide the last question/answers
  questionsEl.setAttribute("class", "hide");
}

function countDownTime() {
  //update time
  time--;
  timerEl.textContent = time;

  //check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}