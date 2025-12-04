/**
 * Initialize contact button functionality
 */
(function() {
    'use strict';

    /**
     * Display contact information when button is clicked
     */
    function showContactInfo() {
        const emailButton = document.getElementById('email');

        if (!emailButton) {
            console.error('Contact button not found');
            return;
        }

        emailButton.textContent = 'ed.blayney@gmail.com | @edblayney | 502-428-5195';
        emailButton.setAttribute('aria-label', 'Contact information displayed');
        emailButton.classList.add('contact-shown');

        // Disable button after click to prevent repeated clicks
        emailButton.disabled = true;
    }

    /**
     * Initialize event listeners when DOM is ready
     */
    function init() {
        const emailButton = document.getElementById('email');

        if (emailButton) {
            emailButton.addEventListener('click', showContactInfo);
        }
    }

    // Initialize when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();