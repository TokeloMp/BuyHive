document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    let closeBtn = document.getElementById('closeMenu')

    // Create close button dynamically if not already present
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    }

    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });
});

