export function esc(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;")
    .replace(/"/g, "&quot;");
}

export function parseTechTerms(text) {
  if (!text) return "";
  return text.replace(
    /`([^`]+)`/g,
    (match, p1) => `<span class="tech-term" dir="ltr">${esc(p1)}</span>`,
  );
}

export function generateId(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
