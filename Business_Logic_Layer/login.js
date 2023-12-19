function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform basic validation (you should implement more secure validation)
   
    if (username === 'alex' && password === "123") {
        document.getElementById('result').innerText = 'Login successful! 🙂';
    } else {
        document.getElementById('result').innerText = 'Invalid username or password. Please try again.';
    }
}

