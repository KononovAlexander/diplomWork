const formValidate = () => {

    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
        input.addEventListener('input', (event) => {
            let target = event.target;

            if(target.matches('input[name="fio"]')){

                target.value = target.value.replace(/[~_&a-zA-Z0-9=+()*?:;№"!%$#@^<>/"']/g, '');

            }else if(target.matches('input[name="tel"]')){

                target.value = target.value.replace(/[-$%&*()~``|\=?/{}^#@"'<>!.:;,A-Za-zа-яА-ЯЁё]/g, '');
                let num = target.value.split();

                if(num[0] === '+7') {
                    target.setAttribute('maxlength', 12);
                }else if(num[0] === '8') {
                    target.setAttribute('maxlength', 11);
                } 
            }
        });

    });

}

export default formValidate;