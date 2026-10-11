document.addEventListener('DOMContentLoaded', () => {
    // 1. Global Dark/Light Theme Toggle
    const htmlElement = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');

    // Проверяем сохраненную тему (опционально, или по умолчанию светлая)
    themeToggleBtn.addEventListener('click', () => {
        // Переключаем класс 'dark' у тега <html>
        htmlElement.classList.toggle('dark');
        
        // Меняем атрибут data-theme для поддержки ваших CSS-переменных из style.css
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

    // Email format helper function
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default submission
        
        let isValid = true;
        successMsg.classList.add('hidden');

        // Reset previous errors
        [errorName, errorEmail, errorMessage].forEach(el => {
            el.textContent = '';
            el.classList.add('hidden');
        });

        // Name validation
        if (!nameInput.value.trim()) {
            errorName.textContent = 'Please enter your name.';
            errorName.classList.remove('hidden');
            isValid = false;
        }

        // Email validation (empty or malformed)
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

        // Message validation
        if (!messageInput.value.trim()) {
            errorMessage.textContent = 'Please enter your message text.';
            errorMessage.classList.remove('hidden');
            isValid = false;
        }

        // If validation passes successfully
        if (isValid) {
            successMsg.classList.remove('hidden');
            form.reset();
        }
    });
});