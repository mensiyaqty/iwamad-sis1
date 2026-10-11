document.addEventListener('DOMContentLoaded', () => {
    // 1. Global Dark/Light Theme Toggle
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    });

    // 2. Contact Form Validation
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorMessage = document.getElementById('error-message');
    const successMsg = document.getElementById('form-success');

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let isValid = true;
        successMsg.classList.add('hidden');

        [errorName, errorEmail, errorMessage].forEach(el => {
            el.textContent = '';
            el.classList.add('hidden');
        });

        if (!nameInput.value.trim()) {
            errorName.textContent = 'Please enter your name.';
            errorName.classList.remove('hidden');
            isValid = false;
        }

        const emailVal = emailInput.value.trim();
        if (!emailVal) {
            errorEmail.textContent = 'Please enter your email address.';
            errorEmail.classList.remove('hidden');
            isValid = false;
        } else if (!isValidEmail(emailVal)) {
            errorEmail.textContent = 'Invalid email format (e.g., name@example.com).';
            errorEmail.classList.remove('hidden');
            isValid = false;
        }

        if (!messageInput.value.trim()) {
            errorMessage.textContent = 'Please enter your message text.';
            errorMessage.classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            successMsg.classList.remove('hidden');
            form.reset();
        }
    });
});