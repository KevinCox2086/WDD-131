import { renderClasses } from './modules/classes.js';

document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById('class-list-container')) {
        renderClasses('class-list-container');
    }

    const quoteBtn = document.getElementById('quoteBtn');
    const quoteModal = document.getElementById('quoteModal');
    const closeModalBtn = document.querySelector('.close-button');

    if (quoteBtn && quoteModal && closeModalBtn) {
        quoteBtn.addEventListener('click', () => {
            quoteModal.style.display = 'block';
        });

        closeModalBtn.addEventListener('click', () => {
            quoteModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == quoteModal) {
                quoteModal.style.display = 'none';
            }
        });
    }

    const mailingListForm = document.getElementById('mailingListForm');

    if (mailingListForm) {
        mailingListForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('emailSignup');
            const confirmationMessage = document.getElementById('signupConfirmation');
            
            if (emailInput.value) {
                confirmationMessage.textContent = 'Thanks for signing up!';
                emailInput.value = '';
            }
        });
    }
});