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

  const progetti = [
    {
      titolo: "Villa Lineare",
      anno: 2024,
      categoria: "residenziale",
      immagine: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      titolo: "Headquarters Tech",
      anno: 2025,
      categoria: "commerciale",
      immagine: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    },
    {
      titolo: "Loft Industrial",
      anno: 2023,
      categoria: "interior",
      immagine: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80"
    },
    {
      titolo: "Residenza Parco",
      anno: 2026,
      categoria: "residenziale",
      immagine: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    },
    {
      titolo: "Showroom Moda",
      anno: 2025,
      categoria: "commerciale",
      immagine: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
    },
    {
      titolo: "Appartamento Minimal",
      anno: 2024,
      categoria: "interior",
      immagine: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const lavoriGrid = document.getElementById('lavori-grid');
  const filtersContainer = document.getElementById('categoria-filters');

  function renderLavori(listaProgetti) {
    if (!lavoriGrid) return;
    if (listaProgetti.length === 0) {
      lavoriGrid.innerHTML = `<p class="text-center text-muted w-100 py-4">Nessun progetto trovato per questa categoria.</p>`;
      return;
    }

    lavoriGrid.innerHTML = listaProgetti.map(progetto => `
      <div class="col">
        <article class="card lavoro-card">
          <div class="img-wrapper">
            <img src="${progetto.immagine}" alt="${progetto.titolo}">
          </div>
          <div class="card-body p-4">
            <span class="badge bg-primary mb-2 text-capitalize">${progetto.categoria}</span>
            <h3 class="fs-5 fw-bold card-title mb-1">${progetto.titolo}</h3>
            <p class="text-muted small m-0">Anno di realizzazione: ${progetto.anno}</p>
          </div>
        </article>
      </div>
    `).join('');
  }

  renderLavori(progetti);

  if (filtersContainer) {
    filtersContainer.addEventListener('click', (event) => {
      const targetButton = event.target.closest('button');
      if (!targetButton) return;

      filtersContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
      targetButton.classList.add('active');

      const filtroSelezionato = targetButton.getAttribute('data-filter');

      if (filtroSelezionato === 'all') {
        renderLavori(progetti);
      } else {
        const progettiFiltrati = progetti.filter(p => p.categoria === filtroSelezionato);
        renderLavori(progettiFiltrati);
      }
    });
  }
});