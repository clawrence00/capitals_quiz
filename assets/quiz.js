// // get elements and assign variables

score = document.getElementById('score');

scoreHeader = document.getElementById('score_header');
welcome = document.getElementById('welcome');
// var question = document.getElementById('question');

start = document.getElementById('start');
// var answers = document.getElementById('answers');
// var answerA = document.getElementById('answerA');
// var answerB = document.getElementById('answerB');
// var answerC = document.getElementById('answerC');
// var answerD = document.getElementById('answerD');

retry = document.getElementById('retry');

// // Quiz questions

// let questions = [
//     {capital : "Australia",
//     a : "Seoul",
//     b : "Canberra",
//     c : "St. John's",
//     d : "Bogota",
//     correct : "Canberra"},

//     {capital : "France",
//     a : "Lisbon",
//     b : "Paris",
//     c : "Prague",
//     d : "Rome",
//     correct : "Paris"},

//     {capital : "Egypt",
//     a : "Doha",
//     b : "Warsaw",
//     c : "Cairo",
//     d : "Nassau",
//     correct : "Cairo"},

//     {capital : "India",
//     a : "New Delhi",
//     b : "Berlin",
//     c : "Dhaka",
//     d : "Baku",
//     correct : "New Delhi"},

//     {capital : "Peru",
//     a : "Copenhagen",
//     b : "Asunción",
//     c : "Lima",
//     d : "Minsk",
//     correct : "Lima"},

//     {capital : "Croatia",
//     a : "Budapest",
//     b : "Tallinn",
//     c : "Oslo",
//     d : "Stockholm",
//     correct : "Stockholm"},

//     {capital : "Indonesia",
//     a : "Havana",
//     b : "Dublin",
//     c : "Jakarta",
//     d : "Taipei",
//     correct : "Jakarta"},

//     {capital : "Switzerland",
//     a : "Riga",
//     b : "Bern",
//     c : "Vienna",
//     d : "Kuala Lumpur",
//     correct : "Bern"},

//     {capital : "Canada",
//     a : "Ottawa",
//     b : "Vilnius",
//     c : "Beijing",
//     d : "Wellington",
//     correct : "Ottawa"},
// ];

//     // for loop to get quiz question and answers

//     for (let i = 0; i < questions.length; i++) {
//         questions[i].capital = `Question ${[i + 1]}: What is the capital city of ${questions[i].capital}?`;
//         questions[i].a = `a) ${questions[i].a}`;
//         questions[i].b = `b) ${questions[i].b}`;
//         questions[i].c = `c) ${questions[i].c}`;
//         questions[i].d = `d) ${questions[i].d}`;
    
//         // manipulate HTML by adding innerHTML
//         question.innerHTML = questions[i].capital;
//         answerA.innerHTML = questions[i].a;
//         answerB.innerHTML = questions[i].b;
//         answerC.innerHTML = questions[i].c;
//         answerD.innerHTML = questions[i].d;
//         }

// $( "#startBtn" ).click( function () {

//     // Show question and answers
    
//     scoreHeader.classList.remove("hide");
//     question.classList.remove("hide");
//     answers.classList.remove("hide");
        
//     // Hide welcome and start
    
//     welcome.classList.add("hide");
//     start.classList.add("hide");

 

    
//     // if else statement for answer

//     // $( "#answers button" ).click( function () {
//     //     if ($(this) == questions[0].correct)) {
//     //         this.classList.add("btn-success");
//     //     } else {
//     //         this.classList.add("btn-danger");
//     //     };
// });

async function populate() {

    const requestURL = 'https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const countriesCities = await response.json();
  
    populateQuestion(countriesCities);
  }

  function populateQuestion(obj) {

    const question = document.getElementById('question');

    for (var i = 0; i < obj.length; i++) {

    question.innerHTML = `Question ${[i + 1]}: What is the capital city of ${obj[i].country}?`;

    const answerA = document.getElementById('answerA');
    const answerB = document.getElementById('answerB');
    const answerC = document.getElementById('answerC');
    const answerD = document.getElementById('answerD');

    answerA.innerHTML = `a) ${obj[i].city}`;
    answerB.innerHTML = `b) ${obj[2].city}`;
    answerC.innerHTML = `c) ${obj[3].city}`;
    answerD.innerHTML = `d) ${obj[4].city}`;

  }
// if else statement for answer

$( "#answers button" ).click( function (obj) {
        if ($(this) == `a) obj[i].city}`) {
        this.classList.add("btn-success");
        } else {
        this.classList.add("btn-danger");
        };
})};

$( "#startBtn" ).click( function () {
    
    populate();
    
    score = 0;

    // Show question and answers
            
    scoreHeader.classList.remove("hide");
    question.classList.remove("hide");
    answers.classList.remove("hide");
                
    // Hide welcome and start
            
    welcome.classList.add("hide");
    start.classList.add("hide");
});
