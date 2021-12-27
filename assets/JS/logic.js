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
  //let question = document.querySelector("questionArr");
  //question.innerHTML = "<h1 class='boldQuestion'>" + q.question[presentedQuestionIndex] + "</h1>";
  //presentedQuestionElement.textContent = presentedQuestion.question;
  let question = document.getElementById("question");
  question.textContent = presentedQuestion.question;
  let choicesElement = document.getElementById("choices");
  choicesElement.textContent = "";
  //loop through the choices array
  for(var i = 0; i < presentedQuestion.choices.length; i++) {
    let choice = document.createElement("BUTTON");
    choice.setAttribute("class" , "btn btn-primary m-5 p-3");
    choice.textContent = presentedQuestion.choices[i];
    choice.addEventListener("click", function () {
      //alert(choice.textContent)
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

//TODO
//all done entering initials needs to go to local storage with var newScore on scores.js
//submit button on all done needs to send to highscores.html
function quizEnd () {
  //clearing countdown
  clearInterval(timerId);
  //hide present question
  var questionsEl = document.getElementById("quizScreen");
  questionsEl.setAttribute("class", "hide");

  //make the input initials section appear
  var completeEl = document.getElementById("enterInitials");
  completeEl.removeAttribute("class");

  //onclick first then line below
  //window.location.href = "highscores.html";
  var initialSubmit = document.getElementById("initialSubmit").onclick = function() {
    //on clicking submit after all done and initials entered...
    //save time into newScore.score, save initials into newScore.initials
    //then save into local storage
    window.location.href = "highscores.html";
  };
};

//start quiz button
var startQuizBtn = document.getElementById("begin")
startQuizBtn.addEventListener("click", startQuiz);