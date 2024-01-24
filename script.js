// set variables to pull from html
var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerSectionDiv = document.getElementById('answer-buttons');
var quizIntro = document.getElementById('quiz');

// 
// TIMER //
// 
document.getElementById("start-btn").addEventListener("click", function(){
    var timeleft = 60;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft;
    

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time is up!"
    }
    }, 1000);

    
});





// addEventListner so Start button have a function to click and start quiz

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    quizIntro.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {

    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        console.log(button)

        answerSectionDiv.appendChild(button)

})}
 


function selectAnswer(event) {
    console.log(event.target)
    console.log(event.target.dataset.correct)
    let correctAnswer = event.target.dataset.correct;
    
   
    
    
    if(correctAnswer){
        console.log("correct")
    }else{
        console.log("incorrect")
    }
    
    
    

}

function resetState() {

    while (answerSectionDiv.firstChild) {
        answerSectionDiv.removeChild(answerSectionDiv.firstChild)
    }
}




var questions = [
    {
        question: 'What does HTML stand for?',
        answers: [
            { text: 'Hyper Text Markup Language', correct: true },
            { text: 'Hyper Text Mash Language', correct: false },
            { text: 'Hyper Text Moving Language', correct: false },
            { text: 'Hyper Text Marginal Language', correct: false }]
    },
    {
        question:'What does CSS stand for?',
        answer:[
            {text: 'Cascading Style Sheets', correct: true},
            {text: 'Color Styling Sheets', correct:false},
            {text: 'Correct Shimmer Sheets', correct:false},
            {text: 'Coloring System Sheets', sorrect:false}
        ]
    },
    {
        question: 'Numbers, Strings, and Bolleans are this type? ',
        answers: [
            { text: 'Data', correct: true },
            { text: 'Variable', correct: false },
            { text: 'id', correct: false },
            { text: 'Class', correct: false }]
    },
    {
        question:'What does SQL stand for?',
        answer:[
            {text: 'Structured Query Language', correct: true},
            {text: 'Stylesheet Query Language', correct:false},
            {text: 'Statements Questions Laguage', correct:false},
            {text: 'Stylish Question Language', sorrect:false}
        ]
    },
    {
        question:'What does PHP Stand for?',
        answer:[
            {text: 'Hypertext Preprocessor', correct: true},
            {text: 'Phast Hypertext Pages', correct:false},
            {text: 'Phish Hypertext Processor', correct:false},
            {text: 'Hypertext Processor', sorrect:false}
        ]
    },
];
