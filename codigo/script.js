const galleryImages = document.querySelectorAll(".trabajos-img");
const overlay = document.getElementById("overlay");
const overlayImage = document.getElementById("overlayImage");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    overlayImage.src = image.src;
    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});

const botonResponsive = document.querySelector(".boton-responsive");
const navUl = document.querySelector(".nav__ul");
const navItems = document.querySelectorAll(".nav__ul-li");

function menuDesplegable() {
  const esPantallaPequena = window.matchMedia("(max-width: 768px)").matches;
  if (esPantallaPequena) {
    const menuAbierto = navUl.classList.contains("menu-open");
    navItems.forEach((item) => {
      item.style.display = menuAbierto ? "none" : "block";
    });

    navUl.classList.toggle("menu-open");
  }
}

botonResponsive.addEventListener("click", menuDesplegable);
