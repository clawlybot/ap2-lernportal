// AP2 Fachinformatiker Systemintegration - Prüfungsfragen
const questionsDB = {
    projekt: [
        {
            question: "Welches Phasenmodell zeichnet sich durch iterative Zyklen und häufige Kundenfeedback-Schleifen aus?",
            options: [
                { letter: "A", text: "Wasserfallmodell" },
                { letter: "B", text: "V-Modell" },
                { letter: "C", text: "Scrum/Agile" },
                { letter: "D", text: "Spiralmodell" }
            ],
            correct: "C",
            explanation: "Scrum ist ein agiles Framework mit iterativen Sprints (2-4 Wochen) und täglichem Kundenfeedback durch Sprint Reviews."
        },
        {
            question: "Was ist der Hauptunterschied zwischen einem Projektstrukturplan (PSP) und einem Gantt-Diagramm?",
            options: [
                { letter: "A", text: "Der PSP zeigt Aufgaben hierarchisch, das Gantt-Diagramm zeigt zeitliche Abläufe" },
                { letter: "B", text: "Der PSP ist für kleine Projekte, Gantt für große" },
                { letter: "C", text: "Der PSP ist Pflicht, Gantt optional" },
                { letter: "D", text: "Es gibt keinen Unterschied" }
            ],
            correct: "A",
            explanation: "Der PSP gliedert das Projekt in Arbeitspakete (hierarchisch), während das Gantt-Diagramm die zeitliche Planung und Abhängigkeiten visualisiert."
        },
        {
            question: "In der FMEA (Failure Mode and Effects Analysis) wird das Risiko berechnet als:",
            options: [
                { letter: "A", text: "Wahrscheinlichkeit + Auswirkung" },
                { letter: "B", text: "Wahrscheinlichkeit × Auswirkung × Entdeckbarkeit" },
                { letter: "C", text: "Kosten × Zeit" },
                { letter: "D", text: "Nur die Auswirkung wird betrachtet" }
            ],
            correct: "B",
            explanation: "Die Risikoprioritätszahl (RPZ) = Auftretenswahrscheinlichkeit × Schwere der Auswirkung × Entdeckbarkeit."
        },
        {
            question: "Was bedeutet 'Meilenstein' im Projektmanagement?",
            options: [
                { letter: "A", text: "Ein zeitlich begrenztes Arbeitspaket" },
                { letter: "B", text: "Ein Ereignis mit Dauer 0 Tagen, das einen wichtigen Projektstand markiert" },
                { letter: "C", text: "Die Deadline des Projekts" },
                { letter: "D", text: "Ein Budgetposten" }
            ],
            correct: "B",
            explanation: "Meilensteine markieren wichtige Zwischenziele und haben keine Dauer (nur einen Zeitpunkt)."
        },
        {
            question: "Welches Modell ist besonders für sicherheitskritische Software geeignet?",
            options: [
                { letter: "A", text: "Wasserfall" },
                { letter: "B", text: "V-Modell" },
                { letter: "C", text: "Kanban" },
                { letter: "D", text: "Extreme Programming" }
            ],
            correct: "B",
            explanation: "Das V-Modell (V-Modell XT) verknüpft jede Entwicklungsphase mit einer entsprechenden Test- und Validierungsphase - ideal für kritische Systeme."
        },
        {
            question: "Was ist ein Product Backlog in Scrum?",
            options: [
                { letter: "A", text: "Eine Liste von Fehlern" },
                { letter: "B", text: "Eine priorisierte Liste aller Anforderungen an das Produkt" },
                { letter: "C", text: "Das aktuelle Budget" },
                { letter: "D", text: "Eine Liste abgeschlossener Tasks" }
            ],
            correct: "B",
            explanation: "Der Product Backlog enthält alle gewünschten Features, priorisiert nach Geschäftswert und technischer Abhängigkeit."
        },
        {
            question: "Was bedeutet 'Critical Path' im Netzplan?",
            options: [
                { letter: "A", text: "Der kürzeste Weg durch das Projekt" },
                { letter: "B", text: "Der längste Weg durch das Projekt, der die Mindestprojektdauer bestimmt" },
                { letter: "C", text: "Ein alternativer Plan B" },
                { letter: "D", text: "Die Kostenkritische Phase" }
            ],
            correct: "B",
            explanation: "Der kritische Pfad ist die Abfolge von Vorgängen ohne Pufferzeit - jede Verzögerung verlängert das gesamte Projekt."
        },
        {
            question: "Was ist die 'Definition of Done' in Scrum?",
            options: [
                { letter: "A", text: "Das Projektziel" },
                { letter: "B", text: "Eine gemeinsame Liste von Kriterien, wann eine User Story fertig ist" },
                { letter: "C", text: "Die Deadline" },
                { letter: "D", text: "Ein Vertrag mit dem Kunden" }
            ],
            correct: "B",
            explanation: "Die Definition of Done definiert einheitliche Qualitätskriterien, die alle erfüllt sein müssen, bevor eine Story als abgeschlossen gilt."
        },
        {
            question: "Was ist das Ziel eines Daily Stand-ups?",
            options: [
                { letter: "A", text: "Probleme lösen" },
                { letter: "B", text: "Status-Update und Identifikation von Blockern (max. 15 Minuten)" },
                { letter: "C", text: "Neue Tasks zuweisen" },
                { letter: "D", text: "Kundenpräsentation" }
            ],
            correct: "B",
            explanation: "Das Daily kurz: Was habe ich gestern gemacht? Was mache ich heute? Was blockiert mich? Keine Problemlösung!"
        },
        {
            question: "Was beschreibt die Amortisationszeit?",
            options: [
                { letter: "A", text: "Die Projektdauer" },
                { letter: "B", text: "Die Zeit, bis sich eine Investition durch Einsparungen refinanziert hat" },
                { letter: "C", text: "Die Lebensdauer eines Servers" },
                { letter: "D", text: "Die Zeit bis zum nächsten Update" }
            ],
            correct: "B",
            explanation: "Amortisation = Zeitpunkt, an dem Einsparungen/Erlöse die Anschaffungskosten decken. Danach beginnt die Gewinnzone."
        }
    ],
    netzwerk: [
       ing": "Wie viele Schichten hat das OSI-Modell?",
            options: [
                { letter: "A", text: "4" },
                { letter: "B", text: "5" },
                { letter: "C", text: "7" },
                { letter: "D", text: "8" }
            ],
            correct