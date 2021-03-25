const accordeon = () => {
    const accordeon = document.querySelector('.accordeon'),
        elems = accordeon.querySelectorAll('.element');

        elems.forEach(elem => elem.classList.remove('active'));
        elems.forEach(elem => elem.querySelector('.element-content').style.display = 'none');

        

    accordeon.addEventListener('click', (event) => {
        let target = event.target;

        if(target.closest('.element')){
            elems.forEach(elem => elem !== target.parentNode ? elem.classList.remove('active') : elem.classList.toggle('active')
            );
        }
        hideText();
        showText(target.parentNode);
    });

    const showText = (item) => {
        item.classList.contains('active') ? item.querySelector('.element-content').style.display = 'block' :
        item.querySelector('.element-content').style.display = 'none';
    }

    const hideText = () => {
        elems.forEach(elem => elem.querySelector('.element-content').style.display = 'none');
    }

}

export default accordeon;