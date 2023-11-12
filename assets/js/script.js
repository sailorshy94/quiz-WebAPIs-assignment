var startPage = document.querySelector("#start");
var quizPage = document.querySelector("#quiz");
var completePage = document.querySelector("#complete");
var scoresPage = document.querySelector("#scores");


function showStartPage() {
    startPage.style.display = null;
    quizPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
}

function showQuizPage() {
    startPage.style.display = "none";
    quizPage.style.display = null;
    completePage.style.display = "none";
    scoresPage.style.display = "none";
}

function showCompletePage() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    completePage.style.display = null;
    scoresPage.style.display = "none";
}

function showScoresPage() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = null;
}

function init() {
    showStartPage();
}

init();

