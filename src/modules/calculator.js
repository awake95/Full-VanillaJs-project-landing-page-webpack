const calculator = (price1 = 10000, price2 = 15000) => {

    const accordion = document.querySelector('#accordion'),
        switchOne = document.querySelector('#myonoffswitch'),
        switchTwo = document.querySelector('#myonoffswitch-two'),
        secondBox = document.querySelectorAll('.second-box'),
        calcResult = document.querySelector('#calc-result'),
        diametr = document.querySelector('.diametr'),
        diametrTwo = document.querySelector('.diametr2'),
        quantity = document.querySelector('.quantity'),
        quantityTwo = document.querySelector('.quantity2');


    let sum = price1;
    calcResult.value = sum;

    const calc = () => {

        let diametrValOne = diametr.options[diametr.selectedIndex].value,
            diametrValTwo = diametrTwo.options[diametrTwo.selectedIndex].value,
            quantityValOne = quantity.options[quantity.selectedIndex].value,
            quantityValTwo = quantityTwo.options[quantityTwo.selectedIndex].value;


        let boxFloor,
            totalPrice1,
            totalPrice2;

        if (diametrValOne && quantityValOne) {
            totalPrice1 = (price1 * quantityValOne * diametrValOne);
            totalPrice2 = (price2 * quantityValTwo * diametrValTwo * quantityValOne * diametrValOne);

            if (switchTwo.checked) {
                boxFloor = 0;
                if (!switchOne.checked) {
                    boxFloor += 2000;
                } else {
                    boxFloor = 1000;
                }

            } else {
                boxFloor = 0;
            }

            if (switchOne.checked) {
                sum = totalPrice1 + boxFloor;
            } else {
                sum = totalPrice2 + boxFloor;
            }
        } else {
            sum = price1;
        }
        calcResult.value = sum;
    };

    secondBox.forEach((item) => {
        item.style.display = 'none';
    });

    const switchType = () => {
        if (switchOne.checked) {
            secondBox.forEach((elem) => {
                elem.style.display = 'none';
                quantityTwo.options[0].setAttribute('selected', 'selected');
                diametrTwo.options[0].setAttribute('selected', 'selected');
                elem.setAttribute('disabled', 'disabled');
            });
        } else {
            secondBox.forEach((elem) => {
                elem.style.display = 'inline-block';
                elem.removeAttribute('disabled', 'disabled');
            });
        }
    };

    accordion.addEventListener('change', (event) => {
        let target = event.target;

        if (target.matches('select') || target.matches('input')) {
            calc();
            switchType();
        }
    });
}
export default calculator;