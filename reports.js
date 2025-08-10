document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeMenu');

    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
        });
    }

    //Report Form Handler
    const reportForm = document.querySelector('.report__form');
    reportForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fromDate = document.getElementById('dateFrom').value;
        const toDate = document.getElementById('dateTo').value;
        const reportType = document.getElementById('reportType').value;

        alert(`Generating ${reportType} report from ${fromDate} to ${toDate}`);
    });
});