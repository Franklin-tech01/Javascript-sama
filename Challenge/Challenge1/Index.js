// Step 1: a simple js game that has stored variables as quiz answers and questions .

// Step 2: An input field to enter quiz answers and check if then correspond.

// Step 3: use an alert to display if the users quiz was correct or wrong.

// Step 4: (optional) add a score board to display the users quiz score based it adds up as the user gets the quiz

const quiz = [{
    question: "What is the capital of Nigeria?",
    answer: "Abuja"
},
{
    question: "What is the capital of Ghana?",
    answer: "Accra"
},
{
    question: "What is the capital of Kenya?",
    answer: "Nairobi"
},
{
    question: "What is the capital of South Africa?",
    answer: "CapeTown"
},
{
    question: "What is the capital of Egypt?",
    answer: "Cairo"
}
]



let currentQuestionIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = quiz[currentQuestionIndex].question;
}



function checkAnswer(){
    const userInput = document.getElementById('answer').value;
    const resultElement = document.getElementById('result');

    if (userInput === quiz[currentQuestionIndex].answer){
        alert('Correct')
    }else{
        alert("opps that's incorrect")
    }
    
    currentQuestionIndex++;
         if (currentQuestionIndex < quiz.length) {
           displayQuestion();
           document.getElementById('answerInput').value = "";
         } else {
           resultElement.textContent = "Quiz completed!";
         }

}


displayQuestion();