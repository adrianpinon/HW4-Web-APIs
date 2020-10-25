function printHighscores() {
 let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
 // the .sort I got from my tutor
  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  highscores.forEach(function (score) {
    let liTag = document.createElement("li");
    liTag.textContent = score.initials + " - " + score.score;

    let olEl = document.querySelector("#highscores");
    olEl.appendChild(liTag);
  });
}

function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}

document.querySelector("#clear").onclick = clearHighscores;

printHighscores();
