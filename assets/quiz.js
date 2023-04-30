// get elements and assign variables
scoreHeader = document.getElementById('score_header');
welcome = document.getElementById('welcome');
answers = document.getElementById('answers');
const start = document.getElementById('start');
const next = document.getElementById('next');
const retry = document.getElementById('retry');
const startButton = document.getElementById('startBtn');
const nextButton = document.getElementById('nextBtn');
const retryButton = document.getElementById('retryBtn');
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answers')
const answerA = document.getElementById('answerA');
const answerB = document.getElementById('answerB');
const answerC = document.getElementById('answerC');
const answerD = document.getElementById('answerD');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
    start.classList.add('hide')
    welcome.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    scoreHeader.classList.remove("hide");
    questionElement.classList.remove('hide')
    answers.classList.remove("hide");
    setNextQuestion()
  };
  
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = `Question ${[currentQuestionIndex + 1]}: What is the capital city of ${question.capital}?`
    question.cities.forEach(city => {
      const button = document.createElement('button')
      button.innerText = city.text
      button.classList.add('btn' , 'btn-primary')
      if (city.correct) {
        button.dataset.correct = city.correct
      }
      button.addEventListener('click', selectAnswer)
      answerElement.appendChild(button)
    })
}
  
function resetState() {
    clearStatusClass(document.body)
    next.classList.add('hide')
    while (answerElement.firstChild) {
      answerElement.removeChild(answerElement.firstChild)
    }
  }
  
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      next.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('btn-success')
    } else {
      element.classList.add('btn-danger')
    }
  }
  
function clearStatusClass(element) {
    element.classList.remove('btn-success')
    element.classList.remove('btn-danger')
  }

// // Quiz questions

const questions = [
    {
        capital : "Australia",
        cities: [
            {text: "Seoul", correct: false },
            {text: "Canberra", correct: true },
            {text: "St. John's", correct:false },
            {text: "Bogota", correct:false}
        ]
    },
    {
        capital : "France",
        cities: [
            {text : "Lisbon", correct: false },
            {text : "Paris", correct: true },
            {text : "Prague", correct: false },
            {text : "Rome", correct: false },
        ]
    },
    {
        capital : "Egypt",
        cities: [
            {text : "Doha", correct: false },
            {text : "Warsaw", correct: false },
            {text : "Cairo", correct: true },
            {text : "Nassau", correct: false },
        ]
    },
    {
        capital : "India",
        cities: [
            {text : "New Delhi", correct: true },
            {text : "Berlin", correct: false },
            {text : "Dhaka", correct: false },
            {text : "Baku", correct: false },
        ]
    },
    {
        capital : "Peru",
        cities: [
            {text : "Copenhagen", correct: false },
            {text : "Asunción", correct: false },
            {text : "Lima", correct: true },
            {text : "Minsk", correct: false },
        ]
    },
    {
        capital : "Sweden",
        cities: [
            {text : "Budapest", correct: false },
            {text : "Tallinn", correct: false },
            {text : "Oslo", correct: false },
            {text : "Stockholm", correct: true },
        ]
    },
    {
        capital : "Croatia",
        cities: [
            {text : "Zagreb", correct: true },
            {text : "Reykjavík", correct: false },
            {text : "Sofia", correct: false },
            {text : "Buenos Aires", correct: false },
        ]
    },
    {
        capital : "Indonesia",
        cities: [
            {text : "Havana", correct: false },
            {text : "Dublin", correct: false },
            {text : "Jakarta", correct: true },
            {text : "Taipei", correct: false },
        ]
    },
    {
        capital : "Switzerland",
        cities: [
            {text : "Riga", correct: false },
            {text : "Bern", correct: true },
            {text : "Vienna", correct: false },
            {text : "Kuala Lumpur", correct: false },
        ]
    },
    {
        capital : "Canada",
        cities: [
            {text : "Ottawa", correct: true },
            {text : "Vilnius", correct: false },
            {text : "Beijing", correct: false },
            {text : "Wellington", correct: false },
        ]
    }
];