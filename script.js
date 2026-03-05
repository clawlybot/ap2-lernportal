// Quiz Data
const quizData = {
    projekt: [
        {
            question: "Was ist der Hauptunterschied zwischen Wasserfall- und Spiralmodell?",
            answers: ["Wasserfall ist iterativ, Spiralmodell ist sequenziell", "Wasserfall ist sequenziell, Spiralmodell ist iterativ", "Beide sind identisch", "Keiner der beiden wird in der Praxis verwendet"],
            correct: 1,
            explanation: "Das Wasserfallmodell arbeitet sequenziell (Phase nach Phase), während das Spiralmodell iterativ ist und mehrere Durchläufe mit Feedback ermöglicht."
        },
        {
            question: "Was ist ein Projektstrukturplan (PSP)?",
            answers: ["Eine Grafik der Projektfinanzierung", "Eine hierarchische Darstellung aller Projektergebnisse", "Ein Plan für die Projektbesprechungen", "Eine Liste aller Mitarbeiter"],
            correct: 1,
            explanation: "Der PSP unterteilt das Projekt hierarchisch in Teilaufgaben und Arbeitspakete zur besseren Übersicht und Kontrolle."
        },
        {
            question: "Was bedeutet FMEA?",
            answers: ["Failure Mode and Effects Analysis", "Financial Management and Estimation Analysis", "Functional Modular Engineering Architecture", "Framework for Managing Enterprise Activities"],
            correct: 0,
            explanation: "FMEA ist eine Methode zur systematischen Analyse von Fehlerquellen und deren Auswirkungen im Projektmanagement."
        }
    ],
    netzwerk: [
        {
            question: "Wie viele Schichten hat das OSI-Modell?",
            answers: ["5", "6", "7", "8"],
            correct: 2,
            explanation: "Das OSI-Modell (Open Systems Interconnection) hat 7 Schichten: Physikalisch, Sicherung, Vermittlung, Transport, Sitzung, Darstellung und Anwendung."
        },
        {
            question: "Was ist VLAN?",
            answers: ["Virtual Local Area Network", "Very Large Area Network", "Virtualized Logical Access Network", "Virtual Link Administration Network"],
            correct: 0,
            explanation: "VLAN ermöglicht die logische Segmentierung eines physischen Netzwerks in mehrere virtuelle Netzwerke."
        },
        {
            question: "Welche IPv4-Adressklasse ist für private Netzwerke reserviert?",
            answers: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "Alle genannten Optionen"],
            correct: 3,
            explanation: "Alle drei Bereiche (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) sind von der IANA für private Netzwerke reserviert."
        }
    ],
    system: [
        {
            question: "Was ist Active Directory?",
            answers: ["Ein Antivirenprogramm", "Ein Verzeichnisdienst für Windows-Netzwerke", "Ein Cloud-Speicherdienst", "Ein Backup-System"],
            correct: 1,
            explanation: "Active Directory ist ein Verzeichnisdienst von Microsoft zur zentralen Verwaltung von Benutzern, Computern und Ressourcen in Windows-Netzwerken."
        },
        {
            question: "Was ist Docker?",
            answers: ["Ein Webserver", "Eine Container-Plattform für Anwendungen", "Ein Datenbanksystem", "Ein Backup-Tool"],
            correct: 1,
            explanation: "Docker ist eine Plattform zur Containerisierung von Anwendungen, die eine effiziente Bereitstellung und Isolation von Anwendungen ermöglicht."
        },
        {
            question: "Was ist Ansible?",
            answers: ["Ein Monitoring-Tool", "Ein Konfigurationsmanagement- und Automatisierungstool", "Ein Container-Orkestrator", "Ein Backup-System"],
            correct: 1,
            explanation: "Ansible ist ein Open-Source-Tool zur automatisierten Konfiguration und Verwaltung von IT-Infrastruktur."
        }
    ],
    sicherheit: [
        {
            question: "Was ist die DSGVO?",
            answers: ["Datenschutz-Grundverordnung", "Digital Security Global Regulation", "Data Standard General Verification Order", "Deutsche Sicherheits-Gesamtverordnung"],
            correct: 0,
            explanation: "Die DSGVO (Datenschutz-Grundverordnung) ist eine EU-Verordnung zum Schutz personenbezogener Daten."
        },
        {
            question: "Was bedeutet RBAC?",
            answers: ["Remote Backup Access Control", "Role-Based Access Control", "Regulated Business Application Control", "Real-time Biometric Authentication Check"],
            correct: 1,
            explanation: "RBAC (rollenbasierte Zugriffskontrolle) ist ein Sicherheitskonzept, bei dem Berechtigungen basierend auf Rollen vergeben werden."
        },
        {
            question: "Was ist die 3-2-1 Backup-Strategie?",
            answers: ["3 Kopien, 2 verschiedene Medien, 1 offsite Kopie", "3 Server, 2 Netzwerke, 1 Cloud", "3 TB pro Backup, 2 Backups pro Woche, 1 monatliches Archiv", "3 verschlüsselte Partitionen, 2 Passwörter, 1 Hardware-Key"],
            correct: 0,
            explanation: "Die 3-2-1 Regel besagt: 3 Kopien der Daten, auf 2 verschiedenen Speichermedien, mit 1 Kopie außerhalb des Unternehmens."
        }
    ],
    wirtschaft: [
        {
            question: "Was ist das BUrlG?",
            answers: ["Bundesgesetz für Unternehmens-Richtlinien", "Bundesurlaubsgesetz", "Betriebliches Urlaubsgesetz", "Betriebsverfassungs-Richtliniengessetz"],
            correct: 1,
            explanation: "Das BUrlG (Bundesurlaubsgesetz) regelt die Urlaubsansprüche von Arbeitnehmer in Deutschland."
        },
        {
            question: "Was ist die Amortisation?",
            answers: ["Abschreibung von Vermögensgegenständen", "Rückzahlung einer Kapitalanlage", "Gewinn aus Aktienverkauf", "Zinszahlung auf Kredite"],
            correct: 1,
            explanation: "Amortisation ist der Prozess der Rückzahlung einer Kapitalanlage oder eines Kredits über einen festgelegten Zeitraum."
        },
        {
            question: "Was ist ROI?",
            answers: ["Return on Investment", "Regulations on Implementation", "Resource Optimization Index", "Real-time Operating Interface"],
            correct: 0,
            explanation: "ROI (Return on Investment) ist eine Kennzahl, die den Gewinn einer Investition als Prozentsatz der investierten Summe ausdrückt."
        }
    ],
    dokumentation: [
        {
            question: "Was ist die ITIL?",
            answers: ["IT Infrastructure Library", "Information Technology Integration Level", "IT Information Business Layer", "International Technical Industry Laws"],
            correct: 0,
            explanation: "ITIL ist eine Sammlung von Best Practices für IT-Service-Management und IT-Operationen."
        },
        {
            question: "Was ist eine CMDB?",
            answers: ["Computer Management Database", "Configuration Management Database", "Central Monitoring Data Backup", "Corporate Master Database"],
            correct: 1,
            explanation: "Die CMDB (Configuration Management Database) ist eine zentrale Datenbank, die alle IT-Konfigurationselemente erfasst."
        },
        {
            question: "Was sollte eine technische Dokumentation enthalten?",
            answers: ["Nur Fehlerberichte", "Installation, Konfiguration, Wartung und Troubleshooting", "Nur Finanzinformationen", "Nur Benutzerkonten"],
            correct: 1,
            explanation: "Technische Dokumentation sollte umfassend Installation, Konfiguration, Wartung und Troubleshooting-Informationen enthalten."
        }
    ]
};

