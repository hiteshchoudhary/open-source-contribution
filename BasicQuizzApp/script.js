const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false }
    ]
  },
  {
    question: "Which is the smallest counrty in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Sri Lanka", correct: false }
    ]
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antartica", correct: true }
    ]
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false }
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-button");

let currentQuestionIndex;
let score;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  questionElement.innerHTML = `${currentQuestionIndex + 1}. ${questions[currentQuestionIndex].question}`;

  for (let i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    let answer = document.createElement("button");
    answer.classList.add("btn");
    answer.innerHTML = `${questions[currentQuestionIndex].answers[i].text}`;
    answer.dataset.correct = questions[currentQuestionIndex].answers[i].correct;
    answerButtons.appendChild(answer);
    if (questions[currentQuestionIndex].answers[i].correct) {
      answer.dataset.correct = "true";
    }
    answer.addEventListener("click", selectAnswer);
  }

}

function resetState() {
  nextBtn.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  if (e.target.dataset.correct == "true") {
    score++;
    e.target.classList.add("correct");
  }
  else {
    e.target.classList.add("incorrect");
  }
   Array.from(answerButtons.children).forEach((button)=>{
     if(button.dataset.correct=="true")
     {
      button.classList.add("correct");
     }
     button.disabled = true;
  });
  nextBtn.style.display = "block";

}

nextBtn.addEventListener("click", handleNextButton)

function handleNextButton(){
  if(currentQuestionIndex<questions.length)
  {
    currentQuestionIndex++;
    show();
  }
  else
  {
    startQuiz();
  }
}

function show(){
  if(currentQuestionIndex<questions.length)
  {
    showQuestion();
  }
  else{
    showScore();
  }
}

function showScore(){
  answerButtons.innerHTML = "";
  questionElement.innerHTML = `Your score is ${score}/${questions.length}`;
  nextBtn.innerHTML = "Play Again!";
}

startQuiz();