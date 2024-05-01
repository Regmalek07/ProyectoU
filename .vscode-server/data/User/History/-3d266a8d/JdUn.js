document.addEventListener("DOMContentLoaded", function() {
    var scrollContainer = document.getElementById("scroll-container");
    var scrollContent = document.getElementById("scroll-content");
    var scrollItems = document.querySelectorAll(".scroll-item");
    var currentIndex = 0;
    var interval = setInterval(scrollNext, 5000); // Cambia de imagen cada 10 segundos

    function scrollNext() {
        currentIndex = (currentIndex + 1) % scrollItems.length;
        var scrollPosition = scrollItems[currentIndex].offsetLeft;
        scrollContainer.scrollLeft = scrollPosition;
    }

    // Detiene el desplazamiento automático cuando el cursor está sobre el contenedor
    scrollContainer.addEventListener("mouseenter", function() {
        clearInterval(interval);
    });

    // Reanuda el desplazamiento automático cuando el cursor sale del contenedor
    scrollContainer.addEventListener("mouseleave", function() {
        interval = setInterval(scrollNext, 5000);
    });
});

