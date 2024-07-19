const observedDiv = document.querySelectorAll('section');
document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showAnime');
            } 
            else{
                entry.target.classList.remove('showAnime')
            }
        });
    });
    
    observedDiv.forEach((di) => observer.observe(di))
});

