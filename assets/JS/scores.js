//have to put in some kind of object / array 
var newScore = {
  score: time,
  initials: initials
};

var initialSubmit = document.getElementById("initialSubmit").onclick = function() {
  //on clicking submit after all done and initials entered...
  //save time into newScore.score, save initials into newScore.initials
  //then save into local storage
  window.location.href = "highscores.html";
};

var startQuizBtn = document.getElementById("begin")
startQuizBtn.addEventListener("click", startQuiz);

var printHighscores = function() {


var highscores = [{
  score: time,

}];

// highscores.forEach(function(score) {
//   //create a li element for each high score
//   var listLi = document.createElement("li");
//   listLi.textContent = score.initials + " - " + score.score;

//   //display on the page
//   var olEl = document.getElementById("#loadedScores");
//   olEl.appendChild(listLi);
// });
// }

// function deleteHighscores() {
//   window.localStorage.removeItem("highscores");
//   window.location.reload();
// };

// //document.getElementById("#clear").onclick(deleteHighscores); (something is broken with this?)

// //run function when the page loads
// printHighscores();
}