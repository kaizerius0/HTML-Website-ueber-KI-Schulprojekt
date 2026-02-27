# Unsere KI-Website – Aufbau und Code komplett erklärt

## Wie die Website aufgebaut ist (Projektstruktur)

Unsere Website besteht aus **9 Dateien** in einem einzigen Ordner (`code/`):

```
code/
├── style.css          ← Das zentrale Design (Farben, Abstände, Schriftarten)
├── index.html         ← Startseite
├── geschichte.html    ← Geschichte der KI
├── grundlagen.html    ← KI-Grundlagen
├── schule.html        ← KI in der Schule
├── anwendungen.html   ← Raumfahrt & Quantencomputer
├── risiken.html       ← Chancen & Risiken
├── zukunft.html       ← Zukunft der KI
└── quellen.html       ← Quellenverzeichnis
```

**Das Prinzip:** HTML-Dateien = Inhalt. CSS-Datei = Design. Alle 8 HTML-Seiten teilen sich eine einzige CSS-Datei, damit alles einheitlich aussieht.

---

## Was ist HTML? (Ganz einfach erklärt)

HTML ist die Sprache, mit der man Webseiten baut. Man schreibt Text und sagt dem Browser dann mit sogenannten **Tags**, wie er den Text darstellen soll.

Ein Tag hat immer ein **öffnendes** und ein **schließendes** Element:

```html
<b>Dieser Text ist fett</b>
```

Der Browser sieht `<b>` → macht den Text **fett** → bis er `</b>` sieht.

### Die wichtigsten Tags, die wir verwenden

| Tag | Was es macht | Beispiel |
|---|---|---|
| `<h1>` | Hauptüberschrift (größte) | `<h1>Künstliche Intelligenz</h1>` |
| `<h2>` | Unterüberschrift | `<h2>Was ist KI?</h2>` |
| `<h3>` | Kleinere Unterüberschrift | `<h3>Autonome Mars-Rover</h3>` |
| `<p>` | Normaler Absatz/Text | `<p>KI verändert die Welt.</p>` |
| `<b>` | **Fetter Text** | `<b>wichtig</b>` |
| `<i>` | *Kursiver Text* | `<i>Status: Noch nicht erreicht</i>` |
| `<a href="...">` | Ein klickbarer Link | `<a href="geschichte.html">Geschichte</a>` |
| `<ul>` | Aufzählungsliste (Punkte) | Enthält `<li>`-Einträge |
| `<ol>` | Nummerierte Liste | Enthält `<li>`-Einträge |
| `<li>` | Ein Listenpunkt | `<li>Erster Punkt</li>` |
| `<table>` | Tabelle | Enthält Zeilen (`<tr>`) und Zellen (`<td>`) |
| `<tr>` | Tabellenzeile | Eine Reihe in der Tabelle |
| `<th>` | Tabellenkopf (fett, grüner Hintergrund) | `<th>Jahr</th>` |
| `<td>` | Normale Tabellenzelle | `<td>1956</td>` |
| `<img>` | Bild einfügen | `<img src="link-zum-bild.png">` |
| `<blockquote>` | Hervorgehobenes Zitat | Hat grünen Strich links |
| `<hr>` | Trennlinie | Grüne horizontale Linie |
| `<br>` | Zeilenumbruch | Springt in die nächste Zeile |
| `<nav>` | Navigationsbereich | Enthält unsere Menü-Links |
| `<main>` | Hauptinhalt der Seite | Alles zwischen Navigation und Footer |
| `<footer>` | Fußzeile | Unsere Autorenangabe ganz unten |

---

## Wie jede einzelne HTML-Seite aufgebaut ist

Jede unserer 8 Seiten hat exakt die gleiche Grundstruktur. Hier am Beispiel der Startseite, Zeile für Zeile erklärt:

