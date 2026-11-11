# ⚗️ Chemistry Virtual Lab — Le Chatelier's Principle

> An interactive, browser-based virtual chemistry laboratory simulating **Chemical Equilibrium** and **Le Chatelier's Principle** using the **Haber Process** (N₂ + 3H₂ ⇌ 2NH₃).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)](https://www.chartjs.org/)

**🌐 Live Demo:** https://kailashnatarajan.github.io/chemistry-virtual-lab

---

## 👨‍💻 Developer

| | |
|---|---|
| **Name** | Kailash N |
| **GitHub** | [@kailashnatarajan](https://github.com/kailashnatarajan) |
| **LinkedIn** | [kailashkanth](https://www.linkedin.com/in/kailashkanth) |
| **Instagram** | [@reloading_clan](https://instagram.com/reloading_clan) · [@kailash_.kanth_.pvt](https://instagram.com/kailash_.kanth_.pvt) |
| **WhatsApp** | [+91 84890 91701](https://wa.me/918489091701) |
| **Copyright** | © 2026 Kailash N |

---

## ✨ Features

- 🧪 **Interactive Simulation** — Adjust Temperature, Pressure, and Concentration with real-time sliders
- 🔬 **Van't Hoff Equation** — Kc computed from thermodynamic data (ΔH, ΔS, R, T)
- 📐 **ICE Table Solver** — Bisection algorithm for equilibrium concentration calculation
- 🎬 **Animated Molecules** — Glowing HTML5 Canvas animation (N₂, H₂, NH₃)
- 📊 **Live Chart** — NH₃ Yield % vs Temperature using Chart.js
- 📋 **Observation Logger** — Auto-fills a results table per experiment run
- 🧠 **Quiz** — 5 MCQs with instant feedback and explanations
- 🏆 **Certificate** — Shown on passing score
- 📱 **Responsive** — Works on mobile, tablet, and desktop
- 🌐 **API Server** — Optional Express.js backend with REST endpoints
- ✅ **Unit Tests** — 23 Jest tests for simulation and quiz engines

---

## 📂 Project Structure

```
chemistry-virtual-lab/
│
├── index.html                   ← 🌟 Main web app (open in any browser)
├── server.js                    ← Express.js server (Node.js)
├── package.json                 ← Node.js project manifest
├── .gitignore
├── LICENSE                      ← MIT License
├── README.md
├── CHANGELOG.md
├── CONTRIBUTING.md
│
├── src/                         ← Source modules
│   ├── js/
│   │   ├── simulation.js        ← Chemistry engine (Van't Hoff, ICE table)
│   │   ├── quiz.js              ← Quiz engine class
│   │   ├── chart-config.js      ← Chart.js config factories
│   │   ├── canvas-animation.js  ← OOP molecule canvas (MoleculeCanvas)
│   │   └── utils.js             ← Shared utilities
│   └── css/
│       ├── style.css            ← Design system (tokens, components)
│       └── animations.css       ← CSS keyframes (12+ animations)
│
├── assets/                      ← Static data
│   └── data/
│       ├── questions.json       ← Quiz questions dataset
│       └── constants.json       ← Chemistry & simulation constants
│
└── tests/                       ← Jest unit tests
    ├── simulation.test.js       ← 15 tests for simulation engine
    └── quiz.test.js             ← 8 tests for quiz engine
```

---

## 🧪 Chemistry Covered

| Concept | Details |
|---------|---------|
| **Reaction** | N₂(g) + 3H₂(g) ⇌ 2NH₃(g) — Haber Process |
| **ΔH** | −92 kJ/mol (exothermic) |
| **ΔS** | −198 J/(mol·K) |
| **Kc formula** | Van't Hoff: ln(Kc) = −ΔH/(RT) + ΔS/R |
| **ICE Table** | Bisection root-finding (120 iterations) |
| **Q vs Kc** | Determines shift direction |
| **Pressure effect** | Concentration scaling by P/P_ref |
| **Temperature effect** | Kc decreases as T increases (exothermic) |

---

## 🚀 How to Run

### Option A — Open Directly (No Server Needed)
```
Double-click index.html → opens in your browser instantly
```

### Option B — Run with Node.js Server
```bash
# 1. Install dependencies
npm install

# 2. Start server
npm start

# 3. Open in browser
http://localhost:3000
```

### Option C — Development Mode (Auto-restart)
```bash
npm run dev
```

### Run Tests
```bash
npm test
```

---

## 🌐 Deploy on GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) → click **New**
2. Repository name: `chemistry-virtual-lab`
3. Set to **Public**
4. Click **Create repository**

### Step 2 — Upload Your Files
```bash
git init
git add .
git commit -m "🧪 Initial commit — Chemistry Virtual Lab by Kailash N"
git branch -M main
git remote add origin https://github.com/kailashnatarajan/chemistry-virtual-lab.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` | Folder: `/ (root)`
4. Click **Save**
5. Wait ~2 minutes → your site is live at:

```
https://kailashnatarajan.github.io/chemistry-virtual-lab/
```

---

## 🔌 API Endpoints (Server Mode)

| Method | Route | Description |
|--------|-------|-------------|
| `GET`  | `/api/health` | Health check |
| `GET`  | `/api/quiz` | Fetch quiz questions |
| `GET`  | `/api/constants` | Fetch chemistry constants |
| `POST` | `/api/calculate` | Calculate Kc, yield, direction |

**POST `/api/calculate` example:**
```json
// Request body
{ "temperature": 400, "pressure": 150, "n2": 1.0, "h2": 3.0 }

// Response
{ "success": true, "data": { "kc": 3.5e-5, "yield": 24.3, "direction": "Forward (→)", "qc": 0 } }
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| HTML5 | Structure & Canvas API |
| CSS3 | Styling, animations, responsive layout |
| JavaScript (ES6+) | Simulation logic, quiz, DOM interaction |
| [Chart.js](https://www.chartjs.org/) | NH₃ yield vs Temperature chart |
| [Google Fonts — Poppins](https://fonts.google.com/specimen/Poppins) | Typography |
| Node.js + Express | Optional backend server |
| Jest | Unit testing |

---

## 📸 Screenshots

| Tab | Description |
|-----|-------------|
| ![intro]() | Introduction & Theory |
| ![sim]()   | Interactive Simulation |
| ![quiz]()  | Quiz Section |

---

## 📄 License

MIT © 2026 [Kailash N](https://github.com/kailashnatarajan)

---

*Developed for Academic Purpose — B.Sc / B.Tech Chemistry Virtual Lab*
