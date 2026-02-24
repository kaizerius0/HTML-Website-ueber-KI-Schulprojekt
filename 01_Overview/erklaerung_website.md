## Überblick über das Projekt

Dieses Projekt besteht aus einer kleinen Website mit **drei HTML-Seiten** zu Künstlicher Intelligenz.  
Die Seite soll inhaltlich gut informieren, aber vom Aufbau her so einfach sein, dass man den Code in der Schule erklären kann.

- **`02_Code/1.html`** – Startseite: Einführung, Geschichte und Grundlagen von KI  
- **`02_Code/2.html`** – Einsatzgebiete: Schule, Medizin, Klima, Raumfahrt  
- **`02_Code/3.html`** – Chancen, Risiken und Zukunftsprognosen  
- **`02_Code/style.css`** – Gemeinsames Design (Farben, Schrift, Layout) für alle Seiten  
- **`01_Overview/Research.md`** – ausführliche Recherche (Quellen, Details)  
- **`01_Overview/erklaerung_website.md`** – diese Erklärungsdatei

Wenn du dem Lehrer zeigst, dass du diese Datei kennst und in eigenen Worten wiedergeben kannst, sieht man, dass du verstehst, was du gebaut hast.

---

## Technischer Aufbau in einfach

### 1. HTML-Grundgerüst

Jede der drei HTML-Seiten folgt dem gleichen einfachen Grundaufbau:

1. `<!DOCTYPE html>` – sagt dem Browser, dass es modernes HTML5 ist  
2. `<html lang="de">` – umschließt die ganze Seite, `lang="de"` = Sprache Deutsch  
3. `<head>` – Kopfbereich mit Einstellungen (Titel, Schriftarten, CSS)  
4. `<body>` – hier steht alles, was man im Browser sieht

Im `<head>` sind auf allen Seiten diese wichtigen Teile:

- `<meta charset="UTF-8">` – sorgt dafür, dass Umlaute (ä, ö, ü) korrekt angezeigt werden  
- `<meta name="viewport" ...>` – sorgt dafür, dass die Seite auf Handy und PC gut aussieht  
- `<title>...</title>` – Text, der im Browser-Tab angezeigt wird  
- Link zu Google-Fonts (Schriften `Syne` und `Space Mono`)  
- `<link rel="stylesheet" href="style.css">` – bindet die gemeinsame CSS-Datei ein

### 2. Gemeinsames Layout: Navigation, Inhalt, Footer

Alle drei Seiten haben oben eine **einfache Navigationsleiste**, darunter den **Inhalt**, und unten einen **Footer**.

#### Navigation (`<header>` mit `.top-nav`)

Auf allen Seiten steht im Body zuerst:

- `<header>`  
  - `<nav class="top-nav">` – horizontale Leiste mit Titel links und Links zu den drei Seiten rechts  
    - links: ein Div mit dem Projektnamen (`Schülerprojekt · KI`)  
    - rechts: drei `<a>`-Links: `Start`, `Einsatzgebiete`, `Zukunft`

Für die aktuell geöffnete Seite hat der passende Link die Klasse `class="active"`.  
Beispiel: In `1.html` ist der Link auf `1.html` aktiv, in `2.html` der Link auf `2.html` usw.

#### Hero-Bereich (`.hero`)

Unter der Navigation steht in allen Dateien ein **Hero-Block**:

- `<div class="hero">`  
  - `<p class="hero-tag">` – kleine Zeile über dem Titel (z. B. `// Schülerprojekt 2026`)  
  - `<h1 class="hero-title">` – große Überschrift mit kurzem Satz  
  - `<p class="hero-text">` – kurzer Einleitungstext

Dieser Bereich soll „auffallen“ und kurz erklären, worum es auf der jeweiligen Seite geht.

#### Hauptbereich (`<main>`)

Darunter kommt auf allen Seiten:

- `<main>` – darin mehrere `<section>`-Blöcke  
- Jede Section hat:  
  - `<p class="section-label">` – kleine Überschrift mit Kapitelnummer, z. B. `01 · Was ist KI?`  
  - `<h2>` – eigentliche Überschrift des Abschnitts  
  - ein oder mehrere `<p>`-Absätze mit Erklärungen