```html
<!DOCTYPE html>                          ← Sagt dem Browser: "Das ist eine HTML-Datei"
<html lang="de">                         ← Start der Seite, Sprache = Deutsch
<head>                                   ← Unsichtbarer Kopfbereich (Einstellungen)
<meta charset="UTF-8">                   ← Zeichensatz für Umlaute (ä, ö, ü)
<title>Künstliche Intelligenz</title>     ← Text im Browser-Tab
<link rel="stylesheet" href="style.css"> ← Verknüpfung zur Design-Datei
</head>                                  ← Ende des Kopfbereichs
<body>                                   ← Sichtbarer Seiteninhalt beginnt

<h1>Künstliche Intelligenz</h1>          ← Große Überschrift oben
<nav>                                    ← Navigationsmenü
  <a href="index.html">Startseite</a>   ← Link zur Startseite
  <a href="geschichte.html">Geschichte</a>  ← Link zur Geschichte
  ...                                   ← (alle 8 Links)
</nav>
<hr>                                     ← Grüne Trennlinie

<main>                                   ← Hauptinhalt beginnt
  ... (hier steht der eigentliche Inhalt der jeweiligen Seite)
</main>                                  ← Hauptinhalt endet

<footer>                                 ← Fußzeile (immer ganz unten)
  Erstellt von Chris Kaiser & Louis Förster
</footer>

</body>                                  ← Ende des sichtbaren Inhalts
</html>                                  ← Ende der Seite
```

**Warum `<main>` und `<footer>` getrennt?**
Dadurch "klebt" der Footer immer am unteren Bildschirmrand – auch wenn eine Seite wenig Inhalt hat (z.B. die Startseite). Der `<main>`-Bereich dehnt sich automatisch aus und schiebt den Footer nach unten.

---

## Was ist CSS? (Die Design-Datei)

CSS bestimmt, **wie** alles aussieht: Farben, Schriftgrößen, Abstände, Hintergründe. HTML sagt "das ist eine Überschrift", CSS sagt "die Überschrift ist grün, 40 Pixel groß und zentriert".

Unsere `style.css` ist wie ein einziges Regelwerk, das für **alle 8 Seiten gleichzeitig** gilt.

### Aufbau einer CSS-Regel

```css
h1 {
  font-size: 40px;      ← Schriftgröße: 40 Pixel
  color: #39ff14;        ← Farbe: Neongrün
  text-align: center;    ← Zentriert
}
```

Das heißt: **Jede** `<h1>`-Überschrift auf **jeder** Seite wird automatisch grün, groß und zentriert dargestellt.

### Was jede CSS-Regel in unserer Datei macht

| CSS-Teil | Was es steuert |
|---|---|
| `*` | Grundreset – setzt überall Abstände auf 0 |
| `body` | Schwarzer Hintergrund, grüne Schrift, max. 900px breit, zentriert |
| `h1` | Große Hauptüberschrift mit grüner Trennlinie darunter |
| `h2` | Unterüberschriften mit dezenter Trennlinie darunter (für Übersichtlichkeit) |
| `h3` | Kleine Unterüberschriften |
| `p, li` | Normaler Text und Listenpunkte (Schriftgröße 16px) |
| `a` | Links in Grün |
| `hr` | Trennlinien (durchgezogen oder gestrichelt mit `hr.dashed`) |
| `nav` | Navigationsmenü – zentriert |
| `nav a` | Navigations-Links – klein, fett, keine Unterstreichung |
| `nav a:hover` | Wenn man mit der Maus drüberfährt → grüne Unterlinie |
| `ul, ol` | Listen – mit Einrückung und Abstand |
| `blockquote` | Zitate – kursiv mit grünem Strich links |
| `table, th, td` | Tabellen – grüne Rahmen, grüner Kopfbereich |
| `tr:hover` | Tabellenzeile wird leicht heller wenn man drüberfährt |
| `img` | Bilder – volle Breite, grüner Rahmen |
| `.intro` | Einleitungstexte – etwas größer und leicht andere Grünfarbe |
| `footer` | Fußzeile – klebt am Seitenende, dezentes Dunkelgrün |

### Unser Farbschema

