import { libraryData, loadState } from "../core/State.js";
import { getProgress } from "../core/Storage.js";
import { esc } from "../core/Utils.js";

window.deleteCategory = async function (e, id, title) {
  if (e) e.stopPropagation();
  console.log("Delete triggered for:", id, title);
  if (
    !confirm(
      `Are you sure you want to delete the category "${title}" and all its documents from the UI?`,
    )
  ) {
    console.log("Delete cancelled by user");
    return;
  }

  console.log("Deleting category from local memory...");
  libraryData.categories = libraryData.categories.filter((c) => c.id !== id);
  try {
    console.log("Saving library.json to server...");
    const res = await fetch("/api/save-library", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(libraryData),
    });

    const text = await res.text();
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      console.error("Failed to parse JSON:", text);
      throw new Error("Server returned an invalid response (not JSON).");
    }

    console.log("Server response:", data);
    if (data.success || res.ok) {
      console.log("Refreshing library data...");
      await loadState();
      import("../core/Router.js").then((module) => module.navigate()); // refresh router
    } else {
      throw new Error(data.error || "Unknown error saving library");
    }
  } catch (err) {
    console.error("Delete failed:", err);
    alert("Failed to delete category: " + err.message);
    await loadState();
    import("../core/Router.js").then((module) => module.navigate());
  }
};

export function renderHub() {
  document.title = libraryData.libraryTitle || "Synapse Library";
  const root = document.getElementById("app-root");

  let cardsHTML = "";
  (libraryData.categories || []).forEach((cat, idx) => {
    const docCount = (cat.docs || []).length;
    let totalSections = 0;
    let completedSections = 0;

    (cat.docs || []).forEach((d) => {
      totalSections += d.sections || 0;
      completedSections += getProgress(d.file).length;
    });

    const percent =
      totalSections === 0
        ? 0
        : Math.round((completedSections / totalSections) * 100);
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const dashoffset = circumference - (percent / 100) * circumference;

    const statusText =
      percent === 100
        ? "COMPLETE"
        : completedSections > 0
          ? "IN PROGRESS"
          : "NOT STARTED";

    cardsHTML += `
      <div class="course-card" style="--card-accent: ${cat.color || "var(--accent)"}" onclick="location.hash='#/cat/${cat.id}'">
        <div class="course-card__header">
          <span class="course-card__icon"><i class="${cat.icon || "fa-solid fa-folder"}" style="color:${cat.color || "var(--accent)"}"></i></span>
          <div class="course-card__actions">
            <span class="course-card__badge">
              <i class="fa-solid fa-shield-check" style="font-size:8px"></i>
              ${docCount === 1 ? "1 Document" : docCount + " Documents"}
            </span>
            <button class="course-card__edit" title="Edit Category" onclick="event.stopPropagation(); location.hash='#/admin?editCat=${cat.id}'">
              <i class="fa-solid fa-pencil"></i>
            </button>
            <button class="course-card__delete" title="Delete Category" onclick="event.stopPropagation(); window.deleteCategory(event, '${cat.id}', '${cat.title.replace(/'/g, "\\'")}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
        <h3 class="course-card__title">${esc(cat.title)}</h3>
        <p class="course-card__desc">${esc(cat.description || "Complete " + cat.title + " mastery.")}</p>
        <div class="course-card__footer">
          <div class="course-card__ring">
            <svg width="52" height="52" viewBox="0 0 52 52">
              <circle cx="26" cy="26" r="${radius}" fill="none" stroke="var(--border)" stroke-width="3"/>
              <circle cx="26" cy="26" r="${radius}" fill="none" stroke="var(--card-accent)" stroke-width="3"
                stroke-dasharray="${circumference}" stroke-dashoffset="${dashoffset}"
                stroke-linecap="round" transform="rotate(-90 26 26)"/>
            </svg>
            <span class="course-card__ring-text">${percent}%</span>
          </div>
          <div class="course-card__stats">
            <span>${completedSections}/${totalSections} sections</span>
            <span class="course-card__status">${statusText}</span>
          </div>
        </div>
      </div>
    `;
  });

  root.innerHTML = `
    <div class="courses-page">
      <header class="courses-header" style="display:flex; justify-content: space-between; align-items: flex-start;">
        <div class="courses-brand">
          <div class="courses-logo"><i class="fa-solid fa-book-journal-whills"></i></div>
          <div>
            <h1>${esc(libraryData.libraryTitle || "Synapse Library")}</h1>
            <span class="courses-subtitle">${esc(libraryData.librarySubtitle || "Knowledge Base")}</span>
            <p class="courses-desc">Your personal documentation library. Browse complete study guides with bilingual content, code examples, and interview preparation material.</p>
          </div>
        </div>
        <button class="print-btn" onclick="location.hash='#/admin'">
          <i class="fa-solid fa-gear"></i> Admin Area
        </button>
      </header>
      <div class="courses-grid">
        ${cardsHTML}
      </div>
    </div>
  `;
}
