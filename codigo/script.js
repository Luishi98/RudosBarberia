//Ampliar imagenes
const galleryImages = document.querySelectorAll(".trabajos-img");
const overlay = document.getElementById("overlay");
const overlayImage = document.getElementById("overlayImage");

//Desplazarse por las imagenes

const antesButton = document.querySelector(".antes");
const despuesButton = document.querySelector(".despues");

let currentImageIndex = 0;

function mostrarImagenEnOverlay(index) {
  overlayImage.src = galleryImages[index].src;
}

antesButton.addEventListener("click", () => {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  mostrarImagenEnOverlay(currentImageIndex);
});

despuesButton.addEventListener("click", () => {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  mostrarImagenEnOverlay(currentImageIndex);
});

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentImageIndex = index;
    mostrarImagenEnOverlay(currentImageIndex);
    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});

//Boton del menu desplegable

const botonResponsive = document.querySelector(".boton-responsive");
const navUl = document.querySelector(".nav__ul");
const navItems = document.querySelectorAll(".nav__ul-li");

function menuDesplegable() {
  const esPantallaPequena = window.matchMedia("(max-width: 970px)").matches;
  if (esPantallaPequena) {
    const menuAbierto = navUl.classList.contains("menu-open");
    navItems.forEach((item) => {
      item.style.display = menuAbierto ? "none" : "block";
    });

    navUl.classList.toggle("menu-open");
  }
}

botonResponsive.addEventListener("click", menuDesplegable);
