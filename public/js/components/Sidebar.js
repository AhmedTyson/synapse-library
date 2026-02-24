window.toggleSidebar = function () {
  const sb = document.getElementById("sidebar");
  const ov = document.getElementById("sidebar-overlay");
  if (sb) sb.classList.toggle("open");
  if (ov) ov.classList.toggle("open");
};

window.closeSidebar = function () {
  const sb = document.getElementById("sidebar");
  const ov = document.getElementById("sidebar-overlay");
  if (sb) sb.classList.remove("open");
  if (ov) ov.classList.remove("open");
};
