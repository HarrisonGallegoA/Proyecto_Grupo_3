const users = [
    { username: 'admin', password: 'password' }
];

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username == username && u.password == password);

    if (user) {
        window.location.href = 'admin.html';
    } else {
        showMessage('Credenciales incorrectas. Inténtelo de nuevo.');
    }
}

const validatePass = (pass) => {
    let pattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    if (pattern.test(pass)) return true; return false;
}

document.querySelector('.inputs-contra').addEventListener('input', (e) => {
        if (!e.target.value) {
            return;
        } else {
            if (e.target.id === 'password') {
                let minLength = document.getElementById('minLength');
                let minLowerCase = document.getElementById('minLowerCase');
                let minUpperCase = document.getElementById('minUpperCase');
                let minNumber = document.getElementById('minNumber');
                                                
                if(e.target.value.length >= 8) {
                    minLength.parentNode.classList.add('text-success');
                    minLength.parentNode.classList.remove('text-danger');
                    minLength.classList.add('ti-check');
                    minLength.classList.remove('ti-x');
                }
                else {
                    minLength.parentNode.classList.add('text-danger');
                    minLength.parentNode.classList.remove('text-success');
                    minLength.classList.add('ti-x');
                    minLength.classList.remove('ti-check');
                }

                if (/(?:[a-z]{1,})/.test(e.target.value)) {
                    minLowerCase.classList.add('ti-check');
                    minLowerCase.classList.remove('ti-x');
                    minLowerCase.parentNode.classList.add('text-success');
                    minLowerCase.parentNode.classList.remove('text-danger');
                } 
                else {
                    minLowerCase.classList.add('ti-x');
                    minLowerCase.classList.remove('ti-check');
                    minLowerCase.parentNode.classList.add('text-danger');
                    minLowerCase.parentNode.classList.remove('text-success');
                }

                if (/(?:[A-Z]{1,})/.test(e.target.value)) {
                    minUpperCase.classList.add('ti-check');
                    minUpperCase.classList.remove('ti-x');
                    minUpperCase.parentNode.classList.add('text-success');
                    minUpperCase.parentNode.classList.remove('text-danger');
                } 
                else {
                    minUpperCase.classList.add('ti-x');
                    minUpperCase.classList.remove('ti-check');
                    minUpperCase.parentNode.classList.add('text-danger');
                    minUpperCase.parentNode.classList.remove('text-success');                                    
                }

                if (/\d+/g.test(e.target.value)) {
                    minNumber.classList.add('ti-check');
                    minNumber.classList.remove('ti-x');
                    minNumber.parentNode.classList.add('text-success');
                    minNumber.parentNode.classList.remove('text-danger');
                } 
                else {
                    minNumber.classList.add('ti-x');
                    minNumber.classList.remove('ti-check');
                    minNumber.parentNode.classList.add('text-danger');
                    minNumber.parentNode.classList.remove('text-success');                                    
                }
            } 
            else {
                if (e.target.value.length > 6) {
                    e.target.classList.remove('border-danger', 'is-invalid');
                }
            }
        }
    })
// }