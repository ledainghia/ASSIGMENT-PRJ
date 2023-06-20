var iconPass = document.getElementById('eye-icon-pass');
var passwordInput = document.getElementById('passwordInput');
var isPasswordVisible = false;

iconPass.addEventListener('click', function () {
    if (isPasswordVisible) {
        iconPass.className = 'fa-solid fa-eye';
        passwordInput.type = 'password';
        isPasswordVisible = false;
        console.log('Password hidden!');
    } else {
        iconPass.className = 'fa-regular fa-eye-slash';
        passwordInput.type = 'text';
        isPasswordVisible = true;
        console.log('Password visible!');
    }
});

var iconRePass = document.getElementById('eye-icon-repass');
var rePasswordInput = document.getElementById('rePasswordInput');
var isPasswordVisible = false;

iconRePass.addEventListener('click', function () {
    if (isPasswordVisible) {
        iconRePass.className = 'fa-solid fa-eye';
        rePasswordInput.type = 'password';
        isPasswordVisible = false;
        console.log('Password hidden!');
    } else {
        iconRePass.className = 'fa-regular fa-eye-slash';
        rePasswordInput.type = 'text';
        isPasswordVisible = true;
        console.log('Password visible!');
    }
});