// State
let currentQuiz = null;
let currentQuestion = 0;
let selectedAnswers = [];
let quizStartTime = null;
let timerInterval = null;
let questionAnswered = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
});

// Start Quiz
function startQuiz(category) {
    const questions = quizData[category];
    if (!questions) {
        alert('Kategorie nicht gefunden');
        return;
    }

    currentQuiz = {
        category: category,
        questions: questions,
        answers: new Array(questions.length).fill(-1),
        startTime: new Date()
    };
    currentQuestion = 0;
    questionAnswered = false;
    quizStartTime = new Date();

    document.getElementById('quiz-modal').classList.remove('hidden');
    showQuestion();
    startTimer();
}

// Start Exam
function startExam(mode) {
    const modeConfig = {
        kurz: { count: 10, time: 15 },
        standard: { count: 30, time: 45 },
        voll: { count: 60, time: 90 }
    };

    const config = modeConfig[mode];
    if (!config) {
        alert('Prüfungsmodus nicht gefunden');
        return;
    }

    const questions = [];

    // Sammle Fragen aus allen Kategorien
    Object.values(quizData).forEach(category => {
        questions.push(...category);
    });

    // Shuffle und limitiere
    const shuffled = questions.sort(() => Math.random() - 0.5).slice(0, config.count);

    currentQuiz = {
        mode: mode,
        questions: shuffled,
        answers: new Array(shuffled.length).fill(-1),
        timeLimit: config.time * 60,
        startTime: new Date()
    };
    currentQuestion = 0;
    questionAnswered = false;
    quizStartTime = new Date();

    document.getElementById('quiz-modal').classList.remove('hidden');
    showQuestion();
    startTimer();
}

