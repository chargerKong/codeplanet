document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.teacher-slider');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    prevButton.addEventListener('click', () => {
        slider.scrollBy({ left: -200, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        slider.scrollBy({ left: 200, behavior: 'smooth' });
    });
});
