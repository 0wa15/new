// Additional JavaScript for enhanced interactivity

// Function to create a simple image carousel for the cultural differences section
function setupCulturalCarousel() {
    // This would normally load and cycle through cultural images
    console.log("Cultural carousel initialized");
}

// Function to add parallax scrolling effect to hero section
function setupParallaxEffect() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            heroBackground.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
        }
    });
}

// Function to add typing effect to introduction
function setupTypingEffect() {
    // This would normally implement a typing animation
    console.log("Typing effect initialized");
}

// Initialize additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    setupParallaxEffect();
    setupCulturalCarousel();
    setupTypingEffect();
    
    // Add active class to navigation on load
    const currentSection = window.location.hash || '#hero';
    document.querySelector(`a[href="${currentSection}"]`)?.classList.add('active');
    
    // Add animation classes to specific elements
    document.querySelectorAll('.career-option').forEach(option => {
        option.classList.add('animate__animated', 'animate__fadeInUp');
    });
    
    document.querySelectorAll('.culture-icon').forEach((icon, index) => {
        icon.classList.add('animate__animated', 'animate__zoomIn');
        icon.style.animationDelay = `${index * 0.2}s`;
    });
    
    document.querySelectorAll('.comparison-row').forEach((row, index) => {
        row.classList.add('animate__animated', 'animate__fadeInLeft');
        row.style.animationDelay = `${index * 0.1}s`;
    });
});
