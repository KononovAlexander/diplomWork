const modalWindows = () => {
    // const callBtns = document.querySelectorAll('.fancyboxModal'),
    // overlay = document.querySelector('.modal-overlay'),
    // modal = document.querySelector('#callback');

    // modal.addEventListener('click', (event) => {
    //     let target = event.target;
    //     if(target.closest('.modal-close')  || target.matches('.modal-overlay')){
    //         modal.style.display = 'none';
    //         overlay.style.display = 'none'; 
    //     }
    // });
  
    // callBtns.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         modal.style.display = 'block';
    //         overlay.style.display = 'block';    
    //     });
    // });

    const body = document.querySelector('body'),
        overlay = document.querySelector('.modal-overlay'),
        modal = document.querySelector('#callback');

    body.addEventListener('click', (event) => {
        let target = event.target;

        if(target.closest('.fancyboxModal')){
            modal.style.display = 'block';
            overlay.style.display = 'block';
        }else if(target.closest('.modal-close') || target === overlay){
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }
    });
   

}

export default modalWindows;