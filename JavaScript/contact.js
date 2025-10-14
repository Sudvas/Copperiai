   function login() {
      const user = document.getElementById('username').value;
      const pass = document.getElementById('password').value;
      const errorMsg = document.getElementById('error-msg');

      if (user === 'admin' && pass === '1234') {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
      } else {
        errorMsg.textContent = 'Invalid username or password';
      }
    }