# 🤖 Künstliche Intelligenz – Unsere Website

**Von Chris Kaiser & Louis Förster** | GK Informatik, Klasse 11 (2026)

🔗 **Live ansehen:** [projektkischule.vercel.app](https://projektkischule.vercel.app)

---

## Die Seiten im Überblick

| Seite | Was steht drauf? |
|---|---|
| **Startseite** | Einführung ins Thema & Übersicht über alle Unterseiten |
| **Grundlagen** | Wie Machine Learning & Neuronale Netze funktionieren, die drei KI-Stufen (ANI, AGI, ASI) |
| **Geschichte** | KI-Meilensteine von 1936 bis heute, AI Winters, der Wandel von Symbolischer KI zu Deep Learning |
| **Weitere Anwendungen** | KI in der Raumfahrt, Quantencomputer + KI |
| **KI in der Schule** | ChatGPT im Unterricht, Lern-Apps, Chancen und Risiken im Bildungswesen |
| **Chancen & Risiken** | Bias, Deepfakes, Überwachung, Datenschutz |
| **Programmierung** | KI-gestütztes Coding, Tools wie Copilot & Claude Code, wie sich der Beruf des Entwicklers verändert |
| **Zukunft** | Prognosen für AGI bis 2030+, humanoide Roboter, Ausblick |
| **Spiel** | "Mars Open World Survival" – ein im Browser spielbares 3D-Survival-Spiel, das wir selbst gebaut haben |
| **Quiz** | Interaktives KI-Quiz zum Testen des Wissens aus allen Themen der Website |
| **Live** | Live-Quiz-Modus – zusammen im Klassenraum spielen, mit Live-Auswertung für die Lehrkraft |
| **Architektur** | Technische Doku der Website – Designsystem, Seitenaufbau, Quiz-Architektur, Supabase-Integration |
| **Quellen** | Alle verwendeten Quellen auf einen Blick |

---

## Wie wir das gebaut haben

- **HTML, CSS & JavaScript** – Die Inhaltsseiten sind in purem HTML und CSS geschrieben. Für das Spiel und die Quiz-Seiten haben wir zusätzlich JavaScript verwendet.
- **Three.js** – Das Mars-Survival-Spiel läuft im Browser mit der 3D-Bibliothek [Three.js](https://threejs.org/) (per CDN eingebunden, kein Build-Schritt nötig).
- **Supabase** – Das Quiz und der Live-Quiz-Modus speichern Ergebnisse, Session-Codes und Antworten in einer [Supabase](https://supabase.com/)-Datenbank, damit die Lehrkraft die Live-Auswertung sehen kann.
- **Matrix-Design** – Schwarzer Hintergrund mit grünen Akzenten (`#39ff14`), inspiriert vom Hacker/Matrix-Look. Das komplette Styling steckt in einer einzigen `style.css`.
- **GitHub** – Der gesamte Code liegt in diesem Repository. Wir haben mit Git Änderungen versioniert und zusammengearbeitet.
- **Vercel** – Die Website wird automatisch über Vercel gehostet. Jeder Push auf den `main`-Branch wird direkt live deployed.

---

## 📂 Projektstruktur

```
📁 code/
  ├── index.html              ← Startseite
  ├── grundlagen.html         ← Grundlagen & Funktionsweise
  ├── geschichte.html         ← Geschichte der KI
  ├── anwendungen.html        ← Weitere Anwendungen
  ├── schule.html             ← KI in der Schule
  ├── risiken.html            ← Chancen & Risiken
  ├── programmierung.html     ← KI & Programmierung
  ├── zukunft.html            ← Zukunft der KI
  ├── spiel.html              ← Mars Open World Survival (3D-Spiel, Three.js)
  ├── quiz.html               ← KI-Quiz (mit Supabase-Persistenz)
  ├── quiz-live.html          ← Live-Quiz-Modus (Session-Code, Lehrer-Ansicht)
  ├── quiz-questions.js       ← Fragenkatalog (geteilt zwischen quiz.html & quiz-live.html)
  ├── quiz-config.example.js  ← Vorlage für die Supabase-Credentials
  ├── quiz-config.js          ← Lokale Config (gitignored, NICHT im Repo)
  ├── architektur.html        ← Technische Doku der Website
  ├── quellen.html            ← Quellenverzeichnis
  ├── style.css               ← Das komplette Styling (Matrix-Design)
  └── images/                 ← Bilder, die in den Seiten eingebunden sind

📁 img-src/                   ← Original-Bilder in höherer Auflösung

📁 md files/                  ← Recherche-Notizen & Doku als Markdown
  ├── Grundlagen.md
  ├── Geschichte.md
  ├── Weitere anwendungen.md
  ├── Ki in der Schule.md
  ├── Chancen und Risiken.md
  ├── Ki-Dev.md
  ├── Zukunft von Ki.md
  ├── architektur.md          ← Technische Doku (Quelle für architektur.html)
  └── notes.md
```

Alle HTML-Seiten teilen sich eine gemeinsame `style.css` und sind untereinander über eine Navigationsleiste verlinkt. Für eine ausführliche technische Doku siehe [`code/architektur.html`](code/architektur.html) bzw. [`md files/architektur.md`](md%20files/architektur.md).

---

## 🔧 Quiz lokal einrichten

Damit das Quiz lokal funktioniert, braucht es eine `quiz-config.js` mit den Supabase-Zugangsdaten. Diese Datei ist absichtlich nicht eingecheckt:

1. `code/quiz-config.example.js` nach `code/quiz-config.js` kopieren.
2. `SUPABASE_URL` und `SUPABASE_ANON_KEY` aus dem Supabase-Dashboard eintragen (Project Settings → API).
3. Seite einfach in den Browser ziehen oder über Vercel deployen – fertig.

Ohne `quiz-config.js` läuft das Quiz im lokalen Modus (ohne Leaderboard / Live-Auswertung).

---

*GK Informatik 2026 – Thema: Künstliche Intelligenz*
