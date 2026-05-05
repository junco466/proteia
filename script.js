// BOTÓN PRINCIPAL
function empezar() {
    const hero = document.querySelector(".hero");

    const mensaje = document.createElement("h3");
    mensaje.textContent = "Tu cambio empieza hoy";
    
    hero.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}

// LOGIN
document.getElementById("loginBtn").addEventListener("click", () => {
    const nombre = prompt("Ingresa tu nombre:");
    
    if (nombre) {
        alert("Bienvenido " + nombre );
    }
});



// EFECTO NAVBAR
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.background = "#010828";
    } else {
        nav.style.background = "transparent";
    }
});

// ANIMACIÓN AL HACER SCROLL
const secciones = document.querySelectorAll(".seccion");

window.addEventListener("scroll", () => {
    secciones.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;

        if (pos < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

// ESTADO INICIAL ANIMACIÓN
secciones.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "1s";
});