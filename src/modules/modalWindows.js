const modalWindows = () => {

    const body = document.querySelector('body'),
        overlay = document.querySelector('.modal-overlay');
        
    const toggleModal = (elem) => {
        getComputedStyle(elem).display === 'block' ? elem.style.display = 'none' : 
        elem.style.display = 'block';
    }

    const betterModal = (item) => {
        const div = document.createElement('div');
        div.classList.add('modal-close');
        div.innerHTML = '<img src="images/close_icon_green.svg" alt="modal-close">';
        item.classList.add('modal-callback');
        item.append(div);
        
    }

    body.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        

        if(target.closest('.fancyboxModal')){
            const link = target.getAttribute('href').substring(1);
            const modal = document.getElementById(link);

            betterModal(modal);

            toggleModal(modal);
            toggleModal(overlay);
        }else if(target.closest('.modal-close') || target === overlay){     
            let elems = document.querySelectorAll('.modal-callback');

            elems.forEach(elem => getComputedStyle(elem).display === 'block' ? toggleModal(elem) :
            console.log(1));      
            toggleModal(overlay);
        }
    });
   
}

export default modalWindows;