| Farbe | Hex-Code | Wo verwendet |
|---|---|---|
| Schwarz | `#000` | Hintergrund |
| Neongrün | `#39ff14` | Hauptschrift, Links, Trennlinien, Tabellen |
| Helleres Grün | `#30dd12` | Einleitungstexte |
| Dunkelgrün | `#226600` | Footer-Text |
| Dezentes Grün | `#1a7a0a` | Dezente Trennlinien unter h2 |
| Dunkelgrau | `#111` | Tabellen-Hover-Effekt |

---

## Wie der Sticky Footer funktioniert

Das Problem: Auf kurzen Seiten (z.B. die Startseite) würde der Footer direkt nach dem Text stehen – also mitten auf dem Bildschirm. Das sieht komisch aus.

Die Lösung mit **Flexbox** (ein CSS-Layout-System):

```
┌──────────────────────┐
│  body (flex, column)  │ ← Der Body ist ein "Flex-Container"
│  ┌──────────────────┐ │    der seine Kinder vertikal (column)
│  │  Überschrift     │ │    untereinander anordnet
│  │  Navigation      │ │
│  │  ─────────────── │ │
│  │  <main>          │ │ ← Main hat "flex: 1" = nimmt den
│  │  (flex: 1)       │ │    gesamten freien Platz ein
│  │  Inhalt...       │ │
│  │                  │ │
│  └──────────────────┘ │
│  ┌──────────────────┐ │
│  │  <footer>        │ │ ← Footer hat "margin-top: auto"
│  │  Autoren-Info    │ │    = wird nach unten gedrückt
│  └──────────────────┘ │
└──────────────────────┘
```

---

## Wie die Navigation funktioniert

Jede Seite hat **exakt die gleichen 8 Links** im `<nav>`-Bereich. Wenn man auf einen Link klickt, lädt der Browser einfach die entsprechende HTML-Datei:

```
Startseite    → index.html
Geschichte    → geschichte.html
Grundlagen    → grundlagen.html
KI in Schule  → schule.html
Anwendungen   → anwendungen.html
Risiken       → risiken.html
Zukunft       → zukunft.html
Quellen       → quellen.html
```

Da alle Dateien im gleichen Ordner liegen, reicht der einfache Dateiname als Link-Ziel.

---

## Was jede Seite inhaltlich macht

| Seite | Inhalt |
|---|---|
| **Startseite** | Begrüßung, kurze KI-Erklärung, Übersicht aller Unterseiten mit Beschreibung |
| **Geschichte** | Zeitleiste (1936–2026) als Tabelle, Erklärung der "KI-Winter", 3 technische Phasen |
| **Grundlagen** | Neuronale Netze (mit Bild), Feedforward/Backpropagation, ANI vs. AGI vs. ASI |
| **Schule** | KI-Tools im Unterricht, Chancen (Schulbarometer-Zitat), Risiken (OECD-Warnung) |
| **Anwendungen** | Mars-Rover (Navigation, Analyse, Schwarm), Quantencomputer + KI, Stand 2026 |
| **Risiken** | Bias, Deepfakes, Überwachung, Datenschutz → dann Chancen: Medizin, Klima, Bildung |
| **Zukunft** | AGI-Prognosen (Tabelle), Szenarien 2030, Alltag 2030+, zentrale Gesellschaftsfrage |
| **Quellen** | Alle 25+ Quellen nach Kategorien sortiert mit klickbaren Links |

---

## Wie wir die Website erstellt haben

1. **Recherche:** Informationen aus wissenschaftlichen Quellen (2025–2026) in `Research.md` gesammelt
2. **HTML-Seiten erstellt:** Für jedes Thema eine eigene `.html`-Datei angelegt
3. **Zentrales Design:** Eine einzige `style.css`-Datei für das einheitliche Aussehen aller Seiten
4. **Optimiert:** Code minimalisiert (keine unnötigen Leerzeilen, Shorthand-CSS)
5. **Sticky Footer:** Mit Flexbox dafür gesorgt, dass der Footer immer am Seitenende klebt
6. **Quellenseite:** Alle verwendeten Quellen auf einer separaten Seite dokumentiert

