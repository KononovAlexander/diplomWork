const sendForm = () => {

const forms = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input[type="submit"]'),
    responseMessage = document.getElementById('responseMessage'),
    btnsClose = document.querySelector('.fancyClose'),
    
    p = document.createElement('p'),
    statusMessage = 'Идет отправка!',
    successMessage = 'Отправлено!',
    errorMessage = 'Ошибка!';
    
    responseMessage.querySelector('.modal-content').append(p);
    responseMessage.classList.add('modal-callback');

    btnsClose.addEventListener('click', () => {
        responseMessage.style.display = 'none';
        document.querySelector('.modal-overlay').style.display = 'none';
    });

const postData = (body, item) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {

        if(request.readyState !== 4){
             p.textContent = statusMessage;
             hideModal(item);
            return;
        }

        if(request.status === 200){

            p.textContent = successMessage; 
            hideModal(item);
        }else{

            p.textContent = errorMessage;
            hideModal(item);
        }
    });

    request.open('POST', './server.php', true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.send(JSON.stringify(body));
    
};

forms.forEach((form) => {
    form.addEventListener('click', (event) => {
        // event.preventDefault();
        let target = event.target;
        if(target.matches('input[type="submit"]')){

            const formData = new FormData(form);
            let body = {};
            
            formData.forEach((val, key) => {
                body[key] = val;
            });
            postData(body, form);
            responseMessage.style.display = 'block';
            
        }
    });
});

const hideModal = (elem) => {
    let link = elem.getAttribute('name').split('-').pop();
    document.getElementById(link).style.display = 'none';
    
}



}

export default sendForm;