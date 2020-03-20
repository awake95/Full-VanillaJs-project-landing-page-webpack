const newForm = () => {

    const switchOne = document.querySelector('#myonoffswitch'),
        switchTwo = document.querySelector('#myonoffswitch-two'),
        diametr = document.querySelector('.diametr'),
        diametrTwo = document.querySelector('.diametr2'),
        quantity = document.querySelector('.quantity'),
        quantityTwo = document.querySelector('.quantity2'),
        calcResult = document.querySelector('#calc-result');

    let diam1 = diametr.options[diametr.selectedIndex].text,
        diam2 = diametrTwo.options[diametrTwo.selectedIndex].text,
        quan1 = quantity.options[quantity.selectedIndex].text,
        quan2 = quantityTwo.options[quantityTwo.selectedIndex].text,
        distance = document.querySelector('.distance');

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        succesMesage = 'Спасибо! Мы скоро с Вами свяжемся!';

    const form = document.querySelector('#form5');
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        
        const formData = new FormData(form);
        let body = {};
        const cam = () => {
            if (switchOne.checked) {
                body['cam1'] = 'Однокамерный';
                body['diametr1'] = 'Диаметр: ' + diam1;
                body['quantity1'] = 'Количество: ' + quan1;

                if (switchTwo.checked) {
                    body['well1'] = 'С днищем';
                } else {
                    body['well2'] = 'Без днища';
                }
                body['distances'] = 'Расстояние: ' + distance.value + 'м';
                body['result'] = 'Итого: ' + calcResult.value;
            } else {
                body['cam2'] = 'Двукамерный';
                body['diametr1'] = 'Диаметр первого колодца: ' + diam1;
                body['quantity1'] = 'Количество: ' + quan1;
                body['diametr2'] = 'Диаметр второго колодца: ' + diam2;
                body['quantity2'] = 'Количество: ' + quan2;
                if (switchTwo.checked) {
                    body['well1'] = 'С днищем';
                } else {
                    body['well2'] = 'Без днища';
                }
                body['distances'] = 'Расстояние: ' + distance.value + 'м';
                body['result'] = 'Итого: ' + calcResult.value;

            }
            formData.forEach((val, key) => {
                body[key] = val;
            });

            const postData = (body) => {

                return fetch('./server.php', {
                    method: 'POST',
                    mode: 'same-origin',
                    cache: 'default',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'applicattion/json'
                    },
                    body: JSON.stringify(body)
                })
            };
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = succesMesage;
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                })
            setTimeout(() => {
                statusMessage.textContent = '';
                form.reset();
            }, 5000);
        }
        cam();
    });
};

export default newForm;