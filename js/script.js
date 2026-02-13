// Navigation (Hamburger-Menü)
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");

  if (navToggle && header) {
    navToggle.addEventListener("click", () => {
      header.classList.toggle("nav-open");
    });
  }

  // Dark Mode Toggle mit Local Storage
  const themeToggle = document.querySelector(".theme-toggle");
  const prefersLight = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "light" || (!storedTheme && prefersLight)) {
    document.body.classList.add("light");
  }

  const setIcon = () => {
    if (!themeToggle) return;
    themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
  };
  setIcon();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const current = document.body.classList.contains("light") ? "light" : "dark";
      localStorage.setItem("theme", current);
      setIcon();
    });
  }

  // Fade-in Animation mit Intersection Observer
  const fadeInElements = document.querySelectorAll(".fade-in");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    fadeInElements.forEach((el) => observer.observe(el));
  } else {
    fadeInElements.forEach((el) => el.classList.add("visible"));
  }

  // Stat-Zähler auf der Startseite
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  statNumbers.forEach((el) => {
    const target = parseInt(el.getAttribute("data-target") || "0", 10);
    if (!target) return;

    let current = 0;
    const duration = 900;
    const stepTime = 30;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;

    const tick = () => {
      current += increment;
      if (current >= target) {
        el.textContent = String(target);
      } else {
        el.textContent = String(Math.round(current));
        window.setTimeout(tick, stepTime);
      }
    };

    tick();
  });

  // Accordion-Funktionalität
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    const headerBtn = item.querySelector(".accordion-header");
    if (!headerBtn) return;

    headerBtn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      accordionItems.forEach((i) => i.classList.remove("open"));
      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });

  // Mini-Quiz (Tools-Seite)
  const quiz = document.querySelector(".quiz[data-quiz='tools']");
  if (quiz) {
    const questions = quiz.querySelectorAll(".quiz-question");
    const resultBox = quiz.querySelector(".quiz-result");
    const resetBtn = quiz.querySelector(".quiz-reset");

    let answered = 0;
    let correct = 0;

    questions.forEach((question) => {
      const options = question.querySelectorAll("button[data-correct]");
      options.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (btn.classList.contains("correct") || btn.classList.contains("incorrect")) {
            return; // Frage wurde bereits beantwortet
          }

          const isCorrect = btn.getAttribute("data-correct") === "true";
          btn.classList.add(isCorrect ? "correct" : "incorrect");
          answered += 1;
          if (isCorrect) correct += 1;

          if (resultBox) {
            if (answered < questions.length) {
              resultBox.textContent = `Du hast bisher ${correct} von ${answered} Fragen richtig beantwortet.`;
            } else {
              resultBox.textContent = `Fertig! Du hast ${correct} von ${questions.length} Fragen richtig beantwortet.`;
            }
          }
        });
      });
    });

    if (resetBtn && resultBox) {
      resetBtn.addEventListener("click", () => {
        answered = 0;
        correct = 0;
        resultBox.textContent = "";
        const allOptionButtons = quiz.querySelectorAll(".quiz-options button");
        allOptionButtons.forEach((btn) => {
          btn.classList.remove("correct", "incorrect");
        });
      });
    }
  }
});

