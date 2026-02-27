# Spotify says its best developers haven’t written a line of code since December, thanks to AI

Has AI coding reached a tipping point? That seems to be the case for Spotify at least, which shared this week during its fourth-quarter earnings call that the best developers at the company “have not written a single line of code since December.” That statement, from Spotify co-CEO Gustav Söderström, came alongside other comments about how the company is using AI to accelerate development.

Of note, Spotify pointed out it shipped more than 50 new features and changes to its streaming app throughout 2025. And, most recently, it has rolled out more features, like AI-powered Prompted Playlists, Page Match for audiobooks, and About This Song, which all launched within the past few weeks.

At Spotify, engineers are using an internal system called “Honk” to speed up coding and product velocity, the company told analysts on the call. This system allows for things like remote, real-time code deployment using generative AI, and specifically Claude Code.

“As a concrete example, an engineer at Spotify on their morning commute from Slack on their cell phone can tell Claude to fix a bug or add a new feature to the iOS app,” Söderström said. “And once Claude finishes that work, the engineer then gets a new version of the app, pushed to them on Slack on their phone, so that he can then merge it to production, all before they even arrive at the office.”

Spotify credited the system in helping to speed up coding and deployment “tremendously.”

“We foresee this not being the end of the line in terms of AI development, just the beginning,” Söderström said.

The exec also touted Spotify’s ability to build a unique dataset that other LLMs could not commoditize, the way they could other online resources, like Wikipedia. That’s because there’s not always a factual answer for music-related questions, he said.

Save up to $300 or 30% to TechCrunch Founder Summit
1,000+ founders and investors come together at TechCrunch Founder Summit 2026 for a full day focused on growth, execution, and real-world scaling. Learn from founders and investors who have shaped the industry. Connect with peers navigating similar growth stages. Walk away with tactics you can apply immediately.

Offer ends March 13.
Boston, MA | June 9, 2026
REGISTER NOW
For instance, if you asked what workout music is, you’d get different answers from different people, sometimes based on their geography. Americans tend to prefer hip-hop overall, though millions prefer death metal. And while a number of Europeans would work out to EDM, many Scandinavians like heavy metal.

“This is a dataset that we are building right now that no one else is really building. It does not exist at this scale. And we see it improving every time we retrain our models,” Söderström noted.

Analysts on the call also asked about Spotify’s approach to AI-generated music. The company explained that it’s allowing artists and labels to indicate in a track’s metadata how the song was made but is still policing the platform for spam.

---



# KI, Programmierung und die Zukunft der Softwareentwicklung

## Überblick

Dieser Report skizziert den Stand der KI-gestützten Programmierung, wie große Tech-Firmen (mit Fokus auf Spotify) aktuelle Modelle einsetzen und wie sich die Rolle von Entwicklerinnen und Entwicklern in den nächsten Jahren verändern dürfte.[1][2]
Ergänzend beschreibt er praktische Einstiegspfade für Solo-Entwickler, um heute mit Tools wie Claude, Cursor, Devin-artigen Systemen und modernen KI-IDEs komplette Websites fast nur mit Sprache und einfachen Prompts zu bauen.[3][4]

## Aktueller Stand der Modelle

Große Coding- und General-Purpose-Modelle (OpenAI, Anthropic, Google, xAI usw.) haben sich seit 2024 stark in Richtung "autonome Coder" entwickelt und lösen End-to-End-Coding-Aufgaben über mehrere Dateien hinweg.[2][5]
Neuere Generationen wie Claude 3.5/3.7 Sonnet oder vergleichbare GPT- und Gemini-Modelle kombinieren hohe Kontextfenster (200K+ Tokens) mit verbesserter Fehlersuche und anhaltendem Debugging, was sie für komplexe Codebasen einsetzbar macht.[5][3]

### Spezialisierte Coding-Plattformen

Plattformen wie Claude Code 2025 integrieren solche Modelle tief in IDEs (VS Code, JetBrains) und CI/CD (z.B. via GitHub Actions), inklusive Extended-Thinking-Modi, Files-API, Code-Execution-Tools und Prompt-Caching.[4]
Damit werden nicht nur Codegenerierung und Autocomplete unterstützt, sondern auch automatisierte Reviews, Bug-Fixes und Hintergrundtasks, die im Pipeline-Kontext laufen.[4]

