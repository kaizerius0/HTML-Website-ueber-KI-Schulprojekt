# Technische Architektur der Website

Diese Dokumentation beschreibt die technische Struktur der Codebase
**„KI-Schulprojekt"** auf Basis der tatsächlichen Quelldateien im Verzeichnis
`code/`. Alle Angaben sind aus dem Code ablesbar – nicht ablesbare Punkte
stehen im Abschnitt [9. Offene Punkte](#9-offene-punkte).

---

## 1. Dateistruktur

```
c:/it-html-ki-website/
├── .gitignore
├── README.md
├── Code-Erklaerung.md
├── ToDo_Bilder.md
├── code/
│   ├── index.html
│   ├── grundlagen.html
│   ├── geschichte.html
│   ├── anwendungen.html
│   ├── schule.html
│   ├── risiken.html
│   ├── programmierung.html
│   ├── zukunft.html
│   ├── spiel.html
│   ├── quiz.html
│   ├── quiz-live.html
│   ├── quellen.html
│   ├── geheim.html
│   ├── style.css
│   ├── quiz-config.js              (gitignored, lokal)
│   ├── quiz-config.example.js
│   ├── quiz-questions.js
│   └── images/                     (Bilder zu den Inhaltsseiten)
├── img-src/                        (Quell-Bilder, größere Auflösung)
└── md files/                       (Recherche-Notizen als Markdown)
```

### HTML-Seiten

| Datei | Zeilen | Inhalt |
|---|---|---|
| `index.html` | 69 | Startseite mit Einleitung „Was ist KI?", „Warum jetzt?" und Navigation in alle Unterseiten. |
| `grundlagen.html` | 187 | Grundlagen: ML, neuronale Netze, Transformer-Architektur, drei KI-Stufen (ANI/AGI/ASI), Begriffstabelle. |
| `geschichte.html` | 135 | Geschichte der KI von Turingmaschine (1936) bis Ära der KI-Agenten (2025–2026), zwei AI Winter. |
| `anwendungen.html` | 135 | Anwendungen in Medizin, Industrie, Alltag, Software, Logistik, Raumfahrt, Quantencomputer. |
| `schule.html` | 107 | KI in der Schule: Intelligente Tutorsysteme, eingesetzte Tools, Chancen, Risiken, EU AI Act. |
| `risiken.html` | 131 | Chancen (Medizin, Klima, Bildung) und Risiken (Bias, Halluzinationen, Deepfakes, EU AI Act). |
| `programmierung.html` | 242 | KI-gestützte Programmierung, Spotify „Honk"-System, Tools (Claude Code, Cursor, Devin), Zukunft. |
| `zukunft.html` | 146 | Zukunftsszenarien: AGI-Prognosen verschiedener Experten, agentische KI, Multimodalität, Raumfahrt. |
| `spiel.html` | 1625 | „Mars Open World Survival" – komplettes 3D-Browser-Spiel mit Three.js (Landing-Page + Game-Overlay). |
| `quiz.html` | 1401 | 15-Fragen-Quiz mit Supabase-Persistenz, Leaderboard und Session-Mode. |
| `quiz-live.html` | 825 | Live-Auswertung für Lehrkräfte: Session-Code generieren, Teilnehmer-Polling, Schwierigkeitsanalyse. |
| `quellen.html` | 219 | Vollständiges Quellenverzeichnis (50+ Links, gruppiert nach Themen). |
| `geheim.html` | 2537 | Easter-Egg-Seite (versteckt über Footer-Link), enthält große ASCII-Art. |

### Weitere Code-Dateien

| Datei | Zeilen | Inhalt |
|---|---|---|
| `style.css` | 268 | Globale Styles (Matrix-Design, Typografie, Layout, Modal, Animationen). |
| `quiz-questions.js` | 174 | 15 Quiz-Fragen als Array `window.QUIZ_QUESTIONS`, geteilt zwischen `quiz.html` und `quiz-live.html`. |
| `quiz-config.example.js` | 16 | Template für die Supabase-Credentials (Vorlage zum Kopieren). |
| `quiz-config.js` | 10 | Lokale, **gitignorierte** Datei mit echten Supabase-URL + Anon-Key. |

### Markdown-Dateien

| Datei | Zeilen | Inhalt |
|---|---|---|
| `md files/Grundlagen.md` | 32 | Recherche-Notizen zu Grundlagen (Quelle für `grundlagen.html`). |
| `md files/Geschichte.md` | 162 | Recherche-Notizen zur KI-Geschichte. |
| `md files/Weitere anwendungen.md` | 46 | Recherche-Notizen zu Anwendungen. |
| `md files/Ki in der Schule.md` | 30 | Recherche-Notizen zu KI im Schulkontext. |
| `md files/Chancen und Risiken.md` | 30 | Recherche-Notizen zu Chancen/Risiken. |
| `md files/Ki-Dev.md` | 180 | Recherche-Notizen zu KI-Programmierung. |
| `md files/Zukunft von Ki.md` | 96 | Recherche-Notizen zur Zukunft. |
| `md files/notes.md` | 4 | Persönliche To-do-Notizen. |
| `README.md` | 70 | Projekt-Übersicht. |
| `Code-Erklaerung.md` | 226 | Erklärung des Codes (Eigendokumentation). |
| `ToDo_Bilder.md` | 97 | Aufgabenliste rund um Bilder. |

---

## 2. Globale Designsprache (`code/style.css`)

Die gesamte Website teilt sich eine einzige Stylesheet-Datei mit
**268 Zeilen**. Sie definiert ein durchgängiges „Matrix-/Hacker-Theme".

### 2.1 Farbpalette

| Hex | Verwendung |
|---|---|
| `#000` | Body-Hintergrund, Tabellen-Zellen, Card-Hintergründe, Knöpfe |
| `#39ff14` | Primärfarbe (Neon-Grün) – Text, Borders, Links, Headings, Buttons |
| `#30dd12` | Etwas dunkleres Grün – `.intro`-Absatz |
| `#28cc10` | Sekundär-Grün – `.section-intro`, kleine Labels |
| `#1a7a0a` | Dunkles Grün für sekundäre Borders (`h2`-Unterstrich, Footer-Border) |
| `#1a4a0a` | Sehr dunkles Grün für Karten-Borders (z.B. Mars-Briefing) |
| `#226600` | Dunkelgrün für Footer-Text und versteckten Easter-Egg-Link |
| `#111` | Hintergrund von Tabellenzeilen beim Hover |
| `#e0e0e0` | Heller Hintergrund (nur für das Neural-Network-Diagramm auf grundlagen.html) |
| `rgba(57,255,20,0.25)` und Varianten | Glow-/Box-Shadow-Effekte |

Spiel- und Quiz-Seiten ergänzen lokale Stylesheets mit zusätzlichen Tönen
(z.B. `#ff5571`/`#ff1439` für „Falsch"-Zustände, `#00ffff` für Tracer-Effekte
im Spiel und Session-Hinweis im Quiz).

### 2.2 Typografie

- **Standard-Schrift:** `Arial, sans-serif` (Body).
- **Mono-Schrift:** `'Courier New', Courier, monospace` (ASCII-Art, HUDs, Buttons im Quiz und Spiel).
- **Schriftgrößen:**
  - `h1` 40 px, `h2` 26 px, `h3` 18 px
  - `p`, `li` 16 px (Line-Height 1.8)
  - `.intro` 17 px (Line-Height 1.9), `.section-intro` 15 px
  - `blockquote` 17 px (Line-Height 1.6)
  - `th`/`td` 15 px
  - Footer 13 px

### 2.3 Layout-Konventionen

- `body` ist `flex column`, `max-width: 900px`, zentriert per `margin: 0 auto`,
  Padding `40px 20px 0`.
- `main { flex: 1 }`, damit der Footer am Boden klebt.
- Listen und Absätze sind auf `max-width: 800px` begrenzt.
- Tabellen auf `max-width: 900px`, `border-collapse: collapse`, volle Breite.
- Bilder: `width: 100%`, `max-width: 800px`, eigene Border `1px solid #39ff14`.
- `.content-image`: `max-width: 100%`, `height: 350px`, `object-fit: cover`,
  `border-radius: 12px`, mit grünem Box-Shadow.

### 2.4 Border-Konventionen

- `h1`: `border-bottom: 2px solid #39ff14`
- `h2`: `border-bottom: 1px solid #1a7a0a`
- `hr`: `border-top: 1px solid #39ff14`, Margin `30px 0`
- `hr.dashed`: zusätzliche Klasse mit `border-top-style: dashed`
- `blockquote`: `border-left: 4px solid #39ff14`
- `footer`: `border-top: 1px solid #1a7a0a`
- `td`: `border: 1px solid #39ff14`
- `nav a:hover`: `border-bottom-color: #39ff14`

### 2.5 Animationen (`@keyframes`)

Nur eine globale Animation in `style.css`:

```css
@keyframes glow {
  from { text-shadow: 0 0 5px #39ff14, 0 0 10px #39ff1466; }
  to   { text-shadow: 0 0 10px #39ff14, 0 0 20px #39ff1488, 0 0 30px #39ff1444; }
}
```

Verwendet von `.ascii-art` (Dauer 3 s, `ease-in-out infinite alternate`) und
dem `.result-rating` im Quiz.

Weitere `@keyframes` sind lokal in den Seiten-Stylesheets definiert:

- `quiz.html`: `pulse-correct` (0.6 s, Antwort richtig), `shake-wrong` (0.4 s,
  Antwort falsch), `lb-dots` (1.2 s, Lade-Punkte).
- `quiz-live.html`: `codeGlow` (3 s, Session-Code-Glow), `rowPulse` (1.6 s,
  neue Teilnehmer-Zeile blitzt cyan auf).

### 2.6 Hover-Verhalten

| Element | Verhalten |
|---|---|
| `nav a` | bekommt grüne Bottom-Border |
| `tr` (Tabelle) | Hintergrund `#111` |
| `.fullscreen-btn` | Hintergrund Grün, Text Schwarz (Inversion) |
| `.game-start-btn` (spiel.html) | Inversion + stärkerer Box-Shadow |
| `.quiz-answer` | leichter grüner Tint + dezenter Glow (kein voller Fill, um nicht „richtig" zu suggerieren) |
| `.quiz-btn` | Inversion + Glow |

---

## 3. Seitenarchitektur

### 3.1 Gemeinsamer Aufbau jeder Seite

Jede HTML-Seite folgt demselben Muster:

```
<head>
  <meta charset="UTF-8">
  <title>…</title>
  <link rel="stylesheet" href="style.css">
  [optional: lokaler <style> für Quiz/Spiel/Live]
</head>
<body>
  <h1>Künstliche Intelligenz</h1>
  <nav>… 12 Links …</nav>
  <hr>
  <main>… Inhalt …</main>
  <footer>
    <a href="geheim.html" class="secret-link">Erstellt von Chris Kaiser &amp; Louis Förster</a>
    Informatikunterricht – Klasse 11, GK Informatik, 2026
  </footer>
</body>
```

### 3.2 Keine Templates – alles dupliziert

Es gibt **keinen Build-Schritt und keine Templates**. Header, Navigation und
Footer sind in jeder der 13 HTML-Seiten **hardcoded dupliziert**. Eine
Änderung am Navigationsmenü (z.B. neuer Eintrag) muss in allen Dateien manuell
nachgezogen werden. Die Navigation enthält in jeder Datei dieselben
12 Links: Startseite, Grundlagen, Geschichte, Anwendungen, KI in der Schule,
Chancen & Risiken, Programmierung, Zukunft, Spiel, Quiz, Live, Quellen.

### 3.3 Navigation zwischen Seiten

Alle internen Verweise sind **relative Pfade** zu `.html`-Dateien im selben
Ordner (`<a href="grundlagen.html">…</a>`). Die Seiten funktionieren dadurch
auch direkt per `file://` – das wird im Code mehrfach explizit berücksichtigt
(z.B. `quiz-config.js` als klassisches Script und Sonderpfad in
`buildQuizUrl()`).

### 3.4 Vollbild-Modal

`grundlagen.html` und `anwendungen.html` enthalten ein eingebettetes Modal
zur Vollbild-Anzeige von Bildern. Beide haben dieselbe `openModal()`/
`closeModal()`-Logik dupliziert. CSS dazu (`.fullscreen-modal`, `.close-btn`,
`.fullscreen-btn`) liegt in `style.css`.

---

## 4. JavaScript-Komponenten

### 4.1 `spiel.html` – Mars Open World Survival

**Verwendete Bibliotheken (CDN, klassische Script-Tags):**

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js"></script>
```

- **Three.js** Version **r128**
- **simplex-noise** Version **2.4.0** für Terrain-Generierung

**Kein Postprocessing/EffectComposer** – die Datei nutzt nur Three.js Core
(`WebGLRenderer` mit `antialias: true`, `ACESFilmicToneMapping`, PCF-Soft-
Shadows). „Glow"-Effekte werden über `MeshStandardMaterial.emissive`,
`PointLight` und CSS-`text-shadow` erzeugt.

**Spiel-Genre:** First-/Third-Person-Open-World-Survival-Shooter (kein
Lightcycle-Spiel). Spielwelt ist eine Marsoberfläche.

**Architektur (gegliedert in Code-Sektionen mit Kommentar-Banners):**

1. **GLOBALS & SETTINGS:** `GAME_STATE`, `SETTINGS` (Mausempfindlichkeit
   `0.0015`, Speed `7`, Sprint-Faktor `1.5`, Jump `9`, Gravity `22`,
   `mapSize: 1500`), `KEYS`.
2. **UI & NOTIFICATIONS:** `showMessage()` mit Fade-out nach 3 s.
3. **PLAYER & CAMERA SETUP:** `cameraGroup` (Yaw) > `pitchGroup` (Pitch) >
   `PerspectiveCamera(75°, near 0.1, far 2000)`. Player-Objekt mit Position,
   Velocity, HP (100), Ammo (150), Inventory.
4. **TERRAIN & ENVIRONMENT:** `SimplexNoise` für Höhenkarte; Terrain ist
   `PlaneGeometry(1500, 1500, 150, 150)`. Zusätzlich 500 Felsen als
   `InstancedMesh`, Hemisphere- + DirectionalLight (2048×2048 Shadow-Map),
   ein „Mond" als `SphereGeometry(60)`.
5. **Interactables & Items:** Klasse `Interactable` (mesh, name, actionText,
   callback). 30 Wasser, 30 Samen, 30 Schrott, 10 Ersatzteile zufällig
   verstreut. Items schweben + rotieren (Sin-Funktion in der Loop).
6. **Buildings & Interiors:** `spawnBuilding(x, z, 'station' | 'outpost')`
   baut Wände, Dach, Boden, Tür (öffnen/schließen per Höhenverschiebung),
   Innenlicht. Die Station enthält Hydrokultur-Planter und einen defekten
   Rover als Quest-Objekte.
7. **Airplane-System:** Selbstgebautes Flugzeug (Rumpf, Cockpit, Flügel,
   Leitwerk, Räder, Propeller). Steuerung mit Schub/Roll, einfache
   Lift-Formel (`liftFactor = min(1, speed/18)`), Chase-Camera-Offset.
8. **QUEST_SYS:** Zwei verkettete Quests – „Alien-Pflanze in Hydrokultur
   anbauen" (15 s Wachstum, +50 HP bei Ernte) und „Rover reparieren"
   (3× Schrott + 1× Teile). Quest-UI wird dynamisch aus dem State gerendert.
9. **ALIENS (AI & PATHING):** 15 initial gespawnte Aliens. Jeder Alien hat
   einen einfachen Zustandsautomaten: `patrol` / `idle` / `chase` / `attack`
   / `dead`. Wechsel über Distanzen (`< 3.5` → attack, `< 40` → chase,
   sonst Random patrol). Raycaster-basierte Hindernisvermeidung in zwei
   Achsen. Bei < 5 verbleibenden Aliens wird die nächste Welle gespawnt
   (`GAME_STATE.wave++`).
10. **PARTICLES:** Globales Staub-System mit 5000 `THREE.Points`, dazu pro
    Schuss/Treffer „Combat"-Explosionen, die nach 1 s entfernt werden.
11. **Input / Shoot:** Pointer-Lock-API für Mausbewegung. `shoot()` macht
    einen Raycast (max. 2000), prüft Live-Aliens, unterscheidet Head- vs.
    Body-Hit (150 vs. 40 HP). Tracer-Linie wird kurz angezeigt.
12. **Main Loop:** `requestAnimationFrame` + `THREE.Clock`. Pro Frame:
    Quest-Update, Particle-Update, Movement+Collision (3 Raycasts pro Achse
    auf Knöchel/Hüfte/Kopf), Gravity, Alien-AI, Render.

**Performance-Techniken aus dem Code:**

- `InstancedMesh` für die 500 Felsen (statt 500 einzelne Meshes).
- Geclampte `movementX/Y` aus Mouse-Events (`MAX_DELTA = 100`).
- `Object Pooling` für Aliens existiert **nicht** explizit – Aliens werden
  bei Tod nach 5 s entfernt, neue Wellen via `createAlien` neu erzeugt.
- Tote Aliens werden im Raycast-Loop übersprungen, damit Kugeln „durch
  Leichen" zu lebenden Zielen treffen können.

**JavaScript-Anteil:** ca. **1000 Zeilen** (Zeilen 626–1622 von 1625).

### 4.2 `quiz.html` – Quiz mit Supabase

**Supabase-Client-Setup:** Klassisches `<script>` lädt `quiz-config.js`
(setzt `window.QUIZ_CONFIG`), danach lädt ein `<script type="module">` den
Supabase-Client dynamisch via ES-Module-Import:

```js
const mod = await import('https://esm.sh/@supabase/supabase-js@2');
supabase = mod.createClient(window.QUIZ_CONFIG.SUPABASE_URL,
                            window.QUIZ_CONFIG.SUPABASE_ANON_KEY);
```

Fällt der CDN-Import oder die Config aus, läuft das Quiz **trotzdem lokal**
weiter (`supabase = null`) und zeigt am Ende „Speichern fehlgeschlagen".

**15 Quiz-Fragen** liegen in `quiz-questions.js` als
`window.QUIZ_QUESTIONS = [...]`. Jede Frage hat die Felder:

```js
{
  topic: 'Grundlagen' | 'Geschichte' | 'Anwendungen'
       | 'Schule' | 'Risiken' | 'Programmierung' | 'Zukunft',
  question: '...',
  answers: [ { text: '...', correct: true|false }, ... ],
  explanation: '...'
}
```

Die **Reihenfolge der Fragen ist stabiler Schlüssel** für das `answers`-Feld
in Supabase – Indexe `q` in einem Eintrag `{q: 5, correct: true}` zeigen auf
den Listen-Index. Daher kommentiert in der Datei: „Reihenfolge daher NICHT
aendern".

**States des Quiz** (nicht als Enum, sondern als sichtbare/versteckte
Sections via `is-hidden`):

| State | Section-ID | Zweck |
|---|---|---|
| `NAME_ENTRY` | `#quiz-name` | Name eingeben (1–50 Zeichen) |
| `START` | `#quiz-start` | Begrüßung, persönlicher Rekord, Session-Code-Feld |
| `QUESTION` | `#quiz-question` | Aktuelle Frage mit HUD (Progress, Score) |
| `RESULT` | `#quiz-result` | Auswertung + Leaderboard + Fehler-Liste |

`FEEDBACK` ist kein eigener State, sondern ein Sub-UI innerhalb von
`QUESTION` (Explanation-Box + „WEITER"-Button werden eingeblendet).

**Player-Identitäts-System** (alles im `localStorage`):

| Key | Inhalt |
|---|---|
| `ki_quiz_player_name` | Anzeigename |
| `ki_quiz_player_id` | UUID via `crypto.randomUUID()` (Fallback `p-{timestamp}-{random}`) |
| `ki_quiz_last_result` | Persistiertes letztes Ergebnis (Version 1) |
| `ki_quiz_highscore` | Persönlicher Rekord (Score-Anzahl) |
| `ki_quiz_active_session` | Nur in `quiz-live.html`: aktive Session des Lehrers |

Migrations-Schritt: Ein alter Key `ki_quiz_last_name` wird einmalig auf
`ki_quiz_player_name` umgezogen.

**Persistierung des letzten Ergebnisses:** Nach jedem Quiz wird der State
serialisiert (`v`, `name`, `playerId`, `sessionCode`, `score`, `total`,
`durationSeconds`, `mistakes`, `answeredCorrectly`, `ownInsertedId`,
`finishedAt`) und bei Reload wieder als RESULT-Screen rekonstruiert
(`showResultFromSaved()`) – ohne erneuten Supabase-Insert.

**Insert in Supabase** (`persistAndShowLeaderboard`):

```js
const insertData = {
  name:             state.playerName,
  player_id:        state.playerId,
  score:            state.score,
  total:            QUESTIONS.length,
  percent:          (score / total) * 100,
  duration_seconds: state.duration,
  answers:          state.answeredCorrectly   // [{q: index, correct: bool}, ...]
};
if (state.sessionCode) insertData.session_code = state.sessionCode;
```

Bei vorhandenem Session-Code (4 Zeichen `A-Z0-9`) wird der Eintrag der
Live-Session zugeordnet. **Im Session-Mode wird kein Leaderboard angezeigt**,
sondern nur ein Hinweis „Frage deine Lehrkraft nach der Auswertung."

**Laden des Leaderboards** (`loadLeaderboardAndPosition`):

```js
supabase.from('quiz_results')
  .select('id, name, score, percent, duration_seconds, created_at, player_id')
  .is('session_code', null)         // nur freie Quizze
  .not('player_id', 'is', null)     // alte Einträge ohne ID ignorieren
  .order('score', { ascending: false })
  .order('duration_seconds', { ascending: true })
  .limit(200);
```

Anschließend **client-side Dedup** pro `player_id` (Bestleistung dank
Sortierung). Top 10 werden gerendert, eigene Zeile wird per `player_id`
erkannt und mit Klasse `.is-self` hervorgehoben.

**JavaScript-Anteil:** ca. **720 Zeilen** (Zeilen 677–1398 von 1401).

### 4.3 `quiz-live.html` – Live-Auswertung

**Session-Code-Generierung:** 4 Zeichen aus dem Pool
`ABCDEFGHJKLMNPQRSTUVWXYZ23456789` (32 Zeichen, ohne `I`, `O`, `0`, `1`, um
Verwechslungen zu vermeiden):

```js
const POOL = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function generateCode() { /* 4× Math.random() in POOL */ }
```

`saveStoredSession(code, startedAt)` legt Code + Startzeit im `localStorage`
unter `ki_quiz_active_session` ab, damit ein Reload des Lehrer-Tabs die
laufende Session wiederherstellt (`loadStoredSession`).

**Polling-Mechanik:** Alle **3000 ms** (`POLL_MS`) ruft `fetchSessionRows()`
Supabase ab:

```js
supabase.from('quiz_results')
  .select('id, name, score, percent, duration_seconds, created_at, answers, player_id')
  .eq('session_code', state.code)
  .gte('created_at', state.startedAt)
  .not('player_id', 'is', null)
  .order('score',            { ascending: false })
  .order('duration_seconds', { ascending: true });
```

Neue Zeilen werden über `state.seenIds`-Set + `created_at < 5 s` erkannt
und bekommen die `.is-new`-Klasse → CSS-Animation `rowPulse` (cyan-Pulse).

**Drei States** (Sections, nicht Enum):

| State | Section-ID | Inhalt |
|---|---|---|
| `setup` | `#setup-state` | „NEUE SESSION STARTEN"-Knopf |
| `active` | `#active-state` | Riesiger Session-Code, Teilnehmer-Counter, Live-Tabelle |
| `results` | `#results-state` | Endrangliste, Klassen-Statistik, Schwierigkeitsanalyse |

**Endauswertung mit Schwierigkeitsanalyse** (`renderDifficulty`):

- Für jede der 15 Fragen werden alle abgegebenen Antworten aller Teilnehmer
  aggregiert (`stats[a.q].correct` / `stats[a.q].count`).
- Wichtig: Es werden **alle** Antworten ausgewertet (auch zweite Versuche
  desselben Spielers), nicht nur Bestleistungen – das spiegelt echte
  Schwierigkeit + Lernkurve.
- Sortierung: schwerste Frage zuerst (kleinster Prozentsatz richtig).
- Visualisierung: pro Frage Balken (`#1a7a0a → #39ff14` Gradient) mit
  Prozent-Label und Topic-Tag.

**Klassen-Statistik:** Teilnehmerzahl, Durchschnitts-Score, bester/
schlechtester Score, Durchschnittsdauer (formatiert als `m:ss`).

**Quiz-URL für Schüler** (`buildQuizUrl`): Bei `file://`-Protokoll wird
`quiz.html?session=CODE` zurückgegeben, sonst absolute URL vom selben
Pfad. Schüler-Quiz parst `?session=XXXX` und füllt das Code-Feld
read-only vor.

**JavaScript-Anteil:** ca. **388 Zeilen** (Zeilen 437–823 von 825).

### 4.4 Inhaltsseiten

`grundlagen.html` und `anwendungen.html` haben jeweils ein ca. 10-zeiliges
Inline-Script für `openModal()`/`closeModal()`. Alle übrigen Inhaltsseiten
(`index.html`, `geschichte.html`, `schule.html`, `risiken.html`,
`programmierung.html`, `zukunft.html`, `quellen.html`, `geheim.html`)
enthalten **kein JavaScript**.

---

## 5. Supabase-Integration

### 5.1 Tabelle `quiz_results`

Aus dem Code abgeleitete Spaltenstruktur (gelesen aus `SELECT`/`INSERT`):

| Spalte | Typ (abgeleitet) | Hinweis |
|---|---|---|
| `id` | integer / uuid | Primary Key, von Supabase vergeben |
| `name` | text | Anzeigename des Spielers |
| `player_id` | text/uuid | UUID aus dem Browser, Dedup-Schlüssel |
| `score` | integer | Anzahl richtiger Antworten |
| `total` | integer | Anzahl Fragen (immer 15) |
| `percent` | numeric | `score / total * 100` |
| `duration_seconds` | integer | Bearbeitungszeit |
| `answers` | jsonb | Array `[{q: index, correct: bool}, …]` |
| `session_code` | text (nullable) | Live-Session-Code (`A-Z0-9{4}`) oder NULL |
| `created_at` | timestamp | Standard-Supabase-Feld |

### 5.2 Row Level Security (RLS)

Die RLS-Policies selbst sind **nicht im Repo abgelegt** (es gibt kein
`supabase/`-Verzeichnis und keine SQL-Migrationen). Was sich aber aus dem
Verhalten und den Kommentaren im Code ableiten lässt:

- **Public Read** ist aktiv: `quiz.html` und `quiz-live.html` lesen ohne
  Authentifizierung aus `quiz_results`.
- **Public Insert** ist aktiv (mit Validierung): unauthentifizierte Inserts
  werden akzeptiert (Anon-Key reicht).
- Die im Kommentar von `quiz-config.example.js` getroffene Aussage lautet:
  „Der `anon`-Key ist absichtlich public, gehoert aber trotzdem nicht in
  den Commit-Verlauf."

### 5.3 Wie Werte im Code referenziert werden

```js
window.QUIZ_CONFIG = {
  SUPABASE_URL:      'https://<projekt>.supabase.co',
  SUPABASE_ANON_KEY: 'eyJ…'
};
```

- Datei `quiz-config.js` wird als klassisches `<script src="…">` geladen
  (nicht als Modul) – damit funktioniert sie auch via `file://` ohne
  Webserver.
- `quiz-config.example.js` enthält Platzhalter und ist eingecheckt.
- `quiz-config.js` ist in `.gitignore` (`code/quiz-config.js`) und enthält
  die echten Werte.

### 5.4 Warum der Public Anon Key ungefährlich ist

Im Repo-Kommentar steht es explizit: Anon-Key ist absichtlich public.
**RLS schützt – nicht das Geheimhalten des Keys.** Der Key autorisiert
nur die Operationen, die RLS für die `anon`-Rolle erlaubt (hier: Lesen
und Einfügen in `quiz_results` mit den vorgesehenen Spalten). Ein
geheimer `service_role`-Key wird im Frontend nirgends verwendet.

---

## 6. Externe Ressourcen

### 6.1 Über CDN geladene Bibliotheken

| Bibliothek | Version | CDN-URL | Verwendet in |
|---|---|---|---|
| Three.js | r128 | `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js` | `spiel.html` |
| simplex-noise | 2.4.0 | `https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js` | `spiel.html` |
| @supabase/supabase-js | 2 (esm) | `https://esm.sh/@supabase/supabase-js@2` (ES-Module-Import) | `quiz.html`, `quiz-live.html` |

### 6.2 Bilder

Alle Bilder sind lokal in `code/images/` abgelegt **außer einem**: das
Quellenverzeichnis verweist explizit auf Wikimedia Commons:

```
https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/
  Colored_neural_network.svg/800px-Colored_neural_network.svg.png
```

Die auf `grundlagen.html` eingebundene `images/neural-network-diagram.png`
ist die lokale Kopie dieses Wikimedia-Bilds.

Weitere lokale Bilder (Auswahl aus `code/images/`):
`AI-Dev.jpg`, `ANI-vs-AGI-vs-ASI-Clear-Differences-Explained.jpg`,
`ai chances.jpg`, `quantencomputer.jpg`, `raumfahrt.webp`, `spotify.jpg`,
`transformers.jpg`.

---

## 7. Easter Eggs und Besonderheiten

### 7.1 `geheim.html`

- **Versteckter Einstiegspunkt:** Im Footer **jeder** Seite ist der Autoren-
  Hinweis als Link gestaltet: `<a href="geheim.html" class="secret-link">…</a>`.
  Die CSS-Klasse `.secret-link` entfernt den Link-Look komplett: Farbe
  `#226600` (gleich wie umgebender Footer-Text), `text-decoration: none`,
  `cursor: default`. Hover ändert weder Farbe noch Unterstreichung.
- **Inhalt:** Großer ASCII-Art-Block (`<pre class="ascii-art">`), eingebettet
  in dieselbe Seitenstruktur. Animation `glow` lässt den Text pulsieren.
- **Größe:** 2537 Zeilen – die mit Abstand größte Datei im Projekt
  (überwiegend ASCII-Art).

### 7.2 Tote externe Links

`programmierung.html` enthält am Ende einen Verweis
`<a href="../spiel/index-spiel.html">Space Game starten</a>`. Diesen Pfad
gibt es im Repo **nicht** – der Link ist defekt.

### 7.3 Konstruktive Detail-Lösungen

- **`spiel.html`:** Quiz/Quest-Texte erscheinen via `showMessage()` mit
  3 s Fade-out, ohne externe Lib.
- **`quiz.html`:** Reihenfolge der Fragen **und** der Antwortoptionen wird
  pro Durchlauf neu durchmischt (`shuffle()` Fisher-Yates).
- **`quiz-live.html`:** Session-Code-Alphabet vermeidet `0/O` und `1/I`.

---

## 8. Statistiken

### 8.1 Zeilenzahlen

| Kategorie | Zeilen |
|---|---|
| HTML gesamt (13 Dateien) | **7759** |
| davon Easter Egg `geheim.html` (überwiegend ASCII-Art) | 2537 |
| davon „echte Inhalts-/App-HTML" (12 Dateien) | 5222 |
| CSS (`style.css`) | **268** |
| Externe JS-Dateien (`quiz-questions.js` + `quiz-config*.js`) | 200 |
| In HTML eingebettete JS (geschätzt aus Script-Bereichen) | ca. **2100** |

JS-Verteilung (eingebettet, grobe Zählung über Script-Block-Längen):

| Datei | eingebetteter JS-Code |
|---|---|
| `spiel.html` | ca. 1000 Zeilen |
| `quiz.html` | ca. 720 Zeilen |
| `quiz-live.html` | ca. 388 Zeilen |
| `grundlagen.html` + `anwendungen.html` | je ca. 10 Zeilen (Modal) |

### 8.2 Weitere Kennzahlen

| Metrik | Wert |
|---|---|
| Anzahl Seiten (inkl. Easter Egg) | 13 |
| Anzahl Inhalts-/App-Seiten in der Navigation | 12 |
| Themen-Seiten (reine Inhalte) | 8 |
| Externe CDN-Dependencies | 3 (Three.js, simplex-noise, supabase-js) |
| Externe Quellen-Links auf `quellen.html` | 50+ |
| Quiz-Fragen | 15 |
| Größte Datei nach Zeilen | `geheim.html` (2537), gefolgt von `spiel.html` (1625) und `quiz.html` (1401) |

### 8.3 Was die Codebase besonders macht

- **Komplett statisch** – kein Build-Step, kein Bundler, kein npm.
- **Kein Framework** für die Inhaltsseiten (kein React/Vue/Svelte).
- **Einzige „große" Abhängigkeit:** Three.js + simplex-noise im 3D-Spiel.
- **Supabase-JS** wird per dynamischem `import()` aus ESM-CDN geladen,
  ohne Build-Pipeline.
- **`file://`-fähig:** Quiz-Config bewusst als klassisches `<script>`,
  Quiz-URL-Builder mit Sonderpfad für `file:`-Protokoll.
- **Persistenz im Browser:** Quiz hält Identität, Highscore und letztes
  Ergebnis im `localStorage` – ein Reload nach Quiz-Ende zeigt direkt
  wieder den Result-Screen.
- **Geteilte Datenbasis:** `quiz-questions.js` wird sowohl von `quiz.html`
  als auch von `quiz-live.html` geladen; der stabile Listen-Index dient
  als Schlüssel für die Schwierigkeitsanalyse.

---

## 9. Offene Punkte

Diese Themen lassen sich **nicht** vollständig aus dem Code allein
beantworten und müssen ergänzt werden:

- **Deployment-Workflow:** Im `README.md` steht
  „Vercel hostet automatisch, jeder Push auf `main` wird live deployed",
  und die Live-URL `https://projektkischule.vercel.app` ist genannt.
  Die konkrete Vercel-Projekt-Konfiguration (Project Settings, Build-
  Command, Root-Verzeichnis `code/`, Redirects, Headers) liegt
  außerhalb des Repos.
- **Domain-Konfiguration:** Ob es eine eigene Domain gibt, wie DNS,
  HTTPS-Zertifikat etc. eingerichtet sind, ist nicht aus dem Code
  ablesbar.
- **Supabase-Setup im Detail:** Die echten RLS-Policies, Tabellen-
  Definitionen (CREATE TABLE, Indizes), Trigger und der Project-Region
  sind nicht im Repo (kein `supabase/`-Verzeichnis, keine SQL-Migrationen).
  Die Spaltenstruktur in Abschnitt 5.1 ist aus dem Code rekonstruiert.
- **Autoren-Verteilung:** Wer von Chris Kaiser bzw. Louis Förster welche
  Seiten/Features geschrieben hat, ist aus dem Code nicht ersichtlich
  (Git-Blame zeigt nur den committenden Account).
- **Verwendete KI-Tools:** Welche Modelle/Tools (z.B. Claude Code, ChatGPT,
  Cursor) für welchen Teil der Entwicklung eingesetzt wurden, ist nicht
  dokumentiert.
- **Architektur-Entscheidungen:** Warum bewusst kein Framework, kein Build,
  kein Templating verwendet wurde – ist nirgends im Code begründet
  (nur indirekt: `file://`-Hinweise und „funktioniert ohne Webserver").
- **Entwicklungs-Tooling:** Editor (VS Code etc.), lokaler Dev-Server,
  Formatter, Pre-Commit-Hooks, CI – nicht im Repo konfiguriert.
- **Bildquellen jenseits Wikimedia:** Bei vielen Bildern in `images/`
  ist die genaue Herkunft/Lizenz nicht im Repo dokumentiert
  (siehe separates `ToDo_Bilder.md`).
- **Mobile-Optimierung jenseits Quiz:** Nur `quiz.html` und
  `quiz-live.html` haben `<meta name="viewport">` und Media-Queries.
  Die Inhaltsseiten sind nicht explizit responsive-getestet.
