import { libraryData } from "../core/State.js";
import { getProgress } from "../core/Storage.js";
import { esc } from "../core/Utils.js";
import { loadArticle } from "./ArticleView.js";

export async function renderCategoryView(catId, activeFile) {
  const root = document.getElementById("app-root");
  const cat = (libraryData.categories || []).find((c) => c.id === catId);
  if (!cat) {
    location.hash = "#/";
    return;
  }

  if (!activeFile && cat.docs && cat.docs.length > 0) {
    location.hash = `#/cat/${catId}/${cat.docs[0].file}`;
    return;
  }

  document.title = `${cat.title} — Synapse Library`;

  let navHTML = "";
  (cat.docs || []).forEach((doc, idx) => {
    const isActive = doc.file === activeFile;
    const prog = getProgress(doc.file).length;
    const isDone = prog > 0 && prog === doc.sections;

    navHTML += `
      <a href="#/cat/${catId}/${doc.file}" class="nav-item ${isActive ? "active" : ""}">
        <span class="nav-item-text" style="${isDone ? "text-decoration:line-through;color:var(--text-dim)" : ""}">${idx + 1}. ${esc(doc.title)}</span>
        <span class="nav-count">${prog}/${doc.sections || "?"}</span>
      </a>
    `;
  });

  root.innerHTML = `
    <div id="app-layout" class="app-layout">
      <nav id="sidebar" class="sidebar">
        <div class="sidebar-header">
          <div class="brand-logo"><i class="${cat.icon || "fa-solid fa-folder"}" style="color:${cat.color || "var(--accent)"}"></i></div>
          <div class="brand-text">
            <span id="sidebar-title" class="brand-title">${esc(cat.title)}</span>
            <span class="brand-subtitle">DOCUMENTATION</span>
          </div>
          <button class="sidebar-close-btn" onclick="closeSidebar()" title="Close sidebar">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div class="section-label">MODULES</div>
        <div id="sidebar-nav" class="nav-list">
          ${navHTML}
        </div>
        <div class="sidebar-footer">
          <a href="#/" class="sidebar-back-btn">
            <i class="fa-solid fa-chevron-left"></i> Library
          </a>
          ${activeFile ? `<button class="sidebar-reset-btn" onclick="window.resetPageProgress('${activeFile}', '${catId}')" title="Reset Page Progress"><i class="fa-solid fa-rotate-left"></i></button>` : ""}
        </div>
      </nav>
      <div id="sidebar-overlay" class="sidebar-overlay" onclick="closeSidebar()"></div>
      <button class="sidebar-toggle" onclick="toggleSidebar()" title="Open sidebar">
        <i class="fa-solid fa-bars"></i>
      </button>
      <main id="main-content" class="main-content">
        <div class="loader-spinner"></div>
      </main>
    </div>
  `;

  if (activeFile) {
    await loadArticle(activeFile);
  }
}
