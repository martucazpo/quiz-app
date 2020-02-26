const body = document.querySelector('body');
const titleElement = document.getElementById('title');
const contentElement = document.getElementById('content');
const imgElement = document.getElementById('topicImg');
const questionElement = document.getElementById('question');
const answerWrapperElement = document.getElementById('answerWrapper');
const answerBtn = document.getElementsByClassName('answer-btn');
const nextBtn = document.getElementById('nextBtn');
const startBtn = document.getElementById('startBtn');
import questions from "./constuctor.js";

// class Question {
//     constructor(content,text,src,alt,answers=[{}]){
//         this.content = content;
//         this.text = text;
//         this.src = src;
//         this.alt = alt;
//         this.answers = answers;
//     }
// }

// class Answer {
//     constructor(text,correct,isTrue){
//         this.text = text;
//         this.correct = correct;
//         this.isTrue = isTrue;
//     }
// }

// let four = new Answer(4,'correct',true);
// let twentyTwo = new Answer(22,'wrong',false);
// let six = new Answer(6,'wrong',false);
// let eight = new Answer(8,'wrong',false);

// let mathAnsw1 = [four,twentyTwo,six,eight];

// const twoPlusTwo = new Question('Math', "What is two plus two?",'assets/images/antoine-dautry-05A-kdOH6Hw-unsplash.jpg', 'image of mathmatical text', mathAnsw1)
// const questions = [twoPlusTwo];

console.log(questions)

startBtn.addEventListener('click', startUp);

function startUp() {
    
    titleElement.classList.add('hide');
    startBtn.classList.add('hide');
    answerWrapperElement.classList.remove('hide');
    nextBtn.classList.remove('hide');
    contentElement.innerHTML = questions[0].content;
    imgElement.setAttribute('src', questions[0].src);
    imgElement.setAttribute('alt', questions[0].alt);
    questionElement.innerText = questions[0].text;
    for (let i = 0; i < questions[0].answers.length; i++) {
        let button = document.createElement('button');
        button.setAttribute("class", "btn answer-btn");
        button.innerText = questions[0].answers[i].text;
        answerWrapperElement.appendChild(button);
        button.addEventListener('click', () => {
            const btnArr = Array.from([...answerBtn]);
            button.classList.add(questions[0].answers[i].correct);
            body.classList.add(questions[0].answers[i].correct);
            button.disabled = true;

            for (let j = 0; j < btnArr.length; j++) {
                console.log(btnArr[j].disabled);
                if (btnArr[j].disabled === true) {
                    btnArr.forEach(button => {
                        button.setAttribute('disabled', true);
                    });
                }
            }

            
        });

    }
}