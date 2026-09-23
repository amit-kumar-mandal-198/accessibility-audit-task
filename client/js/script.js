document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const cancelBtn = document.getElementById('cancelModalBtn');
    const modal = document.getElementById('reportModal');
    const overlay = document.getElementById('modal-overlay');
    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    let previousActiveElement;

    function openModal() {
        previousActiveElement = document.activeElement;
        modal.show(); // Uses HTML5 Dialog API
        overlay.classList.add('active');
        openBtn.setAttribute('aria-expanded', 'true');
        
        // Focus management
        if (firstFocusable) {
            firstFocusable.focus();
        }
    }

    function closeModal() {
        modal.close();
        overlay.classList.remove('active');
        openBtn.setAttribute('aria-expanded', 'false');
        
        // Return focus to the button that opened the modal
        if (previousActiveElement) {
            previousActiveElement.focus();
        }
    }

    // Event Listeners
    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal();
    });

    // Close on overlay click
    overlay.addEventListener('click', closeModal);

    // Trap focus inside modal
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            return;
        }

        if (e.key === 'Tab') {
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
});
