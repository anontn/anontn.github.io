document.addEventListener('DOMContentLoaded', function() {
    const sliderList = document.querySelector('.slider__list');
    const sliderItems = document.querySelectorAll('.slider__item');
    const totalItems = sliderItems.length;
    const currentSlideElem = document.getElementById('currentSlide');
    const totalSlidesElem = document.getElementById('totalSlides');
    const prevButton = document.querySelector('.slider__prev');
    const nextButton = document.querySelector('.slider__next');
    let currentIndex = 0;
    let slidesToShow = calculateSlidesToShow();

    totalSlidesElem.textContent = totalItems;

    function calculateSlidesToShow() {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 580) {
            return 1;
        } else if (windowWidth <= 1048) {
            return 2;
        } else {
            return 3;
        }
    }

    function calculateSlideWidth() {
        return sliderList.clientWidth / slidesToShow;
    }

    function updateSlider() {
        slidesToShow = calculateSlidesToShow();
        const slideWidth = calculateSlideWidth();
        sliderItems.forEach(item => item.style.width = `${slideWidth}px`);
        const visibleItems = Math.min(slidesToShow, totalItems);
        const offset = -currentIndex * slideWidth;
        const visibleOffset = (sliderList.clientWidth - (visibleItems * slideWidth)) / 2;
        sliderList.style.transform = `translateX(${offset + visibleOffset}px)`;
        updateCurrentSlide();
        updateButtonState(); 
    }

    function updateCurrentSlide() {
        currentSlideElem.textContent = `${currentIndex + slidesToShow}`;
    }

    function autoSlide() {
        if (currentIndex < totalItems - slidesToShow) {
            currentIndex++;
        } else {
            currentIndex = 0; 
        }
        updateSlider();
    }

    function updateButtonState() {
        if (prevButton) {
            if (currentIndex <= 0) {
                prevButton.classList.add('disabled');
                prevButton.classList.remove('active');
            } else {
                prevButton.classList.remove('disabled');
                prevButton.classList.add('active');
            }
        }

        if (nextButton) {
            if (currentIndex + slidesToShow >= totalItems) {
                nextButton.classList.add('disabled');
                nextButton.classList.remove('active');
            } else {
                nextButton.classList.remove('disabled');
                nextButton.classList.add('active');
            }
        }
    }

    setInterval(autoSlide, 4000);

    if (prevButton) {
        prevButton.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function () {
            if (currentIndex < totalItems - slidesToShow) {
                currentIndex++;
                updateSlider();
            }
        });
    }

    window.addEventListener('resize', updateSlider);

    updateSlider();
});


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.stages__list-small');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.slider__next');
    const prevButton = document.querySelector('.slider__prev');
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide) {
            moveToSlide(track, currentSlide, prevSlide);
        }
    });

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide) {
            moveToSlide(track, currentSlide, nextSlide);
        }
    });

    // Automatic slide
    let autoSlideInterval = setInterval(() => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling || slides[0];
        moveToSlide(track, currentSlide, nextSlide);
    }, 10000);

    // Pause automatic sliding on hover
    const slider = document.querySelector('.stages__container');
    slider.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
    slider.addEventListener('mouseout', () => {
        autoSlideInterval = setInterval(() => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling || slides[0];
            moveToSlide(track, currentSlide, nextSlide);
        }, 10000);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelector('.stages__list-small');
    const items = document.querySelectorAll('.stages__item-small');
    const prevBtn = document.querySelector('.slider__prev-stages');
    const nextBtn = document.querySelector('.slider__next-stages');
    const indicatorsContainer = document.querySelector('.slider__indicators');
    let currentIndex = 0;
  
    // Создание индикаторов
    items.forEach((_, index) => {
      const indicator = document.createElement('div');
      indicator.classList.add('slider__indicator');
      if (index === 0) {
        indicator.classList.add('slider__indicator--active');
      }
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
      indicatorsContainer.appendChild(indicator);
    });
  
    const indicators = document.querySelectorAll('.slider__indicator');
  
    function updateSlider() {
      const itemWidth = items[0].offsetWidth + 20; // ширина элемента + 20px
      const offset = -currentIndex * itemWidth;
      list.style.transform = `translateX(${offset}px)`;
      updateButtons();
      updateIndicators();
    }
  
    function updateButtons() {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === items.length - 1;
    }
  
    function updateIndicators() {
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('slider__indicator--active', index === currentIndex);
      });
    }
  
    prevBtn.addEventListener('click', function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  
    nextBtn.addEventListener('click', function () {
      if (currentIndex < items.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });
  
    updateSlider();
  });