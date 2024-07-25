document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('show');
        }, index * 100);
    });
});