Cursor bietet ein AI-native IDE-Erlebnis: Multi-File-Editing, RAG über den gesamten Code, spezialisierte Tab-Completion-Modelle und die Möglichkeit, zwischen mehreren Frontier-Modellen (Claude, GPT, Gemini, eigene Modelle) dynamisch zu wechseln.[6][3]
Autonome Engineer-Systeme wie Devin-artige Tools fokussieren sich stärker auf vollständige Aufgabenabwicklung (Issue/Spec → Repo-Änderung → Tests → Deployment) statt auf reine Editor-Assistenz.[7][3]

## Wie Spotify KI heute einsetzt

### Personalisierung als Kern-Use-Case

Spotify beschreibt offen, dass praktisch die gesamte Personalisierung (Home-Feed, Discover Weekly, Release Radar usw.) durch Machine-Learning-Modelle getrieben ist, die gewaltige Mengen an Nutzungsdaten (Playlists, Listening History, Interaktionen, Kontextsignale wie Tageszeit oder Gerät) verarbeiten.[8][1]
Jede Nutzerin erhält so eine eigene Version von Spotify; täglich werden hunderte Milliarden Events verarbeitet, um Assoziationen zwischen Songs, Playlists, Podcasts und Nutzern zu lernen.[1][8]

Diese Modelle nutzen u.a. Recommender-Systeme, Reinforcement Learning (für langfristige Zufriedenheit statt nur kurzfristige Klicks) und standardisierte ML-Infrastruktur auf Basis von TensorFlow Extended, Kubeflow und Cloud-Plattformen.[8][1]
Spotify hat seine ML-Plattform industrialisiert ("Paved Road"), um Experimente schnell zu testen und produktionsreife Modelle reproduzierbar auszurollen.[8]

### Generative KI: AI DJ und AI Playlists

Der AI DJ von Spotify kombiniert Personalisierungsmodelle mit generativer KI und einer synthetischen Stimme, die auf der Stimme eines Spotify-Hosts basiert.[9][10]
Für die Sprachausgabe nutzt Spotify u.a. Technologie von Sonantic und OpenAI, um kommentierte, personalisierte Musik-Streams zu erzeugen.[10]

Das Feature "AI Playlists" erlaubt Nutzerinnen, Playlists über natürliche Sprachprompts zu generieren; Spotify nutzt dafür Large Language Models, um die Text-Prompts semantisch zu verstehen und dann mit den Personalisierungsmodellen zu kombinieren.[11][12]
Die Kombination aus LLM (Prompt-Verstehen) und Recommender-Engine (viele Jahre Nutzerdaten, Audio-Features) ist ein Blaupause-Pattern für viele Consumer-Apps.[12][11]

### Strategische Implikation

Spotify zeigt, wie sich klassische ML (Recommender, Ranking, Reinforcement Learning) und LLMs ergänzen: LLMs verstehen Intention, formulieren Texte und Interfaces, während spezialisierte Modelle Ranking/Personalisierung optimieren.[11][1]
Für Entwicklerinnen bedeutet das: Wert entsteht oft aus der Integration von LLMs in bestehende Daten- und Recommender-Systeme, nicht aus "reiner" Textgenerierung.[12][1]

## Zukunft der KI-Programmierung

### Von Assistenz zu autonomen Agenten

Analysen aus 2025 prognostizieren, dass in naher Zukunft ein Großteil des Codes von KI generiert werden könnte; Führungskräfte bei OpenAI und Anthropic sprechen von 90%+ Code-Anteil durch KI in den kommenden Jahren.[2]
Berichte von Beratungen wie Bain sehen einen Übergang von Assistenztools zu autonomen Agenten, die eigenständig Tickets umsetzen, Tests schreiben und Deployments ausführen.[13]

Frühe Agenten wie Devin oder ähnliche Systeme zeigen bereits, dass komplexe Arbeitspakete (Issue lesen, Repo clonen, implementieren, testen, PR erstellen) möglich sind.[3][7]
Die Produktivitätssprünge sind deutlich: Fallstudien zu Claude Code berichten von drastischen Reduktionen in Routinearbeit (teilweise über 80% weniger manuelle Code-Reviews und Bugfix-Zeit).[4]

### Rolle von Entwicklern: Orchestratoren und Reviewer

