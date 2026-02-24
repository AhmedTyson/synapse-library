import { libraryData } from "../core/State.js";
import { esc, generateId } from "../core/Utils.js";

export function renderAdmin(editCatId) {
  const root = document.getElementById("app-root");
  const isEdit = !!editCatId;
  let editCat = isEdit
    ? libraryData.categories.find((c) => c.id === editCatId)
    : null;

  // Default form values for Category
  const catTitle = editCat ? esc(editCat.title) : "";
  const catDesc = editCat ? esc(editCat.description) : "";
  const catIcon = editCat ? esc(editCat.icon) : "fa-solid fa-folder";
  const catColor = editCat ? esc(editCat.color) : "#a855f7";

  let catOptions = (libraryData.categories || [])
    .map((c) => `<option value="${c.id}">${c.title}</option>`)
    .join("");
  if (!catOptions)
    catOptions = `<option disabled>No categories exist yet. Create one first.</option>`;

  root.innerHTML = `
    <div class="courses-page admin-page">
      <header class="courses-header" style="display:flex; justify-content: space-between;">
        <div class="courses-brand">
          <div class="courses-logo"><i class="fa-solid fa-gear"></i></div>
          <div>
            <h1>Admin Dashboard</h1>
            <span class="courses-subtitle">System Configuration</span>
          </div>
        </div>
        <button class="btn-secondary" onclick="location.hash='#/'"><i class="fa-solid fa-chevron-left"></i> Back to Hub</button>
      </header>

      <div class="admin-grid">
        
        <!-- Category Panel -->
        <div class="admin-panel">
          <h2 class="admin-panel-title">${isEdit ? "Edit Category" : "Create Category"}</h2>
          <form id="cat-form" onsubmit="window.submitCategory(event, '${editCatId || ""}')">
            <div class="form-group">
              <label>Category Title</label>
              <input type="text" id="cat-title" required class="input-field" placeholder="e.g. Python" value="${catTitle}">
            </div>
            <div class="form-group">
              <label>Description</label>
              <input type="text" id="cat-desc" class="input-field" placeholder="Description visible on the hub card..." value="${catDesc}">
            </div>
            <div class="form-group">
              <label>FontAwesome Icon</label>
              <input type="text" id="cat-icon" required class="input-field" placeholder="e.g. fa-brands fa-python" value="${catIcon}">
            </div>
            <div class="form-group">
              <label>Theme Color</label>
              <input type="color" id="cat-color" class="input-field color-field" value="${catColor}">
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 16px;">
              <button type="submit" class="btn-primary" style="flex: 1;" id="cat-submit-btn">
                ${isEdit ? "Save Changes" : "Create Category"}
              </button>
              ${isEdit ? `<button type="button" class="btn-secondary" onclick="location.hash='#/admin'">Cancel Edit</button>` : ""}
            </div>
            <div id="cat-res" class="admin-res"></div>
          </form>
        </div>

        <!-- Document Panel -->
        <div class="admin-panel">
          <h2 class="admin-panel-title">Add New Document</h2>
          <form id="doc-form" onsubmit="window.submitNewDoc(event)">
            <div class="form-group">
              <label>Target Category</label>
              <select id="doc-cat" required class="input-field">${catOptions}</select>
            </div>
            <div class="form-group">
              <label>Document Title</label>
              <input type="text" id="doc-title" required class="input-field" placeholder="e.g. Next.js App Router">
            </div>
            <div class="form-group">
              <label>Subtitle / Details</label>
              <input type="text" id="doc-sub" class="input-field" placeholder="e.g. Advanced routing mechanisms">
            </div>
            <div class="form-group">
              <label>FontAwesome Icon</label>
              <input type="text" id="doc-icon" required class="input-field" value="fa-solid fa-file-code">
            </div>
            <div class="form-group">
              <label>File Path (will be created)</label>
              <input type="text" id="doc-file" required class="input-field" placeholder="e.g. docs/nextjs.json">
            </div>
            <div class="form-group">
              <label>Initial Template Sections</label>
              <input type="number" id="doc-sections" required min="1" max="20" class="input-field" value="3">
            </div>
            
            <button type="submit" class="btn-primary" style="width: 100%; margin-top: 16px;" id="submit-btn" ${!libraryData.categories.length ? "disabled" : ""}>
              Create Document
            </button>
            <div id="admin-res" class="admin-res"></div>
          </form>
        </div>
      </div>
    </div>
  `;
}

