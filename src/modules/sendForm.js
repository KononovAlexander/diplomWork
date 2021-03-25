const sendForm = () => {
const forms = document.querySelectorAll('form');

     const postData = (requestBody) => {

        return fetch('./server.php', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(requestBody),
            credentials: 'include'
            
        });

    };

forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
        // event.preventDefault();
        console.log(1);
        let target = event.target;
        console.log('target: ', target);

        const formData = new FormData(target);
        let body = {};  
        formData.forEach((val, key) => {
            if(val){
                body[key] = val;
            }
            console.log('body: ', body);
        });
        // postData(body)
        // .then((response) => {
 
        //     if(response.status !== 200){
        //         throw new Error('network status is not 200');
        //     }
        //     showMessage(target, successMessage, 3000);
            
        // });
    });
});

}

export default sendForm;