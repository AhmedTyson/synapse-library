import { getProgress } from "../core/Storage.js";
import { esc, parseTechTerms } from "../core/Utils.js";
import { renderBlock } from "../components/BlockRenderer.js";

export async function loadArticle(file) {
  const main = document.getElementById("main-content");
  if (!main) return;
  main.innerHTML = '<div class="loader-spinner"></div>';

  let data;
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = await res.json();
  } catch (e) {
    main.innerHTML = `<div class="error-message"><i class="fa-solid fa-circle-exclamation"></i> Failed to load ${esc(file)}<br>${esc(e.message)}</div>`;
    return;
  }

  const prog = getProgress(file);

  let html = `
    <div class="article-page">
      <header class="article-header" style="flex-direction: column; align-items: flex-start; gap: 8px; border-bottom: 1px solid var(--border); padding-bottom: 24px;">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
          <div class="brand">
            <div class="brand-info">
              <h1>${esc(data.title || "Article")}</h1>
              <span>${esc(data.subtitle || "")}</span>
            </div>
          </div>
          <button class="print-btn" onclick="PDFExporter.exportTall()">
            <i class="fa-solid fa-print"></i> Save PDF
          </button>
        </div>
        ${
          data.description
            ? `
        <div style="font-size: 14px; color: var(--text-muted); margin-top: 4px;">
          ${esc(data.description)}
          ${
            data.links && data.links.length > 0
              ? data.links
                  .map(
                    (link, idx) =>
                      `<a href="${esc(link)}" target="_blank" class="animated-source-link">Watch Source${data.links.length > 1 ? ` ${idx + 1}` : ""}</a>`,
                  )
                  .join(" • ")
              : ""
          }
        </div>
        `
            : ""
        }
      </header>
      <main id="article-content" class="article-sections-wrapper">
  `;

  html += `</main>
      <footer>&copy; ${new Date().getFullYear()} Synapse Library</footer>
    </div>
  `;

  // 1. Render Shell
  main.innerHTML = html;
  const sectionsWrapper = main.querySelector("#article-content");

  const allSections = data.sections || [];
  let renderedCount = 0;
  const CHUNK_SIZE = 10;

  function renderNextChunk() {
    const chunk = allSections.slice(renderedCount, renderedCount + CHUNK_SIZE);
    if (chunk.length === 0) {
      if (typeof window.setupCodeBlocks === "function")
        window.setupCodeBlocks();
      return;
    }

    let chunkHTML = "";
    chunk.forEach((section, i) => {
      const index = renderedCount + i;
      const sectionId = `section-${index}`;
      const currentProg = getProgress(file);
      const isCompleted = currentProg.includes(index);

      chunkHTML += `<div class="section-wrapper ${
        isCompleted ? "completed" : ""
      }" id="${sectionId}">`;
      chunkHTML += `
        <div class="section-header">
          <label class="synapse-checkbox">
            <input type="checkbox" onchange="toggleSectionProgress('${file}', ${index}, this)" ${
              isCompleted ? "checked" : ""
            }>
            <span class="checkmark"><i class="fa-solid fa-check"></i></span>
          </label>
          <h2>${parseTechTerms(section.title)}</h2>
        </div>
      `;
      chunkHTML += `<div class="content-card">`;
      (section.blocks || []).forEach((block) => {
        chunkHTML += renderBlock(block);
      });
      chunkHTML += `</strong></em></b></i></div></div>`;
    });

    sectionsWrapper.insertAdjacentHTML("beforeend", chunkHTML);
    renderedCount += chunk.length;

    // Use requestIdleCallback for subsequent chunks for zero-lag
    if (window.requestIdleCallback) {
      window.requestIdleCallback(renderNextChunk);
    } else {
      setTimeout(renderNextChunk, 10);
    }
  }

  // Start the first chunk
  renderNextChunk();

  main.style.display = "";
  main.scrollTop = 0;
}
