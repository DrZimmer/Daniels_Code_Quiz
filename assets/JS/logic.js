//Javascript for Code Quiz
var time = 75;
var timerEl = document.querySelector("#timer");
var presentedQuestionElement = document.getElementById("quizScreen");
var timerId;


function startQuiz() {
  //hide start screen
  var startScreenEl = document.getElementById("startQuiz");
  startScreenEl.setAttribute("class", "hide");

  //make the questions section appear
  var questionsEl = document.getElementById("quizScreen");
  questionsEl.removeAttribute("class");

  //start timer
  timerId = setInterval(countDownTime, 1000);

  getQuestion();
};

let presentedQuestionIndex = 0;

function getQuestion() {

  //get the current question object from the array
  let presentedQuestion = quiz[presentedQuestionIndex];
  
  //set question and choices to text
  let question = document.getElementById("question");
  question.textContent = presentedQuestion.question;
  let choicesElement = document.getElementById("choices");
  choicesElement.textContent = "";
  //loop through the choices array
  for(var i = 0; i < presentedQuestion.choices.length; i++) {
    let choice = document.createElement("BUTTON");
    choice.setAttribute("class" , "btn btn-primary m-4 p-3");
    choice.textContent = presentedQuestion.choices[i];
    choice.addEventListener("click", function () {
      clickAnswer(choice.textContent)
  });
    choicesElement.appendChild(choice);
  };
};

function clickAnswer(choice) {
  //check if user guessed wrong
  if (choice !== quiz[presentedQuestionIndex].answer) {
    //subtract time
    alert("wrong");
    time -= 10;

    if (time < 0) {
      time = 0;
    }

  //display new time on page
  timerEl.textContent = time;
  } else {
    alert("right");
  }

  //move to next question
  presentedQuestionIndex++;

  //check if the last question has been presented
  if (presentedQuestionIndex === quiz.length) {
    quizEnd();
  } else {
    getQuestion();
  }
};

function countDownTime() {
  //update time
  time--;
  timerEl.textContent = "Time: " + time;

  //check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
};


function quizEnd () {
  //clearing countdown
  clearInterval(timerId);
  //hide present question
  var questionsEl = document.getElementById("quizScreen");
  questionsEl.setAttribute("class", "hide");

  //make the input initials section appear
  var completeEl = document.getElementById("enterInitials");
  completeEl.removeAttribute("class");

  document.getElementById("initialSubmit").addEventListener("click", function () {
    let getHighscores = JSON.parse(localStorage.getItem("highscores")) || [];
    //on clicking submit after all done and initials entered...
    //save input initials into initials
    let initials = document.getElementById("initials").value;
    var highscores = {
      score: time,
      initials: initials
    };
    getHighscores.push(highscores);
    //then save into local storage
    localStorage.setItem("highscores", JSON.stringify(getHighscores));
    //send user to highscores.html after click submit
    window.location.href = "highscores.html";
  });
};

//start quiz button
var startQuizBtn = document.getElementById("begin")
startQuizBtn.addEventListener("click", startQuiz);