// Show Question
function showQuestion() {
    if (!currentQuiz || !currentQuiz.questions || currentQuestion >= currentQuiz.questions.length) {
        console.error('Quiz-Fehler: Keine Fragen verfügbar');
        return;
    }

    const question = currentQuiz.questions[currentQuestion];
    const container = document.getElementById('question-container');
    const counter = document.getElementById('question-counter');

    if (!container) {
        console.error('Fehler: question-container nicht gefunden');
        return;
    }

    counter.textContent = `Frage ${currentQuestion + 1}/${currentQuiz.questions.length}`;

    let html = `<div class="question-text">${question.question}</div>`;
    html += '<div class="answers">';

    question.answers.forEach((answer, index) => {
        const selectedClass = currentQuiz.answers[currentQuestion] === index ? 'selected' : '';
        const letter = String.fromCharCode(65 + index);
        html += `
            <div class="answer-option ${selectedClass}" onclick="selectAnswer(${index})">
                <div class="answer-letter">${letter}</div>
                <div class="answer-text">${answer}</div>
            </div>
        `;
    });

    html += '</div>';

    if (questionAnswered && currentQuiz.answers[currentQuestion] !== -1) {
        const correct = question.correct;
        const selected = currentQuiz.answers[currentQuestion];

        // Mark correct and wrong answers
        html = `<div class="question-text">${question.question}</div>`;
        html += '<div class="answers">';

        question.answers.forEach((answer, index) => {
            const letter = String.fromCharCode(65 + index);
            let answerClass = '';

            if (index === correct) {
                answerClass = 'correct';
            } else if (index === selected && selected !== correct) {
                answerClass = 'wrong';
            }

            html += `
                <div class="answer-option ${answerClass}">
                    <div class="answer-letter">${letter}</div>
                    <div class="answer-text">${answer}</div>
                </div>
            `;
        });

        html += '</div>';
        html += `<div class="explanation">💡 ${question.explanation}</div>`;
    }

    container.innerHTML = html;

    // Update progress bar
    const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        progressFill.style.width = progress + '%';
    }

    // Update buttons
    updateButtons();
}

// Select Answer
function selectAnswer(index) {
    if (questionAnswered || !currentQuiz || index < 0 || index >= currentQuiz.questions[currentQuestion].answers.length) {
        return;
    }

    currentQuiz.answers[currentQuestion] = index;
    questionAnswered = true;
    showQuestion();
}

// Next Question
function nextQuestion() {
    if (!currentQuiz || !currentQuiz.questions) return;

    if (currentQuestion < currentQuiz.questions.length - 1) {
        currentQuestion++;
        questionAnswered = false;
        showQuestion();
    } else {
        endQuiz();
    }
}

// Previous Question
function prevQuestion() {
    if (!currentQuiz || !currentQuiz.questions) return;

    if (currentQuestion > 0) {
        currentQuestion--;
        questionAnswered = false;
        showQuestion();
    }
}

// Update Buttons
function updateButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!prevBtn || !nextBtn || !currentQuiz) return;

    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === currentQuiz.questions.length - 1) {
        nextBtn.textContent = questionAnswered ? 'Ergebnisse anzeigen' : 'Frage beantworten';
        nextBtn.disabled = !questionAnswered;
    } else {
        nextBtn.textContent = 'Weiter →';
        nextBtn.disabled = !questionAnswered;
    }
}

