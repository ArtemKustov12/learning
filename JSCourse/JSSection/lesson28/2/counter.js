const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onChange = e => {
    const isChangeButton = e.target.classList.contains('counter__button');
    if (!isChangeButton) {
        return;
    }
    const oldValue = Number(counterValueElem.textContent);
    const action = e.target.dataset.action;
    const newValue = action === 'descrease'
        ? oldValue - 1
        : oldValue + 1;
    counterValueElem.textContent = newValue;

    localStorage.setItem('counterValue', newValue);
};

counterElem.addEventListener('click', onChange);

const onStorageUpdate = e => {
    if (e.key === 'counterValue') {
        counterValueElem.textContent = e.newValue;
    }
};

window.addEventListener('storage', onStorageUpdate);

export const initCouner = () => {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};