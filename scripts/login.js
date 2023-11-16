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

function registrar() {
    const userN = document.getElementById('newUser').value;
    const passwordN = document.getElementById('newPassword').value;

    let filter = users.find((user) => user.username === userN);

    if (filter) {
        showMessage(`El usuario con nombre ${userN} ya esta registrado!`);
    }else{
        users.push({ username: userN, password: passwordN });
        alert(`El usuario ${userN} se registro con exito!`);
        window.location.href = 'admin.html';
    }
}