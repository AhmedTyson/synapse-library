export let libraryData = null;

export async function loadState() {
  try {
    const res = await fetch("/library.json");
    libraryData = await res.json();
    if (!libraryData.categories) libraryData.categories = [];
  } catch (e) {
    document.getElementById("app-root").innerHTML =
      '<div class="error-message"><i class="fa-solid fa-circle-exclamation"></i> Failed to load library.json</div>';
    throw e;
  }
}

export function setLibraryData(data) {
  libraryData = data;
}
