var startPage = document.querySelector("#start");
var quizPage = document.querySelector(".quiz-El");
var completePage = document.querySelector("#complete");
var scoresPage = document.querySelector("#scores");
var beginButton = document.querySelector("#begin-button");
var quizEl1 = document.querySelector("#quiz-1");
var correctAnswer = document.querySelector(".correct");


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

beginButton.addEventListener("click", function(event) {
    showQuizPage();
});


// quiz answers function TEST
quizPage.addEventListener("click", function(event){
    if (event.target.matches("button")) {
       console.log("clicked");
    }

    if (event.target === correctAnswer){
        console.log("yes");
    }
});



function init() {
    showStartPage();
}


init();

// submit name and score - form tag
// var formSubmission = document.querySelector("#submit");

// formSubmission.addEventListener("click", function(event){

// });