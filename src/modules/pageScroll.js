const pageScroll = () => {
    const menu = document.querySelector('.top-menu'),
    chevronUp = document.querySelector('.up');

    menu.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if(target.closest('ul>li>a')){

            
            let link = target.getAttribute('href').substring(1);
            const scrollTo = document.getElementById(link);
            const elemPosition = scrollTo.getBoundingClientRect().top;
            
            window.scrollBy({
                top: elemPosition,
                behavior: "smooth"
            });

            
        }
    });

    chevronUp.addEventListener('click', () => {
        window.scrollBy({
            top: -pageYOffset,
            behavior: "smooth"
        });
    });

}

export default pageScroll;