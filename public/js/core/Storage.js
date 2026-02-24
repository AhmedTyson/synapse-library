import { libraryData } from "./State.js";

export function getProgressKey(file) {
  return `synapse_prog_${file}`;
}

export function getProgress(file) {
  try {
    return JSON.parse(localStorage.getItem(getProgressKey(file))) || [];
  } catch {
    return [];
  }
}

export function setProgress(file, completedIndices) {
  localStorage.setItem(getProgressKey(file), JSON.stringify(completedIndices));
}

export function syncSidebarProgress(file) {
  const navItem = document.querySelector(".nav-item.active");
  if (!navItem) return;

  if (file && !navItem.getAttribute("href").endsWith(file)) return;

  const prog = getProgress(file);
  const countSpan = navItem.querySelector(".nav-count");
  if (countSpan) {
    let total = "?";
    for (const cat of libraryData.categories) {
      if (!cat.docs) continue;
      const doc = cat.docs.find((d) => d.file === file);
      if (doc) {
        total = doc.sections;
        break;
      }
    }
    countSpan.textContent = `${prog.length}/${total}`;

    const icon = navItem.querySelector("i");
    const textSpan = navItem.querySelector(".nav-item-text");
    const isDone = total !== "?" && prog.length > 0 && prog.length === total;

    if (icon) icon.style.color = isDone ? "#22c55e" : "";
    if (textSpan) {
      textSpan.style.textDecoration = isDone ? "line-through" : "";
      textSpan.style.color = isDone ? "var(--text-dim)" : "";
    }
  }
}

window.toggleSectionProgress = function (file, index, checkbox) {
  const prog = getProgress(file);
  const i = prog.indexOf(index);
  if (i > -1) {
    prog.splice(i, 1);
    checkbox.closest(".section-wrapper").classList.remove("completed");
  } else {
    prog.push(index);
    checkbox.closest(".section-wrapper").classList.add("completed");
  }
  setProgress(file, prog);
  syncSidebarProgress(file);
};

window.resetPageProgress = function (file, catId) {
  setProgress(file, []);
  syncSidebarProgress(file);

  const sections = document.querySelectorAll(".section-wrapper");
  sections.forEach((s) => {
    s.classList.remove("completed");
    const cb = s.querySelector("input[type='checkbox']");
    if (cb) cb.checked = false;
  });

  console.log(`Progress reset successfully for ${file}`);
};
