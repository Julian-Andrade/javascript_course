// Declaration Variables
const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

// Questions
const questions = [
  {
    question: "PHP foi desenvolvido para qual fim?",
    answers: [
      {
        answer: "back-end",
        correct: true,
      },
      {
        answer: "front-end",
        correct: false,
      },
      {
        answer: "Sistema operacional",
        correct: false,
      },
      {
        answer: "Banco de dados",
        correct: false,
      },
    ],
  },
  {
    question: "Uma forma de declarar variável em JavaScript:",
    answers: [
      {
        answer: "$var",
        correct: false,
      },
      {
        answer: "var",
        correct: true,
      },
      {
        answer: "@var",
        correct: false,
      },
      {
        answer: "#let",
        correct: false,
      },
    ],
  },
  {
    question: "Qual o seletor de id no CSS?",
    answers: [
      {
        answer: "#",
        correct: true,
      },
      {
        answer: ".",
        correct: false,
      },
      {
        answer: "@",
        correct: false,
      },
      {
        answer: "/",
        correct: false,
      },
    ],
  },
];

// Substituition to quizz for the first question
function init() {
  // Create the first question
  createQuestion(0);
}

// Create a question
function createQuestion(i) {
  // Clean the old question
  const oldButtons = answersBox.querySelectorAll("button");

  oldButtons.forEach(function (btn) {
    btn.remove();
  });

  // Change the text question
  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // Insert the options
  questions[i].answers.forEach(function (answer, i) {
    // Create a template
    const answerTemplate = document
      .querySelector(".answer-template")
      .cloneNode(true);

    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector("#question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer["answer"];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // Remove Hide and Template (Classes)
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Insert the option on screen
    answersBox.appendChild(answerTemplate);

    // Insert event click for button
    answerTemplate.addEventListener("click", function () {
      checkAnswer(this);
    });
  });
  // Increment the number question
  actualQuestion++;
}

// Verify user answer
function checkAnswer(btn) {
  // Select all buttons
  const buttons = answersBox.querySelectorAll("button");

  // Verify if answers is correct and add class inside the buttons

  buttons.forEach(function (button) {
    if (button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");

      // Check if user got the question right
      if (btn === button) {
        // Increment the points
        points++;
      }
    } else {
      button.classList.add("wrong-answer");
    }
  });
  // Show next question
  nextQuestion();
}

// Show next question of quizz
function nextQuestion() {
  // Timer for user look the answers
  setTimeout(function () {
    // Verify if have any questions
    if (actualQuestion >= questions.length) {
      showSucessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 700);
}

// Show final screen
function showSucessMessage() {
  hideOrShowQuizz();

  // Calculate points
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector("#display-score span");

  displayScore.textContent = score.toString();

  // Change numbers of correct answers
  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  // Change the total questions
  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;
}

// Show or hide score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

// Restart the quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function () {
  // Beat the game
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// Start quizz
init();
