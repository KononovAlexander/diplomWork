const carousel = () => {
    const carousel = document.querySelector('.services-carousel'),
    slider = document.querySelector('.services-elements'),
    slides = carousel.querySelectorAll('.col-sm-6'),
    arrows = document.querySelector('.services-arrow'),
    slideCount = 3,
    sliderWidth = slider.clientWidth,
    step = Math.floor(((sliderWidth + 5) / 100) * slideCount * 10),
    slideWidth = `${step}px`;


    
    let counter = slides.length,
    scroll = -(step + 45) * slides.length,
    newSlides;
    console.log('counter: ', counter);
    
    slider.style.overflowX = 'hidden';
    carousel.style.display = 'flex';
    carousel.style.transitionDuration = '.8s';

 
    
    slides.forEach((slide) => {
        slide.querySelector('.title-h5').style.width = slideWidth;
        carousel.append(slide.cloneNode(true));
        carousel.style.transform = `translateX(${scroll}px)`;
    });
    newSlides = carousel.querySelectorAll('.col-sm-6');

    console.log('newSlides: ', newSlides);
    
    const loopRight = () => {
        carousel.append(newSlides[0]);
        carousel.style.marginLeft = -step;
        newSlides = carousel.querySelectorAll('.col-sm-6');
    }
    const loopLeft = () => {
        carousel.prepend(newSlides[newSlides.length -1]);
        newSlides = carousel.querySelectorAll('.col-sm-6');
    }

    arrows.addEventListener('click', (event) => {
        let target = event.target;

        if(target.closest('.arrow-right')){
            // scroll = scroll - step - 45; 
            // carousel.style.transform = `translateX(${scroll}px)`;
            loopRight(scroll);

        }else if(target.closest('.arrow-left')){
            // scroll = scroll + step + 45; 
            // carousel.style.transform = `translateX(${scroll}px)`;
            loopLeft();
        }
    });

}

export default carousel