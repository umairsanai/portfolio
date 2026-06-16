document.addEventListener("DOMContentLoaded", () => {
    // Select all project cards
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", () => {
            // Retrieve the URL from the data-url attribute
            const targetUrl = card.getAttribute("data-url");
            
            if (targetUrl) {
                // Open the GitHub repository in a new tab
                window.open(targetUrl, '_blank', 'noopener,noreferrer');
            }
        });
    });

    // Optional: Smooth scrolling for nav links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'                
            });
        });
    });
});