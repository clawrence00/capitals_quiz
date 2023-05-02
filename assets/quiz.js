// get elements and assign variables
const scoreHeader = document.getElementById('score_header');
var scoreCount = document.getElementById('score');
const welcome = document.getElementById('welcome');
const answers = document.getElementById('answers');
const start = document.getElementById('start');
const next = document.getElementById('next');
const retry = document.getElementById('retry');
const startButton = document.getElementById('startBtn');
const nextButton = document.getElementById('nextBtn');
const retryButton = document.getElementById('retryBtn');
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answers')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
retryButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
    start.classList.add('hide')
    welcome.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    scoreCount = 0;
    scoreHeader.classList.remove("hide");
    questionElement.classList.remove('hide')
    answers.classList.remove("hide");
    setNextQuestion();
  };
  
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = `Question ${[currentQuestionIndex + 1]}: What is the capital city of ${question.country}?`
    question.cities.forEach(city => {
      const button = document.createElement('button')
      button.innerText = city.text
      button.classList.add('btn' , 'btn-primary')
      button.addEventListener('click', checkAnswer)
      answerElement.appendChild(button)
    })
}
  
function resetState() {
    next.classList.add('hide')
    retry.classList.add('hide')
    while (answerElement.firstChild) {
      answerElement.removeChild(answerElement.firstChild)
    }
  }
  
// function to disable answer buttons, if else statement checks for correct answer, second if else to check number of questions left

function checkAnswer() {
//disable buttons code .find() method https://stackoverflow.com/questions/11503534/jquery-vs-document-queryselectorall .prop() method https://stackoverflow.com/questions/1594952/jquery-disable-enable-submit-button 
    $( "#answers" ).find( "button" ).prop("disabled", true);
    if (this.innerText == shuffledQuestions[currentQuestionIndex].correct) {
        this.classList.add("btn-success");
        incrementScore()
    } else {
        this.classList.add("btn-danger");
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        next.classList.remove('hide')
    } else {
        showSummary()
    }
};

// increment score function - adds 1 to score
function incrementScore() {
    document.getElementById('score').innerText = ++scoreCount;
}

// shows summary at end of quiz for user

  function showSummary() {
    welcome.classList.remove('hide');
    retry.classList.remove('hide');

    questionElement.classList.add('hide')
    scoreHeader.classList.add("hide");
    answers.classList.add('hide')

    welcome.innerHTML = `You got ${[ scoreCount ]} out of 10 correct! </br>`

    var p = document.createElement('p');

    if (scoreCount <= 2) {
        welcome.appendChild(p) = 'Everyone starts somewhere, keep on learning!'
    } else if (scoreCount <= 5) {
        welcome.appendChild(p) = 'You need to brush up on your capital city knowledge. Keep trying!'
    } else if (scoreCount <= 8) {
        welcome.appendChild(p) = 'You have a good knowledge of capital cities!'
    } else if (scoreCount <= 10) {
        welcome.appendChild(p) = 'You really know your capitals!'
    } 
  }

// // Quiz questions

const questions = [
    {
        country : "Australia",
        cities: [
            {text: "Seoul"},
            {text: "Canberra"},
            {text: "St. John's"},
            {text: "Bogota"},
        ],
        correct : "Canberra"
    },
    {
        country : "France",
        cities: [
            {text : "Lisbon"},
            {text : "Paris"},
            {text : "Prague"},
            {text : "Rome"},
        ],
        correct : "Paris"
    },
    {
        country : "Egypt",
        cities: [
            {text : "Doha"},
            {text : "Warsaw"},
            {text : "Cairo"},
            {text : "Nassau"},
        ],
        correct : "Cairo"
    },
    {
        country : "India",
        cities: [
            {text : "New Delhi"},
            {text : "Berlin"},
            {text : "Dhaka"},
            {text : "Baku"},
        ],
        correct : "New Delhi"
    },
    {
        ccountry : "Peru",
        cities: [
            {text : "Copenhagen"},
            {text : "Asunción"},
            {text : "Lima"},
            {text : "Minsk"},
        ],
        correct : "Lima"
    },
    {
        country : "Sweden",
        cities: [
            {text : "Budapest"},
            {text : "Tallinn"},
            {text : "Oslo"},
            {text : "Stockholm"},
        ],
        correct : "Stockholm"
    },
    {
        country : "Croatia",
        cities: [
            {text : "Zagreb"},
            {text : "Reykjavík"},
            {text : "Sofia"},
            {text : "Buenos Aires"},
        ],
        correct : "Zagreb"
    },
    {
        country : "Indonesia",
        cities: [
            {text : "Havana"},
            {text : "Dublin"},
            {text : "Jakarta"},
            {text : "Taipei"},
        ],
        correct : "Jakarta"
    },
    {
        country : "Switzerland",
        cities: [
            {text : "Riga"},
            {text : "Bern"},
            {text : "Vienna"},
            {text : "Kuala Lumpur"},
        ],
        correct : "Bern"
    },
    {
        country : "Canada",
        cities: [
            {text : "Ottawa"},
            {text : "Vilnius"},
            {text : "Beijing"},
            {text : "Wellington"},
        ],
        correct : "Ottawa"
    }
];