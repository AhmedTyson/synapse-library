/**
 * JS-Highlighter: Automated Syntax Highlighting (VS Code Style) and Line Numbers.
 * Integrated with Prism.js — supports multiple languages.
 */
function setupCodeBlocks() {
  const preBlocks = document.querySelectorAll("pre");

  // Create an observer to only highlight code blocks when they are near the viewport
  const codeObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const pre = entry.target;
          // Use requestIdleCallback or setTimeout to make highlighting non-blocking
          const highlightTask = () => highlightPreBlock(pre);
          if (window.requestIdleCallback) {
            window.requestIdleCallback(highlightTask, { timeout: 2000 });
          } else {
            setTimeout(highlightTask, 0);
          }
          // Stop observing once task is queued
          observer.unobserve(pre);
        }
      });
    },
    {
      rootMargin: "80% 0px", // Start highlighting more aggressively before it hits viewport
    },
  );

  preBlocks.forEach((pre) => {
    // Only observe if not already processed
    if (!pre.querySelector(".line-numbers")) {
      codeObserver.observe(pre);
    }
  });
}

function highlightPreBlock(pre) {
  if (pre.querySelector(".line-numbers")) return;

  const codeElement = pre.querySelector("code");
  if (!codeElement) return;

  const rawText = codeElement.textContent.trim();

  // Detect language from the parent wrapper's .code-lang text
  let lang = "javascript";
  const wrapper = pre.closest(".code-block-wrapper");
  if (wrapper) {
    const langEl = wrapper.querySelector(".code-lang");
    if (langEl) lang = langEl.textContent.trim().toLowerCase();
  }

  // Map common aliases
  const langMap = {
    js: "javascript",
    ts: "typescript",
    py: "python",
    cs: "csharp",
    "c#": "csharp",
    html: "markup",
    xml: "markup",
    sh: "bash",
    shell: "bash",
  };
  const prismLang = langMap[lang] || lang;

  // Get Highlighted HTML using Prism (fallback to escaped text)
  let highlightedHTML;
  const escapeForHTML = (s) =>
    s.replace(
      /[&<>"']/g,
      (m) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[m],
    );
  try {
    if (window.Prism && Prism.languages[prismLang]) {
      highlightedHTML = Prism.highlight(
        rawText,
        Prism.languages[prismLang],
        prismLang,
      );
    } else if (window.Prism && Prism.languages.javascript) {
      highlightedHTML = Prism.highlight(
        rawText,
        Prism.languages.javascript,
        "javascript",
      );
    } else {
      highlightedHTML = escapeForHTML(rawText);
    }
  } catch (e) {
    console.warn(
      `Prism highlight failed for "${prismLang}", falling back to plain text:`,
      e.message,
    );
    highlightedHTML = escapeForHTML(rawText);
  }

  // Line Numbers Gutter
  const lines = rawText.split("\n");
  const gutter = document.createElement("div");
  gutter.className = "line-numbers";

  // Create line numbers efficiently
  gutter.innerHTML = lines
    .map((_, index) => `<span>${index + 1}</span>`)
    .join("");

  // Content Wrapper
  const content = document.createElement("div");
  content.className = "code-content";
  content.innerHTML = highlightedHTML;

  // Assemble
  pre.innerHTML = "";
  pre.appendChild(gutter);
  pre.appendChild(content);
}

/**
 * Copy code text to clipboard
 * @param {HTMLElement} btn - The copy button element
 */
async function copyCode(btn) {
  const wrapper = btn.closest(".code-block-wrapper");
  const codeContent = wrapper.querySelector(".code-content");
  const codeText = codeContent ? codeContent.innerText : "";

  try {
    await navigator.clipboard.writeText(codeText);
    const originalHTML = btn.innerHTML;

    btn.classList.add("copied");
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';

    setTimeout(() => {
      btn.classList.remove("copied");
      btn.innerHTML = originalHTML;
    }, 2000);
  } catch (err) {
    console.error("Failed to copy!", err);
  }
}

// Auto-run on load
window.addEventListener("DOMContentLoaded", setupCodeBlocks);
