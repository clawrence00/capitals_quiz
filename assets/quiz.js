// // get elements and assign variables
// var score = document.getElementById('score');
// var scoreHeader = document.getElementById('score_header');
// var welcome = document.getElementById('welcome');
// var question = document.getElementById('question');
// var start = document.getElementById('start');
// var answers = document.getElementById('answers');
// var answerA = document.getElementById('answerA');
// var answerB = document.getElementById('answerB');
// var answerC = document.getElementById('answerC');
// var answerD = document.getElementById('answerD');
// var retry = document.getElementById('retry');

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
    const superHeroes = await response.json();
  
    populateQuestions(superHeroes);
  
  }


function populateQuestions(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;
  
    for (const hero of heroes) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = hero.name;
      myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
      myPara2.textContent = `Age: ${hero.age}`;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = hero.powers;
      for (const power of superPowers) {
        const listItem = document.createElement('li');
        listItem.textContent = power;
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
  }