#### Footer

Ganz unten:

- `<footer>` mit einem kurzen Text wie `Schülerprojekt · Künstliche Intelligenz · 2026`

---

## Seite 1 (`1.html`) – Start & Grundlagen

### Inhaltlich

1. **Was ist KI?** – einfache Definition und der Unterschied zu klassischer Programmierung  
2. **Drei Stufen: ANI, AGI, ASI** – kurze Erklärung der Begriffe, an Research.md angelehnt  
3. **Kurze Geschichte** – Meilensteine von Turing über Deep Blue bis ChatGPT  
4. **Wie lernen KIs?** – sehr vereinfachte Erklärung von neuronalen Netzen und Training

### Wichtige HTML-Strukturen

- Kartenlayout für die drei Stufen von KI:

  - `<div class="cards">` – Container  
  - Mehrere `<div class="card">` – einzelne Karten  
    - Icon (`<div class="card-icon">` mit Emoji)  
    - Titel (`<h3>`)  
    - Erklärung (`<p>`)

- Zeitleiste für die Geschichte:

  - `<div class="timeline">` – Container  
  - Mehrere `<div class="tl-item">` – pro Jahr/Meilenstein  
    - `<p class="tl-year">` – Jahr  
    - `<p class="tl-text">` – kurzer Text dazu

---

## Seite 2 (`2.html`) – Einsatzgebiete

### Inhaltlich

Folgende Bereiche werden einfach erklärt (stark verkürzt aus `Research.md`):

1. **Schule** – personalisiertes Lernen, Feedback, Sprachlern-Apps  
2. **Medizin** – Diagnosen unterstützen, Medikamentenentwicklung, personalisierte Therapien  
3. **Klima & Energie** – bessere Klimamodelle, optimierte Stromnetze, Ressourceneinsparung  
4. **Raumfahrt** – autonome Mars-Rover, die Hindernisse erkennen und selbst navigieren

Alles ist in kurzen, leicht verständlichen Sätzen formuliert, damit du das in eigenen Worten nacherzählen kannst.

### Wichtige HTML-Strukturen

- Die Seite nutzt wieder das Kartenlayout (`.cards`, `.card`) für Beispiele pro Bereich.
- Abschnitt „Raumfahrt“ ist eine normale Section mit zwei Absätzen – kein kompliziertes Extra-Layout.

---

## Seite 3 (`3.html`) – Chancen, Risiken & Zukunft

### Inhaltlich

Diese Seite fasst die **kritischen Punkte** aus `Research.md` zusammen:

1. **Risiken**  
   - Bias (Vorurteile in Daten)  
   - Deepfakes und Desinformation  
   - Überwachung und Datenschutzprobleme  
   - Risiken speziell in der Schule (z. B. Faulheit, Abhängigkeit)

2. **Chancen**  
   - Medizin, Klimaschutz, Arbeitserleichterung, Bildung

3. **Zukunftsprognosen**  
   - Einschätzungen von Sam Altman, Demis Hassabis usw.  
   - Hinweis, dass es nur Prognosen sind, keine festen Daten

4. **Zentrale Frage**  
   - Nicht nur Technik, sondern: Wie wollen wir KI als Gesellschaft einsetzen?

### Wichtige HTML-Strukturen

- Viele einfache Listen mit `<ul>` und `<li>` – leicht zu lesen und zu erklären.  
- Keine komplizierten Layout-Spielereien, bewusst simpel gehalten.

---

## CSS-Datei (`style.css`) – Design erklärt

Die Datei `style.css` sorgt dafür, dass alle Seiten gleich aussehen.  
Sie ist in einige Blöcke unterteilt:

### 1. Grundstil

- `*` und `*::before`, `*::after` – setzen `margin` und `padding` auf 0 und `box-sizing: border-box;`  
  → Dadurch lassen sich Abstände einfacher kontrollieren.

- `body` – dunkler Hintergrund, helle Schrift, Schriftfamilie `Syne`, Zeilenabstand.
- `a` – Links erben die Textfarbe und haben standardmäßig keine Unterstreichung.
- `main` – sorgt dafür, dass der Inhalt zentriert wird und links/rechts Abstand hat.

