// Template fuer die lokale Supabase-Konfiguration.
//
// Schritte:
//   1. Diese Datei kopieren nach `quiz-config.js` (im selben Ordner).
//   2. In `quiz-config.js` die echten Werte aus deinem Supabase-Dashboard
//      eintragen (Project Settings -> API).
//   3. `quiz-config.js` ist in `.gitignore` -> wird NICHT committet.
//
// Wird per klassischem <script>-Tag geladen, damit es auch via file://
// (ohne Webserver) funktioniert. Der `anon`-Key ist absichtlich public,
// gehoert aber trotzdem nicht in den Commit-Verlauf.

window.QUIZ_CONFIG = {
    SUPABASE_URL: 'https://<dein-projekt>.supabase.co',
    SUPABASE_ANON_KEY: 'eyJ...DEIN_ANON_KEY_HIER'
};
