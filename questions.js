// AP2 Fachinformatiker Systemintegration - Prüfungsfragen
const questionsDB = {
    projekt: [
        {
            question: "Welches Phasenmodell zeichnet sich durch iterative Zyklen aus?",
            options: [
                { letter: "A", text: "Wasserfallmodell" },
                { letter: "B", text: "V-Modell" },
                { letter: "C", text: "Scrum/Agile" },
                { letter: "D", text: "Spiralmodell" }
            ],
            correct: "C",
            explanation: "Scrum ist ein agiles Framework mit iterativen Sprints (2-4 Wochen)"
        },
        {
            question: "Was bedeutet 'Meilenstein' im Projektmanagement?",
            options: [
                { letter: "A", text: "Ein Arbeitspaket" },
                { letter: "B", text: "Ein Ereignis mit Dauer 0 Tagen" },
                { letter: "C", text: "Die Deadline" },
                { letter: "D", text: "Ein Budgetposten" }
            ],
            correct: "B",
            explanation: "Meilensteine markieren Zwischenziele ohne Dauer (nur Zeitpunkt)"
        },
        {
            question: "Was ist ein Product Backlog in Scrum?",
            options: [
                { letter: "A", text: "Eine Fehlerliste" },
                { letter: "B", text: "Priorisierte Liste aller Anforderungen" },
                { letter: "C", text: "Das Budget" },
                { letter: "D", text: "Abgeschlossene Tasks" }
            ],
            correct: "B",
            explanation: "Der Product Backlog enthält alle gewünschten Features priorisiert"
        }
    ],
    netzwerk: [
        {
            question: "Wie viele Schichten hat das OSI-Modell?",
            options: [
                { letter: "A", text: "4" },
                { letter: "B", text: "5" },
                { letter: "C", text: "7" },
                { letter: "D", text: "8" }
            ],
            correct: "C",
            explanation: "OSI hat 7 Schichten: Physical, Data Link, Network, Transport, Session, Presentation, Application"
        },
        {
            question: "Auf welcher OSI-Schicht arbeitet ein Router?",
            options: [
                { letter: "A", text: "Layer 2 (Data Link)" },
                { letter: "B", text: "Layer 3 (Network)" },
                { letter: "C", text: "Layer 4 (Transport)" },
                { letter: "D", text: "Layer 7 (Application)" }
            ],
            correct: "B",
            explanation: "Router arbeiten auf Layer 3 (Network Layer) und routen anhand von IP-Adressen"
        },
        {
            question: "Welches Protokoll wird für die Auflösung von IP-Adressen in MAC-Adressen verwendet?",
            options: [
                { letter: "A", text: "DNS" },
                { letter: "B", text: "ARP" },
                { letter: "C", text: "DHCP" },
                { letter: "D", text: "TCP" }
            ],
            correct: "B",
            explanation: "Address Resolution Protocol (ARP) löst IP in MAC-Adressen auf"
        }
    ],
    system: [
        {
            question: "Was ist Active Directory?",
            options: [
                { letter: "A", text: "Ein Virenscanner" },
                { letter: "B", text: "Ein Verzeichnisdienst von Microsoft" },
                { letter: "C", text: "Ein Backup-Tool" },
                { letter: "D", text: "Ein Netzwerkprotokoll" }
            ],
            correct: "B",
            explanation: "Active Directory ist Microsofts Verzeichnisdienst zur zentralen Benutzer- und Ressourcenverwaltung"
        },
        {
            question: "Welcher Befehl zeigt die Netzwerkkonfiguration unter Linux an?",
            options: [
                { letter: "A", text: "netstat" },
                { letter: "B", text: "ifconfig / ip addr" },
                { letter: "C", text: "ping" },
                { letter: "D", text: "tracert" }
            ],
            correct: "B",
            explanation: "'ifconfig' (alt) oder 'ip addr' (modern) zeigen die Netzwerkkonfiguration"
        }
    ],
    sicherheit: [
        {
            question: "Was bedeutet 'Principle of Least Privilege'?",
            options: [
                { letter: "A", text: "Maximale Rechte für alle" },
                { letter: "B", text: "Minimal nötige Rechte für jede Aufgabe" },
                { letter: "C", text: "Keine Passwörter verwenden" },
                { letter: "D", text: "Alle Daten verschlüsseln" }
            ],
            correct: "B",
            explanation: "Least Privilege bedeutet: Nur die minimal nötigen Rechte zuweisen"
        },
        {
            question: "Was beschreibt die 3-2-1 Backup-Strategie?",
            options: [
                { letter: "A", text: "3 Backup-Typen, 2 Tage aufbewahren, 1 Cloud" },
                { letter: "B", text: "3 Kopien, 2 verschiedene Medien, 1 offsite" },
                { letter: "C", text: "3 Wochen, 2 Monate, 1 Jahr" },
                { letter: "D", text: "3 Benutzer, 2 Rechte, 1 Admin" }
            ],
            correct: "B",
            explanation: "3 Kopien der Daten, auf 2 verschiedenen Medientypen, 1 davon an einem anderen Ort"
        }
    ],
    wirtschaft: [
        {
            question: "Welche Sozialversicherungspflicht gilt für Arbeitnehmer?",
            options: [
                { letter: "A", text: "Nur Krankenversicherung" },
                { letter: "B", text: "Alle fünf: KV, PV, RV, AV, UV" },
                { letter: "C", text: "Nur Rentenversicherung" },
                { letter: "D", text: "Keine Pflicht, freiwillig" }
            ],
            correct: "B",
            explanation: "Alle 5 Sozialversicherungen sind für Arbeitnehmer pflichtversichert"
        }
    ],
    dokumentation: [
        {
            question: "Was bedeutet ITIL?",
            options: [
                { letter: "A", text: "Internet Technology Information Library" },
                { letter: "B", text: "Information Technology Infrastructure Library" },
                { letter: "C", text: "International Technical Integration Layer" },
                { letter: "D", text: "Internet Traffic Integration Logic" }
            ],
            correct: "B",
            explanation: "ITIL = Information Technology Infrastructure Library - Framework für IT-Service-Management"
        }
    ]
};