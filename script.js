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

//     document.getElementById('incorrect').addEventListener('click', function() {
//         sec -= 5;
//         document.getElementById('timer').innerHTML='00:'+sec;
//     });
//     startTimer();
// })();






startButton.addEventListener('click', startQuiz);

function startQuiz() {
    // console.log('work')
    
    
    
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
        question: 'example question here?',
        answers: [
            { text: 'here', correct: false },
            { text: 'there', correct: false },
            { text: 'no', correct: true },
            { text: 'yes', correct: false }]
    },
    {
        question:'answer the question?',
        answer:[
            {text: 'yes', correct: false},
            {text: 'no', correct:false},
            {text: 'maybe', correct:true},
            {text: 'so', sorrect:false}
        ]
    }
];
