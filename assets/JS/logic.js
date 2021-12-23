//Javascript for Code Quiz
//setTimeout(()=> {
// console.log("hello")}, 1000)    say hello after 1 second
var time = 75;
var timerEl = document.querySelector("timer")


function startQuiz() {
  //hide start screen
  var startScreenEl = document.getElementById("startQuiz");
  startScreenEl.setAttribute("class", "hide");

  //make the questions section appear
  var questionsEl = document.getElementById("quizScreen");
  questionsEl.removeAttribute("class");

  //start timer
  // timerId = setInterval(countDownTime(), 1000);

  //show starting time

  //timerEl.textContent = time; //something is broken here?

  getQuestion();
};

function getQuestion() {
  
  let presentedQuestionIndex = 0;
  //get the current question object from the array
  let q = quiz.question[presentedQuestionIndex];
  let question = document.querySelector("questionArr");
  question.innerHTML = "<h1 class='boldQuestion'>" + q.question[presentedQuestionIndex] + "</h1>";

  //loop through the choices array
  for(var i = 0; i < quiz.choices.length -1; i++) {
    presentedQuestion.innerHTML = "<btn class='answerButtons'>" + quiz.choices[i] + "</ul>";
  }

  //testing this out below for how to subtract time
  btn.setAttribute("class", "pickedMe");
  let answerSelected = document.querySelector("pickedMe")
  startQuizBtn.addEventListener("click", startQuiz);
};

function clickAnswer() {
  //check if user guessed wrong
  if (this.value !== quiz[presentedQuestionIndex].answer) {
    //subtract time
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
};

function countDownTime() {
  //update time
  // time--;
  // timerEl.textContent = time;

  //check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
};

function quizEnd () {
  //hide present question
  var questionsEl = document.getElementById("quizScreen");
  questionsEl.setAttribute("class", "hide");

  //make the input initials section appear
  var completeEl = document.getElementById("enterInitials");
  completeEl.removeAttribute("class");
};

//start quiz button
var startQuizBtn = document.getElementById("begin")
startQuizBtn.addEventListener("click", startQuiz);