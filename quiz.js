const quizData = [
  {
    question: "India became independent on?",
    options: ["14 August 1947", "15 August 1947", "26 January 1950", "2 October 1948"],
    answer: 1,
  },
  {
    question: "Who is known as the Father of the Nation?",
    options: ["Bhagat Singh", "Gandhi", "Bose", "Azad"],
    answer: 1,
  },
  {
    question: "National anthem of India?",
    options: ["Vande Mataram", "Jana Gana Mana", "Sare Jahan Se Achha", "Ae Mere Watan"],
    answer: 1,
  },
  {
    question: "Ashoka Chakra has how many spokes?",
    options: ["20", "22", "24", "26"],
    answer: 2,
  },
  {
    question: "Netaji is?",
    options: ["Gandhi", "Bhagat", "Bose", "Kalam"],
    answer: 2,
  },
  {
    question: "Quit India Movement began in?",
    options: ["1940", "1941", "1942", "1947"],
    answer: 2,
  },
  {
    question: "Indian Constitution came into force on?",
    options: ["15 Aug", "26 Jan", "2 Oct", "1 May"],
    answer: 1,
  },
  {
    question: "National animal?",
    options: ["Lion", "Tiger", "Peacock", "Elephant"],
    answer: 1,
  },
  {
    question: "National flag has how many colours?",
    options: ["2", "3", "4", "5"],
    answer: 1,
  },
  {
    question: "Missile Man of India?",
    options: ["Ambedkar", "Bose", "Kalam", "Gandhi"],
    answer: 2,
  },
];

let currentQuestion = 0;
let score = 0;
const quizContainer = document.getElementById("quizContainer");

function loadQuestion() {
  if (!quizContainer) return;
  const q = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <div class="quiz-card">
      <h3>Q${currentQuestion + 1}. ${q.question}</h3>
      <div class="quiz-options">
        ${q.options.map((option, index) => `
          <button class="quiz-option" onclick="checkAnswer(${index})">${option}</button>
        `).join("")}
      </div>
      <div class="quiz-progress">${currentQuestion + 1} / ${quizData.length}</div>
    </div>
  `;
}

function checkAnswer(selectedIndex) {
  const q = quizData[currentQuestion];
  if (selectedIndex === q.answer) score += 1;
  currentQuestion += 1;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    if (!quizContainer) return;
    quizContainer.innerHTML = `
      <div class="quiz-card">
        <h3>Quiz complete</h3>
        <p>You scored ${score} out of ${quizData.length}.</p>
        <p>${score >= 8 ? "Fantastic work!" : "Keep learning and celebrate India’s history."}</p>
      </div>
    `;
    window.showToast(`Quiz complete: ${score}/${quizData.length}`);
  }
}

if (startQuiz) {
  startQuiz.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
  });
}
