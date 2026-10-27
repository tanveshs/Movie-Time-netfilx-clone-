/**
 * MOVIETIME - Authentication & Session Management
 * Uses localStorage to simulate a backend for educational/demo purposes.
 */

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('movieTime_loggedIn') === 'true';
}

// Get current user object
function getCurrentUser() {
    const userData = localStorage.getItem('movieTime_user');
    return userData ? JSON.parse(userData) : null;
}

// Register a new user
function registerUser(userData) {
    // In a real app, this would hit an API and password would be hashed.
    // For demo purposes, we store it in localStorage.
    localStorage.setItem('movieTime_user', JSON.stringify(userData));
    loginUser(userData);
}

// Log a user in
function loginUser(userData) {
    localStorage.setItem('movieTime_loggedIn', 'true');
    // If not already set, update the current user data
    if (userData) {
        localStorage.setItem('movieTime_user', JSON.stringify(userData));
    }
}

// Log a user out
function logoutUser() {
    localStorage.setItem('movieTime_loggedIn', 'false');
    // We keep the user data so they can log back in.
    window.location.href = 'index.html';
}

// Protect a route - redirect to login if not authenticated
function requireLogin() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

// Redirect to browse if already logged in (used on index and login pages)
function redirectIfLoggedIn() {
    if (isLoggedIn()) {
        window.location.href = 'browse.html';
    }
}

// Setup common navbar auth UI (runs on protected pages)
function setupNavbarAuth() {
    const user = getCurrentUser();
    if (!user) return;

    // Look for profile dropdown or username display elements
    const usernameDisplays = document.querySelectorAll('.js-display-username');
    usernameDisplays.forEach(el => {
        el.textContent = user.username;
    });

    const logoutBtns = document.querySelectorAll('.js-logout-btn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            logoutUser();
        });
    });
}
