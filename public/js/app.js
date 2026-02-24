/**
 * Synapse Library — Multi-Document SPA
 * Modular Entrypoint
 */

import { loadState } from "./core/State.js";
import { initRouter } from "./core/Router.js";

// Pre-load components to attach global event handlers onto `window`
import "./core/Storage.js";
import "./components/Sidebar.js";
import "./views/HubView.js";
import "./views/AdminView.js";

document.addEventListener("DOMContentLoaded", async () => {
  await loadState();
  initRouter();
  // Trigger initial route
  window.dispatchEvent(new Event("hashchange"));
});
