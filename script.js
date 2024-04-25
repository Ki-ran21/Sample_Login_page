function login() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if (username === 'kiran' && password === 'kiran123') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
        document.getElementById("drop").innerHTML = 'Invalid username or password';
    }
}