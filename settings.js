function logAction(message) {
        const logList = document.getElementById('logList');
        const li = document.createElement('li')
        li.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
        logList.prepend(li)
    }

    function scanThreats() {
        logAction("Started threat scan...");
        setTimeout(() => logAction("No threats found. System secure."), 1500);
    }

    function backupData() {
        logAction("Initiating backup...");
        setTimeout(() => logAction("Backup completed successfully."), 2000);
    }

    function updateSystem() {
        logAction("Checking for system updates...");
        setTimeout(() => logAction("System is up to date."), 1800);
    }

    function manageDatabase() {
        logAction("Opening database manager...");
        setTimeout(() => logAction("Database optimized and cleaned."), 1200)
    }

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeBtn = document.getElementById('closeMenu') || createCloseButton();

    toggleBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });

    function createCloseButton() {
        const btn = document.createElement('button');
        btn.id = 'closeMenu';
        btn.innerText = 'Close';
        btn.style.marginTop = '1rem';
        mobileMenu.appendChild(btn);
        return btn
    }

    
    // Example functionality
    document.getElementById('resetPasswordBtn').addEventListener('click', () => {
        alert('Password reset link has been sent to your admin email.');
    });

    document.getElementById('themeSelect').addEventListener('change', (e) => {
        alert(`Theme changed to: ${e.target.value}`);
    });
});