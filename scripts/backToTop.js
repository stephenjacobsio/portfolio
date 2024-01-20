const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', toggleBackToTopButton);

function toggleBackToTopButton() {
    const displayThreshold = 100;
    
    if (window.pageYOffset > displayThreshold) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