window.submitCategory = async function (e, existingId) {
  e.preventDefault();
  const btn = document.getElementById("cat-submit-btn");
  const resDiv = document.getElementById("cat-res");
  btn.disabled = true;
  btn.textContent = "Saving...";

  const title = document.getElementById("cat-title").value.trim();
  const description = document.getElementById("cat-desc").value.trim();
  const icon = document.getElementById("cat-icon").value.trim();
  const color = document.getElementById("cat-color").value;

  try {
    if (existingId) {
      // Edit
      const cat = libraryData.categories.find((c) => c.id === existingId);
      if (cat) {
        cat.title = title;
        cat.description = description;
        cat.icon = icon;
        cat.color = color;
      }
    } else {
      // Create
      const id = generateId(title);
      // Ensure ID is unique
      if (libraryData.categories.find((c) => c.id === id)) {
        throw new Error(`A category with a similar name already exists.`);
      }
      libraryData.categories.push({
        id,
        title,
        description,
        icon,
        color,
        docs: [],
      });
    }

    const res = await fetch("/api/save-library", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(libraryData),
    });

    const text = await res.text();
    let out;
    try {
      out = text ? JSON.parse(text) : {};
    } catch (e) {
      throw new Error("Server returned an invalid response (not JSON).");
    }

    if (!out.success && !res.ok)
      throw new Error(out.error || "Failed to save category");

    resDiv.innerHTML = `<span style="color:#22c55e"><i class="fa-solid fa-check"></i> Successfully saved! Reloading...</span>`;
    setTimeout(() => {
      location.hash = "#/";
      location.reload();
    }, 1500);
  } catch (err) {
    resDiv.innerHTML = `<span style="color:#ef4444"><i class="fa-solid fa-xmark"></i> ${err.message}</span>`;
    btn.disabled = false;
    btn.textContent = existingId ? "Save Changes" : "Create Category";
  }
};

window.submitNewDoc = async function (e) {
  e.preventDefault();
  const btn = document.getElementById("submit-btn");
  const resDiv = document.getElementById("admin-res");
  btn.disabled = true;
  btn.textContent = "Creating...";

  const catId = document.getElementById("doc-cat").value;
  const title = document.getElementById("doc-title").value;
  const sub = document.getElementById("doc-sub").value;
  const icon = document.getElementById("doc-icon").value;
  const file = document.getElementById("doc-file").value;
  const sectionsCount = parseInt(
    document.getElementById("doc-sections").value,
    10,
  );

  const template = {
    title,
    subtitle: sub,
    icon,
    sections: Array.from({ length: sectionsCount }).map((_, i) => ({
      title: `Section ${i + 1}`,
      icon: "fa-solid fa-bookmark",
      blocks: [{ type: "text", content: "Write content here..." }],
    })),
  };

  try {
    let res = await fetch("/api/save-document", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ file, content: template }),
    });
    let out = await res.json();
    if (!out.success) throw new Error(out.error);

    const catIndex = libraryData.categories.findIndex((c) => c.id === catId);
    if (catIndex > -1) {
      if (!libraryData.categories[catIndex].docs)
        libraryData.categories[catIndex].docs = [];
      libraryData.categories[catIndex].docs.push({
        file,
        title,
        subtitle: sub,
        icon,
        sections: sectionsCount,
      });

      res = await fetch("/api/save-library", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(libraryData),
      });
      out = await res.json();
      if (!out.success) throw new Error(out.error);
    }

    resDiv.innerHTML = `<span style="color:#22c55e"><i class="fa-solid fa-check"></i> Successfully created! Reloading...</span>`;
    setTimeout(() => {
      location.hash = "#/";
      location.reload();
    }, 1500);
  } catch (err) {
    resDiv.innerHTML = `<span style="color:#ef4444"><i class="fa-solid fa-xmark"></i> ${err.message}</span>`;
    btn.disabled = false;
    btn.textContent = "Create Document";
  }
};
