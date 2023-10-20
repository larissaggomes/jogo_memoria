const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const ValidateInput = ({target}) =>{
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
        button.setAttribute('disabled', '');
}

const handlesubmit = (event) => {
    console.log('logando...');
}

input.addEventListener('input', ValidateInput);
form.addEventListener('submit', handlesubmit);