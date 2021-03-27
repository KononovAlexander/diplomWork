const carousel = () => {
    const carousel = document.querySelector('.services-carousel'),
    slider = document.querySelector('.services-elements'),
    slides = carousel.querySelectorAll('.col-sm-6'),
    arrows = document.querySelector('.services-arrow'),
    slideCount = 3,
    sliderWidth = window.getComputedStyle(slider).getPropertyValue('width').replace(/[px]/g, ''),
    slideWidth = `${(+sliderWidth / 100) * slideCount * 10}px`;

    
    let counter = slides.length,
    scroll = 0, 
    step = (+sliderWidth / 100) * slideCount * 10;
    console.log('counter: ', counter);
    scroll = (scroll - step - 45) * counter;
    console.log('scroll: ', scroll);
    
    slider.style.overflowX = 'hidden';
    carousel.style.display = 'flex';
    carousel.style.transition = '.3s';

    slides.forEach((slide) => {
        slide.querySelector('.title-h5').style.width = slideWidth;
        carousel.append(slide.cloneNode(true));
        carousel.style.transform = `translateX(${scroll}px)`
    });
    

    const loop = (index) => {

        if(index === 0){
            console.log('index: ', index);
            slides.forEach(slide => carousel.prepend(slide));
            counter = slides.length;
            // slides.length
            // console.log('slides.length: ', counter);
        }else if(index === slides.length + slideCount){
            console.log('index: ', index);
            carousel.append(slides[index - slideCount ]);
            console.log('index - slideCount: ', index - slideCount);
            counter = slides.length - 1;
        }
    }

    arrows.addEventListener('click', (event) => {
        let target = event.target;

        if(target.closest('.arrow-right')){
            scroll = scroll - step - 45; 
            carousel.style.transform = `translateX(${scroll}px)`;
            counter++;
            console.log('counter: ', counter);
            loop(counter);
        }else if(target.closest('.arrow-left')){
            scroll = scroll + step + 45; 
            carousel.style.transform = `translateX(${scroll}px)`;
            counter--;
            console.log('counter: ', counter);
            loop(counter);
        }
    });

}

export default carousel;