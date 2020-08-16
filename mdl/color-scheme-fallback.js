var mql = window.matchMedia("(prefers-color-scheme: dark)");
function setDark(e) {
  document.body.id = (e.matches ? "dark" : "");
}
mql.addListener(setDark);
document.addEventListener("DOMContentLoaded", function() {
  setDark(mql);
});