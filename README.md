# <img src="https://api.iconify.design/lucide:library.svg?color=%238A2BE2" width="32" height="32" align="center" /> Synapse Library

> **A centralized knowledge hub for coding mastery and bilingual technical documentation.**
> Dynamic, persistent, and precision-engineered for reading extensive multi-part courses.

<div align="center">

| Project Status | Core Technology                                                                                                   | Deployment                                                                                                      | Architecture                                                                        |
| :------------- | :---------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| `ACTIVE`       | ![Vanilla JS](https://img.shields.io/badge/Vanilla%20JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat-square&logo=github&logoColor=white) | ![Dynamic JSON](https://img.shields.io/badge/Dynamic_JSON-8A2BE2?style=flat-square) |

</div>

---

## <img src="https://api.iconify.design/lucide:list.svg?color=%238A2BE2" width="20" height="20" align="center" /> Table of Contents

- [Overview](#overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Performance](#-performance-optimizations)
- [Getting Started](#-getting-started)

---

## Overview

Synapse Library solves the problem of navigating massive, monolithic Markdown or PDF documentation files. It breaks down comprehensive courses (like 140-part JavaScript bootcamps or OOP masterclasses) into a visually satisfying, persistent, single-page application experience.

Built utilizing **pure Vanilla JavaScript ES Modules**, meaning no build steps (Webpack/Vite) overhead. Content is served exclusively via asynchronous `fetch` requests to chunked JSON files, making the repository incredibly lightweight while supporting complex features like automated bilingual syntax and global progress state.

---

---

## <img src="https://api.iconify.design/lucide:sparkles.svg?color=%238A2BE2" width="20" height="20" align="center" /> Features

| Feature                 | Description                                                                       |
| ----------------------- | --------------------------------------------------------------------------------- |
| **Progress Engine**     | Stores chapter completion persistently in `localStorage`, unified across files    |
| **Dynamic Loading**     | Injects thousands of documentation lines instantly via chunked JSON fetching      |
| **Bilingual Parsing**   | Automatically differentiates and formats Arabic/English text nodes simultaneously |
| **PDF Compiler**        | Integrated `html2pdf.js` to render and save current reading views offline         |
| **Syntax Highlighting** | Real-time `Prism.js` code formatting injected dynamically post-fetch              |
| **Dark Blueprint**      | Custom dark-mode aesthetic with Synapse purple/border highlights                  |
| **Source Attribution**  | Automated dynamic extraction of video lengths, titles, and author links           |
| **Reset State**         | Globals available to systematically clear `localStorage` completion flags         |

---

---

## <img src="https://api.iconify.design/lucide:cpu.svg?color=%238A2BE2" width="20" height="20" align="center" /> Tech Stack

| Layer            | Technology                                              |
| ---------------- | ------------------------------------------------------- |
| **Architecture** | JavaScript (Vanilla ES6 Modules)                        |
| **State**        | Window `localStorage` API                               |
| **Data Flow**    | Asynchronous JSON `fetch` pipelines                     |
| **Highlighting** | [Prism.js](https://prismjs.com) (Okaidia theme)         |
| **Exporting**    | [html2pdf.js](https://ekoopmans.github.io/html2pdf.js/) |
| **Deployment**   | GitHub Pages / Netlify / Node.js Local                  |

---

---

## <img src="https://api.iconify.design/lucide:git-pull-request.svg?color=%238A2BE2" width="20" height="20" align="center" /> Architecture

**Philosophy: The Single Page JSON Router**

```
index.html  →  app.js (Entry Point)
                   ↓
         ┌─────────────────────┐
         │       State.js      │──── stores ──→ Active Category & File Selection
         │  (Global Constants) │
         └─────────────────────┘
                   ↓
         ┌─────────────────────┐
         │       Router.js     │  ← handles hash changes, coordinates views
         └─────────────────────┘
                   ↓
      ┌────────────┴────────────┐
      ↓                         ↓
┌────────────┐            ┌───────────┐
│CategoryView│            │ArticleView│
│(Sidebar Nav)│           │(Main Body)│
└────────────┘            └───────────┘
      ↓                         ↓
┌────────────┐            ┌───────────┐
│ Storage.js │  ← syncs → │ fetch API │
│(Local Sync)│            │(JSON Docs)│
└────────────┘            └───────────┘
```

### Module Responsibilities

| Module            | Role                                                     |
| ----------------- | -------------------------------------------------------- |
| `app.js`          | Composition root; boots the router                       |
| `State.js`        | Centralized state (current category, active file)        |
| `Router.js`       | Hash-based routing triggering view re-renders            |
| `CategoryView.js` | Sidebar dom generation, category mapping, resets         |
| `ArticleView.js`  | JSON fetching, HTML dom-node assembly, markup syntaxing  |
| `Storage.js`      | Cross-file persistent array manipulation in LocalStorage |

---

---

## <img src="https://api.iconify.design/lucide:folder-tree.svg?color=%238A2BE2" width="20" height="20" align="center" /> Project Structure

```
synapse-library/
├── index.html                     # Main application shell
├── library.json                   # Master curriculum roadmap
├── server.js                      # Express Dev Server (optional)
├── split_js_parts.py              # CLI tool for JSON fragmentation
│
├── public/
│   ├── docs/                      # The Knowledge Base
│   │   ├── JavaScript-Part*.json  # 14-part JS curriculum
│   │   ├── PHP-Part*.json         # PHP Mastery chapters
│   │   └── data.json              # OOP course
│   │
│   ├── js/                        # ES6 Module Core
│   │   ├── app.js
│   │   ├── core/
│   │   │   ├── Router.js
│   │   │   ├── State.js
│   │   │   └── Storage.js
│   │   └── views/
│   │       ├── ArticleView.js
│   │       └── CategoryView.js
│   │
│   └── css/                       # Modular Styling
│       ├── main.css               # Global theme & reset
│       └── views/
│           ├── article.css        # Content formatting UI
│           └── category.css       # Sidebar navigation UI
```

---

---

## <img src="https://api.iconify.design/lucide:zap.svg?color=%238A2BE2" width="20" height="20" align="center" /> Performance Optimizations

| Optimization           | Impact                                                                    |
| ---------------------- | ------------------------------------------------------------------------- |
| **JSON Fragmentation** | 16k lines of JS docs split into 14 lazy-loaded endpoints                  |
| **Idle Callbacks**     | `requestIdleCallback` utilized for non-blocking UI paints                 |
| **Document Fragments** | DOM nodes assembled in memory before mounting to prevent layout thrashing |
| **No-Build ESM**       | Zero bundler size limit; files execute natively in-browser                |

---

---

## <img src="https://api.iconify.design/lucide:rocket.svg?color=%238A2BE2" width="20" height="20" align="center" /> Getting Started

```bash
# Clone the repository
git clone https://github.com/AhmedTyson/synapse-library.git

cd synapse-library

# Install Express dependencies (for local server)
npm install

# Run the local server (auto-handles CORS & JSON serving)
npm start
```

Open `http://localhost:3000` in your browser.
