const form = document.querySelector('form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
    let messages = [];

    // Check if password length is at least 6
    if (password.value.length < 6) {
        messages.push("Password must be at least 6 characters.");
    }

    // Check if passwords match
    if (password.value !== confirmPassword.value) {
        messages.push("Passwords do not match.");
    }

    if (messages.length > 0) {
        e.preventDefault(); // Prevent form submission
        alert(messages.join("\n"));
    }
});
