function ratingStars(elem) {
    const rating = document.querySelector(`[data-rating="${elem}"]`);
    if (!rating) return;
    const ratingInput = rating?.querySelector('[data-rating-input]');
    const starItem = rating?.querySelectorAll('[data-value]');
    rating.addEventListener('click', (event) => {
        const currentStar = event.target.closest('[data-value]');
        const currentStarNextElement = event.target.closest('[data-value]')?.nextElementSibling;
        if (currentStar) {
            if (!currentStar.classList.contains('active')) {
                starItem.forEach(star => star.classList.remove("active"));
                currentStar.classList.add('active');
                ratingInput.value = currentStar.dataset.value;
                if (currentStarNextElement && currentStarNextElement?.classList.contains('active')) {
                    currentStarNextElement?.classList.remove('active');
                    ratingInput.value = currentStarNextElement?.dataset.value;
                }
            } else {
                currentStar.classList.remove('active');
                ratingInput.value = "";
                if (currentStarNextElement && !currentStarNextElement?.classList.contains('active')) {
                    currentStarNextElement?.classList.add('active');
                    ratingInput.value = currentStarNextElement?.dataset.value;
                }
            }
        }
    })
};
ratingStars("first");