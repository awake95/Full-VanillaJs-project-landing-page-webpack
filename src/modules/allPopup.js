const allPopup = () => {

    // form-validator-popup
    const inputs = document.querySelectorAll('.required')

    const blockInput = () => {
        inputs.forEach((e) => {
            e.setAttribute('required', '');
        });
    };
    const removeAttributes = () => {
        inputs.forEach((e) => {
            e.removeAttribute('required', '');
        });
    };

    //call-popup

    const popupCall = () => {

        const popupCall = document.querySelector('.popup-call'),
            callBtn = document.querySelectorAll('.call-btn');

        const openPopup = () => {
            popupCall.style.display = 'block';
            blockInput();

            popupCall.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('popup-close')) {
                    event.preventDefault();
                    popupCall.style.display = 'none';
                    removeAttributes();
                } else {
                    target = target.closest('.popup-content');

                    if (!target) {
                        popupCall.style.display = 'none';
                    }
                }
            });
        }
        callBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupCall.style.display = 'block';
                openPopup();
            });
        });
    }
    popupCall();

    //discount-popup

    const discountPopup = () => {
        const discountBtn = document.querySelectorAll('.discount-btn'),
            popupDiscount2 = document.querySelector('.popup-discount2');
           

        const openPopup = () => {
            popupDiscount2.style.display = 'block';
            blockInput();

            popupDiscount2.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('popup-close')) {
                    event.preventDefault();
                    popupDiscount2.style.display = 'none';
                    removeAttributes();
                } else {
                    target = target.closest('.popup-content');

                    if (!target) {
                        popupDiscount2.style.display = 'none';
                    }
                }
            });
        }
        discountBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupDiscount2.style.display = 'block';
                openPopup();
            });
        });
    }
    discountPopup();

    const discountPopup2 = () => {
       const popupDiscount = document.querySelector('.popup-discount'),
        constructBtn = document.querySelectorAll('.calc-btn');

        const openPopup = () => {
            popupDiscount.style.display = 'block';
            blockInput();

            popupDiscount.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('popup-close')) {
                    event.preventDefault();
                    popupDiscount.style.display = 'none';
                    removeAttributes();
                } else {
                    target = target.closest('.popup-content');

                    if (!target) {
                        popupDiscount.style.display = 'none';
                    }
                }
            });
        }

        constructBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupDiscount.style.display = 'block';
                openPopup();
            });
        });

    }
    discountPopup2();

    //popup-check

    const popupCheck = () => {
        const checkBtn = document.querySelectorAll('.check-btn'),
            popupChecks = document.querySelector('.popup-check');

        const openPopup = () => {
            popupChecks.style.display = 'block';
            blockInput();

            popupChecks.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('popup-close')) {
                    event.preventDefault();
                    popupChecks.style.display = 'none';
                    removeAttributes();
                } else {
                    target = target.closest('.popup-content');

                    if (!target) {
                        popupChecks.style.display = 'none';
                    }
                }
            });
        }



        checkBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popupChecks.style.display = 'block';
                openPopup();
            });
        });

    }
    popupCheck();

    //consultation-popup

    const consultationPopup = () => {
        const consultationBtn = document.querySelector('.consultation-btn'),
            popupConsultation = document.querySelector('.popup-consultation'),
            userQuest = document.getElementById('question');

        const openPopup = () => {

            blockInput();

            popupConsultation.addEventListener('click', (event) => {
                let target = event.target;

                if (target.classList.contains('popup-close')) {
                    event.preventDefault();
                    popupConsultation.style.display = 'none';
                    removeAttributes();
                } else {
                    target = target.closest('.popup-content');

                    if (!target) {
                        popupConsultation.style.display = 'none';
                    }
                }
            });
        }

        consultationBtn.addEventListener('click', (e) => {

            if (userQuest.value === '') {
                popupConsultation.style.display = 'none';
            } else {
                popupConsultation.style.display = 'block';
            }
            openPopup();
        });
    }
    consultationPopup();
}
export default allPopup;