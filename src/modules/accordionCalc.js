const accordionCalc = () => {

    const panelGroup = document.querySelectorAll('.panel-group'),
        panelHeading = document.querySelectorAll('.panel-heading'),
        collapse = document.querySelectorAll('.collapse'),
        constructBtn = document.querySelectorAll('.construct-btn');


    panelGroup.forEach((element) => {
        element.addEventListener('click', (event) => {

            let target = event.target;
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

            let newTarget = event.target;
            newTarget = newTarget.closest('.construct-btn')

            if (newTarget) {
                constructBtn.forEach((item, i) => {
                    if (item === newTarget) {
                        collapse[i + 1].classList.add('in');
                        collapse[i].classList.remove('in');
                    }
                });
            }
        });
    })
}
export default accordionCalc;