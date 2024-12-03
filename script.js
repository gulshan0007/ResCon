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

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const isActive = accordionItem.classList.contains('active');

        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        // If the clicked item wasn't active, open it
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

