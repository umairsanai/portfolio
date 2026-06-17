document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            const targetUrl = card.getAttribute("data-url");
            if (targetUrl) {
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            }
        });
    });

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'                
            });
        });
    });
});