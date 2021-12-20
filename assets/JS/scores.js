//have to put in some kind of object / array 

var printHighscores = function() {


highscores = [{
  score: score,

}]


// 10-29
highscores.forEach(function(score) {
  //create a li element for each high score
  var listLi = document.createElement("li");
  listLi.textContent = score.initials + " - " + score.score;

  //display on the page
  var olEl = document.getElementById("highscores");
  olEl.appendChild(listLi);
});
}

function deleteHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
};

document.getElementById("clear").onclick = deleteHighscores;

//run function when the page loads
printHighscores();