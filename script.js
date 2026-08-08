document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('[data-action="highlight"]');
    const cards = document.querySelectorAll('.card');

    if (button) {
        button.addEventListener('click', () => {
            cards.forEach((card, index) => {
                card.animate([
                    { transform: 'translateY(0px)', opacity: 1 },
                    { transform: 'translateY(-4px)', opacity: 0.95 },
                    { transform: 'translateY(0px)', opacity: 1 }
                ], {
                    duration: 400 + index * 120,
                    easing: 'ease-out'
                });
            });
        });
    }

    const year = new Date().getFullYear();
    const footer = document.querySelector('[data-year]');
    if (footer) footer.textContent = year;
});
