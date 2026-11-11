/**
 * server.js — Express.js server for Chemistry Virtual Lab
 * Author  : Kailash N
 * GitHub  : https://github.com/kailashnatarajan
 * License : MIT © 2026
 *
 * Usage:
 *   node server.js          → production
 *   nodemon server.js       → development (auto-restart)
 */

'use strict';

const express     = require('express');
const cors        = require('cors');
const helmet      = require('helmet');
const compression = require('compression');
const morgan      = require('morgan');
const path        = require('path');

// ─── App setup ────────────────────────────────────────────────────────────────
const app  = express();
const PORT = process.env.PORT || 3000;
const ENV  = process.env.NODE_ENV || 'development';

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(morgan(ENV === 'production' ? 'combined' : 'dev'));
app.use(compression());
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc : ["'self'"],
        styleSrc   : ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc    : ["'self'", 'https://fonts.gstatic.com'],
        scriptSrc  : ["'self'", "'unsafe-inline'", 'https://cdn.jsdelivr.net'],
        imgSrc     : ["'self'", 'data:', 'https:'],
        connectSrc : ["'self'"],
      },
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Static files ─────────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, '.')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/src',    express.static(path.join(__dirname, 'src')));

// ─── API Routes ───────────────────────────────────────────────────────────────

/**
 * GET /api/health
 * Health-check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({
    status  : 'OK',
    app     : 'Chemistry Virtual Lab',
    version : '1.0.0',
    author  : 'Kailash N',
    time    : new Date().toISOString(),
  });
});

/**
 * GET /api/quiz
 * Returns quiz questions from JSON data file
 */
app.get('/api/quiz', (req, res) => {
  const questions = require('./assets/data/questions.json');
  res.json({ success: true, data: questions });
});

/**
 * GET /api/constants
 * Returns chemistry constants used in simulation
 */
app.get('/api/constants', (req, res) => {
  const constants = require('./assets/data/constants.json');
  res.json({ success: true, data: constants });
});

/**
 * POST /api/calculate
 * Body: { temperature, pressure, n2, h2 }
 * Returns: { kc, yield, direction, qc }
 */
app.post('/api/calculate', (req, res) => {
  const { temperature, pressure, n2, h2 } = req.body;

  if (!temperature || !pressure || !n2 || !h2) {
    return res.status(400).json({
      success : false,
      error   : 'Missing required parameters: temperature, pressure, n2, h2',
    });
  }

  const T  = parseFloat(temperature) + 273.15; // K
  const P  = parseFloat(pressure);
  const dH = -92000;   // J/mol
  const dS = -198;     // J/mol/K
  const R  = 8.314;

  // Van't Hoff equation: ln(Kc) = -ΔH/RT + ΔS/R
  const lnK = -dH / (R * T) + dS / R;
  const Kc  = Math.exp(lnK);

  // Pressure effect on effective concentration
  const scale = P / 150;
  const c_n2  = parseFloat(n2)  * scale;
  const c_h2  = parseFloat(h2)  * scale;

  // Reaction quotient: Qc = [NH3]^2 / ([N2][H2]^3)
  // Assume [NH3] initial = 0 → Qc = 0 → always shifts forward initially
  const Qc = 0;

  // ICE table bisection solve for x (NH3 formed)
  let lo = 0, hi = Math.min(c_n2, c_h2 / 3), x = 0;
  for (let i = 0; i < 100; i++) {
    x = (lo + hi) / 2;
    const n2eq  = c_n2 - x;
    const h2eq  = c_h2 - 3 * x;
    const nh3eq = 2 * x;
    if (n2eq <= 0 || h2eq <= 0) { hi = x; continue; }
    const Q_ice = (nh3eq ** 2) / (n2eq * h2eq ** 3);
    if (Q_ice < Kc) lo = x; else hi = x;
  }

  const nh3Yield = Math.min(100, (x / Math.min(c_n2, c_h2 / 3)) * 100);
  const direction = Qc < Kc ? 'Forward (→)' : Qc > Kc ? 'Backward (←)' : 'At Equilibrium (⇌)';

  res.json({
    success  : true,
    data     : {
      kc       : parseFloat(Kc.toExponential(3)),
      yield    : parseFloat(nh3Yield.toFixed(2)),
      direction,
      qc       : parseFloat(Qc.toFixed(4)),
    },
  });
});

// ─── Catch-all → serve index.html ─────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ─── Error handler ────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('[ERROR]', err.stack);
  res.status(500).json({ success: false, error: 'Internal Server Error' });
});

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log('╔══════════════════════════════════════════════════╗');
  console.log('║   ⚗️  Chemistry Virtual Lab — Server Started      ║');
  console.log('╠══════════════════════════════════════════════════╣');
  console.log(`║  🌐 URL  : http://localhost:${PORT}                   ║`);
  console.log(`║  🔧 Mode : ${ENV.padEnd(39)}║`);
  console.log('║  👤 By   : Kailash N                             ║');
  console.log('╚══════════════════════════════════════════════════╝');
});

module.exports = app;
