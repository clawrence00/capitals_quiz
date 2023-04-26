// get elements and assign variables
const score = document.getElementById('score');
const welcome = document.getElementById('welcome');
const question = document.getElementById('question');
const start = document.getElementById('start');
const answerA = document.getElementById('answerA');
const answerB = document.getElementById('answerB');
const answerC = document.getElementById('answerC');
const answerD = document.getElementById('answerD');
const start = document.getElementById('retry');

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

for (let = i; i < questions.length; i++) {
    questions[i].capital = question.`Question ${[i]+1}: What is the capital city of ${questions[i].capital}?`.innerHTML.classList.remove("hide");
    questions[i].a = answerA.`a) ${questions[i].a}`.innerHTML.classList.remove("hide");
    questions[i].b = answerB.`a) ${questions[i].b}`.innerHTML.classList.remove("hide");
    questions[i].c = answerC.`a) ${questions[i].c}`.innerHTML.classList.remove("hide");
    questions[i].d = answerD.`a) ${questions[i].d}`.innerHTML.classList.remove("hide");
}

