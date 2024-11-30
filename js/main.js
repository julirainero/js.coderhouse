document.addEventListener("DOMContentLoaded", () => {
    const nameModal = new bootstrap.Modal(document.getElementById("nameModal"));
    nameModal.show(); 
  
    const userForm = document.getElementById("userForm");
  
    userForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const userName = document.getElementById("userName").value.trim();
      const userLastName = document.getElementById("userLastName").value.trim();
  
      if (userName && userLastName) {
        nameModal.hide(); 
  
        Swal.fire({
          icon: "success",
          title: "¡Hola " + userName + " " + userLastName + "!",
          text: "Bienvenid@ a NutricionistaYA",
          confirmButtonText: "Gracias",
        });
      } else {
 
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Por favor, completa ambos campos.",
        });
      }
    });
  });

//carrusel de fotos
let slideIndex = 0;

function mostrarSlide(index) {
    const slides = document.querySelectorAll('.carrusel-item');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    const carruselItems = document.querySelector('.carrusel-items');
    carruselItems.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function cambiarSlide(n) {
    mostrarSlide(slideIndex + n);
}
