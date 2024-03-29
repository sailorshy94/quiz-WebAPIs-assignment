var startPage = document.querySelector("#start");
var completePage = document.querySelector("#complete");
var scoresPage = document.querySelector("#scores");
var startScoresPage = document.querySelector("#view-scores-start");
var beginButton = document.querySelector("#begin-button");
var question1 = document.querySelector("#quiz-1");
var question2 = document.querySelector("#quiz-2");
var question3 = document.querySelector("#quiz-3");
var question4 = document.querySelector("#quiz-4");
var question5 = document.querySelector("#quiz-5");
var question6 = document.querySelector("#quiz-6");
var repeatQuizBtn = document.querySelector("#again");
var repeatQuizBtn2 = document.querySelector("#again-2");
var highScoresBtn = document.querySelector("#high-scores");
var submitBtn = document.getElementById("submit");


// code for timer
var timer = 70;
var timerEl = document.querySelector("#timer");
var timerInt;

function setTimer() {
    timerInt = setInterval(function () {
        console.log(timer);
        timer--;
        timerEl.textContent = timer;

        if (timer === 0) {
            clearInterval();
            showCompletePage();
        }
    }, 1000);
};

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
};

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
    clearInterval(timerInt);
};

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
    displayScoreboard();
};

function displayScoreboard() {
    var highScores = localStorage.getItem('scores', JSON.stringify(scores));

    if (scores !== null) {
        document.getElementById("score-output").innerHTML = highScores;
    }
};

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
};

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
};

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
};

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
};

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
};

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
};

function playAgain() {
    repeatQuizBtn.addEventListener("click", function (event) {
        showStartPage();
    })
};

function playAgain2() {
    repeatQuizBtn2.addEventListener("click", function (event) {
        showStartPage();
    })
};

function viewScores() {
    highScoresBtn.addEventListener("click", function (event) {
        showScoresPage();
    })
};

function logAnswer(event, answer) {
    if (event.target.innerHTML === answer) {
        console.log("correct");
    } else {
        console.log("incorrect");
        timer -= 15;
    }
};

startScoresPage.addEventListener("click", function (event) {
    showScoresPage();
});

beginButton.addEventListener("click", function (event) {
    setTimer();
    showQuestion1();
});

question1.addEventListener("click", function (event) {
    var answer = "c. when a variable is declared locally and globally";

    logAnswer(event, answer);

    showQuestion2();
});

question2.addEventListener("click", function (event) {
    var answer = "c. 0";

    logAnswer(event, answer);

    showQuestion3();
});

question3.addEventListener("click", function (event) {
    var answer = "d. true";

    logAnswer(event, answer);

    showQuestion4();
});

question4.addEventListener("click", function (event) {
    var answer = "b. a special kind of variable that can store a specific set of commands";

    logAnswer(event, answer);

    showQuestion5();
});

question5.addEventListener("click", function (event) {
    var answer = "d. it stops JS from executing, and calls a debug function (if one is present)";

    logAnswer(event, answer);

    showQuestion6();
});

question6.addEventListener("click", function (event) {
    var answer = "d. numbers";

    logAnswer(event, answer);

    showCompletePage();
});

submitBtn.addEventListener("click", function (event) {
    var nameVal = document.getElementById("username").value.trim();
    var obj = {
        name: nameVal,
        score: timer,
    };
    var scores = JSON.parse(localStorage.getItem('scores')) || [];

    scores.push(obj);

    localStorage.setItem('scores', JSON.stringify(scores));

    if (nameVal === "") {
        alert("Please enter your name/initials into the text box if you want to save your score.")
        return;
    }

    showScoresPage();
});

completePage.addEventListener("click", function (event) {
    playAgain();
    viewScores();
});

scoresPage.addEventListener("click", function (event) {
    var clearScoresBtn = document.querySelector("#clear");
    clearScoresBtn.addEventListener("click", function (event) {
        localStorage.clear();
    });

    playAgain2();
});

function init() {
    showStartPage();
}

init();