Die Rolle der Developer verschiebt sich in Richtung Spezifikation, Architektur, Qualitätskontrolle und Produktdenken, während KI Roh-Code und viele Routineaufgaben übernimmt.[7][2]
Zukünftige Skills sind daher: präzise Problemformulierung, Systemdesign, KI-Orchestrierung (welche Tools/Modelle für welchen Job), Daten- und Sicherheitsverständnis, plus die Fähigkeit, KI-Ausgaben kritisch zu bewerten.[13][2]

Konzepte wie "Vibe Coding" beschreiben, dass Devs eher per natürlicher Sprache beschreiben, wie sich ein System anfühlen oder verhalten soll, während die KI den konkreten Code in der gewählten Tech-Stack-Realität konstruiert.[14][2]
Damit sinkt die Einstiegshürde für Nicht-Programmierer, gleichzeitig steigt die Bedeutung von Produkt-Intuition und langfristiger Architektur.[2]

## Landscape der KI-Dev-Tools (Claude, Cursor, Devin & Co.)

### Claude Code / Claude-Modelle

Claude Code (Anthropic) ist 2025/26 ein vollständiger Dev-Stack mit:

- Tief integrierten Plugins/Tools für VS Code und JetBrains
- Extended-Thinking-Modi, die komplexe Probleme über längere Zeiträume durchdenken
- Files-API für große Codebasen und Diffs
- GitHub-Actions-Integration für Hintergrundtasks
- Nutzung moderner Claude-Varianten wie Opus 4, Sonnet 4+ und 3.5/3.7-Generationen

Diese Plattform wird von Unternehmen wie GitHub (neue Copilot-Agenten), Cursor und Replit als Motor für fortgeschrittenes Coding eingesetzt.[4]
Die Stärken liegen in langer, konsistenter Reasoning-Kette, Multi-File-Refaktorierungen und robustem Debugging.[5][4]

### Cursor (AI-native IDE)

Cursor ist eine eigenständige IDE, die KI zentral in den Editor baut, statt als Plugin zu denken.[6][3]
Schlüsselmerkmale:

- AI-Chat, der den gesamten Workspace, Git-Historie und Diffs kennt
- Multi-File-Edits per natürlicher Sprache ("refaktoriere dieses Modul in drei Services")
- Wechsel zwischen verschiedenen Frontier-Modellen (Claude, GPT, Gemini, xAI, Cursor-eigene Composer-Modelle) je nach Aufgabe
- "Composer" und Visual Editor für UI-Building über Drag-and-Drop plus Prompts
- Tab-Completion mit spezialisierten Modellen (quasi Copilot++)
- Enterprise-Features wie SSO, SCIM, Offline-Modus für Air-Gap-Umgebungen

Aktuelle Vergleiche bewerten Cursor als einen der polishedsten AI-Dev-Workflows, besonders für Teams, die frontier-Modelle flexibel kombinieren wollen.[3][6]

### Devin-artige Agenten (autonome Software Engineers)

Tools wie Devin (Cognition) stehen exemplarisch für eine neue Kategorie: "autonome Software Engineers", die eigenständig komplette Tasks übernehmen.[7][3]
Sie lesen Spezifikationen, planen Arbeitsschritte, bedienen IDEs oder Browser, passen Code an, führen Tests aus und berichten Fortschritt, ähnlich wie ein Junior-Entwickler.[7]

Diese Systeme sind aktuell eher teuer und teils noch unzuverlässig, aber sie zeigen die Richtung: in Zukunft werden Devs eher Aufgabenpakete definieren und Quality-Gates setzen, statt jede Zeile Code zu schreiben.[13][2]

## Wie große Firmen KI in der Softwareentwicklung nutzen

Große Tech-Firmen wie Google, Microsoft, Amazon, Spotify oder Cloudflare integrieren KI nicht nur im Produkt, sondern auch intern im Engineering-Prozess.[2][4]
Muster:

- Coding-Assistenz (Copilot, Claude Code, Cursor-ähnliche Systeme) als Standard in IDEs
- Automatisierte Code-Reviews, Security-Scanning, Test-Generierung
- Interne "AI Developer Platforms" mit Self-Service-Agents, die Tickets abarbeiten
- Data- und ML-Plattformen, die LLMs mit domänenspezifischen Daten (Log-Daten, Telemetrie, Kundenfeedback) koppeln

Berichte zeigen, dass Firmen, die Prozesse und Organisation rund um KI-Dev-Tools anpassen (Pairing-Patterns, Guidelines, Safety-Gates), deutlich größere Produktivitätsgewinne realisieren als solche, die KI nur als optionales Gadget anbieten.[13][2]

