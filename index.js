const openBtn = document.getElementById("open-modal");
const overlayEl = document.getElementById("overlay");
const closeBtn = document.getElementById("close-modal");

openBtn.addEventListener("click", function () {
  overlayEl.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  overlayEl.style.display = "none";
});
