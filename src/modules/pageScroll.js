const pageScroll = () => {
    const body = document.querySelector('body'),
        servPosition = document.querySelector('#services').getBoundingClientRect().top,
        chevronUp = document.querySelector('.up');

        chevronUp.style.display = 'none';

    window.addEventListener('scroll', () => {
        if((servPosition - 20) > pageYOffset){

            chevronUp.style.display = 'none';

        }else if((servPosition - 20) < pageYOffset){

            chevronUp.style.display = 'block';

        }
    });

    body.addEventListener('click', (event) => {
        // event.preventDefault();
        let target = event.target;
        if(target.closest('ul>li>a')){

            let link = target.getAttribute('href').substring(1);
            const scrollTo = document.getElementById(link);
            const elemPosition = scrollTo.getBoundingClientRect().top;

            window.scrollBy({
                top: elemPosition,
                behavior: "smooth"
            });
        }else if(target === chevronUp){
            window.scrollBy({
                top: -pageYOffset,
                behavior: "smooth"
            });

        }
    });

}

export default pageScroll;