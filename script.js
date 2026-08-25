document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const primaryNavigation = document.querySelector("#primary-navigation");

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
        primaryNavigation.classList.toggle("is-open", !isOpen);
    });

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

            if (primaryNavigation.classList.contains("is-open")) {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation menu");
                primaryNavigation.classList.remove("is-open");
            }
        });
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && primaryNavigation.classList.contains("is-open")) {
            menuToggle.click();
        }
    });
});
