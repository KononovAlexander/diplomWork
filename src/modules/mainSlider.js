const mainSlider = () => {
    const slider = document.querySelector('.top-slider'),
        slides = slider.querySelectorAll('.item'),
        text = slider.querySelectorAll('.table'),
        ul = document.createElement('ul');

        let currentSlide = 0,
            interval;

        slider.appendChild(ul);
        ul.classList.add('slick-dots');
        ul.style.zIndex = '10';

        const addDots = () => {
        
            slides.forEach(() => {
                const li = document.createElement('li');
                ul.appendChild(li);
            });
            return ul.querySelectorAll('.slick-dots>li');
        }

        const textVisible = (index) => {
            text[index].classList.add('active');

        }

        const dots = addDots(); 
        
        const dotsActive = (index) => {
            dots.forEach(dot => dot.classList.remove('slick-active'));
            dots[index].classList.add('slick-active');
        }

        const clearSlider = () => slides.forEach(slide => slide.style.display = 'none');

        const nextSlide = (index) =>{
            slides[index].style.display ='block';
            dotsActive(index);
            textVisible(index);
            currentSlide++;
        }

        const targetSlide = (index) =>{
            stopSlider();
            clearSlider();
            slides[index].style.display ='block';
            currentSlide = index;
            dotsActive(index);
            startSlider();           
        }
            
        const autoplay = () => {
            if(currentSlide >= slides.length){
                currentSlide = 0;
                nextSlide(currentSlide);
                dotsActive(0);
            }else{
                clearSlider();
                nextSlide(currentSlide);   
            }  
        }

        ul.addEventListener('click', (event) => {
            let target = event.target;
            if(!target.classList.contains('slick-active')){
                dots.forEach((dot, key) => {
                   if( dot === target){ 
                       targetSlide(key);    
                   }  
                });   
            }
        });

        const startSlider = (time = 3000) => {
            interval = setInterval(autoplay, time);
        };

        const stopSlider = () => {
            clearInterval(interval);
        };
        nextSlide(0);
        dotsActive(0);
        startSlider();
}

export default mainSlider;