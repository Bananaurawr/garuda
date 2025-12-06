document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const loginSection = document.getElementById('login-section');
  const dashboard = document.getElementById('dashboard-overview');
  const nav = document.getElementById('main-nav');
  const logoutBtn = document.getElementById('logout-btn');

  // Simulate login with hardcoded credentials
  const USERNAME = 'admin';
  const PASSWORD = 'admin123';

  // Handle login
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === USERNAME && pass === PASSWORD) {
      sessionStorage.setItem('loggedIn', 'true');
      showDashboard();
    } else {
      alert('Invalid username or password');
    }
  });

  // Handle logout
  logoutBtn.addEventListener('click', () => {
    sessionStorage.removeItem('loggedIn');
    location.reload();
  });

  // Show dashboard if logged in
  function showDashboard() {
    loginSection.style.display = 'none';
    dashboard.style.display = 'block';
    nav.style.display = 'flex';
  }

  // Auto-login if session exists
  if (sessionStorage.getItem('loggedIn') === 'true') {
    showDashboard();
  }
});
