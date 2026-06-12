// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.getElementById('theme-text');

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeText.textContent = 'Tema chiaro';
  } else {
    document.body.classList.remove('dark-theme');
    themeText.textContent = 'Tema scuro';
  }

  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      themeText.textContent = 'Tema scuro';
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      themeText.textContent = 'Tema chiaro';
      localStorage.setItem('theme', 'dark');
    }
  });
});