import { esc, parseTechTerms } from "../core/Utils.js";

export function renderBlock(b) {
  const fn = renderers[b.type];
  return fn ? fn(b) : "";
}

const renderers = {
  arabic(b) {
    return `<div class="arabic-text" dir="auto">${parseTechTerms(b.content)}</div>`;
  },
  text(b) {
    return `<p dir="auto">${parseTechTerms(b.content)}</p>`;
  },
  heading(b) {
    const t = `h${Math.min(Math.max(b.level || 4, 3), 6)}`;
    return `<${t} dir="auto">${parseTechTerms(b.content)}</${t}>`;
  },
  list(b) {
    return `<ul dir="auto" style="padding-inline-start: 20px;">${(b.items || []).map((i) => `<li dir="auto" style="margin-bottom: 8px;">${parseTechTerms(i)}</li>`).join("")}</ul>`;
  },
  code(b) {
    return `<div class="code-block-wrapper" dir="ltr"><div class="code-header"><span class="code-lang">${esc(b.language || "code")}</span><button class="copy-btn" onclick="copyCode(this)"><i class="fa-regular fa-copy"></i> Copy</button></div><pre><code class="language-${esc(b.language || "javascript")}">${esc(b.code || "")}</code></pre></div>`;
  },
  table(b) {
    let h = `<div class="table-responsive"><table${b.className ? ` class="${b.className}"` : ""} dir="auto">`;
    if (b.headers)
      h += `<thead><tr>${b.headers.map((c) => `<th dir="auto">${parseTechTerms(c)}</th>`).join("")}</tr></thead>`;
    if (b.rows)
      h += `<tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td dir="auto">${parseTechTerms(c)}</td>`).join("")}</tr>`).join("")}</tbody>`;
    return h + `</table></div>`;
  },
  callout(b) {
    const s = b.style || "";
    const icons = {
      tip: "fa-solid fa-lightbulb",
      warning: "fa-solid fa-triangle-exclamation",
      info: "fa-solid fa-circle-info",
    };
    return `<div class="callout-box ${s}" dir="auto">${b.title ? `<div class="callout-title" dir="auto"><i class="${icons[s] || "fa-solid fa-lightbulb"}"></i> ${parseTechTerms(b.title)}</div>` : ""}${b.content ? `<div class="arabic-text" style="font-size:14px;margin-bottom:0" dir="auto">${parseTechTerms(b.content)}</div>` : ""}</div>`;
  },
  image(b) {
    return `<div class="image-wrapper"><img src="${esc(b.src || "")}" alt="${esc(b.alt || "")}" loading="lazy"></div>${b.caption ? `<p class="image-caption" dir="auto">${parseTechTerms(b.caption)}</p>` : ""}`;
  },
  quote(b) {
    return `<p class="quote-block" dir="auto">"${parseTechTerms(b.content)}"${b.author ? ` — <strong dir="auto">${esc(b.author)}</strong>` : ""}</p>`;
  },
  comparison(b) {
    const col = (c) =>
      c
        ? `<div class="comparison-col" dir="auto">${c.title ? `<h5 dir="auto">${parseTechTerms(c.title)}</h5>` : ""}${c.items ? `<ul dir="auto" class="comparison-list">${c.items.map((i) => `<li dir="auto">${parseTechTerms(i)}</li>`).join("")}</ul>` : ""}</div>`
        : "";
    return `<div class="comparison-box" dir="auto">${b.title ? `<h4 class="comparison-title" dir="auto">${parseTechTerms(b.title)}</h4>` : ""}<div class="comparison-grid">${col(b.left)}${col(b.right)}</div>${b.footer ? `<div style="margin-top:25px;padding:15px;border-radius:8px;background:var(--bg-app)" dir="auto">${parseTechTerms(b.footer)}</div>` : ""}</div>`;
  },
};
