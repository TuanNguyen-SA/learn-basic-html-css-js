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
     },
]


function showResult() {
	const res = document.querySelector('.result.hidden');
	if (res.classList.contains('hidden')){
		res.classList.remove('hidden')
	}
}    