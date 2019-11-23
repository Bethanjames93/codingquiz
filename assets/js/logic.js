var questionIndex = 0;
var timer = questions.length * 20;
var timerId;

var startBtn = document.getElementById("start");
var timerEl = dodcument.getElementById("timer");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");
var sumbitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var answerEl = document.getElementById("answer");

function startQuiz() {
    console.log("test");
    var startPageEl = document.getElementById("start-page");
    startPageEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = timer;
    
    getQuestion();
}


function getQuestion() {
    var questionList = questions[questionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = questionList.title;
    optionsEl.innerHTML = "";
    console.log("test");





sumbitBtn.onclick = startQuiz;

startBtn.onclick = startQuiz;   


initialsEl.onkeyup = checkForEnter;
