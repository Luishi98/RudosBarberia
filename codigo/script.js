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

function cambiarImagenDerecha() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  mostrarImagenEnOverlay(currentImageIndex);
}

function cambiarImagenIzquierda() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  mostrarImagenEnOverlay(currentImageIndex);
}

antesButton.addEventListener("click", () => {
  event.stopPropagation();
  cambiarImagenIzquierda()
});

despuesButton.addEventListener("click", () => {
  event.stopPropagation();
  cambiarImagenDerecha()
});

galleryImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentImageIndex = index;
    mostrarImagenEnOverlay(currentImageIndex);
    overlay.classList.add("active");
  });
});
/*
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
});
*/

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.remove("active");
  }
});

// Evento touchstart para registrar el inicio del deslizamiento
overlay.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].clientX;
});

// Evento touchmove para determinar la dirección del deslizamiento
overlay.addEventListener("touchmove", (event) => {
  if (touchStartX !== null) {
    const touchX = event.touches[0].clientX;
    const touchDeltaX = touchX - touchStartX;

    if (touchDeltaX > 50) {
      cambiarImagenIzquierda();
      touchStartX = null;
    } else if (touchDeltaX < -50) {
      cambiarImagenDerecha();
      touchStartX = null;
    }
  }
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
