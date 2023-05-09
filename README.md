#Milestone Project 2: Capitals Around the World!

![Mockup on different screen sizes of home page](documentation/images/mockup.png)
Welcome to my second milestone project with the Code Institute. The purpose of this project is to produce an interactive front end web application, built with HTML, CSS and JavaScript. Please find my deployed site [here](https://clawrence00.github.io/capitals_quiz/).

---

## Technologies used
- HTML5
- CSS3
- JavaScript
- Balsamiq
- Bootstrap 5.3.0
- jQuery
- Google Fonts
- GitHub
- codeanywhere

---

## UX & UI
### Project Goals

The goal of the project is to create a multiple choice quiz using html, css and JavaScript. The quiz will be multiple choice about conutries and their capitals. The quiz will be not only entertaining but educational.

### Customer Goals

The quiz must respond to user input and give feedback on submitted answers.

### Features

- A central container will show the question and repsective answers.
- The answers will be buttons that will change colour depend on if the user has answered correctly or incorrectly.
- The users score will be tallied and shown on screen during the quiz
- At the end of the quiz the final score will be shown with a summary statement related to the score achieved.

### User Stories

As a user of the web application the design should be intuitive.

The webpage must be interactive, delivering feedback to help with learning.

The application must be intuitive, with features where they would be expected to be on multiple screen sizes.

The webpage must be responsive so that it can be experienced on mobile, tablet and desktop.

### Wireframes
Before any code was written wireframes were created using [Balsamiq](https://balsamiq.com/) for each page on three different screen sizes; mobile, tablet and desktop.

[See all wireframes here](https://github.com/clawrence00/capitals_quiz/blob/main/documentation/images/wireframes.png)

### Design Choices

#### Font

Merriweather Sans was chosen as the main font with sans serif as back up. This font was chosen as it is easy to read and legible on smaller screen sizes such as mobile phones.

#### Colours

Colours have been kept simple. The HTML content has been enclosed in a black coloured container which has been given some opacity so that the main image of the world map can still be seen behind. Due to the dark colour of the container a light coloured font has been chosen. Initially I thought to use white as it contrasts with the dark background however I settled on antiquewhite as this has a softer feel to it due to the sharp contrast being redeuced. The colour also compliments the many colours found in the background image.

For the buttons built in bootstrap classes were used partly for simplicity but also as they look well suited to the quiz format. 

#### Styling

The styling, again, has been kept simple using bootstraps built in library. Due to the large background image *overflow-y: hidden* was used to prevent creating a scrollable page. The quiz was intended to fit on one page only, no matter the screen size. 

#### Images

The background image used is of a world map with some pins scattered across the globe. These arent capital cities but the image sets the tone for the quiz, it looks adventurous and interesting. If the main image does not load the background would be a colour gradient from the dark to light. The start and end colours for this gradient were picked from the world map image therefore if the image didnt load then the rest of the site will still look similar to how it was intended to be.

---

## Credits
### Code

Where small pieces of code have been used these have been credited in comment strings near the code.

The following sources were used to establish the quiz functions and questions array:

- [Kushleen Waraich - codestudio](https://www.codingninjas.com/codestudio/library/how-to-create-a-javascript-quiz-code)
- [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified)

This tutorial was used to create the function delay:

- [Prince Varshney - tutorialspoint](https://www.tutorialspoint.com/How-to-delay-a-JavaScript-function-call-using-JavaScript)

For incementing the correct answer score I revisited this Code Institute lesson:

- [AJGreaves - CodeInstitute](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/tree/master/03-displaying-the-question-and-answer/04-updating-the-scores)

 ---
 
## Testing

### Bugs & Fixes

- Following the addition of the incrementScore function it was found that when retrying the quiz the score would not return to 0. This was fixed by the adding similar code from the incrementScore function to the startGame function but without using the increment (++) operator.

- A bug was been observed where the text for one of the longer named cities (Kuala Lumpur) appears on two lines within the button. This was found whilst being tested by a user on an Apple iPhone XR. The error could not be replicated  using Chrome Developer tools. The button width has been made more than large enough to fit the text within the button.

### Validation

The HTML for the welcome message and a question with answers was checked using the [W3C markup validation service](https://validator.w3.org/). There were no issues to report.

The css was checked using the [W3C CSS validation service](https://jigsaw.w3.org/css-validator/). There were no issues to report.

The JavaScript has been checked using [JS Lint](https://www.jslint.com/). Mulitple issues were found. Missing semi-colons and, ironically, semi-colons where they weren't necessary were the majority of issues. 

All evidence of the validation can be found in the [validation](https://github.com/clawrence00/capitals_quiz/blob/main/documentation/validation) folder.

---

### Deployment
The website was deployed using GitHub Pages. Here are the following steps required to **deploy the site**;

1) Select the repository.
2) In the repository navigation click 'Settings'.
3) In the list on the left, under 'Code and automation' select 'Pages'.
4) Under 'Build and deployment', 'Source' should be 'Deploy from branch'.
5) Under 'Build and deployment', 'Branch' select 'main'. The folder should be /(root). Click 'Save'.

Your site should now be live and hosted by GitHub Pages. It may take a minute or two for the site to become available.

To **clone this repository**;

1) On GitHub.com select the main page of the repository.
2) Click the green 'Code' button.
3) Select HTTPS. Click the clipboard icon to copy the repository URL.
4) Create a location on your machine where you want the repository to be cloned.
5) Using Git Bash change the working directory to the location where you want the repository to be cloned.
6) Type _git clone_ and paste the URL of the repository, copied in step 3.
7) Press enter. A local clone has now been created on your machine.  