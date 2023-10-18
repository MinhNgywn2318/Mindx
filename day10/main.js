function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        document.getElementById('login-message').textContent = 'Bạn đã đăng nhập thành công';
        alert('Bạn đã đăng nhập thành công');
    } else {
        document.getElementById('login-message').textContent = 'Bạn đã đăng nhập thất bại, mời đăng nhập lại!';
        alert('Bạn đã đăng nhập thất bại, mời đăng nhập lại!');
    }
}
