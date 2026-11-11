# 🤝 Contributing to Chemistry Virtual Lab

Thank you for your interest in contributing! This project is maintained by **Kailash N**.

---

## 🚀 Getting Started

### 1. Fork & Clone
```bash
# Fork the repo on GitHub, then:
git clone https://github.com/<your-username>/chemistry-virtual-lab.git
cd chemistry-virtual-lab
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
# → http://localhost:3000
```

### 4. Run Tests
```bash
npm test
```

---

## 📂 Project Structure

```
chemistry-virtual-lab/
├── index.html              ← Main single-page app (open in browser directly)
├── server.js               ← Express.js server (optional, for API features)
├── package.json
├── .gitignore
├── LICENSE
├── README.md
├── CHANGELOG.md
│
├── src/
│   ├── js/
│   │   ├── simulation.js        ← Chemistry computation engine
│   │   ├── quiz.js              ← Quiz state & scoring
│   │   ├── chart-config.js      ← Chart.js config factories
│   │   ├── canvas-animation.js  ← Molecule canvas animation
│   │   └── utils.js             ← Shared utilities
│   └── css/
│       ├── style.css            ← Design tokens & components
│       └── animations.css       ← CSS keyframe animations
│
├── assets/
│   └── data/
│       ├── questions.json       ← Quiz questions dataset
│       └── constants.json       ← Chemistry constants
│
└── tests/
    ├── simulation.test.js       ← Jest unit tests for simulation
    └── quiz.test.js             ← Jest unit tests for quiz
```

---

## 🌿 Branching Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — deployed to GitHub Pages |
| `dev`  | Development — merge PRs here first |
| `feature/<name>` | New features |
| `fix/<name>`     | Bug fixes |

---

## ✅ Contribution Guidelines

1. **One feature per PR** — Keep pull requests focused.
2. **Write tests** — Add Jest tests for any new simulation logic.
3. **Follow code style** — Use `'use strict'`, JSDoc comments, 2-space indent.
4. **Update CHANGELOG.md** — Add your change under `[Unreleased]`.
5. **Test in browser** — Open `index.html` and verify everything works.

---

## 🐛 Reporting Bugs

Open an issue at:  
👉 https://github.com/kailashnatarajan/chemistry-virtual-lab/issues

Include:
- Browser + version
- Steps to reproduce
- Expected vs actual behaviour

---

## 📄 License

By contributing, you agree your contributions are licensed under the **MIT License**.

---

*Made with ❤️ by [Kailash N](https://github.com/kailashnatarajan)*
