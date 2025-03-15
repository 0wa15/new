// Basic JavaScript for the website
document.addEventListener('DOMContentLoaded', function() {
    // Add active class to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right, .scale-in, .scale-out, .slide-left, .slide-right, .rotate-in, .flip-x, .flip-y, .bounce-in').forEach(element => {
        observer.observe(element);
    });
});