## Praktische Einstiegspfade für dich

### 1. Sofortiger Einstieg: Simple Website mit KI bauen

Für eine erste HTML/CSS/JS-Webseite reichen heute im Prinzip ein Browser, ein KI-Chat (Claude, ChatGPT, etc.) und ein einfacher Code-Editor (oder direkt Cursor/Replit).
Typischer Workflow:

1. Prompt-Design: Beschreibe die Website präzise (Zielgruppe, Inhalt, Layout, Farben, Komponenten). Bitte die KI explizit um eine einzelne `index.html` mit eingebettetem CSS oder um getrennte Dateien.
2. Iteratives Verbessern: Lass dir zuerst ein minimales Layout generieren, dann iteriere: "mach es responsiv", "füge eine Kontakt-Sektion hinzu", "bau ein einfaches JS-Formular-Handling ein".
3. Hosting: Nutze kostenlose oder günstige Static-Hosting-Optionen (z.B. GitHub Pages, Netlify, Vercel Free-Tier), indem du die generierten Dateien in ein Repo packst und deployest.
4. Assets: Lasse die KI Platzhalter-Bilder, Farbschemata und Copy erstellen, die du später manuell feintunen kannst.

Cursor oder Claude Code können diesen Prozess noch weiter vereinfachen, weil sie die Projektstruktur verstehen und in mehreren Dateien gleichzeitig Änderungen vornehmen.[3][4]

### 2. Systematischer Pfad: Vom "Prompten" zur KI-gestützten Architektur

Um von "ich baue eine einfache Website mit KI" zu "ich baue skalierbare Systeme" zu kommen, bietet sich ein zweistufiger Denkrahmen an:

- Stufe 1 (Jetzt): Nutze KI als Co-Pilot, um kleine Projekte schnell umzusetzen: Landing Pages, kleine Tools, Formulare, kleine APIs. Fokus: Feedbackzyklen, Verstehen, wie Modelle denken, sauberes Prompting.
- Stufe 2 (Strukturell): Entwirf domänenspezifische Workflows, in denen KI wiederkehrende Aufgaben übernimmt (Code-Gen, Tests, Docs, DB-Migrationen). Baue kleine interne "AI Pipelines" (z.B. Skripte/Services, die Claude oder Cursor automatisiert aufrufen, wenn ein neues Ticket entsteht oder ein PR erstellt wird).

Langfristig kannst du aus solchen Pipelines Produkte bauen: z.B. spezialisierte AI-Agents für bestimmte Industrien (Steuer, Energie, Logistik), die auf Standard-LLMs aufsetzen, aber deine Daten, Workflows und Integrationen nutzen.[2][13]

### 3. Skill-Fokus für die nächsten Jahre

Für jemanden in deinem Alter, der jetzt einsteigt, sind folgende Skills besonders leverage-stark:

- **System- und Produktdenken**: Was ist der wiederkehrende Prozess hinter einem Problem? Wie kann KI ihn automatisieren?
- **Daten & Schnittstellen**: APIs, Webhooks, einfache ETL-Flows, damit du KI-Modelle an reale Datenquellen hängen kannst.
- **KI-Orchestrierung**: Verstehen, wann du welches Modell/tool nutzt (Claude vs GPT vs lokale Modelle, Cursor vs klassische IDE, Agent vs Chat).
- **Sicherheit & Reliability**: Umgang mit Halluzinationen, Test-Abdeckung, Monitoring von KI-Aktionen.

Diese Meta-Skills sind relativ stabil, auch wenn sich Modellnamen und Frameworks alle paar Jahre ändern.[7][2]

## Fazit

Die KI-Programmierung bewegt sich schnell von punktuellen Autocomplete-Features hin zu integrierten Agenten, die ganze Entwicklungszyklen abdecken.[4][13]
Unternehmen wie Spotify illustrieren, wie klassische ML-Systeme mit neuen LLMs verschmelzen, um sowohl Produktfunktionen (AI DJ, AI Playlists) als auch interne Engineering-Prozesse zu transformieren.[11][1]

Für dich als Solo-Gründer ist jetzt der richtige Zeitpunkt, KI sowohl als "Coding-Turbo" für kleine Web-Projekte als auch als Keim für spätere, strukturelle Systeme zu nutzen, die Daten, Prozesse und Lock-in entlang spezifischer Problemräume aufbauen.[3][2]