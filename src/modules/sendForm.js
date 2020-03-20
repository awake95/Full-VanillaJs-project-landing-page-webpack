const sendForm = () => {
    const errorMessage = 'Ошибка';
    const successMessage = 'Форма отправлена успешно. Спасибо за заявку! ';
    const loadMessage = 'Загрузка';
    const statusMessage = document.createElement('div');
    const forms = document.querySelector('#form3');
    const forma = document.querySelectorAll('.forma');

    forma.forEach(elem => {
        elem.addEventListener('submit', (event) => {

            event.preventDefault();
    
            const formReset = () => {
                setTimeout(() => {
    
                    forms.reset();
    
                }, 5000);
            }
            formReset();
    
            if (event.target.classList.contains("director-form")) {
    
                const formData = new FormData(event.target);
                let data = JSON.stringify(Object.fromEntries(formData));
    
                let question = document.createElement("input");
                question.type = 'hidden';
                question.name = 'outer_data';
                question.value = data;
                document.querySelector('.popup-consultation').querySelector('#form7').prepend(question);
            } else {
                let buttons = event.target.querySelectorAll(".form-button-1");
                buttons.forEach(element => {
                    element.disabled = true;
                });
                event.target.appendChild(statusMessage);
                statusMessage.textContent = loadMessage;
    
                const formData = new FormData(event.target);
                let jsonData = {};
                for (const [key, value] of formData.entries()) {
                    jsonData[key] = key === 'outer_data' ? JSON.parse(value) : value;
                }
    
                statusMessage.style.display = 'block';
                fetch('server.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },
                        body: JSON.stringify(jsonData),
                    })
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error();
                        }
    
                        statusMessage.textContent = successMessage;
                        event.target.reset();
    
                    })
                    .catch((e) => {
                        statusMessage.textContent = errorMessage;
                    })
                    .finally(() => {
                        setTimeout(() => {
                            statusMessage.style.display = 'none';
                            buttons.forEach(element => {
                                element.disabled = false;
                            });
                        }, 3000);
                    });
            }
        });
    })

};
export default sendForm;