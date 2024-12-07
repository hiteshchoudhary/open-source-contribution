console.log("LMAO")




//This code is useful for making Quiz App
document.addEventListener('DOMContentLoaded',function(){

    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");
    const questionContainer = document.getElementById("question-container");

    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");


    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "What is the capital of Germany?",
            choices: ["Berlin", "Munich", "Hamburg", "Cologne"],
            answer: "Berlin",
        },
        {
            question: "What is the capital of Italy?",
            choices: ["Rome", "Milan", "Turin", "Florence"],
            answer: "Rome",
        },
    ];
    let currentQuestionIndex = 0;
    let score = 0
    startBtn.addEventListener('click',startQuiz)

    nextBtn.addEventListener('click',() =>{
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion()
        }else{
            showResult()
        }
    })
    restartBtn.addEventListener('click',() =>{
        currentQuestionIndex = 0
        score = 0
        resultContainer.classList.add("hidden");
        questionContainer.classList.remove("hidden");
        nextBtn.classList.add('hidden');
        showQuestion()
    })

    function startQuiz(){
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        showQuestion();
    }
    function showQuestion(){
        nextBtn.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].question;
        choicesList.innerHTML = "";
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click',() => selectAnswer(choice))
            choicesList.appendChild(li);
        });
    }
    function selectAnswer(choice){
        if(choice === questions[currentQuestionIndex].answer){
            score++;
            console.log(score)
        }
        nextBtn.classList.remove('hidden')
    }
    function showResult(){
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }
});
