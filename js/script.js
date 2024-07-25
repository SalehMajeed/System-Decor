
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textContents = [
        "ARCHITECTURAL",
        "ACOUSTIC",
        "SOLUTIONS"
    ];

    textContents.forEach((text, index) => {
        const container = document.getElementById(`text${index + 1}`);
        const letters = text.split('');
        const middleIndex = Math.floor(letters.length /2);

        letters.forEach((letter, letterIndex) => {
            const span = document.createElement('span');
            span.classList.add('letter');
            span.innerText = letter;
            const distanceFromMiddle = Math.abs((letterIndex - middleIndex)/2);
            span.style.transitionDelay = `${distanceFromMiddle * 0.3}s`;
            container.appendChild(span);
        });
    });

    setTimeout(() => {
        const letters = document.querySelectorAll('.letter');
        letters.forEach((letter) => {
            letter.classList.add('animate');
        });
    }, 100); // Start animation after a brief delay
});
