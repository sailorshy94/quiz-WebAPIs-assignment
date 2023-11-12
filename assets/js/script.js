var startPage = document.querySelector("#start");
var completePage = document.querySelector("#complete");
var scoresPage = document.querySelector("#scores");
var beginButton = document.querySelector("#begin-button");
var question1 = document.querySelector("#quiz-1");
var question2 = document.querySelector("#quiz-2");
var question3 = document.querySelector("#quiz-3");
var question4 = document.querySelector("#quiz-4");
var question5 = document.querySelector("#quiz-5");
var question6 = document.querySelector("#quiz-6");
var correctAnswer = document.querySelector(".correct");
var repeatQuizBtn = document.querySelector("#again");
var highScoresBtn = document.querySelector("#high-scores");

function showStartPage() {
    startPage.style.display = null;
    question1.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
}

function showCompletePage() {
    startPage.style.display = "none";
    question1.style.display = "none";
    completePage.style.display = null;
    scoresPage.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
}

function showScoresPage() {
    startPage.style.display = "none";
    question1.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = null;
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
}

function showQuestion1() {
    startPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question1.style.display = null;
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
}

function showQuestion2() {
    startPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question1.style.display = "none";
    question2.style.display = null;
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
}

function showQuestion3() {
    startPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = null;
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = "none";
}

function showQuestion4() {
    startPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = null;
    question5.style.display = "none";
    question6.style.display = "none";
}

function showQuestion5() {
    startPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = null;
    question6.style.display = "none";
}

function showQuestion6() {
    startPage.style.display = "none";
    completePage.style.display = "none";
    scoresPage.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    question6.style.display = null;
}

function playAgain() {
    repeatQuizBtn.addEventListener("click", function (event) {
        // showStartPage();
        console.log("play again");
    })
};

beginButton.addEventListener("click", function (event) {
    showQuestion1();
});

question1.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        showQuestion2();
    }

    if (event.target === correctAnswer) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
});

question2.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        showQuestion3();
    }
});

question3.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        showQuestion4();
    }
});

question4.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        showQuestion5();
    }
});

question5.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        showQuestion6();
    }
});

question6.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        showCompletePage();
    }
});

completePage.addEventListener("click", function (event) {
    playAgain();
});

// does not work
// scoresPage.addEventListener("click", function (event){
//     if (event.target === repeatQuizBtn){
//         showStartPage();
//     }
// })

function init() {
    showStartPage();
}


init();

// submit name and score - form tag
// var formSubmission = document.querySelector("#submit");

// formSubmission.addEventListener("click", function(event){

// });