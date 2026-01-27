document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(".section");

    const revealSection = () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            const trigger = window.innerHeight * 0.85;

            if (top < trigger) {
                section.classList.add("visible");

                const cards = section.querySelectorAll(".card");
                cards.forEach((card, i) => {
                    setTimeout(() => {
                        card.classList.add("show-card");
                    }, i * 150);
                });
            }
        });
    };

    revealSection();
    window.addEventListener("scroll", revealSection);

});
