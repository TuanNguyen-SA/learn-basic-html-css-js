const data = [
	{
	id: 1,
	question: "Which day is the best day of the week?",
	answer: [
     {answer: "monday", isCorrect: false},
	 {answer: "wednesday", isCorrect: false},
	 {answer: "thursday", isCorrect: false},
	 {answer: "saturday", isCorrect: true},
	],
	 id: 2,
	question: "What is Japan's most famous food item?",
	answer: [
     {answer: "monday", isCorrect: false},
	 {answer: "wednesday", isCorrect: false},
	 {answer: "thursday", isCorrect: false},
	 {answer: "saturday", isCorrect: true},
	],
	id: 3,
	question: "Which muscle group does bench press target?",
	answer: [
     {answer: "monday", isCorrect: false},
	 {answer: "wednesday", isCorrect: false},
	],
	id: 4,
	question: "how fast can cheetahs run?",
	answer: [
     {answer: "monday", isCorrect: false},
	 {answer: "wednesday", isCorrect: false},
	 {answer: "thursday", isCorrect: false},
	 {answer: "saturday", isCorrect: true},
	],
     },
]

function nextPage(nextPageUrl) {
    window.location.href = nextPageUrl;
}

function showResult() {
	const res = document.querySelector('.result.hidden');
	if (res.classList.contains('hidden')){
		res.classList.remove('hidden')
	}
}    

function nextPage(nextPageUrl) {
    if (nextPageUrl === 'result') {
        window.location.href = 'results.html';
    } else {
        window.location.href = nextPageUrl;
    }
}

function restartQuiz() {
    window.location.href = 'quiz1.html'; // Change this to the starting page of your quiz
}

function showResult() {
    // Your result logic here
    nextPage('result');
}

const gameScreen  = document.querySelector(".game")
const result  = document.querySelector(".result")
const question  = document.querySelector(".question")
const answersContainer  = document.querySelector(".answers")
const submit  = document.querySelector(".submit")
const play  = document.querySelector(".play")

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer;

const playAgain = ()=>{
let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer;
};

play.addEventListener("click",()=>{
	playAgain()
});

const showResult = ()=>{

}	