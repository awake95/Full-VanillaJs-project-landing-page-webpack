const validator = () => {

    const allInput = document.querySelector('body');

    const checkInput = event => {
        const target = event.target;
        if (target.matches('.phone-user')) {
            target.value = target.value.replace(/[^0-9+]/g, '');
        }
        if (target.matches('[name=user_name]')) {
            target.value = target.value.replace(/[^а-яА-Я]/g, '');
        }
    };

    allInput.addEventListener('input', checkInput);

}
export default validator;