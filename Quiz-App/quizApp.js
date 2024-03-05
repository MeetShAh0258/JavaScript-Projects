const questions = [
    {
        question: "Which is the longest river in the world?",
        answers: [
            {
                text: "Mississippi River",
                correct: false
            },
            {
                text: "Congo River",
                correct: false
            },
            {
                text: "The Nile River",
                correct: true
            },
            {
                text: "The Ganga River",
                correct: false
            }
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            {
                text: "Sydney",
                correct: false
            },
            {
                text: "Canberra",
                correct: true
            },
            {
                text: "Brisbane",
                correct: false
            },
            {
                text: "Perth",
                correct: false
            }
        ]
    },
    {
        question: "The tallest statue in the world is located in which country?",
        answers: [
            {
                text: "The US",
                correct: false
            },
            {
                text: "The UK",
                correct: false
            },
            {
                text: "China",
                correct: false
            },
            {
                text: "India",
                correct: true
            }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            {
                text: "1902",
                correct: false
            },
            {
                text: "1912",
                correct: true
            },
            {
                text: "1922",
                correct: false
            },
            {
                text: "1932",
                correct: false
            }
        ]
    },
    {
        question: "Which country hosted the 2022 FIFA World Cup?",
        answers: [
            {
                text: "Qatar",
                correct: true
            },
            {
                text: "Brazil",
                correct: false
            },
            {
                text: "South Africa",
                correct: false
            },
            {
                text: "Russia",
                correct: false
            }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-btn');
const nextButton = document.getElementById('next-btn');

let currQuesIndex = 0;
let score = 0;

const startQuiz = () => {
    currQuesIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

const showQuestions = () => {
    resetState();
    const currentQues = questions[currQuesIndex];
    const questionNo = currQuesIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQues.question;

    currentQues.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currQuesIndex++;
    if(currQuesIndex === questions.length - 1) {
        nextButton.innerHTML = "Finish Test"
    }
    if(currQuesIndex < questions.length) {
        showQuestions();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currQuesIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

startQuiz();