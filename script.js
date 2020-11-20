{
    let slidePosition = 0;
    const slides = document.querySelectorAll(".opinions__carouselElement");
    const totalSlides = slides.length;
    const nextButton = document.querySelector(".carousel__button--next");
    const prevButton = document.querySelector(".carousel__button--previous");

    const updateSlidePosition = () => {
        for(let slide of slides) {
            slide.classList.remove("opinions__carouselElement--visible");
            slide.classList.add("opinions__carouselElement--hidden");
        };

        slides[slidePosition].classList.add("opinions__carouselElement--visible");
    };

    const moveToNextSlide = () => {
        if(slidePosition === totalSlides - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        };
        updateSlidePosition();
    };

    
    const moveToPreventSlide = () => {
        if(slidePosition === 0) {
            slidePosition = totalSlides - 1;
        } else {
            slidePosition--;
        };
        updateSlidePosition();
    };
    
    setInterval(moveToNextSlide, 10000)
    nextButton.addEventListener("click", moveToNextSlide);
    prevButton.addEventListener("click", moveToPreventSlide);
}