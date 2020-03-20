const buttonMore = () => {

    const addSentenceBtn = document.querySelector('.add-sentence-btn'),
        product = document.querySelectorAll('.product');

    const hidden = () => {
        for (let i = 0; i < product.length; i++) {
            product[i].classList.remove('hidden');
        }
        addSentenceBtn.style.display = 'none';
    }

    addSentenceBtn.addEventListener('click', hidden);

}
export default buttonMore;