/**
 * PDFExporter — Single Long-Page PDF Generator for Synapse Library.
 *
 * Key insight: we must simulate the PRINT layout (narrow width, no sidebar)
 * BEFORE measuring height, because text reflows wider→narrower and becomes
 * taller. Then we lock the @page to that exact height and use overflow:hidden
 * to guarantee one single page.
 */
const PDFExporter = {
  async exportTall({ width = 250, padding = "20mm", safetyBuffer = 50 } = {}) {
    const appLayout = document.querySelector(".app-layout");
    const mainContent = document.querySelector(".main-content");
    const sidebar = document.querySelector(".sidebar");
    const articlePage = document.querySelector(".article-page");
    const articleToc = document.querySelector(".article-toc");

    if (!articlePage) {
      console.error("PDF Export Error: .article-page not found.");
      return;
    }

    // ── 1. Save original inline styles ──
    const saved = {
      appLayout: appLayout ? appLayout.style.cssText : "",
      mainContent: mainContent ? mainContent.style.cssText : "",
      sidebar: sidebar ? sidebar.style.cssText : "",
      articleToc: articleToc ? articleToc.style.cssText : "",
      articlePage: articlePage.style.cssText,
    };

    // ── 2. Simulate the PRINT layout on screen ──
    //    This makes the content reflow to print-width so we measure
    //    the correct (taller) height.
    if (sidebar) sidebar.style.cssText = "display:none!important;";
    if (articleToc) articleToc.style.cssText = "display:none!important;";
    if (appLayout) {
      appLayout.style.cssText =
        "display:block!important;height:auto!important;overflow:visible!important;";
    }
    if (mainContent) {
      mainContent.style.cssText =
        "display:block!important;overflow:visible!important;height:auto!important;width:100%!important;";
    }
    // Constrain article to the same max-width used in print
    articlePage.style.cssText =
      "max-width:880px!important;margin:0 auto!important;padding:" +
      padding +
      "!important;box-sizing:border-box!important;";

    // Force synchronous reflow
    void document.body.offsetHeight;

    // ── 3. Measure the true print-layout height ──
    const pixelHeight = document.documentElement.scrollHeight;
    const mmHeight = Math.ceil(pixelHeight * 0.264583) + safetyBuffer;

    // ── 4. Inject @media print styles ──
    const styleId = "pdf-dynamic-styles";
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
      @media print {
        @page {
          size: ${width}mm ${mmHeight}mm !important;
          margin: 0 !important;
        }
        *, *::before, *::after {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        html, body {
          width: ${width}mm !important;
          height: ${mmHeight}mm !important;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden !important;
        }
        .sidebar, .sidebar-overlay, .sidebar-toggle, .article-toc,
        .print-btn, .synapse-checkbox, .no-print {
          display: none !important;
        }
        .app-layout {
          display: block !important;
          height: auto !important;
          overflow: visible !important;
        }
        .main-content {
          display: block !important;
          overflow: visible !important;
          height: auto !important;
          width: 100% !important;
        }
        .article-page {
          width: 100% !important;
          max-width: 880px !important;
          margin: 0 auto !important;
          padding: ${padding} !important;
          box-sizing: border-box !important;
        }
        footer {
          break-inside: avoid !important;
          page-break-inside: avoid !important;
          padding-bottom: 10mm !important;
        }
        .content-card  { break-inside: avoid; }
        .code-block-wrapper { break-inside: avoid; }
      }
    `;

    // ── 5. Print → Restore ──
    //    Keep the flattened layout active while the print dialog is open.
    //    window.print() is synchronous — it blocks until the user
    //    closes the dialog, so restoration happens after.
    requestAnimationFrame(() => {
      setTimeout(() => {
        window.print();

        // Restore everything
        styleTag.remove();
        if (appLayout) appLayout.style.cssText = saved.appLayout;
        if (mainContent) mainContent.style.cssText = saved.mainContent;
        if (sidebar) sidebar.style.cssText = saved.sidebar;
        if (articleToc) articleToc.style.cssText = saved.articleToc;
        articlePage.style.cssText = saved.articlePage;
      }, 150);
    });
  },
};
