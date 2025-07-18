document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;

  // Validasi sederhana
  if (user === 'admin' && pass === '1234') {
    window.location.href = 'dashboard.html';
  } else {
    alert('Username atau Password salah!');
  }
});
