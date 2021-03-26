const formValidate = () => {

    const inputs = document.querySelectorAll('input');

    inputs.forEach((input) => {
        input.addEventListener('input', (event) => {
            let target = event.target;

            if(target.matches('input[name="fio"]')){
                console.log('target: ', target);

                target.value = target.value.replace(/[~_&a-zA-Z0-9=+()*?:;№"!%$#@^<>/"']/g, '');

            }else if(target.matches('input[name="tel"]')){
                console.log('target: ', target);

                target.value = target.value.replace(/[-$%&*()~``|\=?/{}^#@"'<>!.:;,A-Za-zа-яА-ЯЁё]/g, '');

            }
        });

    });

}

export default formValidate;