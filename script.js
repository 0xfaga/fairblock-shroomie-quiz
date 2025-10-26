let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

const loginScreen = document.getElementById('login-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const usernameInput = document.getElementById('username');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const timerEl = document.getElementById('timer');
const finalScoreEl = document.getElementById('final-score');
const badgeEl = document.getElementById('badge');
const progressBar = document.getElementById('progress-bar');
const badgeContainer = document.getElementById('badge-container');
const downloadBtn = document.getElementById('download-badge');

const optionLetters = ['A', 'B', 'C', 'D'];

document.addEventListener('DOMContentLoaded', () => {
  startBtn.addEventListener('click', startQuiz);
  restartBtn.addEventListener('click', () => location.reload());
  downloadBtn.addEventListener('click', () => {
    const canvas = document.getElementById('badge-canvas');
    const link = document.createElement('a');
    link.download = 'shroomie_badge.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
});

function startQuiz() {
  if (usernameInput.value.trim() === "") {
    alert("Please enter your Discord username");
    return;
  }
  loginScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  currentQuestion = 0;
  score = 0;
  showQuestion();
  startTimer();
}

function showQuestion() {
    resetState();
    const q = questions[currentQuestion];
    questionText.textContent = q.question;

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.textContent = `${optionLetters[index]}) ${answer.text}`;
        btn.classList.add('answer-btn');
        // Add both click and touchend for mobile reliability
        btn.addEventListener('click', () => selectAnswer(answer, btn));
        btn.addEventListener('touchend', (e) => {
            e.preventDefault(); // Prevent double-firing with click
            selectAnswer(answer, btn);
        });
        answerButtons.appendChild(btn);
    });

    // Clear any residual states
    const allButtons = document.querySelectorAll('#answer-buttons button');
    allButtons.forEach(btn => {
        btn.classList.remove('selected', 'active', 'correct', 'wrong');
        btn.disabled = false;
    });

    if (progressBar) {
        progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
    }
}

function resetState() {
    // Hide container briefly to force full repaint
    answerButtons.style.display = 'none'; // Hide to reset rendering
    answerButtons.innerHTML = ''; // Clear DOM
    answerButtons.style.display = 'block'; // Restore immediately

    timeLeft = 30;
    timerEl.textContent = timeLeft;
    timerEl.style.width = '80px';
    clearInterval(timer);
    document.activeElement?.blur(); // Clear focus
    document.body.setAttribute('ontouchstart', ''); // iOS fast-click

    // Extra safety: clear any button states
    document.querySelectorAll('#answer-buttons button').forEach(btn => {
        btn.classList.remove('selected', 'active', 'correct', 'wrong');
        btn.disabled = false;
    });

    // Debug log to confirm clear
    console.log('resetState: Buttons after clear:', document.querySelectorAll('#answer-buttons button').length);
}

function startTimer() {
  timerEl.textContent = timeLeft;
  timerEl.style.width = '80px';

  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    timerEl.style.width = `${(timeLeft / 30) * 80}px`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function selectAnswer(answer, button) {
    clearInterval(timer);

    // Clear all classes immediately
    const allButtons = document.querySelectorAll('#answer-buttons button');
    allButtons.forEach(btn => {
        btn.classList.remove('correct', 'wrong', 'selected', 'active');
        btn.disabled = false;
    });

    // Apply new classes
    if (answer.correct) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }
    button.classList.add('selected');

    allButtons.forEach(btn => btn.disabled = true);

    // Debug log before delay
    console.log('selectAnswer: Selected buttons before delay:', document.querySelectorAll('.selected').length);

    // Increase delay for iOS Chrome
    setTimeout(() => {
        allButtons.forEach(btn => {
            btn.classList.remove('correct', 'wrong', 'selected', 'active');
            btn.disabled = false;
        });
        document.activeElement?.blur();
        // Debug log after clear
        console.log('selectAnswer: Selected buttons after clear:', document.querySelectorAll('.selected').length);
        nextQuestion();
    }, 1500); // Increased to 1500ms for WebKit
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    startTimer();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  finalScoreEl.textContent = `${usernameInput.value}, your score: ${score}/${questions.length}`;

  let badge = '';
  if (score < 10) {
    badge = "Shroomie Sprout";
  } else if (score >= 10 && score <= 15) {
    badge = "Shroomie Adept";
  } else if (score > 15) {
    badge = "Shroomie Sage";
  }

  badgeEl.textContent = `Badge Earned: ${badge}`;
  showBadge(usernameInput.value, badge);
}

function showBadge(username, badgeLevel) {
  const container = document.getElementById('badge-container');
  const canvas = document.getElementById('badge-canvas');
  const ctx = canvas.getContext('2d');

  container.classList.remove('hidden');
  canvas.width = 400;
  canvas.height = 600;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let iconPath = '';
  if (badgeLevel.includes('Sprout')) iconPath = 'assets/sprout.png';
  else if (badgeLevel.includes('Adept')) iconPath = 'assets/adept.png';
  else iconPath = 'assets/sage.png';

  const icon = new Image();
  icon.src = iconPath;
  icon.crossOrigin = "anonymous";

  icon.onload = () => {
    ctx.drawImage(icon, 0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffa500';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    const usernameY = canvas.height - 100;
    ctx.fillText(username, canvas.width / 2, usernameY);
  };
}
