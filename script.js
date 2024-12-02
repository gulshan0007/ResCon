// Add interactivity here if needed
document.querySelector('.register-btn').addEventListener('click', () => {
    alert('Registration functionality coming soon!');
  });
  document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    mobileMenuToggle.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
});