// Timer
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (!currentQuiz) {
            clearInterval(timerInterval);
            return;
        }

        const elapsed = Math.floor((new Date() - quizStartTime) / 1000);
        const timeLimit = currentQuiz.timeLimit || (currentQuiz.questions.length * 90); // Default 90 sec per question
        const remaining = Math.max(0, timeLimit - elapsed);

        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        const timerEl = document.getElementById('quiz-timer');

        if (timerEl) {
            timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            if (remaining <= 60 && remaining > 0) {
                timerEl.classList.add('warning');
                timerEl.classList.remove('danger');
            } else if (remaining === 0) {
                timerEl.classList.add('danger');
                timerEl.classList.remove('warning');
                clearInterval(timerInterval);
                setTimeout(endQuiz, 1000);
            } else {
                timerEl.classList.remove('warning', 'danger');
            }
        }
    }, 1000);
}

// End Quiz
function endQuiz() {
    clearInterval(timerInterval);

    if (!currentQuiz || !currentQuiz.questions) {
        alert('Fehler: Quiz-Daten nicht gefunden');
        return;
    }

    const correct = currentQuiz.answers.filter((ans, idx) => {
        return ans === currentQuiz.questions[idx].correct;
    }).length;

    const total = currentQuiz.questions.length;
    const percent = Math.round((correct / total) * 100);

    const timeTaken = Math.floor((new Date() - quizStartTime) / 60000);

    // Calculate feedback
    let feedback = '';
    if (percent >= 90) {
        feedback = '🎉 Ausgezeichnet! Du bist sehr gut vorbereitet!';
    } else if (percent >= 70) {
        feedback = '✅ Gut gemacht! Du kannst dich noch etwas verbessern.';
    } else if (percent >= 50) {
        feedback = '⚠️ Befriedigend. Weitere Übung wird empfohlen.';
    } else {
        feedback = '📚 Du solltest dich intensiver mit dem Thema beschäftigen.';
    }

    document.getElementById('result-percent').textContent = percent + '%';
    document.getElementById('result-text').textContent = `${correct}/${total} Punkte`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('total-count').textContent = total;
    document.getElementById('time-spent').textContent = timeTaken;
    document.getElementById('result-feedback').innerHTML = `<p>${feedback}</p>`;

    document.getElementById('quiz-modal').classList.add('hidden');
    document.getElementById('result-modal').classList.remove('hidden');

    // Update progress tracking (nur für Kategorien, nicht für Exams)
    if (currentQuiz.category) {
        updateProgress(currentQuiz.category, percent);
    }
}

// Close Quiz
function closeQuiz() {
    if (confirm('Möchtest du das Quiz wirklich abbrechen?')) {
        clearInterval(timerInterval);
        const modal = document.getElementById('quiz-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
        currentQuiz = null;
        currentQuestion = 0;
        questionAnswered = false;
    }
}

// Close Result
function closeResult() {
    const modal = document.getElementById('result-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    currentQuiz = null;
    currentQuestion = 0;
    questionAnswered = false;
}

// Update Progress
function updateProgress(category, percent) {
    if (!category) return;

    const progressEl = document.getElementById(category + '-percent');
    const barEl = document.getElementById(category + '-bar');

    if (progressEl && barEl) {
        try {
            const currentPercent = parseInt(progressEl.textContent) || 0;
            const newPercent = Math.max(currentPercent, percent);

            progressEl.textContent = newPercent + '%';
            barEl.style.width = newPercent + '%';

            localStorage.setItem(`progress_${category}`, newPercent);
        } catch (e) {
            console.error('Fehler beim Aktualisieren des Fortschritts:', e);
        }
    }
}

// Load saved progress
function loadProgress() {
    try {
        const categories = ['projekt', 'netzwerk', 'system', 'sicherheit', 'wirtschaft', 'dokumentation'];
        categories.forEach(cat => {
            const saved = localStorage.getItem(`progress_${cat}`);
            if (saved) {
                const progressEl = document.getElementById(cat + '-percent');
                const barEl = document.getElementById(cat + '-bar');
                if (progressEl && barEl) {
                    progressEl.textContent = saved + '%';
                    barEl.style.width = saved + '%';
                }
            }
        });
    } catch (e) {
        console.error('Fehler beim Laden des Fortschritts:', e);
    }
}

// Load progress on page load
window.addEventListener('load', loadProgress);
