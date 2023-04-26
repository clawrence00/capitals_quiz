// get elements and assign variables
const score = document.getElementById('score');
const welcome = document.getElementById('welcome');
const question = document.getElementById('question');
const start = document.getElementById('start');
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

// for loop that I think i'll need...

for (let i = 0; i < questions.length; i++) {
    questions[i].capital = `Question ${[i+1]}: What is the capital city of ${questions[i].capital}?`;
    questions[i].a = `a) ${questions[i].a}`;
    questions[i].b = `b) ${questions[i].b}`;
    questions[i].c = `c) ${questions[i].c}`;
    questions[i].d = `d) ${questions[i].d}`;
};

// manipulate HTML by adding innerHTML

question.innerHTML = questions[i].capital;
answerA.innerHTML = questions[i].a;
answerB.innerHTML = questions[i].b;
answerC.innerHTML = questions[i].c;
answerD.innerHTML = questions[i].d;

// Show question and answers

score.classList.remove("hide");
question.classList.remove("hide");
answerA.classList.remove("hide");
answerB.classList.remove("hide");
answerC.classList.remove("hide");
answerD.classList.remove("hide");

// Hide welcome and start

welcome.classList.add("hide");
start.classList.add("hide");

// if else statement for answer

$("#answers").children.click( function () {
    if ($(this).includes(questions[i].correct)) {
        this.classList.add("true");
    } else {
        this.classList.add("false");
        $("#answers").children.includes(questions[i].correct).classList.add("true");
    };
 });