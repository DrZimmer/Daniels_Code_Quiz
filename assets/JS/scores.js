//get highscores from local storage
function printHighscores() {

  //get from local storage
  var highscores = JSON.parse(localStorage.getItem("highscores"));
  //loops through each highscore in array to create as li on page
  highscores.forEach(function(highscores) {
  //create a li element for each high score
  var listLi = document.createElement("li");
  listLi.textContent = highscores.initials + " - " + highscores.score;
  listLi.setAttribute("class" , "finalScores");

  //display on the page
  var olEl = document.getElementById("loadedScores");
  olEl.appendChild(listLi);
});
};

//clear high scores from local storage and reload page
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
};

//button click for clearing high scores
document.getElementById("clear").onclick = clearHighscores
//run function when the page loads
printHighscores();