//TODO
//on highscores.html add newScore object/array? to local storage (see below)
var newScore = {
  score: time,
  initials: initials
};

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