let questions;
let question;
const question_bank_url =
    "https://raw.githubusercontent.com/EricAndrechek/FermiQuestions/main/question-bank.json";

// get question bank
function getQuestions() {
    fetch(question_bank_url)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            main(json);
        })
        .catch(function (ex) {
            console.log("parsing failed", ex);
        });
}

// shuffle question bank
function shuffle(sourceArray) {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (sourceArray.length - i));

        let temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

// get question from question bank and remove it from the bank
function getQuestion() {
    let qnumber = Number(document.getElementById("qnumber").innerHTML);
    question =
        Object.keys(questions)[
            Math.floor(Math.random() * Object.keys(questions).length)
        ];
    document.getElementById("fermi-question").innerHTML = question;
    document.getElementById("qnumber").innerHTML = qnumber + 1;
}

// run code after page has loaded
function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

// page load
ready(function () {
    // get question bank and begin game setup
    getQuestions();
});

// receive question bank and shuffle it, beginning the game
function main(questions_json) {
    questions = questions_json;
    document.getElementById("tnumber").innerHTML =
        Object.keys(questions).length;
    questions = shuffle(questions);
    getQuestion();
}

// listen for enter key to be pressed and run check_answer function
function enter(event) {
    if (event.which == 13 || event.keyCode == 13) {
        check_answer();
    }
}

// evaluate score and display message
function score_message(difference, answer) {
    let result = document.getElementById("result");
    let points = Number(document.getElementById("points").innerHTML);
    switch (difference) {
        case 0:
            result.className = "";
            result.classList.add("content", "has-text-success");
            result.innerHTML = "Correct! You were dead on and scored 5 points!";
            document.getElementById("points").innerHTML = points + 5;
            break;
        case 1:
            result.className = "";
            result.classList.add("content", "has-text-warning");
            result.innerHTML =
                "Super Close! You were 1 away and scored 3 points. The correct answer was actually " +
                answer +
                ".";
            document.getElementById("points").innerHTML = points + 3;
            break;
        case 2:
            result.className = "";
            result.classList.add("content", "has-text-warning");
            result.innerHTML =
                "Almost! You were 2 away and scored 1 point. The correct answer was actually " +
                answer +
                ".";
            document.getElementById("points").innerHTML = points + 1;
            break;
        default:
            result.className = "";
            result.classList.add("content", "has-text-danger");
            result.innerHTML =
                "Not quite! You were " +
                difference +
                " away and didn't score any points! The correct answer was actually " +
                answer +
                ".";
            break;
    }
}

// check if there are remaining questions
function game_over() {
    return Object.keys(questions).length === 0;
}

function display_end_game_text() {
    document.getElementById("fermi-question").innerHTML =
        "You've gone through all our fermi questions! Refresh the page to play again.";
    document.getElementById("fermi-answer").onkeypress = "";
    document.getElementById("fermi-button").onclick = "";
    document.getElementById("fermi-answer").disabled = true;
    document.getElementById("fermi-button").disabled = true;
}

// clear the answer field and prepare next question
function next_question() {
    document.getElementById("fermi-answer").value = "";
    delete questions[question];

    if (!game_over()) {
        getQuestion();
    } else {
        display_end_game_text();
    }
}

// check answer to answer bank
function check_answer() {
    let answer = questions[question];
    let userAnswer = document.getElementById("fermi-answer").value;
    let difference = Math.abs(answer - userAnswer);
    score_message(difference, answer);
    next_question();
}
