const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.querySelector(".lightbox-close");

document.querySelectorAll(".lightbox-img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightboxImage.src = "";
}

closeBtn.onclick = closeLightbox;
lightbox.onclick = (e) => e.target === lightbox && closeLightbox();
document.onkeydown = (e) => e.key === "Escape" && closeLightbox();
