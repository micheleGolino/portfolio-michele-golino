# Portfolio · Michele Golino

Portfolio personale statico (HTML + CSS) di **Michele Golino**, Back End Engineer
specializzato in Java (Quarkus/Spring), Python e architetture a microservizi.

Il sito è realizzato seguendo un design language in stile Apple: tile a tutta
larghezza alternate chiaro/scuro, un unico accento *Action Blue* (`#0066cc`),
tipografia con tracking stretto e una sola ombra riservata all'immagine profilo.

## 🌐 Sito live

https://micheleGolino.github.io/portfolio-michele-golino/

## 📁 Struttura

```
portfolio-michele-golino/
├── index.html      # Pagina unica con tutte le sezioni
├── styles.css      # Design system (token, tile, componenti, responsive)
├── script.js       # Menu mobile, reveal allo scroll, anno dinamico
├── .nojekyll       # Disabilita l'elaborazione Jekyll su GitHub Pages
└── assets/
    └── profile.jpg # Foto profilo
```

## 🧩 Sezioni

- **Hero** — nome, ruolo e call to action
- **Chi sono** — biografia, specializzazione backend e approccio
- **Esperienze** — timeline professionale (ALTEN, AGM Solutions, Dedagroup, Randstad)
- **Formazione** — percorso accademico
- **Skills** — competenze tecniche per categoria
- **Certificazioni** — licenze e certificazioni
- **Contatti** — email e social

## 🛠️ Tecnologie

HTML5 · CSS3 (custom properties, grid, flexbox) · JavaScript vanilla.
Nessuna dipendenza, nessun build step.

## 🚀 Anteprima locale

Apri semplicemente `index.html` nel browser, oppure avvia un server statico:

```bash
python -m http.server 8000
# poi visita http://localhost:8000
```

---

© Michele Golino — Realizzato con HTML & CSS.
