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
    answer : "Canberra"},

    {capital : "France",
    a : "Lisbon",
    b : "Paris",
    c : "Prague",
    d : "Rome",
    answer : "Paris"},

    {capital : "Egypt",
    a : "Doha",
    b : "Warsaw",
    c : "Cairo",
    d : "Nassau",
    answer : "Cairo"},

    {capital : "India",
    a : "New Delhi",
    b : "Berlin",
    c : "Dhaka",
    d : "Baku",
    answer : "New Delhi"},

    {capital : "Peru",
    a : "Copenhagen",
    b : "Asunción",
    c : "Lima",
    d : "Minsk",
    answer : "Lima"},

    {capital : "Croatia",
    a : "Budapest",
    b : "Tallinn",
    c : "Oslo",
    d : "Stockholm",
    answer : "Stockholm"},

    {capital : "Indonesia",
    a : "Havana",
    b : "Dublin",
    c : "Jakarta",
    d : "Taipei",
    answer : "Jakarta"},

    {capital : "Switzerland",
    a : "Riga",
    b : "Bern",
    c : "Vienna",
    d : "Kuala Lumpur",
    answer : "Bern"},

    {capital : "Canada",
    a : "Ottawa",
    b : "Vilnius",
    c : "Beijing",
    d : "Wellington",
    answer : "Ottawa"},
]