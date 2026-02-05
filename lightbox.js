const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".lightbox-img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

closeBtn.onclick = close;
lightbox.onclick = (e) => {
  if (e.target === lightbox) close();
};
document.onkeydown = (e) => {
  if (e.key === "Escape") close();
};

function close() {
  lightbox.classList.add("hidden");
  lightboxImage.src = "";
}
