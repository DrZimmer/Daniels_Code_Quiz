//creating li for all highscores 

function printHighscores() {
  var highscores = {
    score: time,
    initials: initials
  };
  var highscores = JSON.parse(localStorage.getItem("highscores"));

  highscores.forEach(function(highscores) {
  //create a li element for each high score
  var listLi = document.createElement("li");
  listLi.textContent = highscores.initials + " - " + highscores.score;

  //display on the page
  var olEl = document.getElementById("#loadedScores");
  olEl.appendChild(listLi);
});
};

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
};

document.getElementById("clear").onclick = clearHighscores
//run function when the page loads
printHighscores();