### 2. Navigation (`.top-nav`, `.top-nav-title`, `.top-nav-links`)

- `.top-nav` – horizontale Leiste mit `display: flex;`, damit Titel und Links nebeneinander stehen.
- `.top-nav-title` – kleine, leicht leuchtende Schrift für den Projektnamen.
- `.top-nav-links` – Container für die Links.
- `.top-nav-links a.active` und `:hover` – hinterlegen den aktiven Link mit einem dunkleren Hintergrund.

### 3. Hero-Bereich (`.hero`, `.hero-tag`, `.hero-title`, `.hero-text`)

- `.hero` – sorgt für mehr Innenabstand (Padding), damit der Startbereich luftig wirkt.
- `.hero-tag` – Monospace-Schrift, kleine Großbuchstaben, wirkt wie ein „Label“.
- `.hero-title` – große fette Überschrift, das Wort „Intelligenz“ wird durch `<span>` farbig hervorgehoben.
- `.hero-text` – Einleitungstext mit leicht hellerer grauer Farbe.
- `@media (min-width: 768px)` – einfache Medienabfrage, die die Schriftgröße des Titels auf größeren Bildschirmen erhöht.

### 4. Abschnittsaufbau (`.section-label`, `section h2`, `section p`)

- `.section-label` – kleine Überschrift über jedem Abschnitt, z. B. `01 · Was ist KI?`  
- `section h2` – größere Überschrift.  
- `section p` – normale Fließtexte, maximal ca. 65 Zeichen breite Zeile für gute Lesbarkeit.

### 5. Karten (`.cards`, `.card`, `.card-icon`)

- `.cards` – verwendet `display: grid;` und passt sich automatisch an die Bildschirmbreite an.  
- `.card` – dunkler Kasten mit abgerundeten Ecken.  
- `.card-icon` – Emoji als kleines „Bild“ zu Beginn der Karte.

### 6. Zeitleiste (`.timeline`, `.tl-item`, `.tl-year`, `.tl-text`)

- `.timeline` – senkrechte Linie links (`border-left`), in der die Punkte (Jahreszahlen) hängen.  
- `.tl-item::before` – kleiner Kreis, der auf der Linie sitzt.  
- `.tl-year` – Jahreszahl im Monospace-Look.  
- `.tl-text` – kurze Beschreibung des Ereignisses.

### 7. Listen (`ul`, `li`) und Footer

- `ul` und `li` – Standardlisten leicht angepasst für bessere Lesbarkeit (Abstände).  
- `footer` – dünne obere Linie, kleine Schrift, Monospace-Stil und grün markiertes Schlagwort.

---

## Wie du das dem Lehrer erklären kannst

Wenn du die Website vorstellst, kannst du dich an diesem groben Ablauf orientieren:

1. **Struktur erklären**  
   - „Ich habe drei einfache HTML-Seiten gebaut: Start, Einsatzgebiete und Zukunft.“  
   - „Alle Seiten nutzen die gleiche CSS-Datei, damit das Design einheitlich ist.“

2. **Code erklären (HTML)**  
   - Zeige an einer Seite das Grundgerüst (`html`, `head`, `body`).  
   - Erkläre kurz Navigation, Hero-Bereich, Sections und Footer.  
   - Zeige eine Karte (`.card`) und erkläre, wie Icon, Überschrift und Text zusammengehören.

3. **Code erklären (CSS)**  
   - Erkläre, dass du oben im CSS die Grundregeln setzt (Schrift, Farben, Hintergrund).  
   - Sage, dass `flex` und `grid` dir helfen, Elemente nebeneinander bzw. in Spalten anzuordnen.  
   - Erkläre kurz, was `.active` beim Navigationslink macht.

4. **Inhaltlich erklären (mit Hilfe von Research.md)**  
   - Nenne 2–3 Meilensteine aus der Geschichte.  
   - Erkläre eine Anwendung (z. B. Mars-Rover oder Medizin).  
   - Nenne je 2 Chancen und 2 Risiken.  

Wenn du diese Punkte frei und in eigenen Worten erzählen kannst, ist klar, dass du das Projekt verstehst – auch wenn du dir beim Schreiben vom Code von einer KI helfen lassen hast.

