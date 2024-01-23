var startButton = document.getElementById('show')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('work')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
     var button = document.createElement('button')
     button.innerText = answer.text 
     button.classList.add('btn')
     if (answer.correct){
     button.dataset.correct = answer.correct   
     }
    
     answerButtonsElement.appendChild(button)
    })
}

function resetState() {
     while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}




var questions = [
   {
    question: 'example question here?',
    answers: [
        {text:'here', correct:false},
        {text:'there', correct:false},
        {text:'no', correct:true},
        {text:'yes', correct:false}   
    ]
   } 
]