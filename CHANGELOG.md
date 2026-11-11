# 📋 Changelog

All notable changes to **Chemistry Virtual Lab** are documented in this file.  
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.0.0] — 2026-11-11

### 🎉 Initial Release

#### Added
- Full virtual chemistry laboratory web application (`index.html`)
- Interactive simulation for Le Chatelier's Principle (Haber Process: N₂ + 3H₂ ⇌ 2NH₃)
- Real-time sliders for Temperature (100–600°C), Pressure (1–300 atm), [N₂] and [H₂]
- Van't Hoff equation for Kc computation (ΔH = −92 kJ/mol, ΔS = −198 J/mol/K)
- ICE table solver using bisection root-finding method
- Animated HTML5 Canvas molecule visualisation (N₂, H₂, NH₃ bouncing molecules)
- Chart.js line chart: NH₃ Yield % vs Temperature, updates live with pressure
- 6-tab navigation: Introduction → Procedure → Simulation → Observations → Quiz → Result
- 5-question MCQ quiz with instant feedback, explanations, and scoring
- Auto-filled observations table (logs T, P, [N₂], [H₂], Kc, yield%, direction per run)
- Certificate block shown on quiz score ≥ 3/5
- Personal developer footer: **Kailash N © 2026** with 5 social media links

#### Added — Project Structure
- `server.js` — Express.js server with `/api/health`, `/api/quiz`, `/api/calculate` routes
- `src/js/simulation.js` — Modular simulation engine (Van't Hoff, ICE, yield curve)
- `src/js/quiz.js` — Quiz engine class with state management and scoring
- `src/js/chart-config.js` — Reusable Chart.js configuration factories
- `src/js/canvas-animation.js` — OOP molecule canvas animation (MoleculeCanvas class)
- `src/js/utils.js` — Shared utility functions (formatting, DOM helpers, validation)
- `src/css/style.css` — Full design token system, card/button/table/form styles
- `src/css/animations.css` — 12+ named CSS keyframe animations
- `assets/data/questions.json` — Quiz questions dataset (JSON)
- `assets/data/constants.json` — Chemistry and simulation constants (JSON)
- `tests/simulation.test.js` — 15 Jest unit tests for simulation engine
- `tests/quiz.test.js` — 8 Jest unit tests for quiz engine
- `package.json` — Node.js project manifest with scripts
- `.gitignore` — Standard Node.js gitignore
- `LICENSE` — MIT License
- `README.md` — Full project documentation with GitHub Pages deploy guide
- `CHANGELOG.md` — This file
- `CONTRIBUTING.md` — Contributor guidelines

---

## [Unreleased]

### Planned
- [ ] Dark mode toggle
- [ ] Additional reaction: 2SO₂ + O₂ ⇌ 2SO₃ (Contact Process)
- [ ] Save/load observation data as CSV export
- [ ] PWA support (offline mode, app icon)
- [ ] Multiple language support (Tamil, Hindi)
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)
