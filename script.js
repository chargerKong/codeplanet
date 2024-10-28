document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const images = sliderContainer.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
        sliderContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    // 修改点击图片跳转功能
    images.forEach(img => {
        img.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) {
                window.location.href = target;
            }
        });
    });

    // 自动轮播
    setInterval(showNext, 5000);
});
