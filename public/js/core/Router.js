import { renderHub } from "../views/HubView.js";
import { renderCategoryView } from "../views/CategoryView.js";
import { renderAdmin } from "../views/AdminView.js";

export function getRoute() {
  const hash = location.hash || "#/";
  if (hash.startsWith("#/admin")) {
    const params = new URLSearchParams(hash.split("?")[1] || "");
    return { view: "admin", editCat: params.get("editCat") };
  }
  // #/cat/{id}/{file}
  const catDocMatch = hash.match(/^#\/cat\/([^/]+)\/(.+)$/);
  if (catDocMatch)
    return { view: "catdoc", catId: catDocMatch[1], file: catDocMatch[2] };
  // #/cat/{id}
  const catMatch = hash.match(/^#\/cat\/([^/]+)$/);
  if (catMatch) return { view: "cat", catId: catMatch[1] };
  return { view: "hub" };
}

export function navigate() {
  const route = getRoute();

  // Attempt scroll restoration for the "Back" button experience
  const savedScroll = sessionStorage.getItem(`scroll_${location.hash}`);

  switch (route.view) {
    case "hub":
      renderHub();
      break;
    case "cat":
      renderCategoryView(route.catId, null);
      break;
    case "catdoc":
      renderCategoryView(route.catId, route.file);
      break;
    case "admin":
      renderAdmin(route.editCat);
      break;
  }

  // Restore scroll after rendering if available, otherwise scroll to top
  if (savedScroll && route.view !== "catdoc") {
    window.scrollTo(0, parseInt(savedScroll, 10));
  } else if (!savedScroll) {
    window.scrollTo(0, 0);
  }
}

export function initRouter() {
  window.addEventListener("scroll", () => {
    // Save scroll position for the current hash to make the 'Back' button feel native
    sessionStorage.setItem(`scroll_${location.hash}`, window.scrollY);
  });

  window.addEventListener("hashchange", navigate);
}
