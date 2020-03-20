const accordeon = () => {

    const questions = document.querySelector('.questions'),
        panelHeading = document.querySelectorAll('.panel-heading'),
        collapse = document.querySelectorAll('.collapse');

    questions.addEventListener('click', (e) => {
        let target = e.target;
        target = target.closest('.panel-heading');
        if (target) {
            panelHeading.forEach((item, i) => {
                if (item === target) {
                    collapse[i].classList.add('in');
                } else {
                    collapse[i].classList.remove('in');
                }
            });
        }
    });
}
export default accordeon;