document.addEventListener("DOMContentLoaded", function() {
    const scrollContent = document.querySelector('.scroll-content');
    const images = Array.from(scrollContent.children);
    const navContainer = document.querySelector('.scroll-navigation');

    // Crear puntos de navegación
    images.forEach((_, index) => {
        const button = document.createElement('button');
        button.addEventListener('click', () => scrollToImage(index));
        navContainer.appendChild(button);
    });

    // Inicializar primer punto activo
    navContainer.children[0].classList.add('active');

    let currentIndex = 0;
    const imageCount = images.length;
    let intervalId;

    function scrollToImage(index) {
        if (index < 0 || index >= imageCount || index === currentIndex) return;
        currentIndex = index;
        scrollContent.style.transform = `translateX(-${index * 100}%)`;

        // Actualizar el punto activo
        Array.from(navContainer.children).forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });

        // Reiniciar el temporizador
        clearInterval(intervalId);
        startAutoScroll();
    }

    function startAutoScroll() {
        intervalId = setInterval(() => {
            const nextIndex = (currentIndex + 1) % imageCount;
            scrollToImage(nextIndex);
        }, 5000); // Cambiar de imagen cada 10 segundos
    }

    startAutoScroll();
});
