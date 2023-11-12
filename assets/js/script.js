var startPage = document.querySelector("#start");
// var quizPage = document.querySelector(".quiz-El");
var completePage = document.querySelector("#complete");
var scoresPage = document.querySelector("#scores");
var beginButton = document.querySelector("#begin-button");
var question1 = document.querySelector("#quiz-1");
var question2 = document.querySelector("#quiz-2");
var correctAnswer = document.querySelector(".correct");


function showStartPage() {
    startPage.style.display = null;
    question1.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question2.style.display = "none";
}

function showQuestion1 (){
    startPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question1.style.display = null;
    question2.style.display = "none";
}

function showQuestion2 (){
    startPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question1.style.display = "none";
    question2.style.display = null;
}

function showCompletePage() {
    startPage.style.display = "none";
    question1.style.display = "none";
    completePage.style.display = null;
    scoresPage.style.display = "none";
    question2.style.display = "none";
}

function showScoresPage() {
    startPage.style.display = "none";
    question1.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = null;
    question2.style.display = "none";
}

beginButton.addEventListener("click", function(event) {
    showQuestion1();
});

question1.addEventListener("click", function(event){
    if (event.target.matches("button")){
        showQuestion2();
    }
});

// question1.addEventListener("click", function(event){
//     if (event.target.matches("button")) {
//        console.log("clicked");
//     }

//     if (event.target === correctAnswer){
//         console.log("yes");
//     }
// });



function init() {
    showStartPage();
}


init();

// submit name and score - form tag
// var formSubmission = document.querySelector("#submit");

// formSubmission.addEventListener("click", function(event){

// });