// get elements and assign variables
const score = document.getElementById('score');
const scoreHeader = document.getElementById('score_header');
const welcome = document.getElementById('welcome');
const question = document.getElementById('question');
const start = document.getElementById('start');
const answers = document.getElementById('answers');
const answerA = document.getElementById('answerA');
const answerB = document.getElementById('answerB');
const answerC = document.getElementById('answerC');
const answerD = document.getElementById('answerD');
const retry = document.getElementById('retry');

// Quiz questions

let questions = [
    {capital : "Australia",
    a : "Seoul",
    b : "Canberra",
    c : "St. John's",
    d : "Bogota",
    correct : "Canberra"},

    {capital : "France",
    a : "Lisbon",
    b : "Paris",
    c : "Prague",
    d : "Rome",
    correct : "Paris"},

    {capital : "Egypt",
    a : "Doha",
    b : "Warsaw",
    c : "Cairo",
    d : "Nassau",
    correct : "Cairo"},

    {capital : "India",
    a : "New Delhi",
    b : "Berlin",
    c : "Dhaka",
    d : "Baku",
    correct : "New Delhi"},

    {capital : "Peru",
    a : "Copenhagen",
    b : "Asunción",
    c : "Lima",
    d : "Minsk",
    correct : "Lima"},

    {capital : "Croatia",
    a : "Budapest",
    b : "Tallinn",
    c : "Oslo",
    d : "Stockholm",
    correct : "Stockholm"},

    {capital : "Indonesia",
    a : "Havana",
    b : "Dublin",
    c : "Jakarta",
    d : "Taipei",
    correct : "Jakarta"},

    {capital : "Switzerland",
    a : "Riga",
    b : "Bern",
    c : "Vienna",
    d : "Kuala Lumpur",
    correct : "Bern"},

    {capital : "Canada",
    a : "Ottawa",
    b : "Vilnius",
    c : "Beijing",
    d : "Wellington",
    correct : "Ottawa"},
];

$( "#startBtn" ).click( function () {
    // for loop to get quiz question and answers

    var i;
    for (let i = 0; i < questions.length; i++) {
    questions[i].capital = `Question ${[i+1]}: What is the capital city of ${questions[i].capital}?`;
    questions[i].a = `a) ${questions[i].a}`;
    questions[i].b = `b) ${questions[i].b}`;
    questions[i].c = `c) ${questions[i].c}`;
    questions[i].d = `d) ${questions[i].d}`;
    questions[i].correct = questions[i].correct;
    }

    // Show question and answers
    
    scoreHeader.classList.remove("hide");
    question.classList.remove("hide");
    answers.classList.remove("hide");
        
    // Hide welcome and start
    
    welcome.classList.add("hide");
    start.classList.add("hide");

 
    // manipulate HTML by adding innerHTML
    
    question.innerHTML = questions[0].capital;
    answerA.innerHTML = questions[0].a;
    answerB.innerHTML = questions[0].b;
    answerC.innerHTML = questions[0].c;
    answerD.innerHTML = questions[0].d;
    
    // if else statement for answer

    $( "#answers button" ).click( function () {
        if ($(this) == questions[0].correct)) {
            this.classList.add("btn-success");
        } else {
            this.classList.add("btn-danger");
        };
});
