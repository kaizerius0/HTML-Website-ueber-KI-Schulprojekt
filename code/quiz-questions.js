// Gemeinsame Quiz-Daten fuer quiz.html und quiz-live.html.
//
// Die Reihenfolge der Fragen ist stabiler Schluessel fuer das `answers`-Feld
// in Supabase: ein Eintrag `{q: 5, correct: true}` zeigt auf den Index 5
// dieser Liste. Reihenfolge daher NICHT aendern, sonst werden alte
// Antworten in der Schwierigkeits-Analyse falsch zugeordnet.

window.QUIZ_QUESTIONS = [
    {
        topic: 'Grundlagen',
        question: 'Welche Architektur bildet seit 2017 die Basis aller modernen großen Sprachmodelle wie GPT, Claude oder Gemini?',
        answers: [
            { text: 'Transformer', correct: true },
            { text: 'Perceptron', correct: false },
            { text: 'Convolutional Neural Network', correct: false },
            { text: 'Recurrent Neural Network', correct: false }
        ],
        explanation: 'Der Transformer mit seinem Self-Attention-Mechanismus wurde 2017 vorgestellt und ist die Grundlage aller heutigen LLMs.'
    },
    {
        topic: 'Grundlagen',
        question: 'Welche Aussage zu den drei Stufen der KI (ANI, AGI, ASI) ist korrekt?',
        answers: [
            { text: 'ANI – Schwache KI ist der heutige Stand der Technik.', correct: true },
            { text: 'AGI – Starke KI ist seit 2024 erreicht.', correct: false },
            { text: 'ASI – Superintelligenz ist die einfachste Stufe.', correct: false },
            { text: 'ANI ist eine Spezialform von ASI.', correct: false }
        ],
        explanation: 'Alle heutigen KI-Systeme sind ANI – auf eine Aufgabe spezialisiert. AGI wird laut Site frühestens 2029–2035 erwartet, ASI ist reine Zukunftsvision.'
    },
    {
        topic: 'Grundlagen',
        question: 'Was bezeichnet der Begriff „Halluzination" bei KI-Sprachmodellen?',
        answers: [
            { text: 'Plausibel klingende, aber inhaltlich falsche Aussagen des Modells.', correct: true },
            { text: 'Das Auswendiglernen der Trainingsdaten.', correct: false },
            { text: 'Das Überhitzen der Hardware beim Training.', correct: false },
            { text: 'Den Abbruch eines Trainingslaufs.', correct: false }
        ],
        explanation: 'Sprachmodelle optimieren auf statistische Plausibilität, nicht auf Wahrheit – sie erfinden manchmal Fakten, die überzeugend klingen.'
    },
    {
        topic: 'Geschichte',
        question: 'In welchem Jahr stellte Alan Turing seinen berühmten Turing-Test vor?',
        answers: [
            { text: '1950', correct: true },
            { text: '1936', correct: false },
            { text: '1956', correct: false },
            { text: '1943', correct: false }
        ],
        explanation: '1950 stellte Turing den Turing-Test vor. 1936 entwickelte er die Turingmaschine, 1956 fand die Dartmouth-Konferenz statt.'
    },
    {
        topic: 'Geschichte',
        question: 'Auf welcher Konferenz wurde 1956 der Begriff „Artificial Intelligence" geprägt?',
        answers: [
            { text: 'Dartmouth-Konferenz', correct: true },
            { text: 'Stanford-Konferenz', correct: false },
            { text: 'MIT-Symposium', correct: false },
            { text: 'Turing-Konferenz', correct: false }
        ],
        explanation: 'John McCarthy prägte den Begriff „Artificial Intelligence" 1956 auf der Dartmouth-Konferenz – dem offiziellen Startschuss der KI-Forschung.'
    },
    {
        topic: 'Geschichte',
        question: 'Welches KI-System schlug 2016 den Go-Weltmeister Lee Sedol?',
        answers: [
            { text: 'AlphaGo von DeepMind', correct: true },
            { text: 'Deep Blue von IBM', correct: false },
            { text: 'Watson von IBM', correct: false },
            { text: 'AlexNet', correct: false }
        ],
        explanation: 'AlphaGo besiegte 2016 Lee Sedol in einem Spiel, das als zu komplex für Computer galt. Deep Blue schlug bereits 1997 Schachweltmeister Kasparov.'
    },
    {
        topic: 'Anwendungen',
        question: 'Warum müssen Mars-Rover wie Perseverance autonom mit KI navigieren?',
        answers: [
            { text: 'Weil ein Funksignal vom Mars rund 20 Minuten zur Erde braucht.', correct: true },
            { text: 'Weil auf dem Mars keine Stromversorgung möglich ist.', correct: false },
            { text: 'Weil die Rover keine Kameras besitzen.', correct: false },
            { text: 'Weil die NASA keine Kontrollzentren mehr betreibt.', correct: false }
        ],
        explanation: 'Eine Funkverbindung zum Mars dauert ca. 20 Minuten – Echtzeit-Steuerung ist unmöglich, also muss der Rover selbst entscheiden.'
    },
    {
        topic: 'Anwendungen',
        question: 'Welche Recheneinheiten nutzen Quantencomputer statt klassischer Bits?',
        answers: [
            { text: 'Qubits', correct: true },
            { text: 'Tensoren', correct: false },
            { text: 'Petabits', correct: false },
            { text: 'Hyperbits', correct: false }
        ],
        explanation: 'Qubits können mehrere Zustände gleichzeitig annehmen. Laut Site bietet IBM 2026 öffentlich zugängliche Quantenprozessoren an.'
    },
    {
        topic: 'Schule',
        question: 'Aus welchen vier Komponenten bestehen Intelligente Tutorsysteme (ITS)?',
        answers: [
            { text: 'Wissensmodell, Lernermodell, Tutorenmodell, Schnittstelle', correct: true },
            { text: 'Datenbank, Server, Client, Cloud', correct: false },
            { text: 'Eingabe, Verarbeitung, Ausgabe, Feedback', correct: false },
            { text: 'Lehrer, Schüler, Aufgabe, Bewertung', correct: false }
        ],
        explanation: 'Wissensmodell (Fachwissen), Lernermodell (Lernstand), Tutorenmodell (didaktische Strategie) und Schnittstelle bilden die Standardarchitektur eines ITS.'
    },
    {
        topic: 'Risiken',
        question: 'Wie viel mehr Energie verbraucht laut Site eine ChatGPT-Anfrage im Vergleich zu einer einfachen Google-Suche?',
        answers: [
            { text: 'Etwa 10–20 mal so viel', correct: true },
            { text: 'Etwa 2–3 mal so viel', correct: false },
            { text: 'Etwa 100 mal so viel', correct: false },
            { text: 'Genauso viel', correct: false }
        ],
        explanation: 'Eine ChatGPT-Anfrage verbraucht ca. 10–20x so viel Energie wie eine Google-Suche – der Strombedarf der KI-Industrie verdoppelt sich voraussichtlich bis 2027.'
    },
    {
        topic: 'Risiken',
        question: 'Welche KI-Anwendung wird vom EU AI Act als „verboten" eingestuft?',
        answers: [
            { text: 'Social-Scoring-Systeme', correct: true },
            { text: 'Spam-Filter', correct: false },
            { text: 'Chatbots', correct: false },
            { text: 'Videospiel-KI', correct: false }
        ],
        explanation: 'Social-Scoring-Systeme und manipulative KI sind verboten. Spam-Filter und Videospiel-KI fallen in die Stufe „minimal", Chatbots in „begrenzt".'
    },
    {
        topic: 'Programmierung',
        question: 'Wie heißt das interne System bei Spotify, das laut Co-CEO Söderström dafür sorgt, dass die besten Entwickler „seit Dezember keine einzige Zeile Code mehr geschrieben" haben?',
        answers: [
            { text: 'Honk', correct: true },
            { text: 'Cursor', correct: false },
            { text: 'Copilot', correct: false },
            { text: 'Devin', correct: false }
        ],
        explanation: 'Spotifys System „Honk" nutzt generative KI – insbesondere Claude Code – um Code-Deployments fast vollständig zu automatisieren.'
    },
    {
        topic: 'Programmierung',
        question: 'Was beschreibt das Konzept „Vibe Coding"?',
        answers: [
            { text: 'Devs beschreiben in natürlicher Sprache, wie sich ein System verhalten soll – die KI baut den konkreten Code.', correct: true },
            { text: 'Programmieren ohne jegliche Tests oder Reviews.', correct: false },
            { text: 'KI-Modelle, die ohne Energieverbrauch laufen.', correct: false },
            { text: 'Eine Methode, mit der KI Musik komponiert.', correct: false }
        ],
        explanation: 'Beim Vibe Coding sinkt die Einstiegshürde für Nicht-Programmierer – Produkt-Intuition und Architektur werden wichtiger als Syntax.'
    },
    {
        topic: 'Zukunft',
        question: 'Welche AGI-Prognose stammt laut Site von Sam Altman (OpenAI)?',
        answers: [
            { text: 'Etwa 2029–2030', correct: true },
            { text: '2026–2027', correct: false },
            { text: '2040–2050', correct: false },
            { text: 'Bereits vor 2025', correct: false }
        ],
        explanation: 'Sam Altman erwartet AGI „innerhalb einiger tausend Tage", was etwa 2029–2030 entspricht. Dario Amodei (Anthropic) ist optimistischer (2026–2027), die Forschung im Median konservativer (2040–2050).'
    },
    {
        topic: 'Zukunft',
        question: 'Was unterscheidet einen KI-Agenten von einem klassischen Chatbot?',
        answers: [
            { text: 'Er zerlegt Aufgaben in Schritte, ruft Werkzeuge wie APIs auf und arbeitet iterativ.', correct: true },
            { text: 'Er kann ausschließlich Texte zusammenfassen.', correct: false },
            { text: 'Er funktioniert komplett ohne Trainingsdaten.', correct: false },
            { text: 'Er läuft nur auf Quantencomputern.', correct: false }
        ],
        explanation: 'Ein Agent plant Schritte, ruft Tools auf, prüft sich selbst und iteriert – statt nur auf einzelne Eingaben zu antworten.'
    }
];
