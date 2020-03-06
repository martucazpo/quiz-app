import questions from "./constuctor.js";

const body = document.querySelector("body");
const scoreOverlayElement = document.getElementById('overlay');
const scoreH1OverlayElement = document.getElementById('overlayH1');
const scoreH2OverlayElement = document.getElementById('overlayH2');
const titleElement = document.getElementById("title");
const contentElement = document.getElementById("content");
const scoreElement = document.getElementById('score');
const imgElement = document.getElementById("topicImg");
const questionElement = document.getElementById("question");
const answerWrapperElement = document.getElementById("answerWrapper");
const answerBtn = document.getElementsByClassName("answer-btn");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
let score = 0;
let questionIndex = 0;

console.log(questions);

startBtn.addEventListener("click", startUp);

function startUp() {
    reset();
    hideElement(titleElement);
    hideElement(startBtn);
    displayElement(answerWrapperElement);
    displayElement(nextBtn);
    setQuestions();
    showScore();
}

function hideElement(element) {
    element.classList.add("hide");
}

function displayElement(element) {
    element.classList.remove("hide");
}

function displayQuestions() {
    contentElement.innerHTML = questions[questionIndex].content;
    imgElement.setAttribute("src", questions[questionIndex].src);
    imgElement.setAttribute("alt", questions[questionIndex].alt);
    questionElement.innerText = questions[questionIndex].text;
}

function showScore() {
    scoreElement.innerText = score;
}

function makeAnswerBtns() {
    for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        let button = document.createElement("button");
        button.setAttribute("class", "btn answer-btn");
        button.innerText = questions[questionIndex].answers[i].text;
        answerWrapperElement.appendChild(button);
        button.addEventListener("click", () => {
            const btnArr = Array.from([...answerBtn]);
            button.classList.add(questions[questionIndex].answers[i].correct);
            button.setAttribute('value', questions[questionIndex].answers[i].isTrue);
            body.classList.add(questions[questionIndex].answers[i].correct);
            button.disabled = true;
            questionIndex++;
            for (let j = 0; j < btnArr.length; j++) {
                console.log(btnArr[j].value);
                if (btnArr[j].disabled === true) {
                    btnArr.forEach(button => {
                        button.setAttribute("disabled", true);
                    });
                }
            }
            checkScore(btnArr)
        });
    }
}


function checkScore(arr) {
    for (let k = 0; k < arr.length; k++) {
        if (arr[k].value === 'true') {
            score++
        }
    }
    scoreElement.innerText = score;
}

function setQuestions() {
    displayQuestions();
    makeAnswerBtns();
}

function reset() {
    while (answerWrapperElement.firstChild) {
        answerWrapperElement.removeChild(answerWrapperElement.firstChild);
    }
}

function clearState(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

nextBtn.addEventListener("click", () => {
    if (questionIndex === questions.length - 1) {
        reset()
        clearState(body);
        setQuestions();
        showScore();
    } else {
        // console.log('There are no more questions');
        displayElement(scoreOverlayElement);
        scoreOverlayElement.classList.add('show');
        scoreH1OverlayElement.innerText = "Your Final Score Is: " + score;
        scoreH2OverlayElement.innerText = "You Answered " + score + " out of " + questionIndex + " questions correctly.";
    }
});