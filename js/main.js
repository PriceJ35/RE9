// Mobile nav toggle
function toggleNav() {
    document.getElementById('navLinks').classList.toggle('active');
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Scroll-triggered animations
const animateElements = document.querySelectorAll('.animate-in');
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const parent = entry.target.parentElement;
                const siblings = parent ? Array.from(parent.querySelectorAll('.animate-in')) : [];
                const delay = siblings.indexOf(entry.target) * 50;
                setTimeout(() => entry.target.classList.add('visible'), delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    animateElements.forEach(el => observer.observe(el));
} else {
    animateElements.forEach(el => el.classList.add('visible'));
}
