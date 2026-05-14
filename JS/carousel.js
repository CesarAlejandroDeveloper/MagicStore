// carousel.js

const contenedor = document.querySelector('.mana-carousel-container');
const paneles = document.querySelectorAll('.mana-panel');

// 1. Cuando entras a un panel específico
paneles.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        removerClasesActivas();
        panel.classList.add('active');
    });
});

// 2. NUEVO: Cuando sacas el mouse de todo el carrusel
contenedor.addEventListener('mouseleave', () => {
    removerClasesActivas();
});

function removerClasesActivas() {
    paneles.forEach(panel => {
        panel.classList.remove('active');
    });
}
