document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('sidebarToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('closeMenu');
  
  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
});
