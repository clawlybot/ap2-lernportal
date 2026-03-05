// AP2 Lernportal - Haupt-JavaScript
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer = null;
let timeRemaining = 0;
let userAnswers = [];
let quizMode = '';
let selectedAnswer = null;

// Prüfungsmodi-Konfiguration
const examConfig = {
    kurz: { count: 10, minutes: 15 },
    standard: { count: 30, minutes: 45 },
    voll: { count: 60, minutes: 90 }
};

// DOM-Elemente
const quizModal = document.getElementById('quiz-modal');
const resultModal = document.getElementById('result-modal');
const questionContainer = document.getElementById('question-container');
const questionCounter = document.getElementById('question-counter');
const timerDisplay = document.getElementById('quiz-timer');
const progressFill = document.getElementById('progress-fill');
const btnNext = document.getElementById('next-btn');

// Prüfungsmodus starten
function startExam(mode) {
    quizMode = mode;
    const config = examConfig[mode];
    
    // Zufällige Fragen auswählen
    const allQuestions = Object.values(questionsDB).flat();
    currentQuestions = shuffleArray([...allQuestions]).slice(0, config.count);
    
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    timeRemaining = config.minutes * 60;
    
    quizModal.classList.remove('hidden');
    resultModal.classList.add('hidden');
    
    startTimer();
    showQuestion();
}

// Themen-Quiz starten
function startQuiz(subject) {
    quizMode = 'subject';
    currentQuestions = shuffleArray([...questionsDB[subject]]);
    
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    timeRemaining = 600; // 10 Minuten für Themen-Quiz
    
    quizModal.classList.remove('hidden');
    resultModal.classList.add('hidden');
    
    startTimer();
    showQuestion();
}

// Timer starten
function startTimer() {
    updateTimerDisplay();
    timer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 0) {
            endQuiz();
        }
    }, 1000);
}

// Timer-Anzeige aktualisieren
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Farbwechsel bei knapper Zeit
    if (timeRemaining < 60) {
        timerDisplay.classList.add('danger');
    } else if (timeRemaining < 300) {
        timerDisplay.classList.add('warning');
    }
}

// Frage anzeigen
function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Counter aktualisieren
    questionCounter.textContent = `Frage ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    
    // Progress aktualisieren
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    
    // Frage rendern
    questionContainer.innerHTML = `
        <div class="question-text">${question.question}</div>
        <div class="answers">
            ${question.options.map(opt => `
                <div class="answer-option" data-letter="${opt.letter}" onclick="selectAnswer('${opt.letter}')">
                    <span class="answer-letter">${opt.letter}</span>
                    <span>${opt.text}</span>
                </div>
            `).join('')}
        </div>
        <div id="explanation" class="explanation hidden"></div>
    `;
    
    selectedAnswer = null;
    btnNext.disabled = true;
    btnNext.textContent = 'Weiter';
}

// Antwort auswählen
function selectAnswer(letter) {
    if (selectedAnswer) return; // Bereits ausgewählt
    
    selectedAnswer = letter;
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = letter === question.correct;
    
    // Visuelles Feedback
    document.querySelectorAll('.answer-option').forEach(opt => {
        const optLetter = opt.dataset.letter;
        opt.classList.add(optLetter === question.correct ? 'correct' : 'wrong');
        opt.onclick = null; // Deaktivieren
    });
    
    // Erklärung anzeigen
    const explanation = document.getElementById('explanation');
    explanation.innerHTML = `<strong>${isCorrect ? '✓ Richtig!' : '✗ Falsch!'}</strong><br>${question.explanation}`;
    explanation.classList.remove('hidden');
    
    // Antwort speichern
    if (isCorrect) score++;
    userAnswers.push({
        question: question.question,
        userAnswer: letter,
        correctAnswer: question.correct,
        isCorrect: isCorrect
    });
    
    btnNext.disabled = false;
    btnNext.textContent = currentQuestionIndex < currentQuestions.length - 1 ? 'Weiter' : 'Ergebnis anzeigen';
}

// Nächste Frage
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
}

// Quiz beenden
function endQuiz() {
    clearInterval(timer);
    quizModal.classList.add('hidden');
    resultModal.classList.remove('hidden');
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    const passed = percentage >= 60;
    
    document.getElementById('result-percent').textContent = `${percentage}%`;
    document.getElementById('result-text').textContent = passed ? '
浩瀚宇宙 Explorer
markdown复制<div class="progress-container">
    <div class="progress-bar" style="width: ${percentage}%"></div>
</div>
<div class="result-details">
    <p>${score} von ${currentQuestions.length} Fragen richtig</p>
    <p>Zeit: ${formatTime(examConfig[quizMode]?.minutes * 60 - timeRemaining || 600 - timeRemaining)}</p>
</div>
<div class="result-actions">
    <button class="btn" onclick="closeResult()">Schließen</button>
    <button class="btn" onclick="showReview()">Antworten überprüfen</button>
</div>`;
    
    // Fortschritt speichern
    saveProgress(quizMode, score, currentQuestions.length);
}

// Zeit formatieren
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
}

// Fortschritt speichern
function saveProgress(mode, correct, total) {
    const progress = JSON.parse(localStorage.getItem('ap2-progress') || '[]');
    progress.push({
        date: new Date().toISOString(),
        mode: mode,
        score: correct,
        total: total,
        percentage: Math.round((correct / total) * 100)
    });
    localStorage.setItem('ap2-progress', JSON.stringify(progress.slice(-50))); // Letzte 50
}

// Review anzeigen
function showReview() {
    const reviewHtml = userAnswers.map((ans, i) => `
        <div class="review-item ${ans.isCorrect ? 'correct' : 'wrong'}">
            <p><strong>Frage ${i + 1}:</strong> ${ans.question}</p>
            <p>Deine Antwort: <span class="${ans.userAnswer === ans.correctAnswer ? 'correct-text' : 'wrong-text'}">${ans.userAnswer}</span></p>
            <p>Richtige Antwort: <span class="correct-text">${ans.correctAnswer}</span></p>
        </div>
    `).join('');
    
    alert('Review-Feature kommt in Version 2!');
}

// Quiz schließen
function closeQuiz() {
    if (confirm('Prüfung wirklich abbrechen? Der Fortschritt geht verloren.')) {
        clearInterval(timer);
        quizModal.classList.add('hidden');
    }
}

// Ergebnis schließen
function closeResult() {
    resultModal.classList.add('hidden');
}

// Array mischen (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fortschritt laden und anzeigen
function loadProgress() {
    // Wird bei Bedarf implement